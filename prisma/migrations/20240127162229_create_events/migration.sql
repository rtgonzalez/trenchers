-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "eventDate" DATETIME NOT NULL,
    "showStarts" TEXT,
    "showEnds" TEXT,
    "ageRequirement" BOOLEAN,
    "pictureUrl" TEXT
);
INSERT INTO "new_Event" ("ageRequirement", "description", "eventDate", "id", "pictureUrl", "showEnds", "showStarts", "title") SELECT "ageRequirement", "description", "eventDate", "id", "pictureUrl", "showEnds", "showStarts", "title" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
