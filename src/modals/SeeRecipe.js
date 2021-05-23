import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const RecipePopup = ({modal2, toggle2, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    },[])

   

    return (
        <Modal isOpen={modal2} toggle2={toggle2}>
            <ModalHeader toggle2={toggle2}>Recept</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label><b>Naziv recepta:</b></label>
                        <label> {taskName}</label>
                    </div>
                    <div className = "form-group">
                        <label><b>Opis:</b></label>
                        <label>{description} </label>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            
            <Button color="outline-secondary" onClick={toggle2}>Zatvori</Button>
            </ModalFooter>
      </Modal>
    );
};

export default RecipePopup;