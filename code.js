const card = document.querySelector('.card');
const flex_center = document.querySelector('.flex_center');
const flex_between = document.querySelector('.flex_between');
const flex_end = document.querySelector('.flex_end')
const flex_start = document.querySelector ('.flex_start')
const flex_around = document.querySelector ('.flex_around')

flex_center.onclick = () =>{
    card.style.justifyContent = "center";
}
flex_between.onclick = () =>{
    card.style.justifyContent = "space-between";
}
flex_end.onclick = () =>{
    card.style.justifyContent = "flex-end";
}
flex_start.onclick = () =>{
    card.style.justifyContent = "flex-start";
}
flex_around.onclick = () =>{
    card.style.justifyContent = "space-around";
}