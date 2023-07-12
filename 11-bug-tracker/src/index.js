import bugService from './bugs/bugService.js'

let btnAddNew, txtNewBugName, bugList;

function createBugItem(bug){
    const bugItem = document.createElement('li');
    bugItem.textContent = bug.name
    return bugItem;
}

function appendBugItem(bugItem){
    bugList.appendChild(bugItem)
}

async function loadBugs(){
    const bugs = await bugService.getAllBugs();
    bugs.map(createBugItem).forEach(appendBugItem)
}

async function onBtnAddNewClick(){
    const newBugName = txtNewBugName.value
    const newBug = await bugService.saveBug(newBugName)
    appendBugItem(createBugItem(newBug))
}

function onDocumentLoad(){
    btnAddNew = document.getElementById('btnAddNew');
    btnAddNew.addEventListener('click', onBtnAddNewClick)
    txtNewBugName = document.getElementById('txtNewBugName')
    bugList = document.getElementById('bugsList')
    loadBugs()
}
window.addEventListener('load', onDocumentLoad)