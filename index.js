let menu=document.querySelector('.menu-icon');
let navbar=document.querySelector(".navbar");
menu.onclick=()=>{
    navbar.classList.toggle('navactive');
}
window.addEventListener('scroll',()=>{
    document.querySelector('header').classList.toggle('scroll',window.scrollY>0);
})
window.addEventListener('load',function (){
    document.querySelector('.loader').classList.add('hide');
})

let input=document.querySelector('.input');
input.onfocus=()=>{

    document.querySelector(".searchlist").style.cssText="height:300px";
    navbar.classList.remove('navactive');
    document.querySelector(".searchbox").onmouseleave=function(){
        document.querySelector(".searchlist").style.cssText="height:0px";
    }
}
var ary=["apple","oppo","samsung","Hawei","redmi","mi","techno"];
var recent=document.getElementById("recent")
var i;
for(i=0;i<ary.length;i++){
    recent.innerHTML+=`<li>${ary[i]}</li>`;
}

window.addEventListener('scroll',()=>{
    navbar.classList.remove('navactive');
    document.querySelector(".searchlist").style.cssText="height:0px";


})

//Navabr ENd//

//promotion start//

function timetable(x, i) {
    let timeary = x[3]



    var timecount = setInterval(() => {
        timeary[0]--;
    
        if (timeary[0] === 0) {
            timeary[1]--;
            timeary[0] = 59;
        }

        if (timeary[1] === 0) {
            timeary[2]--;
            timeary[1] = 59;
        }
        if (timeary[2] === 0) {
            timeary[3]--;
            timeary[2] = 23
        }
        if (timeary[3] === 0) {
            timeary = [0, 0, 0, 0];
            clearInterval(timecount);
        }
      

        let day = document.querySelector(` .day .number${i}`);
        let hour = document.querySelector(` .hour .number${i}`);
        let minute = document.querySelector(` .minute .number${i}`);
        let second = document.querySelector(` .second .number${i}`);
        second.textContent = timeary[0] < 10 ? `0${timeary[0]}` : timeary[0]
        minute.textContent = timeary[1] < 10 ? `0${timeary[1]}` : timeary[1]
        hour.textContent = timeary[2] < 10 ? `0${timeary[2]}` : timeary[2]
        day.textContent = timeary[3] < 10 ? `0${timeary[3]}` : timeary[3]
        let name = document.querySelector(`.name${i}`)
      
        let img=document.getElementById(`img${i}`)
        let money = document.querySelector(`.money${i}`)
        much = document.querySelector('.much');
        name.textContent = x[0]
        money.textContent = x[2]
        
        img.src=x[1]
    }, 1000);

    let much = document.querySelector('.much')
    much.innerHTML += `<div class="swiper-slide">
    <div class="promo">
            <h6>Promotion</h6>
            
        

        <div class="timecontent">
            <div class="time day">
                <span class="number number${i}">00</span>
                
                <span class="text">d</span><span>/</span>
            </div>
            <div class="time hour">
                <span class="number number${i}">00</span>
                
                <span class="text">h</span><span>/</span>
            </div>
            <div class="time minute">
                <span class="number number${i}">00</span>
               
                <span class="text">min</span> <span>/</span>
            </div>
            <div class="time second">
                <span class="number number${i}">00</span>
                
                <span class="text">s</span><span>/</span>
            </div>
        </div>

    </div>

    <div class="craft">
    <i class='bx bxs-star'></i>
    <i class='bx bxs-star'></i>
    <i class='bx bxs-star'></i>
    <i class='bx bxs-star'></i>
    <i class='bx bxs-star'></i>

        <h6 class="name${i}">Name</h6>
        <h6 class="money${i}">$000</h6>
        <a href="">See More</a>
    </div>
    <img src="team-2.jpg" id="img${i}"  alt="">
</div>`

}
let aLL = [
    [
        "Oppo",
        "vi.jpg",
        "$1050",
        [59, 59, 24, 3]
    ],
    [
        "apple",
        "xiaomi-redmi-turbo3.jpg",
        "$1200",
        [59, 59, 24, 1]
    ],
    [
        "Oppo",
        "sam.jpg",
        "$1050",
        [59, 59, 24, 0]
    ],
    [
        "apple",
        "apple-iphone-11.jpg",
        "$1020",
        [59, 59, 24, 9]
    ],
    [
        "Oppo",
        "samsung.jpg",
        "$1020",
        [59, 59, 24, 9]
    ],
    [
        "Vivo",
        "vivo.jpg",
        "$564",
        [59, 59, 24, 9]
    ],
    [
        "Xiaomi",
        "xiaomi-redmi-turbo3.jpg",
        "$1020",
        [59, 59, 24, 9]
    ],
]



for (let i = 0; i < aLL.length; i++) {

    timetable(aLL[i], i);

}
let upbtn=document.querySelector('.upbtn');
window.addEventListener('scroll',()=>{
    var z=window.scrollY
    upbtn.classList.toggle('showup',z>500);
    
})