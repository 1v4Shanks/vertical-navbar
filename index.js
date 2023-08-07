let arrow=document.getElementById("arrow");
let img=document.querySelectorAll(".img");
let box=document.querySelector(".box");


arrow.addEventListener("click",()=>{

    if(box.style.height=="60px"){
        box.style.height="485px";  
    for(let i=0;img.length;i++){
    img[i].style.visibility="visible";
    img[i].style.transform="scale(1)";
    img[i].style.transition="0.3s ease";
    }
    }else{
    box.style.height="60px";
    for(let i=0;img.length;i++){
        img[i].style.visibility="hidden";
        img[i].style.transform="scale(0)";
        img[i].style.transition="0s ease";
        }
    

}

})


