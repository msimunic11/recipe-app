import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [sastojci, setSastojci] = useState('');

    const handleChange = (e) => {
               
        
        const {name, value} = e.target;
    
            if(name === "taskName"){
                setTaskName(value)
            }else if (name === "sastojci"){
                setSastojci(value)
            }else {
                setDescription(value)
            }
    
    
        }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
        setSastojci(taskObj.Sastojci)
    },[])


    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        tempObj['Sastojci'] = sastojci
        updateTask(tempObj)
    }

    

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Recept</ModalHeader>
            <ModalBody>
            
            <div className = "form-group">
                        <label>Naziv</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                        
                    </div>

                    <div className="form-group">
         
         <label>Sastojci</label>
            <textarea rows = "5" placeholder="sastojke odvoji klikom na enter" className = "form-control" value = {sastojci} onChange = {handleChange} name = "sastojci"></textarea>
     </div>
                    <div className = "form-group">
                        <label>Priprema</label>
                        <textarea rows = "3" placeholder="korake pripreme odvoji klikom na enter" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
            
                    
                   

            </ModalBody>
            <ModalFooter>
            <Button color="success" onClick={handleUpdate}>Promijeni</Button>{' '}
            <Button color="outline-secondary" onClick={toggle}>Poništi</Button>
            
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;
