const lists = document.querySelectorAll('.list');
function activeLink(){
    lists.forEach((item) =>
    item.classList.remove("active"));
    this.classList.toggle("active");
}
lists.forEach((item) =>
item.addEventListener("click", activeLink));


// ===================================
// ====================================




const toggleBar = document.querySelector("#show_hide_bar");
const navigation = document.querySelector(".navigation");
const main = document.querySelector("main")
const header = document.querySelector("header")
const zindex = document.querySelector(".zindex");


toggleBar.addEventListener("click", function(){
    toggleBar.classList.toggle("active");
    navigation.classList.toggle("active");
    navigation.classList.toggle("zindex");
    main.classList.toggle("blur");
    header.classList.toggle("zindex");
    
})
document.onclick = function(e){
    if(e.target.id !== "show_hide_bar" && e.target.class !== "navigation"){
        toggleBar.classList.remove("active");
        navigation.classList.remove("active");
        navigation.classList.remove("zindex");
        main.classList.remove("blur");
        header.classList.remove("zindex");
    }
}


// ===================================
// ====================================

const boxs = document.querySelectorAll(".box");
const boxss = document.querySelectorAll(".boxs");

boxs.forEach((box) => {
    box.addEventListener('click', ()=> {
        box.classList.toggle('open')
        box.classList.toggle('rot')

        const icon = box.querySelector(".box_icon_1 i");
        if (icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus';
        }
        else{
            icon.className = 'fa-solid fa-plus';
        }
        

    })
})



// ===================================
// ====================================







