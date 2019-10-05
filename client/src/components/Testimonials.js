import React, { Component } from 'react'
import 'bulma/css/bulma.css'

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';


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
    }
}
  

export default class Testimonials extends Component {
    render() {
        return (
            <div>
                <div class="columns" style={styling.columns}>
                    <div class="column is-two-fifths" style={styling.column1}>
                        <Grid container spacing={4} style={styling.column1}>
                        {featuredPosts.map(post => (
                        <Grid item key={post.title} xs={12} >
                            <CardActionArea component="a" href="#">
                                <Card style={styling.card}>
                                    <div style={styling.cardDetails}>
                                        <CardContent>
                                            <Typography component="h2" variant="h5">
                                                {post.title}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                {post.date}
                                            </Typography>
                                            <Typography variant="subtitle1" paragraph>
                                                {post.description}
                                            </Typography>
                                            <Typography variant="subtitle1" color="primary">
                                                Continue reading...
                                            </Typography>
                                        </CardContent>
                                    </div>
                                    <Hidden xsDown>
                                        <CardMedia
                                            style={styling.cardMedia}
                                            image={post.image}
                                            title={post.title}
                                        />
                    
                                    </Hidden>
                                </Card>
                            </CardActionArea>
                        </Grid>
                        ))}
                    </Grid>
                </div>
                <div class="column ">
                    Second column
                </div>
            </div>
        </div>
        )
    }
}