SELECT
"dex"."id",
"dex"."name",
"dex"."genId",
"dex"."hp",
"dex"."attack",
"dex"."defense",
"dex"."spAttack",
"dex"."spDefense",
"dex"."speed",
"dex"."createdAt",
"dex"."updatedAt",
"types"."id" AS "types.id",
"types"."name" AS "types.name",
"types->dexes_types"."dexId" AS "types.dexes_types.dexId",
"types->dexes_types"."typeId" AS "types.dexes_types.typeId",
"types->dexes_types"."createdAt" AS "types.dexes_types.createdAt",
"types->dexes_types"."updatedAt" AS "types.dexes_types.updatedAt"
FROM "dexes" AS "dex"
LEFT OUTER JOIN
  ( "dexes_types" AS "types->dexes_types"
    INNER JOIN
    "types" AS "types"
    ON "types"."id" = "types->dexes_types"."typeId")
ON "dex"."id" = "types->dexes_types"."dexId"
WHERE "dex"."genId" IN ('1')
AND "dex"."THE_TYPE_ID_OF_POKES" IN ('2', '3')
ORDER BY "dex"."id" ASC;
