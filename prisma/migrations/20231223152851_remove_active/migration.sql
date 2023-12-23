/*
  Warnings:

  - You are about to drop the column `active` on the `UrlAnalytic` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UrlAnalytic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "urlId" INTEGER NOT NULL,
    "clicked" INTEGER NOT NULL,
    CONSTRAINT "UrlAnalytic_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "Url" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UrlAnalytic" ("clicked", "id", "urlId") SELECT "clicked", "id", "urlId" FROM "UrlAnalytic";
DROP TABLE "UrlAnalytic";
ALTER TABLE "new_UrlAnalytic" RENAME TO "UrlAnalytic";
CREATE UNIQUE INDEX "UrlAnalytic_urlId_key" ON "UrlAnalytic"("urlId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
