
//! JS 1995 yılında Brandan Eich tarafından yazılmıştır
//! Cross platform
//! OOP uygun

// single comment

/* 
multiple comments
*/

console.log("Loglama");
console.info("Bilgilendirme logu");
console.warn("Uyarı logu");
console.error("Hata logu");
alert("pop-up bilgilendirme");
document.writeln("ekranda yazı");

//! variable
var result = "JS Öğreniyorum"; //* string veri
console.log(typeof result + " => " + result);

var result = 4423; //* number veri
console.log(typeof result + " => " + result);


var result = 44.23; //* float veri
console.log(typeof result + " => " + result);


var result = true; //* boolean veri
console.log(typeof result + " => " + result);

//* Naming Convensition
var deneme = "JS data";
console.log(deneme);

var deneme44 = "JS data";
console.log(deneme44);

var $deneme = "JS data";
console.log($deneme);

var denemeVerisi = "JS data";
console.log(denemeVerisi);

//! araştırma
//* interpreter, compiler
//* senkron, asenkron

//! whoisting yapısı
result2 = 56
var result2;

///////////////////////////////////////////////
// Operators

// + - * ** / %
// x++
// x--
// ++x
// --x
// = ATAMA
// == EŞİT (TÜRÜNE BAKMA)
// === EŞİT (TÜRÜNE BAK)
// * != EŞİT DEĞİL &&=VE ||=VEYA

var number1 = 40;
var number2 = 5;
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 % number2);

var userData = + prompt("Sayı giriniz");
console.log(userData+45);

// undefined Değeri olmayan değişken
var result4;
console.log(result4)

// NaN Sayı değildir
var result5 = "asd"/4;
console.log(result5)

// isNaN
var result6 = 4;
console.log(isNaN(result6)) //false: sayıdır

// Infinity Sonsuzluk
console.log(4/0)

/////////////////////////////////////////////
//! Math
console.log(Math.PI);
console.log(Math.E);
console.log(Math.min(4,1,99,555,25,-100));
console.log(Math.max(4,1,99,555,25,-100));
console.log(Math.sqrt(16));
console.log(Math.abs(-25));
console.log(Math.pow(2,5));
console.log(Math.floor(3.9));
console.log(Math.ceil(3.1));
console.log(Math.round(6.4));
console.log(Math.round(6.5));
console.log(Math.sin(45));
console.log(Math.round(Math.random()* 9+1));

/////////////////////////////////////////////

//! Number
var sayi = 15000;
console.log(sayi);

//* Bilimsel gösterim
var sayi = 15E+3;
console.log(sayi);

var sayi = 1.5E+4;
console.log(sayi);

//! binary, octal, decimal, hexadecimal 

//* binary : 0-1 ikilik sayı sistemidir
var binary = 0b00011;
console.log(binary)

//* octal : 0-1-2-3-4-5-6-7 sekizlik sayı sistemidir
var octal = 0o7612;
console.log(octal)

//* decimal 0-1-2-3-4-5-6-7-8-9
var decimal = 123456;
console.log(decimal)

//* hexadecimal 0-1-2-3-4-5-6-7-8-9-A-B-C-D-E-F
var hexadecimal = 0xffa;
console.log(hexadecimal)

//* Cast
database, port, api (string olarak gelir)

console.log(Number("10"+10)) 
console.log(parseInt("10"+10))

console.log(String(10)+10) 
var number = 30;
console.log(number.toString()+10)

/////////////////////////////////////////////
//! String methods
let str = " js Öğreniyorum ";
console.log(str);
console.log(str.length); //* metnin uzunluğunu döndürür
console.log(str.trim().length); //* belirtilen karakterleri metnin başından ve sonundan siler, () boş bırakılırsa boşlukları temizler
console.log(str.toLocaleLowerCase()); //* tüm karakterleri küçüğe çevirir
console.log(str.toLocaleUpperCase()); //* tüm karakterleri büyüğe çevirir

console.log(str.charAt(1)); //* belirtilen index numarasına göre karakteri verir
console.log(str.indexOf("js")); //* ilk bulduğu index sonucnu verir

