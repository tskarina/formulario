-- CreateTable
CREATE TABLE "form" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "city" TEXT,
    "knowsProduct" BOOLEAN NOT NULL,
    "needsHelp" BOOLEAN NOT NULL DEFAULT false,
    "agreesPrivacyPolicy" BOOLEAN NOT NULL,

    CONSTRAINT "form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "selectedproduct" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "formId" INTEGER NOT NULL,

    CONSTRAINT "selectedproduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fixedproduct" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "fixedproduct_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "form_email_key" ON "form"("email");

-- AddForeignKey
ALTER TABLE "selectedproduct" ADD CONSTRAINT "selectedproduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "fixedproduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "selectedproduct" ADD CONSTRAINT "selectedproduct_formId_fkey" FOREIGN KEY ("formId") REFERENCES "form"("id") ON DELETE CASCADE ON UPDATE CASCADE;
