var userInput = document.getElementById("itemInput");
var addToList = document.getElementById("addToList");
var itemList = document.querySelectorAll("ul>li");
var ul = document.querySelector("ul");

for (var i=0; i < itemList.length; i++) {
	itemList[i].addEventListener("click", toggleDone);
}

function toggleDone() {
	this.classList.toggle("done");
}

function inputLength() {
	return userInput.value.length;
}

// add new li
function createListElement() {
	function removeList() {
		this.parentNode.style.display = "none";
	}
	
	var btn = document.createElement("button");
	btn.innerHTML = "&times";
	btn.classList.add("close");
	btn.onclick = removeList;

	var a = document.createElement('a');
	a.innerHTML = userInput.value;
	a.href = "#";

	var li = document.createElement("li");
	li.appendChild(a);
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);
	li.addEventListener("click", toggleDone);

	ul.appendChild(li);
	userInput.value = "";
}

// show output
function addToListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addToListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


addToList.addEventListener("click", addToListAfterClick);
userInput.addEventListener("keypress", addToListAfterKeypress);