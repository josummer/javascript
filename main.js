//console.log("hello javascript!")
//console.log(console)

/*蹂��닔
// javascript 蹂��닔 3媛�吏�
// var(留롮씠 �궗�슜x, golbal濡쒕쭔 �벐�씠湲� �븣臾�), 
// let, const

var name = "scalper"

for(var i=0; i<10; i++){
    var name = "scalper"
}

console.log(name)


// let - �뼱�뼡 蹂��닔媛� 媛� 蹂�寃쎌씠 鍮덈쾲�븯寃� �씪�뼱�굹�빞�맆�븣 ex 寃뚯엫�젏�닔

let score = 0;
score = score+1;
console.log(score)


// const - 媛믪씠 蹂��솕�릺吏� �븡�쓣 �븣, 蹂��솕�떆�룄�떆 �뿉�윭

const name = "scalper";
name = "codeScalper";
console.log(name)
*/

//const, let��� 釉붾줉�떒�쐞濡� �꽑�뼵


/*�뜲�씠�꽣����엯
///////////////////////////////////////////////
// �뜲�씠�꽣 ����엯
// String, Number, boolean, null, undefined, (symbol)

const name = "scalper";
const age = 30;
const isMale = true;
const isFemale = false;
let money = null;
let girlFriend = undefined;

console.log(typeof name)
console.log(typeof age)
console.log(typeof isMale)
console.log(typeof money)   // null�씤�뜲 object�씪怨� 異쒕젰�맖
console.log(typeof girlFriend)
console.log(name, age, isMale)

console.log("my name is " + name + " and i am ", age)
console.log(`�궡 �씠由꾩�� ${name}�씠怨� �굹�씠�뒗 ${age}�엯�땲�떎`)

//臾몄옄�뿴�쓣 �옄瑜닿퀬 �떢�쓣 �븣
const animal = "tiger";
console.log(animal)
console.log(animal.substring(0,2))  // ti

let fruits = "�궗怨�, �뵺湲�, �룷�룄, 李몄쇅";
fruits = fruits.split(", ");     // 諛곗뿴�씠 留뚮뱾�뼱吏�
console.log(fruits[2])          // �룷�룄 異쒕젰
*/

/* 諛곗뿴, �삤釉뚯젥�듃
// 諛곗뿴, �삤釉뚯젥�듃
const animal = "lion";
const animal2 = "rabbit";

// �뿬�윭媛�吏� 媛믩뱾�쓣 臾띠뼱�넃��� 寃� - 諛곗뿴
const animals = ["lion", "rabbit", "monkey"];
const fruits = "apple, banana, strawberry";
//animals[3] = "tiger"
animals.push("tiger")   //留덉��留� �씤�뜳�뒪�뿉 異붽��
animals.unshift("dog")  //0 �씤�뜳�뒪�뿉 異붽��
animals.pop()           //留� �뮘 �씤�뜳�뒪 �젣嫄�
console.log(animals)

console.log(Array.isArray(animals)) // 諛곗뿴�씤吏� �솗�씤
console.log(Array.isArray(fruits))

console.log(animals.indexOf("monkey"))  // �빐�떦 臾몄옄�뿴�씠 �씤�뜳�뒪 紐� 踰덉씤吏�

//splice, slice
// splice - 諛곗뿴�옄泥대�� 諛붽퓞
// slice - 諛곗뿴�쓣 諛붽씀吏��뒗 �븡怨� 媛믩쭔 諛섑솚
//animals.splice(0,2);    //0�씤�뜳�뒪遺��꽣 2媛� 鍮쇨린
//animals.splice(animals.indexOf("monkey",3))

const slicedAnimals = animals.slice(0,2)  //0 �씤�뜳�뒪~ 2-1 �씤�뜳�뒪源뚯�� 諛섑솚
console.log(slicedAnimals, animals)


//�삤釉뚯젥�듃(object) - �뼱�뼡 ����긽�쓽 �냽�꽦怨� 媛�, �뙇�쓣 �씠猷④퀬 �엳�쓬
const monkey = {
    name : 'kiki',
    age : 5,
    weight : 40,
    gender : 'male',
    isCute : true,
    food : ["banana", "carrot", "potato"],
    home : {
        location : "zoo",
        size : "big",
        price : 3000
    }
}

monkey.gender = "female"
//monkey = {gender : 'male'}  // �뿉�윭 const媛믪씤 monkey�뒗 諛붽�� �닔 �뾾�쓬

console.log(monkey)
console.log(monkey["name"]) //object�쓽 �씤�뜳�뒪�뒗 key
console.log(monkey.weight)
console.log(monkey.gender)  //object �븞�쓽 �냽�꽦�쓣 諛붽씔嫄곌린 �븣臾몄뿉 const瑜� �뜥�룄 蹂�寃� 媛��뒫�븳 寃�
console.log(monkey.food[1])
*/

