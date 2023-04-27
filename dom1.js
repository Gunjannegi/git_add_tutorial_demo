//TRAVERSING THE DOM//
//var itemList=document.querySelector('#items');
//itemList.parentNode.style.backgroundColor='grey'//

//PARENTELEMENT
//itemList.parentElement.style.backgroundColor='#f4f4f4';
//CHILDNODES
//CHILDREN
/*itemList.children[1].style.backgroundColor='yellow'
itemList.firstElementChild.textContent='Hello'
itemList.lastElementChild.textContent='Hello4'

itemList.previousElementSibling.style.color='green'*/

//createElement
//Create a div
/*var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1'
newDiv.setAttribute('title','Hello Div');
//create a text node


//Now go head and add HEllo word before Item Lister

var newDivtext=document.createTextNode('Hello');
newDiv.appendChild(newDivtext);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1)*/

//Now go head and add HEllo word before Item 1

//creating element ul
var newUl=document.createElement('ul');
newUl.className='newElement';
newUl.id='newElement1';
newUl.setAttribute('title','newEle');

var newli=document.createTextNode('Hello');
newUl.appendChild(newli);

var UL=document.querySelector('div .list-group')
var L1=document.querySelector('div li');
UL.insertBefore(newUl, L1);