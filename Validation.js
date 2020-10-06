

function onUpdate(fieldname ,e){
  var inputText = e.value; 

  if(fieldname == "fullname"){    
    document.getElementById("ful-name").innerText = inputText;
  }

  if(fieldname == "designation"){    
    document.getElementById("designation").innerText = inputText;
  }
  if(fieldname == "desc"){    
    document.getElementById("description").innerText = inputText;
  }
  if(fieldname == "contact"){    
    document.getElementById("contact").innerText = inputText;
  }
  if(fieldname == "EmailID"){    
    document.getElementById("email").innerText = inputText;
  }
  if(fieldname == "Address"){    
    document.getElementById("address").innerText = inputText;
  }
}