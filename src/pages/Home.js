import { Box, Container, Grid, Typography, Card, CardMedia, CardContent, Divider, Stack } from "@mui/material";
import { makeStyles } from '@mui/styles'
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

import CustomCard from "../Components/CustomCard";
import StackDropdown from "../Components/StackDropdown";

import mainImage from '../Assets/HomePageCenter.jpg'
import cardImage1 from '../Assets/CogsTurning.jpg'
import cardImage2 from '../Assets/Brain.jpg'
import cardImage3 from '../Assets/Person.jpg'



const styles = makeStyles({
    outerBox: {
        backgroundImage: `url(${mainImage})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '700px',
    },
    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto'
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const Home = () => {
    const classes = styles();
    return(
        <div style={{height: '100%', display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <div style={{flex: 1}}>
                <Box
                width="100%">
                    <Grid container justifyContent="center" className={classes.outerBox}>
                        <Typography variant="h2" sx={{textAlign: 'center', color: 'white', fontWeight: '600'}}>ALL IN ONE WEB DEV.</Typography>
                    </Grid>
                </Box>
                <Box
                sx={{flexGrow: 1}}>
                    <Grid container justifyContent="center" marginTop="40px" sx={{display: {xs: 'none', sm: 'none', md: 'flex'}}}>
                        <CustomCard wwidth={300}>
                            <CardMedia
                                component="img"
                                alt="black minimalist design"
                                height="130"
                                image={cardImage1}
                            />
                            <CardContent>
                                <Typography variant="subtitle1" sx={{textAlign: 'center', fontWeight: 700, textTransform: 'uppercase'}}>Be involved in the process</Typography>
                            </CardContent>
                            <Divider/>
                            <CardContent>
                                Be involved in the decision making process, from the very start all the way throughout to the end, your input and needs are at the 
                                forefront of our business partnership and dictate how we allocate our resources and time. By doing this, we best ensure that you
                                are getting the service you need and are fulfilled with the end product.
                            </CardContent>
                        </CustomCard>
                        <div width style={{width: 50}}/>
                        <CustomCard wwidth={300}>
                            <CardMedia
                                component="img"
                                alt="black minimalist design"
                                height="130"
                                image={cardImage2}
                            />
                            <CardContent>
                                <Typography variant="subtitle1" sx={{textAlign: 'center', fontWeight: 700, textTransform: 'uppercase'}}>Craft your online presence</Typography>
                            </CardContent>
                            <Divider/>
                            <CardContent>
                                Craft your online representation. In the modern era, most first impressions will be made digitally, whether that through a web search via
                                a mobile phone / laptop or online reviews, regardless the time of in person impressions has gone. Put your best foot forward with customers
                                and represent your brand's values in your custom made web application
                            </CardContent>
                        </CustomCard>
                        <div width style={{width: 50}}/>
                        <CustomCard wwidth={300}>
                            <CardMedia
                                component="img"
                                alt="black minimalist design"
                                height="130"
                                image={cardImage3}
                            />
                            <CardContent>
                                <Typography variant="subtitle1" sx={{textAlign: 'center', fontWeight: 700, textTransform: 'uppercase'}}>Keep your customers happy</Typography>
                            </CardContent>
                            <Divider/>
                            <CardContent>
                                Your customers are your business, so put them at the forefront of your business through a positive online user experience and make sure that
                                they feel taken care of and valued. We specialise in this at Dan's Web Dev, by ensuring that your website/s are responsive and intuitive
                                to keep your customers happy and business moving.
                            </CardContent>
                        </CustomCard>
                    </Grid>
                    <Stack sx={{ display: {xs: 'flex', sm: 'flex', md: 'none'}}}>
                        <StackDropdown img={mainImage}>

                        </StackDropdown>
                        <StackDropdown img={mainImage}>

                        </StackDropdown>
                        <StackDropdown img={mainImage}>

                        </StackDropdown>
                    </Stack>
                    <div style={{paddingTop: 50}}/>
                    <Container>
                        <Divider variant="middle"/>
                    </Container>
                    <div style={{paddingTop: 50}}/>
                    <Container sx={{textAlign: 'center'}}>
                        <Typography textAlign="center" sx={{ typography: { xs: 'h4', sm: 'h3', md: 'h2'}}}>
                            "Embolden your values, and create your online identity."
                        </Typography>
                        <Box sx={{paddingTop: 5, width: '90%', marginLeft: '5%'}}>
                            <Typography sx={{ typography: {xs: 'body1', sm: 'body1', md: 'h6'}}}>
                                Hi my name is jeff hi my name is jeff hi my name is jeff hi my name is jeff hi my name is jeff hi my name is jeff hi my name is jeff hi my name is jeff
                            </Typography>
                        </Box>
                    </Container>
                </Box>
            </div>
            <Footer>
                <Box sx={{width: "100%", background: "#696969", height: {xs: '100px', sm: '130px', md: '200px'}}} className={classes.footer}>
                    <Typography style={{fontWeight: 600, letterSpacing: '2px'}}>
                        <Link to={"/"} style={{color: 'white', textDecoration: 'none'}}>DAN'S WEB DEV @ 2023</Link>
                    </Typography>
                </Box>
            </Footer>
        </div>
    )
}

export default Home;