/*JSON
// json - object��� �쑀�궗, [javascript Object Notation], �뜲�씠�꽣瑜� 二쇨퀬 諛쏆쓣 �븣(�쟾�넚)
const monkey = {
    name : 'kiki',
    age : 5,
    weight : 40,
    gender : 'male',
    isCute : true,
    food : ["banana", "carrot", "potato"],
    home : {
        location : "zoo",
        size : "big",
        price : 3000
    }
}
console.log(monkey)
const monkeyJSON = JSON.stringify(monkey)   //object媛� JSON�삎�깭濡� 臾몄옄�뿴�솕
const parsedJSON = JSON.parse(monkeyJSON)   //�궗�슜�븷 �닔 �엳�뒗 object�삎�깭濡� �뙆�떛
console.log(monkeyJSON) //json 臾몄옄�뿴 �삎�깭 媛곴컖�쓽 �궎�뿉 �젒洹펪
console.log(parsedJSON)  // object �삎�깭
console.log(parsedJSON.name)
*/

/* �븿�닔
// �븿�닔 function
const item1 = 3000;
const item2 = 2000;
const item3 = 5000;

const loyalty = 1000;

console.log(item1 + loyalty)
console.log(item2 + loyalty)
console.log(item3 + loyalty)

// �쐞�뿉 �쟻���嫄� �븿�닔濡� �쟻湲�
function showPrice(price){
    console.log(price + loyalty);
    return price +loyalty;
}

showPrice(item1);
showPrice(item2);
showPrice(item3);

// return�쓣 �넻�빐�꽌 媛믪쓣 諛쏆쓣 �븣 
const price1 = showPrice(item1);

console.log(price1)
console.log(item1)

// �븿�닔瑜� 蹂��닔�뿉 �떞�븘�꽌 �궗�슜�븯�뒗 寃쎌슦
const showPrice = function(price){
    return price + loyalty;
}

console.log(showPrice(item1))

//const showPrice = function(){}
// �쐞�쓽 function�쓣 => �쑝濡� �궗�슜 媛��뒫
const showPrice = (price) => {
    console.log(price + loyalty)
}

showPrice(item2);


// �쐞�쓽 �몢 諛⑸쾿 鍮꾧탳
showPrice1(item1);
//showPrice2(item2);  // �뿉�윭 硫붿꽭吏�, �븿�닔 �꽑�뼵 �썑 留≪뿉�떎媛� �빐�빞�맖

function showPrice1(price){
    console.log(price + loyalty);
    //return price + loyalty;
}

const showPrice2 = (price) => {
    console.log(price + loyalty);
}

console.log(window); //  �씠�븣 showPrice1留� window�뿉 �룷�븿�맖


// �삤釉뚯젥�듃�뿉 �븿�닔 
console.log(this);  //window 媛앹껜

const obj = {
    name : 'test',
    test1 : function(){
        console.log(this)
    },
    test2 : () => {
        console.log(this)
    }
}

obj.test1();    // this媛� �삤釉뚯젥�듃 �옄泥대�� 媛�由ы궡
obj.test2();    // this媛� window瑜� 異쒕젰�븿

const a = obj.test1;
const b = obj.test2;

a();            // window
b();            // window
*/

