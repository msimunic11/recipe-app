import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const RecipePopup = ({modal2, toggle2, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [sastojci, setSastojci] = useState('');
    
    
    
    

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
        setSastojci(taskObj.Sastojci)
        
        
    },[])

   

    return (
        <Modal isOpen={modal2} toggle2={toggle2}>
            <ModalHeader toggle2={toggle2}>-{taskName}-</ModalHeader>
            <ModalBody>
            <div className = "form-group">
                        <label><b>SASTOJCI:</b></label>
                        <pre>{sastojci}</pre>
                        
                    </div>
                    
                                       <div className = "form-group">
                        <label><b>PRIPREMA:</b></label>
                        <pre>{description}</pre>
                    </div>
                   

                    
                
            </ModalBody>
            <ModalFooter>
            
            <Button color="outline-secondary" onClick={toggle2}>Zatvori</Button>
            </ModalFooter>
      </Modal>
    );
};

export default RecipePopup;