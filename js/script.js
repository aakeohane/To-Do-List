function newItem(){

  //1. Adding a new item to the list of items: 
    let li = $('<li></li>');
    let list = $('#list');
    let inputValue = $('#input').val();
    let text = document.createTextNode(inputValue);
    li.append(text);
  
  // Adds alert if no value in input box
    if (!inputValue) {
       alert('You must write something!');
    } else {
      $('#list').append(li);
    }
  
   // Crossing out an item from the list of items:
  
    li.on('dblclick', function()  {
      li.toggleClass('strike');
    })
  
   // Adding the delete button "X": 
    let crossOutButton = $('<crossOutButton>x</crossOutButton>');
    li.append(crossOutButton);
    
    crossOutButton.on('click', function() {
      li.addClass('delete');
    })
  
   //  Reordering the items: 
     list.sortable();
  
  }