import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';


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

const useStyles = makeStyles({
  button: {
      color: "#00D1B2",
  }
});

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      {/* {featuredBikes.map(post => ( */}
      <Button  onClick={handleClickOpen} className={classes.button}>
        View
      </Button>
       {/* {featuredBikes.map(post => ( */}
        {props.bikes.map(bikes => (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {/* {post.title} */}
          {bikes.name}
        </DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
              Color: 
              {/* {post.description} */}
              { bikes.color}
            </DialogContentText>
          <DialogContentText id="alert-dialog-description">
              Weight: <br/>
              {/* {post.description} */}
              {bikes.weight} lbs.
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              Warranty: <br/>
              {bikes.warranty}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              Go Farther: <br/>
              {bikes.goFarther}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              Go Faster: <br/>
              {bikes.goFaster}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              Bike Features: <br/>
              {/* {post.description} */}
              {bikes.features}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Add to cart
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
       ))} 
    </div>
  );
}