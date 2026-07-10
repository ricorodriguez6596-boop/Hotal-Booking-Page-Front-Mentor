let hamburgerBtn=document.querySelector('.hamburger-btn')
let confirmMenuContent=document.querySelector('.confirm-menu-content')
let hamburgerOpen=document.querySelector('.hamburger-open')
let hamburgerClose=document.querySelector('.hamburger-close')

let extendMenu=false
hamburgerBtn.addEventListener('click',()=>{

    if(extendMenu==false){
        confirmMenuContent.style.transform='translatex(0px)'
        hamburgerOpen.style.display='none'
        hamburgerClose.style.display='block'
    extendMenu=true
    }else{
        confirmMenuContent.style.transform='translatex(-1200px)'
        hamburgerOpen.style.display='block'
        hamburgerClose.style.display='none'
    extendMenu=false
    }
})  

