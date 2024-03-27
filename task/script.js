
////////////// TASK 1 //////////////

// let fullName = 'Ulfat Zakirli Rovshen'

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)

let fullName = 'Xeyal Imanov Adil'
console.log(fullName.split(''));

// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin

function adsoyad(fullName) {
    let names = fullName.split(' ')
    if (names.length < 2)
        return fullName
    let deyisenad = names[1] + ' ' + names[0]
    for (let i = 2; i < names.length; i++) {
        deyisenad += ' ' + names[i] }
    return deyisenad}
console.log(adsoyad(fullName))

// 3) Alinan yeni arrayi stringe cevirin(join)

let string  = adsoyad(fullName);
let stringName = string.split(' ').join('');

console.log(stringName);


 let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
let reqem5 = arr.filter(reqem  => reqem  === 5)
console.log(reqem5);

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
let cemi = 0
let n =arr.map (item => cemi +=item)
console.log(n);  //132

//6) arrayda tekrar olunan reqemleri artan sira ile duzun

let artan = arr.filter((item, index) => arr.indexOf(item) === index);
///
console.log(artan);

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)

let maxNumber = Math.max(...arr);
let number2 = arr.filter(reqem1 => reqem1 == maxNumber).length;
console.log(number2);    
console.log(maxNumber);

//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)

const Name = 'Xeyal'
let ad1 = Name.length
console.log(ad1); //4

//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin

let result = arr.findIndex(item => item == '5')
console.log(result);



//10) arraydaki en boyuk reqemin ilk indexini tapin
let ilk = arr.indexOf(maxNumber)
console.log(ilk);

//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin

let result2 = arr.findIndex (item => item =='4')
 console.log(result2);

//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
let kicikindex = arr.indexOf(5)
console.log(kicikindex);
let boyukindex = arr.lastIndexOf(5)
 console.log(boyukindex);

//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin

let array2 = arr.filter(item => item > 2);
let arr4 = arr.length - array2.length;
console.log(array2);
console.log(arr4);
//14) 7 reqeminin indexleri cemini tapin.
let index7 = arr.indexOf (7)
console.log(index7);



///////////// TASK 2//////////////

let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]


//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin

let names = arr2.filter(item => item.name.startsWith('t'));
console.log(names);
// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin

let nameT = arr2.filter(item => item.name.startsWith('t') && item.name.endsWith('t')).length;
console.log(nameT);
// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
let Tkey = arr2.reduce((a5, a4) => (a4.name.startsWith('t') &&a4.name.endsWith('t')) ? a5 + a4.key : a5, 0);
console.log(Tkey);

// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
let arr1 = arr2.map((item, index) => {
    if (item.name.slice(-1) === 'e') {
        return { ...item, name: "SuperDev" };
    } else {
        return item;
    }
});
console.log(arr)


// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
let keyLong = arr2.reduce((maxKey, obj) => (obj.name.length > arr2[maxKey].name.length ? arr2.indexOf(obj) : maxKey), 0);
console.log(keyLong);
// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin

let long = arr2.findIndex(obj => obj.name.length === Math.max(...arr2.map(obj => obj.name.length))) ** 2;
console.log(long);

// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
let nameLength = arr2.filter(obj => obj.name.length === 4);
console.log(nameLength);
// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
const maxKey = arr2.reduce((max, current) => {
    return current.key > max ? current.key : max;
}, arr2[0]);

console.log(maxKey.name);

// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
let indexes = arr2.reduce((indexes, obj, index) => (obj.name.split
    ('L').length - 1 === 2 ? [...indexes, index] : indexes), []);
console.log(indexes);
// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
let key2 = arr2.filter(obj => obj.name.split
    ('t').length - 1 === 2).map(obj => obj.key);
    console.log(key2);