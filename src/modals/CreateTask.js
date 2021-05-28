import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ReactStars from "react-rating-stars-component";
import { SettingsOverscanOutlined } from "@material-ui/icons";
import { render } from "@testing-library/react";

const { Component } = React;

const CreateTaskPopup = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [sastojci, setSastojci] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else if (name === "sastojci") {
      setSastojci(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    taskObj["Sastojci"] = sastojci;

    save(taskObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}> Novi recept </ModalHeader>{" "}
      <ModalBody>
        <div className="form-group">
          <label> Naziv: </label>{" "}
          <input
            type="text"
            className="form-control"
            value={taskName}
            onChange={handleChange}
            name="taskName"
            required
          />
        </div>

        <div className="form-group">
          <label> Sastojci: </label>{" "}
          <textarea
            rows="5"
            placeholder="sastojke odvoji klikom na enter"
            className="form-control"
            value={sastojci}
            onChange={handleChange}
            name="sastojci"
          >
            {" "}
          </textarea>{" "}
        </div>

        <div className="form-group">
          <label> Priprema: </label>{" "}
          <textarea
            rows="3"
            placeholder="korake pripreme odvoji klikom na enter"
            className="form-control"
            value={description}
            onChange={handleChange}
            name="description"
          >
            {" "}
          </textarea>{" "}
        </div>
      </ModalBody>{" "}
      <ModalFooter>
        <Button color="success" onClick={handleSave}>
          {" "}
          Dodaj{" "}
        </Button>{" "}
        <Button color="outline-secondary" onClick={toggle}>
          {" "}
          Poništi{" "}
        </Button>
      </ModalFooter>{" "}
    </Modal>
  );
};

export default CreateTaskPopup;