console.log(str.lastIndexOf("js")); //* sondaki index sonucunu verir
console.log(str.concat("sona ekleme")); //* metnin sonuna ekleme yapar

console.log(str.replace(str,"değiştir")); //* belirtilen değişkeni veya belirtilen karakterleri değiştirir
console.log(str.endsWith(" ")); //* sondaki karakteri kontrol eder

console.log(str.substring(2)); //* parçalama işlemi yapar
console.log(str.substring(0,4)); //* aralık belirtebiliriz

//////////////////////////////////
//! Function (normal)
//* 1 returnsuz Parametresiz fonksiyon türü
function deneme1(){ 
    console.log("deneme");
}
deneme1()

//* 2 returnsuz Parametreli
function deneme2(ad){
    console.log("deneme2 " + ad)
}
deneme2("Berk")

//* 3 retunrlü Parametresiz
function deneme3(){
    return "deneme3"
}
let result = deneme3();
console.log(result)

//* 4 returnlü Parametreli
function deneme3(soyad){
    return soyad
}
let result = deneme3("Kural");
console.log(result)

//! Function (anonymous)
let deneme = function(a,b){
    let sonuc = a + b
    return sonuc
}
console.log(deneme(5,10))

//! Function (arrow)
let deneme = (a,b) => {
    let sonuc = a + b
    return sonuc
}
console.log(deneme(5,10))

//! immedia function
//* çağırmadan gelen fonksiyon
(function(){
    console.log("Deneme")
})();

//! conditional funtion (if else kullanılan fonksyion)
const condi = () => {
    let number = 4;
    if(number >= 2){
        console.log("büyüktür")
    }
    else{
        console.log("küçüktür")
    }
}
condi()

const condi2 = () => {
    let number = 4;
    if(number >= 2)
        console.log("büyüktür")
    else
        console.log("küçüktür")
    
}
condi2()

const condi3 = () => {
    let number = 4;
    let result =  (number >= 2) ? "büyüktür":"küçüktür"
    console.log(result)
}
condi3()

const condi4 = () => {
    let number = 4;
    console.log((number >= 2) ? "büyüktür":"küçüktür") //* ternary kullanımı
}
condi4()

const condi5 = () => {
    let number = 4;
    if(number == "1"){
        console.log("1")
    }
    else if(number == "2"){
        console.log("2")
    }
    else if(number == "3"){
        console.log("3")
    }
    else if(number == "4"){
        console.log("4")
    }
    else{
        console.log("1<=x<=5 dışındadır")
    }
}
condi5()

//! switch case ile yapımı
const condi6 = () => {
    let number = 4;

    //* break    : döngü kırmak
    //* return   : metot kırmak
    //* continue : 1 kereye mahsus es geç sonra döngüye devam et
    switch (number) {
        case 1:
            console.log("1")
            break; 
        case 2:
            console.log("2")
            break;
        case 3:
            console.log("3")
            break;
        case 4:
            console.log("4")
            break;
    
        default:
        console.log("1<=x<=5 dışındadır")
            break;
    }
}
condi6()

///////////////////////////////

//! loop (döngü)
//? for döngüsü
//* 0'dan 10 sayısına kadar ekrana yazdırma
for(let i = 0; i <br 10; i++){
    console.log(i)
}

let loop = () => {
    for(let i = 0; i <= 10; i++){
        document.write(i + " ")
    }
}
loop()

document.writeln("</br>")

//? while döngüsü
//* 0'dan 10 sayısına kadar ekrana yazdırma
let i = 0;
while(i < 10){
    console.log(i)
    i++
}

let loop2 = () => {
    let i = 0;
    while(i <= 10){
        document.write(i + " ")
        i++
    }
}
loop2()

document.writeln("</br>")

//* do while yapısı
let loop3 = () => {
    let i = 0;
    do{
        document.write(i + " ")
        i++
    }
    while(i <= 10){
    }
}
loop3()

///////////////////////////////

