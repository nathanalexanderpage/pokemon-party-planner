const express = require('express')
const app = express()
const { spawn } = require('child_process');
const pyProg = spawn('python', ['./../recommend_engine.py', 17, 5]);



app.get('/', (req, res) => {
    console.log('inside REGS');
    
    pyProg.stdout.on('data', function(data) {
        console.log(data.toJSON());
        res.write(data.toJSON());
        res.end('end');
    });
    pyProg.stderr.on('data', (data) => {
        console.log(data.toString());
    });
})

app.get('/await', (req, res) => {
    console.log('inside AWAIT');
    
    pyProg.stdout.on('data', function(data) {
        console.log(data.toJSON());
        res.send(data.toJSON());
    });
    pyProg.stderr.on('data', (data) => {
        console.log(data.toString());
    });
})

app.get('/butter', (req, res) => {
    console.log('inside BUTTER');
    
    pyProg.stdout.on('recs', function(recs) {
        console.log(recs.toJSON());
        return recs.toJSON()
    }, function(rex) {
        console.log('DONE');
        return rex
    }, function(rax) {
        console.log('SENDING');
        res.send(rax)
    });
    pyProg.stderr.on('data', (data) => {
        console.log(data.toString());
    });
})

app.get('/async', (req, res) => {
    console.log('READY TO RUN PYTHON')
    function recommendPokes(idOfOwn, noRecs) {
        console.log();
        
        pyProg.stdout.on('data', function(data) {
            console.log(data.toString());
            return(data)
        });
        pyProg.stderr.on('data', (data) => {
            console.log(data.toString());
            return 'err'
        });
    }
    let recsReturn = new Promise(function(resolve, reject) {
        result = recommendPokes(17, 5)
        
        if (result !== 'err') {
            resolve(result);
        } else {
            console.log(Error('DIDN\'T WORK'))
            reject([]);
        }
    });
    recsReturn.then(function(result) {
        console.log(result);
        recs = result
        res.send(recs)
    }, function(err) {
        console.log(err);
        recs = []
        res.send(recs)
    });
})

app.listen(4000, () => console.log('Application listening on port 4000!'))