import React, { Component } from 'react'
import { Typography, Card, Avatar } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from '@mui/system';

export default class CardComponent extends Component {
    render() {
        return (
            <Card sx={{ display: 'flex', minWidth: '33vw', maxHeight: '125px' }}>
                <Box> 
                    <Avatar 
                    alt='kitty' 
                    src='https://placekitten.com/200/200'
                    sx={{ width: 125, height: 125 }}
                    variant='square'
                    />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%'}}>
                    <Box>
                        <Typography variant='h5'>FirstName LastName</Typography>

                        <Typography variant='h6'>Super Fancy Work Title</Typography>

                        <Typography variant='p'>Last Seen</Typography>
                    </Box>
                    <Box sx={{ alignSelf: 'flex-end' }}>
                        <FacebookOutlinedIcon 
                        sx={{ width: 35, height: 35 }} 
                        />

                        <InstagramIcon 
                        sx={{ width: 35, height: 35 }} 
                        />

                        <LinkedInIcon 
                        sx={{ width: 35, height: 35 }} 
                        />
                    </Box>
                </Box>
            </Card>
        )
    }
}
