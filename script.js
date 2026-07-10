let hamburgerBtn=document.querySelector('.hamburger-btn')
let confirmMenuContent=document.querySelector('.confirm-menu-content')


let extendMenu=false
hamburgerBtn.addEventListener('click',()=>{

    if(extendMenu==false){
        confirmMenuContent.style.transform='translatex(0px)'
        // confirmMenuContent.style.height='100vh'
    extendMenu=true
    }else{
        confirmMenuContent.style.transform='translatex(-1200px)'
        // confirmMenuContent.style.height='100vh'
    extendMenu=false
    }
    messegeCheck()
})  

let messegeCheck=()=>{
    
}