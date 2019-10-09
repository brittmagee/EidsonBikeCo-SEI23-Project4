import React from 'react';
import CartItem from './CartItem.js'

import 'bulma/css/bulma.css'

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
    padding: '30px'
  },
  pay: {
    display: 'flex',
    flexDirection: 'column',
    padding: ' 10px 110px'
  },
  margin: {
    margin: "10px 0"
  }
});



export default function TemporaryDrawer(props) {
  const classes = useStyles();
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
      className={classes.list}
      role="presentation"
      // onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <div className={classes.body}>
        <Typography variant="h5" component="h2">Edison Electric Bike Co.</Typography>
        <Typography variant="body1" color="textSecondary" lineHeight={10}>Order Summary</Typography>
      </div>
      <Divider />
      <div className={classes.item}>  
        <CartItem/>
      </div>
      <Divider />
      <List className={classes.pay}>
        <Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>
          <ArrowBackIosIcon className={classes.extendedIcon} />
           Back to Browse
        </Fab>
        <Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>
          <PaymentIcon className={classes.extendedIcon} />
           PayPal Checkout
        </Fab>
        <Fab variant="extended" color="tertiary" aria-label="add" className={classes.margin}>
          <ReceiptIcon className={classes.extendedIcon} />
          Checkout
        </Fab>
      </List>
    </div>
  );


  return (
    <div>
      <IconButton color="inherit" onClick={toggleDrawer('right', true)}>
        <Badge badgeContent={1} color="primary">
          <ShoppingCartIcon/>
        </Badge>
      </IconButton>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        { props.cart !== undefined ? props.cart.map((cartItem, i) => (
            <div>cart item {cartItem.name}</div>
          )): null}
        {sideList('right') }
      </Drawer>
    </div>
  );
}