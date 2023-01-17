import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import {FlashOn} from '@material-ui/icons';

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";

import styles from "../../assets/jss/material-kit-react/views/landingPage.js";

import ProductSection from "./Sections/ProductSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);
function LandingPage(props){
    const classes = useStyles();
    const {...rest } = props;
    return (
        <div>
            <Header 
                color='transparent'
                changeColorOnScroll={{
                    color: 'white',
                    height: 400
                }}
                rightLinks={<HeaderLinks />}
                fixed
                brand="PickGuard"
                routes={dashboardRoutes}
                {...rest}
            />
            <Parallax filter image={require('../../assets/img/landingPage6.jpg').default}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <h1 className={classes.title}>PickGuard</h1>
                            <h4>Never forget another unforgettable solo, lick, riff or song.</h4>
                            <Button
                                color="success"
                                endIcon={<FlashOn />}
                                href={__dirname + "auth"}
                            >
                            Start Rocking
                            </Button>
                        </GridItem>
                    </GridContainer>
                </div>

            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <ProductSection />
                </div>
            </div>
            <Footer />
        </div>
        
    )
}

export default LandingPage;