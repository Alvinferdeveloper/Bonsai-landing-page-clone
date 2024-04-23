const sliderElement=document.querySelector(".footer__resources--templates");

//Calcular el tamaño de cada y cantidad de cada p para dar tamaño al slider dependiendo de la cantidad de elementos
[...document.querySelectorAll(".arrow-down")].forEach(element=>{
    element.addEventListener("click", (e)=>{
        const parentElement = e.target.parentNode;
        const slider = parentElement.nextElementSibling;
        const sizePerSliderElement=parseInt(getComputedStyle(slider.firstElementChild).lineHeight.slice(0,-2));
        const sliderElementCount=[...slider.querySelectorAll("p")].length;
        slider.classList.toggle("template__slider__animation");
        slider.classList.toggle("slider");
        if(slider.classList.contains("template__slider__animation"))
        slider.style.maxHeight=`${sizePerSliderElement*sliderElementCount}px`;
        else
        slider.style.maxHeight="0";
    })
});


//Mostranto la informacion despeglabe de las preguntas
[...document.querySelectorAll(".planes__questions__body--question")].forEach(element=>{
    element.addEventListener("click",e=>{
        const elementToShow=element.nextElementSibling;
        elementToShow.classList.toggle("planes__questions__info--hidden");
        elementToShow.classList.toggle("planes__questions__info--show");
    })
})





const productFirstBlock=document.querySelector(".virtual__block1");
const elementToShow=document.querySelector(".nav__link__hover--moreinfo2");
const navLinkProduct=document.querySelector(".nav__link--product");
const moreInfoElement=document.querySelector(".nav__link__hover--product");
let sizesFirstBlock;

navLinkProduct.addEventListener("mouseenter",()=>{
    moreInfoElement.style.display="flex";
    elementToShow.style.display="none";
    sizesFirstBlock=productFirstBlock.getBoundingClientRect();
});

navLinkProduct.addEventListener("mouseleave",()=>{
    moreInfoElement.style.display="none";
})

const handleAnimation=()=>{
    elementToShow.style.display="none";
}

const handleMove=(e,{secondBlockBottom,secondBlockRight},throwHandleMove)=>{
    let pointX=e.clientX;
    let pointY=e.clientY;

    if(pointX<sizesFirstBlock.x || pointX>secondBlockRight || pointY < sizesFirstBlock.top || (pointY > sizesFirstBlock.bottom) && (pointX > sizesFirstBlock.x && pointX < sizesFirstBlock.right) || pointY > secondBlockBottom){

        elementToShow.classList.add("more__info2--hide");
        elementToShow.classList.remove("more__info2--show");
        elementToShow.addEventListener("animationend", handleAnimation);
        elementToShow.removeEventListener("animationend", handleAnimation);
        window.removeEventListener("mousemove",throwHandleMove);
    }
}

const handleEnter = (e)=>{
    elementToShow.style.display="grid";
    const {right:secondBlockRight,bottom:secondBlockBottom}=elementToShow.getBoundingClientRect();
    elementToShow.classList.add("more__info2--show");
    elementToShow.classList.remove("more__info2--hide");
    const throwHandleMove=(e)=>handleMove(e,{secondBlockBottom,secondBlockRight},throwHandleMove);

        window.addEventListener("mousemove",throwHandleMove);
};

productFirstBlock.addEventListener("mouseenter",handleEnter);



