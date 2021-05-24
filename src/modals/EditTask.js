import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({modal, toggle, updateTask, taskObj, save}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [sastojci, setSastojci] = useState('');
    const [form, setForm] = useState([]);

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }


    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        updateTask(tempObj)
    }
    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        taskObj["Sastojci"] = sastojci
        
        save(taskObj)

    }

    
      
        const prevIsValid = () => {
          if (form.length === 0) {
            return true;
          }
      
          const someEmpty = form.some(
            (item) => item.Količina === "" || item.Sastojak === ""
          );
      
          if (someEmpty) {
            form.map((item, index) => {
              const allPrev = [...form];
      
              if (form[index].Sastojak === "") {
                allPrev[index].errors.Sastojak = "Unesi sastojak";
              }
      
              if (form[index].Količina === "") {
                allPrev[index].errors.Količina = "Unesi količinu";
              }
              setForm(allPrev);
            });
          }
      
          return !someEmpty;
        };
      
        const handleAddLink = (e) => {
          e.preventDefault();
          const inputState = {
            Sastojak: "",
            Količina: "",
      
            errors: {
              Sastojak: null,
              Količina: null,
            },
          };
      
          if (prevIsValid()) {
            setForm((prev) => [...prev, inputState]);
          }
        };
      
        const onChange = (index, event) => {
          event.preventDefault();
          event.persist();
      
          setForm((prev) => {
            return prev.map((item, i) => {
              if (i !== index) {
                return item;
              }
      
              return {
                ...item,
                [event.target.name]: event.target.value,
      
                errors: {
                  ...item.errors,
                  [event.target.name]:
                    event.target.value.length > 0
                      ? null
                      : [event.target.name] + " je obavezan/na",
                },
              };
            });
          });
        };
      

    const handleRemoveField = (e, index) => {
        e.preventDefault();
    
        setForm((prev) => prev.filter((item) => item !== prev[index]));
      };

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Recept</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Naziv</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Opis</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                    <div className="form-group">
      

      
      <label>Sastojci</label>
          <form>
{form.map((item, index) => (
<div className="row" key={`item-${index}`}>
  <div className="col-5">
    <input
      type="text"
      className={
        item.errors.Sastojak
          ? "form-control  is-invalid"
          : "form-control"
      }
      name="Sastojak"
      placeholder="Sastojak"
      value={item.Sastojak}
      onChange={(e) => onChange(index, e)}
    />

    {item.errors.Sastojak && (
      <div className="invalid-feedback">{item.errors.Sastojak}</div>
    )}
  </div>

  <div className="col-5">
    <input
      type="text"
      className={
        item.errors.Količina
          ? "form-control  is-invalid"
          : "form-control"
      }
      name="Količina"
      placeholder="kg/l/g/ml"
      value={item.Količina}
      onChange={(e) => onChange(index, e)}
    />

    {item.errors.Količina && (
      <div className="invalid-feedback">{item.errors.Količina}</div>
    )}
  </div>
  <div className="col-1">
  <button
    className="btn btn-outline-secondary"
    onClick={(e) => handleRemoveField(e, index)}
  >
    x
  </button>
  </div>
</div>
))}

<button className="btn btn-primary mt-2" onClick={handleAddLink}>
Dodaj sastojak
</button>
</form>   
</div>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Promijeni</Button>{' '}
            <Button color="outline-secondary" onClick={toggle}>Poništi</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;
