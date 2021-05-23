import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask'
import Card from './Card';
import ReactTooltip from 'react-tooltip';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }


    return (
        <>
               <div class="navbar">
                   <ul className="nav">
                       <li className="navbar-brand">MOJI RECEPTI</li>
                       </ul>
                     
                       <ul class="navbar-nav mr-auto">
                       <a href="#top"><li className="right"><i class="fas fa-heart"></i></li></a>
                       <a href="#top"><li className="right"><i class="fas fa-user"></i></li></a>
                       <a href="#top"><li className="right"><i class="fas fa-sign-in-alt"></i></li></a>
                       
                   </ul>
                   
                   
               </div>
               
        
                            <div class="col text-center">
                            

                            <i class = "fas fa-plus-circle fa-3x" data-tip data-for="dodajrecept" onClick = {() => setModal(true)} />
                            <ReactTooltip id='dodajrecept' type='success'>
  <span>Dodaj recept</span>
</ReactTooltip>
                            </div>
                            

                             
  
            <div className = "task-container d-flex justify-content-center">
            {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>

            



            <footer class="footer">
  <div class="container-fluid">
    Intelektualno vlasništvo MŠ ;)
  </div>
</footer>
        </>
    );
};

export default TodoList;