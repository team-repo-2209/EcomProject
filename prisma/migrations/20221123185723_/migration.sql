/*
  Warnings:

  - You are about to drop the column `orderNumber` on the `Order_Products` table. All the data in the column will be lost.
  - You are about to drop the column `orderNumber` on the `Orders` table. All the data in the column will be lost.
  - Added the required column `orderId` to the `Order_Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order_Products" DROP CONSTRAINT "Order_Products_orderNumber_fkey";

-- AlterTable
ALTER TABLE "Order_Products" DROP COLUMN "orderNumber",
ADD COLUMN     "orderId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "orderNumber";

-- AddForeignKey
ALTER TABLE "Order_Products" ADD CONSTRAINT "Order_Products_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
