//GETELEMENTBYID
//var headerTitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');
//headerTitle.textContent='Hello';
//headerTitle.innerText='Goodbye';
//headerTitle.innerHTML='<h3>Hello</h3>'
//header.style.borderBottom='solid 7px #000';

//GETELMENTBYCLASSNAME//
var Additems=document.getElementsByClassName('title');
Additems[0].style.color='green';
Additems[0].style.fontWeight='bold';
var items=document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor='green';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold'
}