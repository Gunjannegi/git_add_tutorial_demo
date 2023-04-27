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
//GETELEMENTBYCLASSNAME
/*var new_item=document.getElementsByClassName('new-list-item');
new_item[0].style.fontWeight='bold'
new_item[0].style.backgroundColor='Pink'
new_item[0].style.color='Red'
new_item[0].style.borderBottom= '7px solid orange';*/

//GETELEMENTBYTAGNAME
var li=document.getElementsByTagName('li')
li[4].style.fontWeight='bold'
li[4].style.borderBottom='5px grey'
li[4].style.backgroundColor='green'
li[4].style.paddingTop='15px'
li[4].style.paddingBottom='15px'
li[4].style.paddingLeft='15px'


for(var i=0;i<li.length;i++){
    li[i].style.fontWeight='bold'
    li[i].style.borderBottom= '4px solid grey'

}
/*
//Make the 2nd item have green background color
li[1].style.backgroundColor='green'
//Make the 3rd item invisible
li[2].style='display:none'
//Using QuerySelectorALL change the font color to green for 2nd item in the item list
var second_item=document.querySelector('.list-group-item:nth-child(2)');
second_item.style.backgroundColor='white'
second_item.style.color='green'
*/
//Choose all the odd elements and make their background green using QuerySelectorALL
//QUERYSELECTORALL
var titles=document.querySelectorAll('.title')
var odd=document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green'
}
