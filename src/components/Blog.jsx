import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Blog(props) {
    return (
        <Card sx={{
            width: '40%', margin: 'auto', mt: 2, padding: 2, boxShadow: "5px 5px 10px #ccc",
            ":hover": {
                boxShadow: "10px 10px 20px #ccc"
            }
        }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {props.user}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.title}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={props.imageURL}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Blog;