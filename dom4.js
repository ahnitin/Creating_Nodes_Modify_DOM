var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');

// form submit event

form.addEventListener('submit',addItem);

//delete event
itemlist.addEventListener('click',removeItem);


// function add item

function addItem(e){
    e.preventDefault();
    console.log(1);

    // get input value

    var newItem= document.getElementById('item').value;
    
    //create new li element
    var li = document.createElement('li');

    li.className = "list-group-item";
    //console.log(li);

    // add text node with input value
    li.appendChild(document.createTextNode(newItem));
    
    // delete button element
    var deleteBtn = document.createElement('button');
    // add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // creating text node to delete button
    deleteBtn.appendChild(document.createTextNode('X'));
    // append button to li
    li.appendChild(deleteBtn);
    // append li to list
    itemlist.appendChild(li);
    //create edit button
    var editbtn = document.createElement('button');
    // add clases to edit button
    editbtn.className ='btn btn-info btn-sm float-right';
    //creating text node to the edit button
    editbtn.appendChild(document.createTextNode('Edit'));
    // append button to li
    li.append(editbtn);
}

// function remove item
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm("Are you sure"))
        {
            var li = e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}


