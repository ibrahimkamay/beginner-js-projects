const hesapla = document.querySelector(".btn-primary");
const reset = document.querySelector(".btn-secondary");
let indeks = document.querySelector(".indeks");
let durum = document.querySelector(".durum");

hesapla.addEventListener("click", (e) => {
  e.preventDefault();
  const boy = document.querySelector(".boy").value;
  const kg = document.querySelector(".kg").value;
  let sonuc = (parseInt(kg) / Number(boy) ** 2).toFixed(2);

  if (sonuc >= 0 && sonuc <= 18.4) {
    indeks.innerText = `Vücut Kitle İndeksi : ${sonuc}`;
    durum.innerText = `Sağlık Durumu: Zayıf`;
  } else if (sonuc >= 18.5 && sonuc <= 24.9) {
    indeks.innerText = `Vücut Kitle İndeksi : ${sonuc}`;
    durum.innerText = `Sağlık Durumu: Normal`;
  } else if (sonuc >= 25 && sonuc <= 29.9) {
    indeks.innerText = `Vücut Kitle İndeksi : ${sonuc}`;
    durum.innerText = `Sağlık Durumu: Fazla Kilolu`;
  } else if (sonuc >= 30 && sonuc <= 34.9) {
    indeks.innerText = `Vücut Kitle İndeksi : ${sonuc}`;
    durum.innerText = `Sağlık Durumu: Şişman`;
  }
});
reset.addEventListener("click", () => {
  indeks.innerText = `Vücut Kitle İndeksi : --`;
  durum.innerText = `Sağlık Durumu: --`;
});
