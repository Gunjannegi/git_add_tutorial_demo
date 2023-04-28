var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');


//Form submit event
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem)

//filter event
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e){
    e.preventDefault();

    //Get input value;
    var newItem=document.getElementById('item').value + " ";
    var newDes= document.getElementById('description').value;

    //create new li element
    var li=document.createElement('li');
    //Add class
    li.className='list-group-item'
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newDes));
    //create del button element
    var deleteBtn=document.createElement('button');

    //Add class to del button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append button to li
    li.appendChild(deleteBtn);

    //create edit button element
    var editBtn=document.createElement('button');
    //Add class to edit button
    editBtn.className='btn btn-danger btn-sm float-right edit';
    //Append text node
    editBtn.appendChild(document.createTextNode('edit'));

    //Append button to li
    li.appendChild(editBtn);


    //Append li to list
    itemList.appendChild(li);


}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}
//filter items
function filterItems(e){
    //convert text to lowercase
    var text=e.target.value.toLowerCase();
    //Get lis
    var items=itemList.getElementsByTagName('li')
    //convert to an array
    Array.from(items).forEach(function(item){

        var itemName=item.firstChild.textContent;
        var itemName2=item.nextSibling.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1 || itemName2.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else {
            item.style.display='none';
        }
    });


}
