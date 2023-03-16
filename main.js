'use strict'
// Selection of items HTML
const $form = document.querySelector('#form');
const $btnAdd = document.querySelector('#btn-add');
const $inputText = document.querySelector('#input-text');
const $list = document.querySelector('.list-toDo')
// Creating element in HTML
const addList = (text)=>{
  const createText = document.createElement('div');
    createText.classList.add('toDo');
  const todoTitle = document.createElement('h3');
    todoTitle.classList.add('task');
    todoTitle.innerText = text;
    createText.appendChild(todoTitle)
   
  const doneBtn = document.createElement('button');
    doneBtn.classList.add('toDo-confirm');
    doneBtn.innerHTML = '<i class = "fa-solid fa-check"></i>'
    createText.appendChild(doneBtn);
   
  const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('toDo-deleted');
    deleteBtn.innerHTML = '<i class = "fa-solid fa-xmark"></i>'
    createText.appendChild(deleteBtn);
    $list.appendChild(createText)
      $inputText.value = '';
      $inputText.focus()
}
// Calling the function "addList" and putting the HTML on the screen
function addHTML(e){
  e.preventDefault()
  const value = $inputText.value;
   if(value){
    addList(value);
  }
}
document.addEventListener('click', (e)=>{
  const targetEl = e.target;
  const parentEl = targetEl.closest('div');
  let todoTitle;
  
   if(parentEl && parentEl.querySelector('h3')){
     todoTitle = parentEl.querySelector('h3').innerText;
  }
  
   if(targetEl.classList.contains('toDo-confirm')){
     parentEl.classList.toggle('done');
  }
  
   if(targetEl.classList.contains('toDo-deleted')){
     parentEl.remove();
  }
})
$form.addEventListener('submit', addHTML)

