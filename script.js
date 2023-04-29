let counter=[];
slides = document.querySelectorAll('.time');
console.log(slides)
function update(){
    slides.forEach(
        (slide,index) => {
            slide.innerHTML = `<div class="b">${counter[index]}</div>`;
        }
    )
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
        clearInterval(myInterval);
        m=0;
    }
}

function  name1 () {
    x3 = new Date();
    let a;
    a = converter(total+(x3-x1));
    counter[1]= a[0]%10;
    counter[0]= Math.floor(a[0]/10)%10;
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

function reset(){
    if(m==0){
        counter = [0,0,0,0,0,0,0,0];
        total = 0;
        update();
    }
}
function converter(ms){
    let a=[];
    a.push(Math.floor(ms/6000000)%100);
    a.push(Math.floor(ms/60000)%60);
    a.push(Math.floor(ms/1000)%60);
    a.push(Math.floor(ms/10)%100);
    return a;
}


// to store the time
function addlist(){
    
}
function Adding(){
}
