import React, {useState} from 'react';
import EditTask from '../modals/EditTask'
import ReactTooltip from 'react-tooltip';
import SeeRecipe from '../modals/SeeRecipe'



const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1"
            
        },
        {
            primaryColor : "#F9D288",
            
        },
        {
            primaryColor : "#5DC250"
        },
        {
            primaryColor : "#F48687"
        },
        {
            primaryColor : "#B964F7"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }
    const toggle2 = () => {
        setModal2(!modal2);
    }
    
    

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

    return (
        <div class = "card-wrapper mr-5">
            
            <div class = "task-holder">
                <h3 class = "naziv" data-tip data-for="recept" style={{"color": colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal2(true)}>{taskObj.Name}</h3>
                <ReactTooltip id='recept' type='success'>
  <span>Pogledaj recept</span>
</ReactTooltip>


                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i class = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    <i class="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                    <i class="fas fa-heart" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}}></i>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        <SeeRecipe modal2 = {modal2} toggle2 = {toggle2} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;