import React, { Component } from 'react'
import 'bulma/css/bulma.css'

const featuredBenefits = [
  {
    icon: "https://image.flaticon.com/icons/svg/59/59252.svg",
    title: '260 Hours',
    description:
      'Atlantans spend 260 hours commuting annually',
  },
  {
    icon: "https://image.flaticon.com/icons/svg/126/126179.svg",
    title: '$1 Daily',
    description:
      'Average cost of car ownership per year is $9000 vs. the cost of an Edison yearly is less than a dollar a day',
  },
  {
    icon: "https://image.flaticon.com/icons/svg/814/814587.svg",
    title: 'Sustainable',
    description:
      'No gas! No emission! Minimal energy usage',
    },
  {
    icon: "https://image.flaticon.com/icons/svg/447/447031.svg",
    title: '50% Less',
    description:
      'Of all household trips are less than 3 miles away',
    },
  {
    icon: "https://image.flaticon.com/icons/svg/134/134654.svg",
    title: 'No Sweat',
    description:
      'Eliminate hills with the ease of an electric motor',
    },
  {
    icon: "https://image.flaticon.com/icons/svg/60/60526.svg",
    title: '20 Bikes',
    description:
      'You can fit 20 Edison bikes in 1 parking space',
    },
];

const styling = {
  div: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  cardMedia: {
      width: "200px",
      padding: "0px 5px",
      margin: "25px 0px"
  },
  image: {
    filter: "invert(61%) sepia(76%) saturate(2122%) hue-rotate(126deg) brightness(97%) contrast(101%)"
  }
}

export default class Benefits extends Component {
    render() {
        return (
          <div>
            <div class="box is-paddingless is-marginless" style={styling.div}>
              {featuredBenefits.map(post => (
                <article class="media is-marginless">
                  <div class="media-content" style={styling.cardMedia}>
                    <div class="content has-text-centered">
                    <figure class="image is-64x64 is-inline-block" >
                      <img 
                        src={post.icon}
                        alt="Icon"
                        style={styling.image} 
                        />
                    </figure>
                      <h4>{post.title}</h4>
                      <p>{post.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )
    }
}
