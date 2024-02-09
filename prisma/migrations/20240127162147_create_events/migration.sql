-- CreateTable
CREATE TABLE "Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "eventDate" DATETIME NOT NULL,
    "showStarts" TEXT NOT NULL,
    "showEnds" TEXT NOT NULL,
    "ageRequirement" BOOLEAN NOT NULL,
    "pictureUrl" TEXT
);
