// Oyun için DOM elementlerini tanımayalım.

const input = document.querySelector("input");
const guess = document.querySelector(".guess");
const checkButton = document.querySelector("button");
const remainChances = document.querySelector(".chances") ;


//Input seçildiğinde fokuslanma fonksiyonu yazalım
input.focus();

let randomNum = Math.floor(Math.random() * 100);
chance = 10;

// Şİmdi butona basıldığı zaman tıklandığında dinlenmesi için fonksiyon yazacağız

checkButton.addEventListener("click", () => {
    //Her basıldığında chance değişkenini azalt
    chance--;
    // input alanında değeri alalım
    let inputValue = input.value;
    if (inputValue == randomNum) {
    // Tahmin edilen sayıyı güncelle, butonu disable et, buton yazısı ve rengini kontrol et
    [guess.textContent, input.disabled] = ["Congratulations", true];
    [checkButton.textContent, guess.style.color] = ["Replay", "#333"];
    } else if 
    console.log(chance);
} )