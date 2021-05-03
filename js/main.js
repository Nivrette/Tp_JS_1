// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current task
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new task when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var dateValue = document.getElementById("myDate").value;
  var t = document.createTextNode("Date limite : " + dateValue + " - Tâche à effectuer : " + inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else if(dateValue==''){
	alert("You must select a date");
  } else{
    document.getElementById("myList").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  document.getElementById("myDate").value = "";
  
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}