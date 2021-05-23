import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }


    }

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        
        save(taskObj)

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Novi recept</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Naziv</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                        
                    </div>
                    <div className = "form-group">
                        <label>Opis</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                   
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Dodaj</Button>{' '}
            <Button color="outline-secondary" onClick={toggle}>Poništi</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTaskPopup;