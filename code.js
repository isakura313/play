const card = document.querySelector('.card');
const flex_center = document.querySelector('.flex_center');
const flex_between = document.querySelector('.flex_between');

flex_center.onclick = () =>{
    card.style.justifyContent = "center";
}
flex_between.onclick = () =>{
    card.style.justifyContent = "space-between";
}
