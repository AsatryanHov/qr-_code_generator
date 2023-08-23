const generateBtn = document.getElementById('generate-btn');
const textInput = document.getElementById('text-input');
const qrcodeDiv = document.getElementById('qrcode');

generateBtn.addEventListener('click', generateQRCode);

function generateQRCode() {
  const text = textInput.value;
  if (text.trim() === '') {
    alert('Please enter some text');
    return;
  }

  qrcodeDiv.innerHTML = ''; // Clear previous QR code

  const qrCode = new QRCode(qrcodeDiv, {
    text: text,
    width: 128,
    height: 128,
  });
}
