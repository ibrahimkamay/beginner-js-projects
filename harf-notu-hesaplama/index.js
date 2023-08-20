const vize = document.querySelector("#vize");
const odev = document.querySelector("#odev");
const final = document.querySelector("#final");

const submitBtn = document.querySelector(".btn-hesapla");
const resetBtn = document.querySelector(".btn-reset");
const ortPuanText = document.querySelector(".ortalama");
const harfNotu = document.querySelector(".harf-notu");
submitBtn.addEventListener("click", ()=> {

const ortalama = (vize.value * 0.3) + (odev.value * 0.1) + (final.value * 0.6);


if(ortalama > 90 ) {
ortPuanText.innerText = `Ortalama Puan : ${ortalama}`;
harfNotu.innerText =  `Harf Notu: AA`;
harfNotu.style.color="green";
}

else if (ortalama >80) {
    ortPuanText.innerText = `Ortalama Puan : ${ortalama.toFixed(2)}`;
harfNotu.innerText =  `Harf Notu: BA`;
harfNotu.style.color="green";
}
else if (ortalama >70) {
    ortPuanText.innerText = `Ortalama Puan : ${ortalama.toFixed(2)}`;
harfNotu.innerText =  `Harf Notu: BB`;
harfNotu.style.color="green";
}
else if (ortalama >60) {
    ortPuanText.innerText = `Ortalama Puan : ${ortalama.toFixed(2)}`;
harfNotu.innerText =  `Harf Notu: CB`;
harfNotu.style.color="orange";
}
else if (ortalama >50) {
    ortPuanText.innerText = `Ortalama Puan : ${ortalama.toFixed(2)}`;
harfNotu.innerText =  `Harf Notu: CC`;
harfNotu.style.color="orange";
}
else if (ortalama >40) {
    ortPuanText.innerText = `Ortalama Puan : ${ortalama.toFixed(2)}`;
harfNotu.innerText =  `Harf Notu: DC`;
harfNotu.style.color="red";
}
else if (ortalama >40) {
    ortPuanText.innerText = `Ortalama Puan : ${ortalama.toFixed(2)}`;
harfNotu.innerText =  `Harf Notu: DD`;
harfNotu.style.color="red";
}
else{
    ortPuanText.innerText = `Ortalama Puan : ${ortalama.toFixed(2)}`;
harfNotu.innerText =  `Harf Notu: FF`;
harfNotu.style.color="red";
}
})

resetBtn.addEventListener("click", () => {

ortPuanText.innerText = `Ortalama Puan : --`;
harfNotu.innerText =  `Harf Notu : --`;
harfNotu.style.color="black";
})

console.log(resetBtn);