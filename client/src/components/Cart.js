import React from 'react';

import 'bulma/css/bulma.css'
import Email from './Email.js'

import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PaymentIcon from '@material-ui/icons/Payment';
import Fab from '@material-ui/core/Fab';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ReceiptIcon from '@material-ui/icons/Receipt';

const useStyles = makeStyles({
  body: {
    textAlign: 'center',
    padding: '20px',
    background: 'hsl(0, 0%, 21%)',
    color: "#00D1B2",
  },
  list: {
    width: 450,
  },
  fullList: {
    width: 'auto',
  },
  item: {
    padding: '30px',
  },
  pay: {
    display: 'flex',
    flexDirection: 'column',
    padding: ' 10px 110px'
  },
  margin: {
    margin: "10px 0"
  },
  delete: {
    margin: "0 0 0 50px", //places delete button on right upper hand corner
  },
  price: {
      margin: "0 0 0 150px",
      color: "#00D1B2",
  },
  text:{
      textAlign: "left"
  },
  padding:{
      paddingRight: "300px"
  },
  image:{
      paddingLeft: "5px",
      marginBottom: "10px"
  },
  email: {
    marginTop: "40px",
    textAlign: "center",
    fontSize: "13pt",
  }
});

export default function TemporaryDrawer(props) {

  const styling = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={styling.list}
      role="presentation"
    >
      <div className={styling.body}>
        <Typography variant="h5" component="h2">Edison Electric Bike Co.</Typography>
        <Typography variant="body1" color="textSecondary" lineHeight={10}>Order Summary</Typography>
      </div>
      <Divider />
      <div className={styling.item}>  
        { props.cart !== undefined ? props.cart.map((cartItem, i) => (
            <div>
            <Paper >
            <IconButton aria-label="delete" >
                <DeleteIcon fontSize="small" onClick={() => props.removeBikeFromCart(cartItem, i)} />
            </IconButton>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={styling.image} padding="10px">
                            <img className={styling.image} src={cartItem.image} width="100" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography component="h2" variant="h5" gutterBottom className={styling.text}>
                                    {cartItem.name}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary" gutterBottom className={styling.text}>
                                    Color: {cartItem.color}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary" gutterBottom className={styling.text}>
                                    Quantity: 1
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" color="primary" className={styling.price}>
                                  $ {cartItem.price}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
          )): null}
        
        <Email email={props.email} updateEmail={props.updateEmail}/>

      </div>
      <Divider />
      <List className={styling.pay}>
        <Fab variant="extended" color="primary" aria-label="add" className={styling.margin}>
          <ArrowBackIosIcon className={styling.extendedIcon} />
           Back to Browse
        </Fab>
        <Fab variant="extended" color="primary" aria-label="add" className={styling.margin}>
          <PaymentIcon className={styling.extendedIcon} />
           PayPal Checkout
        </Fab>
        <Fab variant="extended" color="tertiary" aria-label="add" className={styling.margin} 
            onClick={props.addBikeToOrder}
            >
          <ReceiptIcon className={styling.extendedIcon} />
          Checkout
        </Fab>
      </List>
    </div>
  );


  console.log(props.cartItems)
  return (
    <div>
      <IconButton color="inherit" onClick={toggleDrawer('right', true)}>
        <Badge badgeContent={`${props.cartItems}`} color="primary">
          <ShoppingCartIcon/>
        </Badge>
      </IconButton>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right') }
      </Drawer>
    </div>
  );
}