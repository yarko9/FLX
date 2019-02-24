let inputButton = document.getElementById('btn-submit');
let inputContent = document.getElementById('input-add');
let mainList = document.getElementById('main-list');
let listItemsLength = document.getElementsByClassName('list-item');

function listContent(text){
	let listItem = `
		<div class="list-item" draggable="true">
			<button class="btn btn-done">
				<i class="material-icons">check_box_outline_blank</i>
			</button>
			<p class="list-item-text">${text}</p>
			<button class="btn btn-delete">
				<i class="material-icons">delete</i>
			</button>
		</div>
	`;
	return listItem;
}

function addListItem(evt) {
	let dragElem = null;
	let dropElem = null;
	let domElem = listContent(inputContent.value);
	mainList.innerHTML += domElem;
	inputContent.value = '';
	countListItems();
	evt.preventDefault();
	let deleteButton = document.getElementsByClassName('btn-delete');
	for(let i = 0; i < deleteButton.length; i++){ 
		deleteButton[i].addEventListener('click', function() {
			this.closest('.list-item').remove();
			countListItems();
		});
	}
	let doneButton = document.getElementsByClassName('btn-done');
	for(let i = 0; i < doneButton.length; i++){
		doneButton[i].addEventListener('click', function() {
			let checkBoxIcon = this.firstElementChild.innerHTML = 'check_box';
		});
	}
	function dragTarget(el) {
		let target = el.target;
		if (target.hasAttribute('draggable')) {
			return target;
		}
	}
	mainList.addEventListener('dragstart', function handleDragStart(el) {
		dragElem = dragTarget(el);
		if(!dragElem) {
			return;
		}
	}, false);
	mainList.addEventListener('dragover', function handleDragOver(el) {
		el.preventDefault();
		let dropElem = dragTarget(el);
		if(!dropElem) {
			return;
		}
	}, false);
	mainList.addEventListener('dragleave', function handleDragLeave(el) {
		let dropElem = dragTarget(el);
		if(!dropElem) {
			return;
		}
	}, false);
	mainList.addEventListener('drop', function handleDrop(el) {
		dropElem = dragTarget(el);
		if(!dropElem) {
			return;
		}
		el.preventDefault();
		let rect = dropElem.getBoundingClientRect();
		let num = 2;
		let middle = rect.top + (rect.bottom - rect.top) / num;
		let dropEndElem = middle <= el.clientY ? dropElem.nextSibling : dropElem;
		mainList.insertBefore(dragElem, dropEndElem);
	}, false);
	mainList.addEventListener('dragend', function handleDragEnd() {
		// dragAndDropEnd
	}, false);
}

function countListItems () {
	const listMaxLength = 10;
	listItemsLength = document.getElementsByClassName('list-item');
	if (listItemsLength.length >= listMaxLength){
			inputButton.setAttribute('disabled', 'on');
			inputContent.setAttribute('disabled', 'on');
		} else {
			inputButton.setAttribute('disabled', 'on');
			inputContent.removeAttribute('disabled');
	}
}

function checkInputContent() {
	if(inputContent.value.length !== null &&
		inputContent.value.trim()) {
		inputButton.removeAttribute('disabled');
	} else {
		inputButton.setAttribute('disabled', 'on');
	}
}
inputButton.addEventListener('click', addListItem);