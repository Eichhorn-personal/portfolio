import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalWindow({onClose}) {

    return (
    
        <Modal show={true} onHide={onClose} dialogClassName='modal-dialog-centered'>

                <Modal.Header closeButton>
                
                    <Modal.Title>
                    
                        Example Modal Window
                        
                    </Modal.Title>
                
                </Modal.Header>

                <Modal.Body>
                
                    <p>
                    Modal body text goes here.
                    <br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Lorem dolor sed viverra ipsum nunc. 
                    Felis bibendum ut tristique et egestas. Condimentum mattis pellentesque id nibh tortor 
                    id aliquet lectus. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. 
                    Tincidunt dui ut ornare lectus sit. Purus ut faucibus pulvinar elementum integer. 
                    Dictum varius duis at consectetur. Sed turpis tincidunt id aliquet risus feugiat in ante 
                    etus. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Nullam non nisi est 
                    sit amet facilisis magna. At imperdiet dui accumsan sit amet nulla.
                    </p>
                
                </Modal.Body>

                <Modal.Footer>

                    <Button variant="disabled">Close</Button>
                    <Button variant="disabled">Save changes</Button>

                </Modal.Footer>
       
        </Modal>
    );
}

export default ModalWindow;