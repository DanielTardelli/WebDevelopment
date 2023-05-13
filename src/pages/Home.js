import { Box, Container, Grid, Typography, Card, CardMedia, CardContent, Divider } from "@mui/material";
import { makeStyles } from '@mui/styles'

import CustomCard from "../Components/CustomCard";

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
    }
})

const Home = () => {
    const classes = styles();
    return(
        <>
            <Box
            width="100%">
                <Grid container justifyContent="center" className={classes.outerBox}>
                    <Typography variant="h2" sx={{textAlign: 'center', color: 'white', fontWeight: '600'}}>ALL IN ONE WEB DEV.</Typography>
                </Grid>
            </Box>
            <Box
            width="100%"
            height="1000px">
                <Grid container justifyContent="center" marginTop="40px">
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
            </Box>
        </>
    )
}

export default Home;