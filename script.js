let btn1=document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
let btn2=document.querySelector("#btn2");
btn2.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
let btn3=document.querySelector("#btn3");
btn3.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
let btn4=document.querySelector("#btn4");
btn4.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
let btn5=document.querySelector("#btn5");
btn5.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
let fb1=document.querySelector("#fb1");
fb1.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
let fb2=document.querySelector("#fb2");
fb2.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
let fb3=document.querySelector("#fb3");
fb3.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
let insta1=document.querySelector("#insta1");
insta1.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
let insta2=document.querySelector("#insta2");
insta2.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
let insta3=document.querySelector("#insta3");
insta3.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
let adjust=document.querySelector(".gallery-pics");
adjust.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
let picsec2=document.querySelector("#picsec2");
picsec2.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
let picsec3=document.querySelector("#picsec3");
picsec3.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
let picsec4=document.querySelector("#picsec4");
picsec4.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
let menubaricon=document.querySelector("#menubar-icon")
let backarrowicon=document.querySelector("#backarrow-icon");
let menuele=document.querySelector(".menubar-ele");
let menu=document.querySelector(".menu");
menubaricon.addEventListener("click",()=>{
    menubaricon.style.display="none"  
    backarrowicon.style.display="block";
    menuele.style.display="block";
    menu.style.backgroundColor = "white";
});
backarrowicon.addEventListener("click",()=>{
    menubaricon.style.display="block"  
    backarrowicon.style.display="none";
    menuele.style.display="none";
    menu.style.backgroundColor="transparent";
});
