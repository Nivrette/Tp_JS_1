// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current task
let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new task when clicking on the "Add" button
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let dateValue = document.getElementById("myDate").value;
  let t = document.createTextNode("Date limite : " + dateValue + " - Tâche à effectuer : " + inputValue);
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
  
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}