//! try catch
let tryCatchTuto= () => {
    try {
        alertx("pop-up")
    } 
    
    catch (error) {
        console.log("hata mesajı: " + error.message)
        console.log("hata mesajı: " + error.name)
        console.error(error)
    }

    finally{
        console.log("db.close")
        console.log("port.close")
    }
    console.log("son satır");
}
tryCatchTuto()

///////////////////////////////

//! debug nedir? 
1 ile 10 dahil olmak üzere toplama işlemi yapan js algoritmasını yazınız
const debugData = () => {
    let sum = 0;
    for(let i = 1; i <= 10; i++){
        sum += i;
    }
    console.log("Toplam: " + sum)
}
debugData()


///////////////////////////////
//! software princible
//! KISS, YAGNI, SOLID, CLEAN CODE, SPAGHETTI CODE, DUMMY CODE
//* kiss (Keep It Super Simple) yazılımın tasarımını basit tutmayı ve gereksiz karmaşıklıktan kaçınmayı amaçlar.
//* yagni (you aren't gonna need it) sadece mevcut ihtiyaçlara odaklanılması gerektiğini savunur ve gereksinimler ortaya çıkmadan önce gereksiz özellikler eklemekten kaçınılması gerektiğini ifade eder
//* solid (5 temel prensibi temsil eder)
//? Tek Sorumluluk İlkesi (Single Responsibility Principle - SRP): Bir sınıfın veya modülün sadece bir tek sorumluluğu olmalıdır. Bir sınıfın birden fazla sorumluluğu olması, kodun karmaşıklığını artırabilir ve bakımını zorlaştırabilir.
//? Açık/Kapalı Prensibi (Open/Closed Principle - OCP): Yazılım birimleri (sınıflar, modüller, vb.), değişiklik yapılmasına kapalı, ancak uzantılanmasına açık olmalıdır. Yani mevcut kodu değiştirmeden yeni özellikler eklemek mümkün olmalıdır. 
//? Liskov Yerine Koyma Prensibi (Liskov Substitution Principle - LSP): Bir sınıfın alt sınıfı, üst sınıfın yerine kullanılabilmelidir. Yani bir türetilmiş sınıf, üst sınıfın davranışını değiştirmemeli, ancak genişletmelidir. 
//? Arayüz Ayrımı Prensibi (Interface Segregation Principle - ISP): İstemciye sadece ihtiyaç duyduğu metotları içeren küçük arayüzler sunulmalıdır. Yani bir sınıfın kullanacağı arayüzler, sınıfın ihtiyaç duyduğu işlevselliği içermelidir, gereksiz metotlar içermemelidir. 
//? Bağımlılıkların Ters Çevrilmesi Prensibi (Dependency Inversion Principle - DIP): Yüksek seviyeli modüller, düşük seviyeli modüllere bağlı olmamalıdır. İkisi de soyutlamalara (arayüzlere veya soyut sınıflara) bağlı olmalıdır.
//* clean code (temiz kod) "Clean code," yazılım geliştirme dünyasında, kodun okunabilir, anlaşılır, bakımı kolay, hata ayıklaması yapılabilir ve genel olarak kaliteli bir şekilde yazılmasını ifade eden bir terimdir. 
//* Spaghetti code, kodun karmaşık bir şekilde birbirine dolanmış gibi göründüğü durumları ifade eder. Bu tür kodlar, genellikle kodun kötü tasarlanması, düzensiz yazılması veya zaman içinde başkaları tarafından bakımının yapılmaması sonucunda ortaya çıkar.
//* dummy code  yazılım geliştirme süreçlerinde kullanılan sahte veya geçici verileri veya kodu ifade eder. Bu tür veri veya kod, belirli bir amaç için geçici olarak oluşturulur ve gerçek işlevselliğe sahip değildir. Dummy code veya dummy data, farklı amaçlar için kullanılabilir:
//? Test Amaçları
//? Prototipleme
//? Veri Görüntüleme ve Tasarım
//? Performans Testleri
//? Bağımlılıkların Çözümlemesi
///////////////////////////////

