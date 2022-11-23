/*
  Warnings:

  - You are about to drop the column `orderStatus` on the `Orders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "orderStatus",
ADD COLUMN     "isCompleted" BOOLEAN DEFAULT false;

-- DropEnum
DROP TYPE "OrderStatus";
