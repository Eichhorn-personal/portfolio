import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ResumeModal({onClose}) {

    return (
    
        <Modal
            show={true}
            onHide={onClose}
            dialogClassName='modal-dialog-centered'
            width="100%"
        >

        <img
            src="./Resume.png"
            width="100%"
        />
       
        </Modal>
    );
}

export default ResumeModal;