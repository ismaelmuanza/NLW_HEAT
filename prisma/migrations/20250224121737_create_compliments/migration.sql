-- CreateTable
CREATE TABLE "Compliments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_user_sender" TEXT NOT NULL,
    "id_user_receiver" TEXT NOT NULL,
    "id_tag" TEXT NOT NULL,
    CONSTRAINT "Compliments_id_user_sender_fkey" FOREIGN KEY ("id_user_sender") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Compliments_id_user_receiver_fkey" FOREIGN KEY ("id_user_receiver") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Compliments_id_tag_fkey" FOREIGN KEY ("id_tag") REFERENCES "tags" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
