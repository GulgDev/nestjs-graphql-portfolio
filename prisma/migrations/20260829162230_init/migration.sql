-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT 'ID',
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "links" JSONB NOT NULL
);
