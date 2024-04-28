import * as React from 'react';
import styled from 'styled-components';
import { Box, Grid, Typography, Container } from '@mui/material';
// import LuggageIcon from '@mui/icons-material/Luggage';
// import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';


const IconButton = styled.a`
    display: inline-block;
    margin: 0 1rem;
    font-size: 1.5rem;
    transition: color 0.2s ease-in-out;
    &:hover {
        transform: scale(1.5);
    }
`

const Link = styled.a`
    text-decoration: none;
    color: black;
    &:hover {
        font-weight: bold;
    }
`

function Footer() {
    return (
        <Box width='100%' padding='(2, 0)' display='flex' justifyContent='center'
            sx={{
                mt: 10,
                bgcolor: '#d2f3f3',
                color: 'black',
                py: 3
            }}
        >
            <Container
                width='100%'
                maxWidth='1200px'
                display='flex'
                // flexDirection='column'
                gap='14px'
                // alignItems='center'
                padding='1rem'
                color='black'
            >

                <Grid container spacing={2} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <Grid item xs={6} sm={3}>

                        <Typography variant="h5" fontFamily="Lobster Two" fontStyle="italic" fontWeight="bolder" color="inherit" gutterBottom>
                            <PermMediaOutlinedIcon fontSize="small" />
                            Visit Ilocos Sur
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}
                        width='100%'
                        maxWidth='800px'
                        marginTop='0.5rem'
                        display='flex'
                        flexDirection='row'
                        gap='2rem'
                        justifyContent='center'
                        whiteSpace='nowrap'
                    >
                        <Link href="/" color="inherit" display="block">Home</Link>
                        <Link href="/about" color="inherit" display="block">About Us</Link>
                        <Link href="/destinations" color="inherit" display="block">Destinations</Link>
                        <Link href="/foods" color="inherit" display="block">Foods</Link>
                        <Link href="/contact" color="inherit" display="block">Contact Us</Link>
                    </Grid>

                    <Grid item xs={6} sm={3} md={2}
                        display='inline-block'
                        margin='(0, 1rem)'
                        fontSize='1.5rem'
                        transition='color 0.2s ease-in-out'
                        sx={{"&:hover": {color: "#4f6666"}}}
                    >
                        <IconButton aria-label="Facebook" color="inherit" component="a" href="https://www.facebook.com/profile.php?id=61554555968244" target="_blank">
                        <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="Twitter" color="inherit" component="a" href="https://twitter.com/visitilocossur1" target="_blank">
                        <XIcon />
                        </IconButton>
                        <IconButton aria-label="Instagram" color="inherit" component="a" href="https://www.instagram.com/visitilocossur1/" target="_blank">
                        <InstagramIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Typography variant="body2" color="gray" align="center" sx={{ pt: 4 }}>
                © 2024 Visit Ilocos Sur | All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