/* 諛섎났臾�, 議곌굔臾�
// 議곌굔臾�
const animals = [
    {name :'lion', size : 'big'},
    {name : 'monkey', size : 'medium'},
    {name : 'dog', size : 'small'},
]
console.log(animals);

const num = 11;


if(num === 10){     // == : �뜲�씠�꽣����엯 諛붽탳x === : �뜲�씠�꽣����엯源뚯�� 鍮꾧탳
        console.log("10�엯�땲�떎");
}

if(num < 10){
    console.log("10蹂대떎 �옉�뒿�땲�떎")
} else if( num === 10){
    console.log("10怨� 媛숈뒿�땲�떎")
}else{
    console.log("10蹂대떎 �겱�땲�떎")
}

// switch-case臾�
//const animal = "monkey";
const animal = animals[1].name;

switch(animal){
    case 'lion' :
        console.log("�궗�옄�엯�땲�떎");
        break;
    case 'monkey' :
        console.log("�썝�댂�씠�엯�땲�떎");
        break;
    default :
        console.log("�룞臾쇱씠 �븘�떃�땲�떎");
        break;
}

// 諛섎났臾�

console.log(animals.length);

for(let i=0; i<animals.length; i++){
    console.log(animals[i]);
}

for(let animal of animals){ // 諛곗뿴�쓽 �븯�굹�븯�굹�쓽 �슂�냼瑜� animal�뿉 �떞�쓬
    console.log(animal);    // �슂�냼 媛쒖닔留뚰겮 諛섎났臾몄씠 �룎�븘媛�
    console.log(animal.name);
}

let i = 10;

while(i>0){
    console.log(i);
    i--;
}

// �궪�빆�뿰�궛�옄
const num = 10;
if(num > 10){
    console.log(true);
}else{
    console.log(false);
}

// (議곌굔) ? �꽦由쏀븷 �븣 : �꽦由� �븞 �븷 �븣
num > 10 ? console.log(true) : console.log(false);
*/

/* forEach, map, filter, reduce
//forEach, map, filter, reduce
const coronaCases = [
    {city : 'Seoul', case : 1000},
    {city : 'Daejeon', case : 500},
    {city : 'Daegu', case : 300},
    {city : 'Busan', case : 100},
    {city : 'Gwangju', case : 50},    
]

// forEach _ �넀�돺寃� 諛섎났臾몄쓣 �룎由� �닔 �엳�뒗 硫붿꽌�뱶
coronaCases.forEach(function(corona,index){ //泥ル쾲吏� �꽔�뒗 寃� : �썝�냼, �몢踰덉㎏ �꽔�뒗 寃� : �씤�뜳�뒪 
    console.log(corona,index);
})

// map _ �뼱�뼡 諛곗뿴�쓣 媛�怨듯븯�뿬 �깉濡쒖슫 �삎�깭�쓽 諛곗뿴�쓣 留뚮뱾 �븣
const coronaCities = coronaCases.map((corona)=>{
    console.log(corona)
    //return corona.city;
    return `${corona.city}�쓽 �솗吏꾩옄 諛쒖깮 �닔�뒗 ${corona.case}`;
})

console.log(coronaCities);  // �룄�떆�쓽 �씠由꾨쭔�쑝濡� 諛곗뿴�씠 留뚮뱾�뼱吏�

// filter _ 諛곗뿴�뿉�꽌 �듅�젙�븳 媛믪쓣 媛�吏� �뜲�씠�꽣瑜� �븘�꽣留� �븷 �븣
const dangerousCity = coronaCases.filter(function(corona, index){
    return corona.case > 300;
})

console.log(dangerousCity);

// reduce _ 諛곗뿴�쓽 媛믪쓣 �씠�슜�븯�뿬 �듅�젙 媛믪쓣 �룄異쒗븯嫄곕굹 �옱媛�怨� �븷�븣
const numbers = [10,123,22,33,44,55];
const totalNumber = numbers.reduce((acc, cur)=>{    
    // 泥ル쾲吏� parameter : accumulate(吏�湲덇퉴吏� �뙎�븘�엳�뒗 媛�)
    // �몢踰덉㎏ parameter : current(諛섎났臾몄쓣 �닚�쉶�븷 �븣 �쁽�옱 媛�)
    // �꽭踰덉㎏ prarmeter : index 
    console.log(acc,cur);
    return acc + cur;
})

console.log(totalNumber);


const totalCases = coronaCases.reduce((acc, cur)=>{    
    console.log(acc,cur);
    return acc + cur.case;
},0)        // 珥덇린媛� 0�쓣 �꽔�뼱以섏빞 �젙�긽 怨꾩궛�맖 �솢�씤吏� �씠�빐 紐삵븿... object �슂�냼 �옄泥대줈 �뱾�뼱����꽌?

console.log(totalCases);
*/

