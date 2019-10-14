import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import Instagram from './Instagram.js';


import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

//The following array was tester code to ensure that the styling would render in React.
const featuredPosts = [
    {
      title: 'Testimonial 1',
      date: 'April 16',
      image: "https://s3-media2.fl.yelpcdn.com/bphoto/sLrHFpzrOdunXxUkPvsx3Q/ls.jpg",
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
      title: 'Testimonial 2',
      date: 'June 3',
      image: "https://s3.amazonaws.com/cloud.scoutmob.com/hp/products/11113/product/Edison_Shoot_213-0157.jpg?1518453440",
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        title: 'Testimonial 3',
        date: 'July 28',
        image: "https://d3n8a8pro7vhmx.cloudfront.net/atlbike/pages/3390/meta_images/original/IMG952017071995175351.jpg?1500923081",
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.'
      },
  ];

const styling = {
    columns: {
        width: "100vw"
    },
    column1:{
        display: "flex",
        flexDirection: "column"
    },
    card: {
        display: "flex",
        height: "180px"
    },
    cardDetails: {
        flex: "1",
    },
    cardMedia: {
        width: "160px",
    },
    socials: {
        textAlign: 'center'
    },
    feed:{
        color: "#00D1B2",
    },
    icons:{
        color: "#00D1B2",
        width: 40,
        height: 40,
        margin: '0 10px'
    }
}

//AJAX request to back end server for testimonials
const getTestimonials = () =>
  fetch('/api/testimonial/')
    .then(res => res.json())
    .catch(error => console.log(error))

export default class Testimonials extends Component {
    state = {
        testimonialItems: [{}],
    };

    componentDidMount() {
       this.getTestimonialFromServer()
    }

    getTestimonialFromServer() {
        getTestimonials()
            .then(items => {
                // console.log(items)
                this.setState( { testimonialItems: items} )
            })
    }
    render() {
        return (
            <div>
                <div class="columns" style={styling.columns}>
                    <div class="column is-two-fifths" style={styling.column1}>
                        <Grid container spacing={4} style={styling.column1}>
                        {/* {featuredPosts.map(post => ( */}
                        {/* <Grid item key={post.title} xs={12} > */}
                        {this.state.testimonialItems.map(testimonial => (
                        <Grid item key={testimonial.name} xs={12} >
                            <CardActionArea component="a" href="#">
                                <Card style={styling.card}>
                                    <div style={styling.cardDetails}>
                                        <CardContent>
                                            <Typography component="h2" variant="h5" >
                                                {testimonial.name}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                {testimonial.occupation}
                                                {/* {post.date} */}
                                            </Typography>
                                            <Typography variant="body2" paragraph>
                                                "{testimonial.quote}"
                                                {/* {post.description} */}
                                            </Typography>
                                            <Typography variant="subtitle1" color="primary">
                                                Continue reading...
                                            </Typography>
                                        </CardContent>
                                    </div>
                                    <Hidden xsDown>
                                        <CardMedia
                                            style={styling.cardMedia}
                                            image={testimonial.image}
                                            title={testimonial.name}
                                            // image={post.image}
                                            // title={post.title}
                                        />
                    
                                    </Hidden>
                                </Card>
                            </CardActionArea>
                        </Grid>
                        ))} 
                    </Grid>
                </div>
                <div class="column ">
                     {/* Social Media links and photo tile  */}
                    <div style={styling.socials}>
                        <Typography component="h2" variant="h4" style={styling.feed}>Socials</Typography>
                        <Typography variant="h6" color="textSecondary">The Journey Is Just As Important As The Destination. Follow Ours.</Typography>
                        <div>
                            <a href='https://www.instagram.com/edisonbicycles/' target="_blank"><InstagramIcon style={styling.icons}/></a>
                            <a href='https://www.facebook.com/edisonbicycles' target="_blank"><FacebookIcon style={styling.icons}/></a>
                            <a href='https://twitter.com/edisonbicycles' target="_blank"><TwitterIcon style={styling.icons}/></a>
                        </div>
                    </div>
                        <Instagram />
                </div>
            </div>
            </div>
        )
    }
}