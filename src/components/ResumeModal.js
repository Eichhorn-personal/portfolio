import React, {useState} from 'react';

import Modal from 'react-bootstrap/Modal';

import '../assets/css/resumemodal.css';

function ResumeModal({onClose, myFile}) {

    console.log('ResumeModal.js received prop', myFile);

//  Dynamically import the file using the prop
    const loadImage = async () => {

        try {

            if (myFile) {

                return myFile;

            } else {

                const imageModule = await import(`${myFile}`);
                return imageModule.default;

            }

        } catch (error) {

            console.error('Error loading image:', error);
//          Return a placeholder image or handle the error as needed
            return null;

        }
    };

    const [image, setImage] = React.useState(null);

    React.useEffect(() => {
    
        loadImage().then(setImage);
    
    }, [myFile]); // Re-run effect when imgURL prop changes

    return (
    
        <Modal
            show={true}
            onHide={onClose}
            dialogClassName='modal-dialog-centered'
        >

            <Modal.Body className='modal-content'>
            
                <p>Modal body text goes here.</p>
                
                <iframe src={myFile} />
                
            
            </Modal.Body>
       
        </Modal>
    );
}

export default ResumeModal;