/* OOP 媛앹껜吏��뼢
//OOP _ Object Oriented Programming 媛앹껜吏��뼢
// function Song(singer, title, release){
//     this.singer = singer;
//     this.title = title;
//     this.release = new Date(release);
//     this.getReleaseDay = function(){
//         return this.release.getDay()
//     }
//     //console.log(this);
// }

// Song.prototype.getInfo = function(){
//     return `�씠 �끂�옒�뒗 ${this.singer}�쓽 �뜲酉붽끝�씠怨� �젣紐⑹�� ${this.title}�엯�땲�떎.`
// }

// �쐞�뿉 �쟻��� 寃껉낵 �삊媛숈�� 湲곕뒫�쓣 �븿, class �궗�슜(syntactic suger)
class Song{
    constructor(singer, title, release){
        this.singer = singer;
        this.title = title;
        this.release = new Date(release)
    }
    getReleaseDay(){
        return this.release.getDay();
    }
}

//�씤�뒪�꽩�뒪�솕
const song1 = new Song("highlight", "bad girl", "2009-10-16");   // new�궎�썙�뱶瑜� �넻�빐 媛앹껜瑜� �씤�뒪�꽩�뒪�솕
const song2 = new Song("sewoon", "just u", "2017-08-31");

console.log(song1.release.getDay());    // 1:�썡 2:...
console.log(song2.getReleaseDay());

console.log(song1.getInfo());
console.log(song2.getInfo());

console.log(song1, song2);
*/

/* DOM
// DOM _ Document Object Model

//const title = document.getElementById("title");
//const list = document.getElementsByClassName("list");

//querySelector 단일 선택자
const title = document.querySelector("#title");
const list = document.querySelector(".list");
const items = document.querySelectorAll(".item");
const btn = document.querySelector("#btn");
const naver = document.querySelector(".naver");

title.style.color = "red"
title.style.backgroundColor = "green"

//innerHTML innerText
//title.innerHTML = "<input type = 'text'./ >"
title.innerText = "<input type = 'text'./ >"
btn.innerText = "button"

//list.remove()
list.firstElementChild.remove()
list.lastElementChild.innerHTML = "<a>link</a>"
 
//btn.addEventListener("행위", "작동")
btn.addEventListener("click", function(){
    alert("탕수육")
})

naver.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e)
    alert("네이버!");
})

console.log(title, list, items)
*/

/* HTTP
// HTTP 통신
// GET _ 정보를 주소에 포함을 해서 보내는 것
// POST _ 정보를 바디에 포함해서 보내는 것

// http request
const url = "https://api.covid19api.com/country/south-korea/status/confirmed?from=2021-09-01T00:00:00Z&to=2021-09-09T00:00:00Z"
const corona = fetch(url).then(res=>res.json).then(data => console.log(data))
    // 위 코드에 대한 설명
    //console.log(res);
    // JSON _ 응답(response stream)을 받아 읽고 json 데이터를 파싱하여
    //        자바스크립트 object를 만들어주는 메서드
*/

