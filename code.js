let card = document.querySelector('.card');
let flex_center = document.querySelector('.flex_center');
let flex_between = document.querySelector('.flex_between');
let flex_start = document.querySelector('.flex_start');
let flex_end = document.querySelector('.flex_end');
let space_around = document.querySelector('.space_around');
flex_center.onclick = () => {
    // alert("нажатие")
    card.style.justifyContent = "center";
}

flex_between.onclick = () => {
    // alert("нажатие")
    card.style.justifyContent = "space-between";
}

flex_start.onclick = () => {
    // alert("нажатие")
    card.style.justifyContent = "flex-start";
}

flex_end.onclick = () => {
    // alert("нажатие")
    card.style.justifyContent = "flex-end";
}
space_around.onclick = () => {
    // alert("нажатие")
    card.style.justifyContent = "space-around";
}