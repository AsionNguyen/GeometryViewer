//get modal element
var modal = document.getElementById("simpleModal");
//get open modal button
var modalBtn = document.getElementById("modalBtn");
//get close modal button
var close = document.getElementById("close");
//get reset GV button
var reset = document.getElementById("reset");
//get GV frame
var GV = document.getElementById("GV");
//load GV frame


//Listen for open click
modalBtn.addEventListener('click', openModal);
//listen for close click
close.addEventListener('click', closeModal);
//listen for reset click
reset.addEventListener('click', resetGV);
//listen for outside click
window.addEventListener('click', outsideClick);

//function to open modal
function openModal(){
    modal.style.display = 'block';

    var ads = document.getElementById('adresses').innerHTML;
    ads = ads.substring(1, ads.length-1);
    GV.src = "dist/index.html?fileURL=["+ads+"]";
}
//function to close modal
function closeModal(){
    modal.style.display = 'none';
}
//function to reset GV: reset all adresses to null
function resetGV(){
    document.getElementById("adresses").innerHTML = '';
    modal.style.display = 'none';
}
//function to close modal from outside
function outsideClick(e){
    if (e.target == modal){
        modal.style.display = 'none';
    }
}
