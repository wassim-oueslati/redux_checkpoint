import React, {useState, useEffect} from 'react';
import {Modal, Button, Form} from "react-bootstrap";
import {EditTask} from "../redux/actions";
import { connect } from "react-redux";


function Edit({ oldTask ,EditTask }) {
    
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const [text, setText] = useState("");

        useEffect(() => {
            setText(oldTask.description);
        }, [show, oldTask.description]);
        
        const handleSubmit = (e) => {
            e.preventDefault();
            const newTask = { ...oldTask, description: text };
            EditTask(newTask);
            handleShow();
        }; 

        return (
          <>
            <Button variant="primary" onClick={handleShow}>
              Edit
            </Button>
      
            <Modal show={show} onHide={handleClose} >
            <Form onSubmit={handleSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Todo list</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} required />
                </div> 
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit" >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Form>
            </Modal>
          </>
        );
    
      
     
}

export default connect(null, { EditTask }) (Edit)
