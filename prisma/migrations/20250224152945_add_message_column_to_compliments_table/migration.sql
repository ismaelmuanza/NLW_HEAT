/*
  Warnings:

  - Added the required column `message` to the `compliments` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_compliments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_user_sender" TEXT NOT NULL,
    "id_user_receiver" TEXT NOT NULL,
    "id_tag" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "compliments_id_user_sender_fkey" FOREIGN KEY ("id_user_sender") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "compliments_id_user_receiver_fkey" FOREIGN KEY ("id_user_receiver") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "compliments_id_tag_fkey" FOREIGN KEY ("id_tag") REFERENCES "tags" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_compliments" ("created_at", "id", "id_tag", "id_user_receiver", "id_user_sender", "updated_at") SELECT "created_at", "id", "id_tag", "id_user_receiver", "id_user_sender", "updated_at" FROM "compliments";
DROP TABLE "compliments";
ALTER TABLE "new_compliments" RENAME TO "compliments";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