//! monad
//* bir fonksiyonun çıktısı başka bir fonksiyonun girdisi ise buna monad denir
const birinci=()=>{
    let user= Number(prompt("lütfen sayı giriniz"))
    return user;
}

const ikinci=()=>{
    let data = birinci();
    console.log(Math.sqrt(data))
}
ikinci()

///////////////////////////////

//! setTimeout
//* belirli zaman sonra tek bir kere çalışır ve durur
setTimeout(function(){
    console.log("setTimeout çalıştı")
},2000)

//! setInterval
//* belirlenen zamana göre sürekli olarak çalışır
setInterval(function(){
    console.log("setInterval çalıştı")
},1000)

///////////////////////////////

//! callbackFunction
//* farklı fonksiyonlar arasında bilgi akışı sağlar
const birinci = (data)=> {
    return Math.pow(2,data);
}
const ikinci = (callbackFunction)=> {
    let user= Number(prompt("lütfen sayı giriniz"));
    let data = callbackFunction(user);
    console.log(data);
}
ikinci(birinci)

///////////////////////////////

//! promise
//* catch 1 tane olmak zorunda
const promTutorials = () => {
    let data = new Promise((resolve,reject) => {
        let status = 200;
        if(status === 200){
            resolve();
        }
        else{
            reject("çalışmadı");
        }
    }).then(() => {
        console.log("çalıştı")
    }).catch((err) => {
        console.error(err)
    });
}
promTutorials()

//* FIFO (First-In-First-Out), verilere ilk eklenen verilerin ilk çıkarıldığı bir kuyruk (queue) yapısıdır. 
//* LIFO (Last-In-First-Out) ise en son eklenen verilerin ilk çıkarıldığı bir yığın (stack) yapısıdır.

///////////////////////////////

//! dizi (Iterative for, for in, for of, foreach, map, filter, fill)
let arr = () => {
    const numbers = [3,5,6,1,9,4,66,76,2];
    return numbers
}

let arrResult = () => {
    let data = arr();
    console.log(data)
    console.log(data[0]) //* index numarasına göre elemana ulaşma
    console.log(data[data.length - 1]) //* listenin son elemanına ulaşma
    //!Iterative for loop
    for(let i = 0; i < data.length; i++) {
        document.write(data[i] + " ")
    }
    document.write("<br/>");

    //! for in
    for(let temp in data){
        document.write(temp + " => " + data[temp] + "<br/>")
    }

    document.write("<br/>");

    //! for of
    for(let temp of data){
        document.write(temp + " ")
    }

    document.write("<br/>");
    document.write("<br/>");

    //! forEach
    //* forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    data.forEach(function(value,index,array){
        document.write(index + " => " + value + "<br/>")
        document.write(`${index} => ${value} <br/>`)
    })

    document.write("<br/>");

    //! filter
    //* filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    let result1 = data.filter((value,index,array)=>{
        return value % 2 == 0;
    }).forEach(function(value,index,array){
        document.write(`${index} => ${value} <br/>`)
    });

    document.write("<br/>");


    //! map
    //* map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    data.map((value,index,array)=>{
        return value + 10;
    }).forEach(function(value,index,array){
        document.write(`${index} => ${value} <br/>`)
    });
}
arrResult()


//! Dizi metotları
const data = [3,5,6,1,4,66,76,2];

//! length (uzunluk)
//* dizinin kaç elemandan oluştuğuna bakmak için kullanılır
document.writeln("Eleman sayısı: " + data.length);

//! push (dizinin sonuna eleman ekleme)
document.writeln("Eleman sayısı: " + data.length);
data.push(120);
console.log(data)

//! unshift (dizinin başına eleman ekleme)
data.unshift(11);
console.log(data)

//! pop (dizinin sonundan eleman çıkarır)
data.pop();
console.log(data)

//! shift (dizinin başından eleman çıkarır)
data.shift();
console.log(data)

//! sort (küçükten büyüğe sıralama)
data.sort();
console.log(data)

//! reverse (tersine çevirme)
data.reverse();
console.log(data)

//! toString (string (metinsel) ifadeye çevirme)
console.log(data.toString())

