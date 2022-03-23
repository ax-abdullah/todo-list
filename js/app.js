'use strict';
const todo = document.querySelector('.todo'); // the todo container
const tasks = document.querySelector('.todo__tasks'); // the ul element that hold the tasks 
const input = document.querySelector('.input');

class Task{

    static add(){
        if(input.value == '') {
            input.style.borderBottom = '1px solid red';
            return
        }
        const markup = `
        <li class="todo__tasks--task">
            <input type="checkbox" class="check">
            <span class="task-text">${input.value}</span>
        </li>
        `;
        tasks.insertAdjacentHTML('beforeend', markup);
        input.value = '';
        input.style.borderBottom = 'none';

    }
    static completeTask(){

    }
    static all(){
        // console.log('all');
        const checked = document.querySelectorAll('.check');
        Array.from(checked).filter((el, index, array) =>{
             el.closest('.todo__tasks--task').style.display = 'block';
        })

    }
    static active(){
        // console.log('active');
        const checked = document.querySelectorAll('.check');
        Array.from(checked).filter((el, index, array) =>{
            if(el.checked) el.closest('.todo__tasks--task').style.display = 'none';
            else el.closest('.todo__tasks--task').style.display = 'block';
        })
        
    }
    static completed(){
        // console.log('completed');
        const checked = document.querySelectorAll('.check');
        Array.from(checked).filter((el, index, array) =>{
            if(!el.checked) el.closest('.todo__tasks--task').style.display = 'none';
            else{
                el.closest('.todo__tasks--task').style.display = 'block';
            }
        })
        
    }
    static clear(){
        // console.log('clear');
        const checked = document.querySelectorAll('.check');
        Array.from(checked).filter((el) =>{
            if(el.checked) el.closest('.todo__tasks--task').remove();
        })
        
    }
}
todo.addEventListener('click', (e) =>{
    // e.preventDefault();
    const target = e.target.classList[0];
    // if(e.target.classList.contains('add')) Task.add();
    switch(target){
        case 'add':{
            Task.add();
            break;
        }
        case 'check': {
            Task.completeTask();
            break;
        }
        case 'all':{
            Task.all();
            break;
        }
        case 'active':{
            Task.active();
            break;
        }
        case 'completed':{
            Task.completed();
            break;
        }
        case 'clear':{
            Task.clear();
            break;
        }  
    }
});

const filter = document.querySelector('.todo__filters');
filter.addEventListener('click', (e) =>{
    const btns = filter.querySelectorAll('button');
    btns.forEach((el) =>{
        el.classList.remove('activated')
    })
    e.target.classList.add('activated')
})
function activation(e){

}