// Material UI v5 Complex Interaction Card
// https://mui.com/material-ui/react-card/

// Codesandbox for Card
// https://codesandbox.io/p/sandbox/pensive-morning-gfypsk?file=%2Fsrc%2FDemo.js


import * as React from 'react';
import { styled } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import '../assets/css/projectCard.css';

const ExpandMore = styled((props) => {
    
    const { expand, ...other } = props;
    
    return <IconButton {...other} />;
    
        })(({ theme, expand }) => ({
            
            transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,

    }),

}));

export default function PortfolioSiteCard() {

    const [expanded, setExpanded] = React.useState(false);
    const [image, setImage] = React.useState(null);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    const loadImage = async () => {

        const imageModule = await import(`../assets/images/react_code.webp`);
        return imageModule.default;
    };

    React.useEffect(() => {
    
        loadImage().then(setImage);
    
    }, `../assets/images/react_code.webp`);
    
    return (
        <Card sx = {{ width: '345px' }} className='mt-4'>

            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                </Avatar>
            }
        
                action={

                    <IconButton aria-label="settings">

                        <MoreVertIcon />

                    </IconButton>
                }

                title="React Portfolio App"
                subheader="Front end web design project"
            />

            <CardMedia
                component="img"
                height="194"
                image={image}
                alt="Paella dish"
            />

            <CardContent>
      
                <Typography variant="body2" color="text.secondary">
          
                React app that you're currently viewing, built to show examples 
                as I progress in front-end web development and automated testing

                <br /><br />

                This card uses Material UI Card and icons
                
                <br />
                
                <a href="https://mui.com/material-ui/react-card/" target='_blank'>
                    https://mui.com/material-ui/react-card/
                </a>

                <br /><br />
                
                Click the expand chevron for more...

                </Typography>

            </CardContent>

            <CardActions disableSpacing>

                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
              
                    <ExpandMoreIcon />

                </ExpandMore>

            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>

                <CardContent>
              
                    <Typography variant="body2" color="text.secondary">
                    
                        Major points/features of this site/app
                        <br /><br />                  
                        <ul>
                            <li>React 18.3.1</li>
                            <li>React-Bootstrap 2.10.2</li>
                            <li>Material UI 5.5.16</li>
                            <li>Project cards dynamically build their content 
                            from a JSON data object/file</li>
                            <li>Card layout is responsive</li>
                            <li>Buttons on bottom of project cards dynamically build based on data</li>
                            <li>90% styling done in separate css files</li>
                            <li>10% styling done via inlin`e overrides</li>
                        </ul>
                        
                    </Typography>
              
                </CardContent>
      
            </Collapse>
    </Card>
  );
}