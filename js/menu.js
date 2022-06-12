const menualt = document.querySelector('.menu-alt');
const menu = document.querySelector('.navegation');

console.log(menu)
console.log(menualt)

menualt.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
       && e.target != menu && e.target != menualt){
        console.log('cerrar')   
        menu.classList.toggle("spread")
    }
})