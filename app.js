
function one(){
    document.getElementById("txt").value += 1 ;
}
function two(){
    document.getElementById("txt").value += 2 ;
}
function three(){
    document.getElementById("txt").value += 3 ;
}
function four(){
    document.getElementById("txt").value += 4 ;
}
function five(){
    document.getElementById("txt").value += 5 ;
}
function six(){
    document.getElementById("txt").value += 6 ;
}
function seven(){
    document.getElementById("txt").value += 7 ;
}
function eight(){
    document.getElementById("txt").value += 8 ;
}
function nine(){
    document.getElementById("txt").value += 9 ;
}
function zero(){
    document.getElementById("txt").value += 0 ;
}
function clearTxt() {
    document.getElementById('txt').value = '';
}

function eq(){
    let x = document.getElementById("txt").value;
    let result = eval(x);
    document.getElementById('txt').value = result;
}
function sum(){
    document.getElementById("txt").value += '+';
}
function divd(){
    document.getElementById("txt").value += '/';
}
function mult(){
    document.getElementById("txt").value += '*';
}
function subs(){
    document.getElementById("txt").value += '-';
}
function dot(){
    document.getElementById("txt").value += '.';
}
