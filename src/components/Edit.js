import React, {useState, useEffect} from 'react';
import {Modal, Button} from "react-bootstrap";
import {EditTask} from "../redux/actions";
import { useDispatch} from "react-redux";


function Edit({ oldTask }) {
    
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const [text, setText] = useState("");

        const dispatch = useDispatch();
        
        useEffect(() => {
          setText(oldTask.description);
        }, [show, oldTask.description]);
        
        return (
          <>
            <Button variant="primary" onClick={handleShow}>
              Edit
            </Button>
      
            <Modal show={show} onHide={handleClose} >
            
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
                Cancel
                </Button>
                <Button variant="primary" onClick={() => {
                  dispatch(EditTask({ ...oldTask, description: text }));
                  handleClose();
                  }} >
                  Save Changes
                </Button>
              </Modal.Footer>
            
            </Modal>
          </>
        );   
}

export default Edit;
