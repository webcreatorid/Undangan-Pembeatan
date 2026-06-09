// Nama tamu otomatis

const params = new URLSearchParams(window.location.search);

const tamu = params.get("to");

if(tamu){
document.getElementById("tamu").innerHTML =
decodeURIComponent(tamu);
}

// Tombol buka undangan

function bukaUndangan(){

const music =
document.getElementById("bgMusic");

if(music){
music.play();
}

document
.getElementById("undangan")
.scrollIntoView({
behavior:"smooth"
});

}

// Countdown

const target =
new Date("June 14, 2026 15:00:00").getTime();

setInterval(()=>{

const now = new Date().getTime();

const distance = target - now;

document.getElementById("hari").innerHTML =
Math.floor(distance/(1000*60*60*24));

document.getElementById("jam").innerHTML =
Math.floor(
(distance%(1000*60*60*24))
/
(1000*60*60)
);

document.getElementById("menit").innerHTML =
Math.floor(
(distance%(1000*60*60))
/
(1000*60)
);

document.getElementById("detik").innerHTML =
Math.floor(
(distance%(1000*60))
/
1000
);

},1000);
