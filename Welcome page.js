function Fungsi1() {
    document.getElementById("body").style.backgroundImage =  "url('Image/1.jpg')";
}
function Fungsi2() {
    document.getElementById("body").style.backgroundImage =  "url('Image/2.png')";
}
function Fungsi3() {
    document.getElementById("body").style.backgroundImage =  "url('Image/3.png')";
}

function Waktu1() {
    setTimeout(Fungsi1,0);
    setTimeout(Fungsi2,7000);
    setTimeout(Fungsi3,140000);
}
            
Waktu1();
setInterval(Waktu1,21000);
