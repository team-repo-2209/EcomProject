-- DropForeignKey
ALTER TABLE "Order_Products" DROP CONSTRAINT "Order_Products_orderId_fkey";

-- DropForeignKey
ALTER TABLE "Order_Products" DROP CONSTRAINT "Order_Products_productId_fkey";

-- AlterTable
ALTER TABLE "Order_Products" ALTER COLUMN "productId" DROP NOT NULL,
ALTER COLUMN "orderId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Order_Products" ADD CONSTRAINT "Order_Products_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_Products" ADD CONSTRAINT "Order_Products_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;
