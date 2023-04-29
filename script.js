let wday = document.getElementById("week");
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// let x = new Date();
// let week = weekday[x.getDay()];

var counter8,counter7,counter6,counter5,counter4,counter3,counter2,counter1;
slides8 = document.getElementById('msecR')
const slideImage8 = () => {
    slides8.innerHTML=`<div class="b8">${counter8}</div>`;
}
const goNext8 = () => {
    // console.log(89)
// if(counter8===9){
//     counter8=-1
// }
// counter8++
slideImage8()
}


// var counter7 = 0;
slides7 = document.getElementById('msecL')
const slideImage7 = () => {
    slides7.innerHTML=`<div class="b7">${counter7}</div>`
}
const goNext7 = () => {
// if(counter7===9){
//     counter7=-1
// }
// counter7++
slideImage7()
}


// var counter6 = 0;
slides6 = document.getElementById('secR')
const slideImage6 = () => {
    slides6.innerHTML=`<div class="b6">${counter6}</div>`
}
const goNext6 = () => {
// if(counter6===9){
// }
// counter6++
slideImage6()
}


// var counter5 = 0;
slides5 = document.getElementById('secL')
const slideImage5 = () => {
    slides5.innerHTML=`<div class="b5">${counter5}</div>`
}
const goNext5 = () => {
// if(counter5===5){
//     counter5=-1
// }
// counter5++
slideImage5()
}


// var counter4 = 0;
slides4 = document.getElementById('minR')
const slideImage4 = () => {
    slides4.innerHTML=`<div class="b4">${counter4}</div>`
}
const goNext4 = () => {
// if(counter4===9){
//     counter4=-1;
// }
// counter4++
slideImage4()
}


// var counter3 =0;
slides3 = document.getElementById('minL')
const slideImage3 = () => {
    slides3.innerHTML=`<div class="b3">${counter3}</div>`
}
const goNext3 = () => {
// if(counter3===5){
//     counter3=-1
// }
// counter3++
slideImage3()
}


// var counter2 = 0;
slides2 = document.getElementById('hourR')
const slideImage2 = () => {
    slides2.innerHTML=`<div class="b2">${counter2}</div>`
}
const goNext2 = () => {
// if(counter2===9){
//     counter2=-1
// }
// counter2++
slideImage2()
}


// var counter1 = 0;
slides1 = document.getElementById('hourL')
const slideImage1 = () => {
    slides1.innerHTML=`<div class="b1">${counter1}</div>`
}
const goNext1 = () => {
// if(counter1===9){
//     counter1=0
// }
// counter1++
slideImage1()
}




















let myInterval,x1=0,x2=0,x3=0,total=0;
let m=0,countx=0;
localStorage.setItem('Ttime',0)
function strstp(){
    if(m==0){
        x1 = new Date();
        start();
        m=1;
    }
    else{
        x2 = new Date();
        total += x3-x1;
        // total+=x2-x1
        // console.log(total)
        // localStorage.setItem('Ttime',total)
        clearInterval(myInterval);
        m=0;
    }
    // console.log(m)
}

// goNext8();
function  name1 () {
    x3 = new Date();
    let a;
    // console.log(MATH.floor(x3-x1)/100);
    a = converter(total+(x3-x1));
    counter2= a[0]%10;
    counter1= Math.floor(a[0]/10)%10;
    counter4= a[1]%10;
    counter3=  Math.floor(a[1]/10)%10;
    counter6= a[2]%10;
    counter5=  Math.floor(a[2]/10)%10;
    counter8= a[3]%10;
    counter7=  Math.floor(a[3]/10)%10;
    // counter8 = Math.floor((x3-x1)/10)%10;
    //Setting the initial state
    goNext1();
    goNext2();
    goNext3();
    goNext4();
    goNext5();
    goNext6();
    goNext7();
    goNext8();
}
function start(){
    myInterval=setInterval(name1,10);
}

function reset(){
    if(m==0){
        counter1=0;
        counter2=0;
        counter3=0;
        counter4=0;
        counter5=0;
        counter6=0;
        counter7=0;
        counter8=0;
        total = 0;
        goNext1();
        goNext2();
        goNext3();
        goNext4();
        goNext5();
        goNext6();
        goNext7();
        goNext8();
    }
}
// const d = new Date();
// setInterval(function(){const c = new Date();console.log((c-d));counter8=(c-d)%10; goNext8()},10);

function converter(ms){
    let a=[];
    a.push(Math.floor(ms/6000000)%100);
    a.push(Math.floor(ms/60000)%60);
    a.push(Math.floor(ms/1000)%60);
    a.push(Math.floor(ms/10)%100);
    return a;
}


//to store the time
function addlist(){
    
}
function update(){
}
function Adding(){
}

function Delete(itemIndex){
}