-- CreateTable
CREATE TABLE "Project" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "profileId" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    CONSTRAINT "Project_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_link_key" ON "Project"("link");
