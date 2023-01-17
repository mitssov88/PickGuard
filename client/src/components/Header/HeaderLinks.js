/*eslint-disable*/
import React, { useEffect } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Info from "@material-ui/icons/Info";

// react components for routing our app without refresh
import { Link, useLocation} from "react-router-dom";

import decode from 'jwt-decode';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { AccountBox } from "@material-ui/icons";

// core components
import Button from "../../components/CustomButtons/Button.js";

import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const {homepage} = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('profile')));

  const logout = () => {
    dispatch({type: "LOGOUT" })
    history.push("/");
    setUser(null);
  }

  useEffect(() => {
    const token = user?.token;
    if (token){
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()){
        logout();
      }
    }
  }, [location]);

  return (
    <List className={classes.list}>
      {homepage !== undefined ? 
      (
      <div>
      {user && <div>
        <ListItem className={classes.listItem}>
          <Button
            href={__dirname + ""}
            color="transparent"
            className={classes.navLink}
            endIcon={<AccountCircle />}
            onClick={()=>{
              try{
                logout();
              }
              catch(error){
                console.log(error)
              }
            }}
          >
            Logout
          </Button>
        </ListItem>
        {user.result.imageUrl && 
          <Button
              style={{padding: "0", margin: "4px 0 0 4px"}}
              className={classes.navLink}
              color="transparent"
              >
              <img src={user.result.imageUrl} className={classes.img} alt="profile" />
          </Button>
        }
        </div>
      }
      </div>
      ) 
      :
      (
      <div>
        <ListItem className={classes.listItem}>
          <Button
            href={"#about"}
            color="transparent"
            className={classes.navLink}
            endIcon={<Info />}
          >About
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href={__dirname + "auth"}
            color="success"
            className={classes.navLink}
            endIcon={<AccountBox />}
          >Log In
          </Button>
        </ListItem>
      </div>
      )    
  }
  </List>
  )
}
