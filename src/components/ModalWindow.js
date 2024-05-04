import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalWindow({onClose}) {

    return (
    
        <Modal show={true} onHide={onClose} dialogClassName='modal-dialog-centered'>

                <Modal.Header closeButton>
                
                    <Modal.Title>
                    
                        Modal title
                        
                    </Modal.Title>
                
                </Modal.Header>

                <Modal.Body>
                
                    <p>Modal body text goes here.</p>
                
                </Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>

                </Modal.Footer>
       
        </Modal>
    );
}

export default ModalWindow;