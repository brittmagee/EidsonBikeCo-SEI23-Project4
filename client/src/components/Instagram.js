import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 580,
    height: 470,
  },
}));


const instagramImages = [
 {  img: 'https://instagram.fatl1-2.fna.fbcdn.net/vp/7c64056e2c514a09ceb8e5852cf57096/5E21212F/t51.2885-15/sh0.08/e35/s750x750/47690965_1466880166749052_1308736711394098083_n.jpg?_nc_ht=instagram.fatl1-2.fna.fbcdn.net&_nc_cat=104',
    cols: 1,
   },
{
    img: 'https://instagram.fatl1-1.fna.fbcdn.net/vp/0642b1f35b43437ec6d270a7e14bbb58/5E653373/t51.2885-15/e35/c175.0.729.729a/s320x320/49282345_491638388028017_2163089884283411581_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=105',
    cols: 2
},
{   img: 'https://instagram.fatl1-2.fna.fbcdn.net/vp/a4c76b5bee5a20fe96dea38623fbcf59/5E3954D4/t51.2885-15/sh0.08/e35/s750x750/29089218_151824665642730_5716721571146498048_n.jpg?_nc_ht=instagram.fatl1-2.fna.fbcdn.net&_nc_cat=106',
   cols: 1,
},
{   img: 'https://instagram.fatl1-1.fna.fbcdn.net/vp/524d0d94d207a877c5da7ffe477b9164/5E647CE8/t51.2885-15/e35/s480x480/26267207_2046122958969549_5593003363147972608_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=109',
    cols: 1
},
{
    img: 'https://instagram.fatl1-1.fna.fbcdn.net/vp/163f15041c8434cd896c1e84a46411eb/5E2624CB/t51.2885-15/e35/c59.0.576.576a/22277663_313477915793229_5226552329636937728_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=109',
    cols:1
},
{
    img: 'https://instagram.fatl1-1.fna.fbcdn.net/vp/38d1fbe223cceca765b3b08ad34db357/5E34CC59/t51.2885-15/e35/c180.0.1080.1080a/s320x320/72256669_383195285889443_4770360337503373997_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=111',
    cols: 2
},
{
    img: 'https://instagram.fatl1-1.fna.fbcdn.net/vp/d83f1cbf6e005c1e70e7cdf47740baef/5E628FDD/t51.2885-15/e35/c179.0.721.721a/s480x480/43353632_725681491118580_4925073733867930074_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=100',
    cols: 1
},
{
    img: 'https://instagram.fatl1-1.fna.fbcdn.net/vp/204d54162b6c26e67038b62defbf8593/5E2C8F50/t51.2885-15/e35/s240x240/69489973_491940938038442_1131602931059546173_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=102',
    cols: 1
},
{
    img: 'https://instagram.fatl1-1.fna.fbcdn.net/vp/f5ce12249542969f52bf4ba5f9af83cf/5E2EC3ED/t51.2885-15/e35/s480x480/54446554_251629502450255_3717913433828964124_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=111',
    cols: 1
},
{
    img: 'https://instagram.fatl1-1.fna.fbcdn.net/vp/19178e4fd0d6452ad79ac3041fd82251/5E29BB92/t51.2885-15/e35/c180.0.720.720a/s320x320/52842037_1185567431595014_1055458941259141724_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=102',
    cols: 1
},
{
    img:'https://instagram.fatl1-2.fna.fbcdn.net/vp/16df5145e3b3922f3a58f8b3f2c560d4/5E353F9B/t51.2885-15/e35/c180.0.720.720a/s320x320/52270182_2020190894697475_5832646471018060655_n.jpg?_nc_ht=instagram.fatl1-2.fna.fbcdn.net&_nc_cat=107',
    cols: 2
},
{
    img: 'https://instagram.fatl1-2.fna.fbcdn.net/vp/4892cca51247c26e826cdb6e21a9304e/5E26258A/t51.2885-15/e35/c180.0.720.720a/s480x480/49933625_809405262742891_4167666655493574856_n.jpg?_nc_ht=instagram.fatl1-2.fna.fbcdn.net&_nc_cat=107',
    cols:1
}

];

export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={140} className={classes.gridList} cols={3}>
        {instagramImages.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}