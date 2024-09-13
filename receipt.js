const { PDFDocument } = require("pdf-lib");
const fs = require("fs");

async function createPDF() {
  const pdfDoc = await PDFDocument.create();
  const newPage = pdfDoc.addPage();
  const pdfFile = await pdfDoc.save();
  fs.writeFile("example.pdf", pdfFile, "utf8", (err, data) => {
    if (err) console.log(err);
    if (data) console.log(data);
  });

}
(async function () {
  await createPDF();
})();

const buttonReceipt = document.getElementById("receipt");

function createPDF() {
  var printWindow = window.open("receiptContent.html")
  printWindow.addEventListener('load', function () {
    setTimeout(() => {
      if (Boolean(printWindow)) {
        printWindow.print();
        setTimeout(function () {
          printWindow.close();
        }, 500);
      } else {
        printWindow.print();
        printWindow.close();
      }
    }, 1500);
  }, true)
}

buttonReceipt.addEventListener('click', buttonPressed);