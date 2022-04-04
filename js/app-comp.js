'use strict';

// inheritance is what objects are, composition is what they do

'use strict';
const todo = document.querySelector('.todo'); // the todo container
const tasks = document.querySelector('.todo__tasks'); // the ul element that hold the tasks 
const input = document.querySelector('.input');

function mixins() {
    return{

        add(){
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

    },
    all(){
        // console.log('all');
        const checked = document.querySelectorAll('.check');
        Array.from(checked).filter((el, index, array) =>{
            el.closest('.todo__tasks--task').style.display = 'block';
        })
        
    },
    active(){
        // console.log('active');
        const checked = document.querySelectorAll('.check');
        Array.from(checked).filter((el, index, array) =>{
            if(el.checked) el.closest('.todo__tasks--task').style.display = 'none';
            else el.closest('.todo__tasks--task').style.display = 'block';
        })
        
    },
    completed(){
        // console.log('completed');
        const checked = document.querySelectorAll('.check');
        Array.from(checked).filter((el, index, array) =>{
            if(!el.checked) el.closest('.todo__tasks--task').style.display = 'none';
            else{
                el.closest('.todo__tasks--task').style.display = 'block';
            }
        })
        
    },
    clear(){
        // console.log('clear');
        const checked = document.querySelectorAll('.check');
        Array.from(checked).filter((el) =>{
            if(el.checked) el.closest('.todo__tasks--task').remove();
        })
        
        }
    }
}


class Task{};

Object.assign(Task.prototype, 
    mixins())

todo.addEventListener('click', (e) =>{
    // e.preventDefault();
    const target = e.target.classList[0];
    // if(e.target.classList.contains('add')) Task.add();
    switch(target){
        case 'add':{
            const add = new Task();
            add.add();
            break;
        }
        case 'all':{
            const all = new Task();
            all.all();
            break;
        }
        case 'active':{
            const active = new Task();
            active.active();
            break;
        }
        case 'completed':{
            new Task().completed();
            break;
        }
        case 'clear':{
            new Task().clear();
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
