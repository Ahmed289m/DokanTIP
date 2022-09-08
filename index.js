let loading = document.querySelector(".loading");
let IWelcome =document.querySelector(".IWelcome");
let element = document.getElementById("element");
let Title = "دعم صناع المحتوي ولا أسهل";

window.addEventListener("load",function(){
    IWelcome.style.opacity = "1";
    loading.style.display = "none";
    
    })

let one =document.querySelector(".one");
let two =document.querySelector(".two");
let three =document.querySelector(".three");
let four =document.querySelector(".four");
let up = document.getElementById("up");


window.addEventListener("load",function(){
    one.style.opacity = "1";
    two.style.opacity = "1";
    three.style.opacity = "1";
    four.style.opacity = "1";
})
let i=0;

window.addEventListener("load",function(){
console.log("Ahmed")
    let typing = setInterval(function(){
        element.textContent += Title[i] ;
        i++;
        if(i>Title.length-1)
        {
            clearInterval(typing);
        }
    },200)
})

let downL = document.getElementById("downL");
//move to sections

function sectwo(){
    window.scrollTo({
        top: secondsection.offsetTop,
        behavior: "smooth"
    });
}



function secfour(){
    window.scrollTo({
        top: Section3.offsetTop,
        behavior: "smooth"
    });
}

function secfive(){
    window.scrollTo({
        top: Partners.offsetTop,
        behavior: "smooth"
    });
}


function secsix(){
    window.scrollTo({
        top: downL.offsetTop,
        behavior: "smooth"
    });
}

//end

let secondsection = document.querySelector(".secondsection");
let sectionthree = document.querySelector(".sectionthree");
let Section3 = document.querySelector(".Section3");
let questions = document.querySelector(".questions");
let Partners = document.querySelector(".Partners");
    window.onscroll = function(){

        if(window.scrollY >= 400)
        up.style.display = "block";
        else
        up.style.display = "none";

        if(window.scrollY >= secondsection.offsetTop)
        {
            secondsection.style.opacity = "1";

        }

        if(window.scrollY >= sectionthree.offsetTop)
        {
            sectionthree.style.opacity = "1";

        }

        if(window.scrollY >= Section3.offsetTop)
        {
            Section3.style.opacity = "1";

        }
        if(window.scrollY >= questions.offsetTop)
        {
            questions.style.opacity = "1";

        }
        if(window.scrollY >= Partners.offsetTop)
        {
            Partners.style.opacity = "1";

        }


    }


up.addEventListener("click",function(){
    window.scrollTo(0,0)
})

    //nav Mobile
let navmobile = document.querySelector(".navmobile");
    function openMnav(){
        navmobile.style.right = "-50px"
    }

    function closeMnav(){
        navmobile.style.right = "-250px"
    }
