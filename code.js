const card = document.querySelector('.card');
const flex_center = document.querySelector('.flex_center');
const flex_between = document.querySelector('.flex_between');
const flex_start = document.querySelector('.flex_start');
const flex_end = document.querySelector('.flex_end');
const space_around = document.querySelector('.space_around');

flex_center.onclick = () =>{
    card.style.justifyContent = "center";
}
flex_between.onclick = () =>{
    card.style.justifyContent = "space-between";
}
flex_start.onclick = () =>{
    card.style.justifyContent = "flex-start";
}
flex_end.onclick = () =>{
    card.style.justifyContent = "flex-end";
}
space_around.onclick = () =>{
    card.style.justifyContent = "space-around";
}
