/*
  Warnings:

  - You are about to drop the column `orderId` on the `Order_Products` table. All the data in the column will be lost.
  - Added the required column `orderNumber` to the `Order_Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order_Products" DROP CONSTRAINT "Order_Products_orderId_fkey";

-- AlterTable
ALTER TABLE "Order_Products" DROP COLUMN "orderId",
ADD COLUMN     "orderNumber" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Order_Products" ADD CONSTRAINT "Order_Products_orderNumber_fkey" FOREIGN KEY ("orderNumber") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
