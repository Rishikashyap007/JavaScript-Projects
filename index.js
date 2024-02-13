let url = document.querySelector('.input-box')
const generateBtn = document.querySelector('.btn')
const img =document.querySelector('.image')



generateBtn.addEventListener('click', createQR);
url.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
        createQR();
        // generateBtn.removeEventListener('click',createQR)
    }
})
function createQR(){
   console.log('clicked');
   if(url.value === ''){
    alert('Pls enter valid url or text')
   }
   else{
    const QrImage = document.createElement('img')
    let qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + url.value;
    console.log(qrUrl);
    QrImage.setAttribute('src',qrUrl)
    QrImage.classList.add('QRimage') 
    img.appendChild(QrImage)

    generateBtn.removeEventListener('click',createQR)
    
   }
  
}