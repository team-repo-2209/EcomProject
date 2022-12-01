/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Categories` table. All the data in the column will be lost.
  - Made the column `productId` on table `Order_Products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `orderId` on table `Order_Products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isCart` on table `Orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isCompleted` on table `Orders` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Order_Products" DROP CONSTRAINT "Order_Products_orderId_fkey";

-- DropForeignKey
ALTER TABLE "Order_Products" DROP CONSTRAINT "Order_Products_productId_fkey";

-- AlterTable
ALTER TABLE "Categories" DROP COLUMN "imageUrl";

-- AlterTable
ALTER TABLE "Order_Products" ALTER COLUMN "productId" SET NOT NULL,
ALTER COLUMN "orderId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Orders" ALTER COLUMN "isCart" SET NOT NULL,
ALTER COLUMN "isCompleted" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Order_Products" ADD CONSTRAINT "Order_Products_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_Products" ADD CONSTRAINT "Order_Products_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
