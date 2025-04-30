onload = () =>{
    document.body.classList.remove("container");
};

let a = document.querySelector('#anote')
let b = document.querySelector('#fnote')

a.addEventListener('click',()=>{
   b.style.left='50%'
})