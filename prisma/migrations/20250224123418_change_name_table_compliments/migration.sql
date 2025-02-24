/*
  Warnings:

  - You are about to drop the `Compliments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Compliments";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "compliments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_user_sender" TEXT NOT NULL,
    "id_user_receiver" TEXT NOT NULL,
    "id_tag" TEXT NOT NULL,
    CONSTRAINT "compliments_id_user_sender_fkey" FOREIGN KEY ("id_user_sender") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "compliments_id_user_receiver_fkey" FOREIGN KEY ("id_user_receiver") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "compliments_id_tag_fkey" FOREIGN KEY ("id_tag") REFERENCES "tags" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
