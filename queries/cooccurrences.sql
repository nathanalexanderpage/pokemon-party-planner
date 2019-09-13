SELECT op."partyId", o."dexId" FROM owns_parties op INNER JOIN owns o ON o.id = op."ownId" WHERE "partyId" IN
	(SELECT DISTINCT "partyId" FROM owns_parties WHERE "ownId" IN
		(SELECT id FROM owns WHERE "dexId" = 17)
	) ORDER BY "partyId", "dexId" ASC;