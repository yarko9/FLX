let root = document.getElementById('root');
let confirmButton = document.getElementById('add-save');
let cancelButton = document.getElementById('add-cancel');
let inputContent = document.getElementById('add-input');
let mainList = document.getElementById('main-list');
let listItems = document.getElementsByClassName('list-item');
let inputContentValue;
let todoItems = [];

const mainPage = `
	<div class="section-todo">
		<p class="todo-heading heading">Simple TODO application</p>
		<button class="todo-addtitle btn" id="add-new">Add new task</button>
		<div id="main-list">TODO is Empty</div>
	</div>
`;
const addPage = `
	<div class="section-add">
		<p class="add-heading heading">Add New Task</p>
		<input type="text" class="input-area" id="add-input" name="input-text" autocomplete="off">
		<div class="add-btn btns">
			<button class="btn add-cancel">Cancel</button>
			<button class="btn" id="add-save">Save changes</button>
		</div>
	</div>
`;
const modifyPage = `
	<div class="section-modify">
		<p class="modify-heading heading">Modify</p>
		<input type="text" class="input-area" id="modify-input" name="input-text" autocomplete="off">
		<div class="modify-btn btns">
			<button class="add-cancel btn">Cancel</button>
			<button class="btn" id="add-modify">Save changes</button>
		</div>
	</div>
`;

function listContent(content){
	let listItem = `
		<div class="list-item">
			<button class="btn-done">
				<i src="img/todo-s.png"></i>
			</button>
			<p class="list-item-text" id="pId">${content}</p>
			<button class="btn-delete">
				<i src="assets/img/remove-s.png"></i>
			</button>
		</div>
	`;
	return listItem;
}

window.addEventListener('hashchange', hashHandler);
hashHandler();
document.addEventListener('click', function(e){
	if (e.target && e.target.id === 'add-new'){
		root.innerHTML = addPage;
	}
	if (e.target && e.target.id === 'add-save'){
		let inputContent = document.getElementById('add-input');
		inputContentValue = inputContent.value;
		checkInputContent();
		hashHandler();
		addListItem(inputContentValue);
	}
	if (e.target && e.target.classList.contains('list-item-text')) {
		let modifySelector = document.getElementById('pId');
		let modifyElement = modifySelector.value;
		modify();
	} 
	if (e.target && e.target.id === 'add-modify'){
		root.innerHTML = addPage;
		modify();
	}
	if (e.target && e.target.classList.contains('add-cancel')) {
		root.innerHTML = mainPage;
	}
});

function checkInputContent() {
	if(inputContentValue.length !== null &&
		inputContentValue.trim()) {
		let confirmButton = document.getElementById('add-save');
		confirmButton.setAttribute('disabled', 'on');
	} else {
		confirmButton.removeAttribute('disabled');
	}
}

function modify() {
	root.innerHTML = modifyPage;
	let modifyInput = document.getElementById('modify-input');
	modifyInput.setAttribute('placeholder', 'Enter edited action');
	let modifyInputValue = modifyInput.value;
	return modifyInputValue;
}

function hashHandler() {
	const hash = window.location.hash;
	if (hash === '#add') {
		root.innerHTML = addPage;
	} else {
		root.innerHTML = mainPage;
	}
}

function addListItem(inputContentValue) {
	let mainList = document.getElementById('main-list');
	mainList.innerHTML = '';
	let listItems = document.getElementsByClassName('list-item');
	let domElem = listContent(inputContentValue);
	let deleteButton = document.getElementsByClassName('btn-delete');
	let doneButton = document.getElementsByClassName('btn-done');
	mainList.innerHTML += domElem;
	for(let i = 0; i < deleteButton.length; i++) { 
		deleteButton[i].addEventListener('click', function () {
			this.closest('.list-item').remove();
			mainList.innerHTML = 'TODO Empty';
		});
	}
	for(let i = 0; i < doneButton.length; i++){
		doneButton[i].addEventListener('click', function() {
			doneButton[i].style.background = 'url(assets/img/done-s.png)';
			doneButton[i].style.backgroundPosition = 'center center'
		});
	}
}
