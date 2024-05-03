import * as React from 'react';

import Card from 'react-bootstrap/Card';

import { GithubButton } from './Buttons';

import '../assets/css/projectCard.css';

export default function GithubProjectCard(props) {

    const openURL = (url) => {
        window.open(url, '_blank');
    }

//  Dynamically import the image using the prop
    const loadImage = async () => {

        try {
            if (props.project.imgURL.startsWith('http')) {

                return props.project.imgURL;

            } else {

                const imageModule = await import(`../assets/images/${props.project.imgURL}`);
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
    
    }, [props.project.imgURL]); // Re-run effect when imgURL prop changes
    
    return (
   
        <Card className='projectCard-card'>

            <Card.Img className='projectCard-card-img'
                src={image}
                alt="Github Project Image"
            />

            <Card.Title className='projectCard-card-title'>
                
                {props.project.title}
            
            </Card.Title>

            <Card.Subtitle className='projectCard-card-subtitle'>

                {props.project.subtitle}
            
            </Card.Subtitle>

            <Card.Text
                className='projectCard-card-text'
                dangerouslySetInnerHTML={{ __html: props.project.description }} />

            <Card.Footer className='projectCard-card-footer'>

                {props.project.repoLink.startsWith('http') &&

                    <GithubButton url= {props.project.repoLink} />

                }

            </Card.Footer>

        </Card>

    );
}