import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import List from "@material-ui/icons/List";
import PeopleAlt from "@material-ui/icons/PeopleAlt";
import Headset from "@material-ui/icons/Headset";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem id="about" xs={12} sm={12} md={8}>
          <h2 className={classes.title}>The Mission</h2>
          <h5 className={classes.description}>
            I've been playing electric guitar for over 4 years and yet, whenever my friends ask me to put on a concert for them, I'm faced with
            the uncomfortable realization that I don't know what I'd play. <br/><br/>
            
            If you{"'"}re anything like me, you love learning to play one song after the other - but after a while, 
            you've moved on and spent hours (and weeks) practicing new songs. That song you originally spent so much time learning has slipped 
            out of mind and you've gone <em>way</em> too many nights without practicing it - and eventually you forgot how to play it.
            <br/><br/>
            With <strong>PickGuard</strong>, these issues are gone for good! Its features include:
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Logging Songs"
              description="Log songs, riffs and solos that you've learned so that a quick glance in the future is enough to 
              remind you of what you've learned and might want to practice, as well as help you visualize how far you've gotten on your journey to 
              becoming a Guitar Hero."
              icon={List}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Getting Inspiration from Others"
              description="
              Look at what other people with a similar taste in music are learning! 
              You can see how difficult they found learning that solo, riff or entire song and compare it to songs you've both learned 
              so that you can gauge how difficult it'll likely be for you and not waste any time learning something you'll grow frustrated with.
              "
              
              icon={PeopleAlt}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Creating a Wishlist"
              description={`If you stumble upon one of those songs 
              that gets you to stop what you're doing, then you'll probably want to learn it sometime in the future.
              Instead of making a mental note (that you'll probably forget), you can add it to your Wishlist so that next time 
              you want to learn a new song, you can review your Wishlist!`}
              icon={Headset}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
