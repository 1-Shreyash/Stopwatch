let counter=[];
slides = document.querySelectorAll('.time');
console.log(slides)

//function to convert milliseconds into array time
function converter(ms){
    let t=[];
    t.push(Math.floor(ms/6000000)%100);
    t.push(Math.floor(ms/60000)%60);
    t.push(Math.floor(ms/1000)%60);
    t.push(Math.floor(ms/10)%100);
    return t;
}

//function used to update the counters value to the string
function update(){
    slides.forEach(
        (slide,index) => {
            slide.innerHTML = `<div class="b">${counter[index]}</div>`;
        }
    )
}

let myInterval,x1=0,x2,x3=0,total,x4,x5;
let m,countx=0;

//setting initial state of the clock with reference to last time when tab was opened
if(localStorage.getItem('StpwatchTtime')==null){
    ItemJsonArray = [0,0,0];
    localStorage.setItem('StpwatchTtime', JSON.stringify(ItemJsonArray))
}
ItemJsonArrayStr = localStorage.getItem('StpwatchTtime');
ItemJsonArray = JSON.parse(ItemJsonArrayStr);
total = ItemJsonArray[0];
m = ItemJsonArray[1];
if(m==1){
    m=0
    ItemJsonArrayStr2 = localStorage.lastTime;
    x4 = Date.parse(ItemJsonArrayStr2);
    x5 = new Date()
    total += x5 - x4
    strstp()
}
else{
    let a;
    a = converter(total);
    counter[1]= a[0]%10;
    counter[0]=  Math.floor(a[0]/10)%10;
    counter[3]= a[1]%10;
    counter[2]=  Math.floor(a[1]/10)%10;
    counter[5]= a[2]%10;
    counter[4]=  Math.floor(a[2]/10)%10;
    counter[7]= a[3]%10;
    counter[6]=  Math.floor(a[3]/10)%10;
    update();
}

//fuction used for start stop button
function strstp(){
    if(m==0){
        x1 = new Date();
        start();
        m=1;
    }
    else{
        total += x3-x1;
        clearInterval(myInterval);
        m=0;
    }
    ItemJsonArray=[total, m];
    localStorage.setItem('StpwatchTtime', JSON.stringify(ItemJsonArray))
}
function  name1 () {
    x3 = new Date();
    let a;
    a = converter(total+(x3-x1));
    counter[1]= a[0]%10;
    counter[0]=  Math.floor(a[0]/10)%10;
    counter[3]= a[1]%10;
    counter[2]=  Math.floor(a[1]/10)%10;
    counter[5]= a[2]%10;
    counter[4]=  Math.floor(a[2]/10)%10;
    counter[7]= a[3]%10;
    counter[6]=  Math.floor(a[3]/10)%10;
    update();
}
function start(){
    myInterval=setInterval(name1,10);
}

//function called to reset clock
function reset(){
    if(m==0){
        counter = [0,0,0,0,0,0,0,0];
        total = 0;
        update();
        ItemJsonArray = [total,0];
        localStorage.setItem('StpwatchTtime', JSON.stringify(ItemJsonArray))
    }
}


// to store the time
function addlist(){
    
}
function Adding(){
    // if(localStorage.getItem('ItemJson')==null){
    //     ItemJsonArray = [];
    //     ItemJsonArray.push([tit, desc])
    //     localStorage.setItem('ItemJson', JSON.stringify(ItemJsonArray))
    // }
    // else{
    //     ItemJsonArrayStr = localStorage.getItem('ItemJson');
    //     ItemJsonArray = JSON.parse(ItemJsonArrayStr);
    //     ItemJsonArray.push([tit, desc]);
    //     localStorage.setItem('ItemJson',JSON.stringify(ItemJsonArray));
    // }
}

//to save the current time before closing
window.onbeforeunload = function () {
    if(m==1){
        total += x3 - x1;
        ItemJsonArray=[total, m];
    }
    localStorage.setItem('StpwatchTtime', JSON.stringify(ItemJsonArray))
    localStorage.setItem('lastTime',x3)
}