import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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

// const useStyles = makeStyles({
//   card: {
//     maxWidth: 345,
//   },
//   div: {
//     display: 'flex',
//     flexDirection: 'column'
//   }
// });


// export default function ImgMediaCard() {
//   const classes = useStyles();

//   return (

//     <Card className={classes.card} >
//       {featuredBikes.map(post => (
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             alt="The pair"
//             height="140"
//             image={post.image}
//             title="The Pair"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//               {post.title}
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="p">
//               {post.description}
//             </Typography>
//             <Typography variant="body3" color="textSecondary" component="p">
//               {post.sub}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       ))}
//         <CardActions>
//           <Button size="small" color="primary">
//             View
//           </Button>
//           <Button size="small" color="primary">
//             Add to Cart
//           </Button>
//         </CardActions>
//     </Card>
//   );
// }

const styling = {
  card: {
    // maxWidth: 345,
      width: 345
  },
  div: {
    display: 'flex',
    // flexWrap: "wrap",
    // flexDirection: "row",
    border: 'solid black'
  }
}


export default class BikeCard extends Component {
  render() {
    return (
      <div style={styling.div}>
       <Card style={styling.card}>
          {featuredBikes.map(post => (
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={post.title}
                  height="140"
                  image={post.image}
                  title={post.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {post.description}
                  </Typography>
                  <Typography variant="body3" color="textSecondary" component="p">
                    {post.sub}
                  </Typography>
                </CardContent>
              </CardActionArea>
              // <CardActions>
              //   <Button size="small" color="primary">
              //     View
              //   </Button>
              //   <Button size="small" color="primary">
              //     Add to Cart
              //   </Button>
              // </CardActions>
              ))}
        </Card>
      </div>
    )
  }
}
