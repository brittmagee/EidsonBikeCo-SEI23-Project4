import React, { Component } from 'react'
import Modal from './Modal.js'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

//The following array was tester code to ensure that the styling would render in React.
const featuredBikes = [
  {
    title: 'The Pair',
    cost: '$3,999.00',
    image: "https://1ycbx02rgnsa1i87hd1i7v1r-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/EdisonBicycles_byGL-91-e1503524971119.jpg",
    description:'One for You and One for Yours',
    sub: "Buy a pair and save $400 bucks"
  },
  {
    title: 'The Black',
    cost: '$2,199.00',
    image: "https://static.wixstatic.com/media/05d438_a183fbb169824022b03285e22e3c8547~mv2.jpg",
    description:'Born in ATL',
    sub: ""
  },
  {
    title: 'The White',
    cost: '$2,199.00',
    image: "https://static.wixstatic.com/media/05d438_2b17f7c8409343c9815e392d31c03a5f~mv2.jpg",
    description:'Born in ATL',
    sub: ""
  }
];

const styling = makeStyles({
  card: {
    maxWidth: 345,
  },
  div: {
    display: 'flex',
    justifyContent: 'space-around',
  
  },
  image: {
    height: 240
  },
  button: {
      color: "#00D1B2",
  },
  click: {
    display: "flex",
    justifyContent: "space-between"
  },
  cost: {
    display: "flex",
    justifyContent: "space-between"
  }
});


export default function ImgMediaCard(props) {
  const classes = styling();

  return (

    <Grid container spacing={4} className={classes.div}>
        {/* {featuredBikes.map(post => ( */}
          {props.bikes.map(bike => (
            //  <Grid item key={post.title} > 
            <Grid item key={bike.name}>
            <Card className={classes.card} >
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Bike Display"
                    // image={post.image}
                    image={bike.image}
                    title="The Pair"
                    className={classes.image}
                />
                <CardContent>
                    <div className={classes.cost}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {/* {post.title} */}
                            {bike.name}
                        </Typography>
                        <Typography gutterBottom variant="h7" component="h2">
                            {/* {post.cost} */}
                            ${bike.price}
                        </Typography>
                    </div>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {/* {post.description} */}
                        {bike.sub || ''}
                    </Typography>
                    <Typography variant="body3" color="textSecondary" component="p">
                        {/* {post.sub} */}
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions className={classes.click}>
                    <Modal 
                    bike={bike} 
                    cart={props.cart}
                    addBikeToCart={props.addBikeToCart} 
                    size="small"  
                    className={classes.button} 
                    />
                </CardActions>
            </Card>
            </Grid>
        ))}
    </Grid>
  );
}


