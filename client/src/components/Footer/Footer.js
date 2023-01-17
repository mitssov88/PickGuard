/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { Button, List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


// @material-ui/icons
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import styles from "../../assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.center}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Button
                href="https://github.com/mitssov88"
                target="_blank"
                color="transparent"
                className={classes.navLink}
              >     
                <GitHub />
              </Button>
            </ListItem>
            {/* <ListItem className={classes.inlineBlock}>
              <a
                href={__dirname + "about"}
                className={classes.block}
                target="_blank"
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  href="#"
                  >
                  About
                </Button>
              </a>
            </ListItem> */}
            <ListItem className={classes.inlineBlock}>
                <Button
                  href="https://www.linkedin.com/in/dimitar-atanassov-18a663203/"
                  target="_blank"
                  color="transparent"
                  className={classes.navLink}
                >    
                  <LinkedIn />
                </Button>
            </ListItem>
          </List>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
