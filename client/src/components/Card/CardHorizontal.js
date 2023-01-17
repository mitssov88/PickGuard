import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/components/cardHorizontalStyle.js";

import Card from "../../components/Card/Card.js";
import CardMedia from "@material-ui/core/CardMedia";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Button from "../../components/CustomButtons/Button.js";
import Badges from "./Badges.js";

import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
import Delete from "@material-ui/icons/Delete";

import { useDispatch } from "react-redux";
import { deleteLearnedPost, deleteWish } from '../../actions/index.js';

const useStyles = makeStyles(styles);
function CardHorizontal(props) {

    const dispatch = useDispatch();

    function loadStars(num){
        var stars = [];

        for (let i = 0; i < num; i++){
            stars.push(<Star />)
        }
        for (let j = 0; j < (5 - num); j++){
            stars.push(<StarBorder />)
        }
        return (<GridItem  style={{width: "150px"}} xs={6} sm={6} md={6} lg={6} className={classes.starImage}>{stars}</GridItem>)
    }

    const classes = useStyles();
    const {songTitle, author, difficulty, expDifficulty} = props;
    return (
        <GridContainer style={{margin: "0 30px", minWidth: "500px", marginRight: "30px"}}>
        
            <Card className={ classes.slimRow} >
                <div style={{display: "flex"}}>
                    <CardMedia className={classes.image} style={{minHeight:"80px", minWidth: '80px'}} image={props.imageLink}/>
                    <div style={{display: "flex", width:"100%", flexWrap: "wrap", justifyContent: "space-between"}}>

                        <GridItem key={props._id} style={{width: "400px"}} className={classes.middleContainer}>
                            <h4 className={classes.leftText} style={{justifyContent: "center", width: "200px", textAlign: "center"}}>{author}</h4>
                            <h4 className={classes.leftText} style={{justifyContent: "center", width: "200px",  textAlign: "center"}}>{songTitle}</h4>
                        </GridItem>
                        <GridItem className={classes.rightContainerContainer} style={{ alignSelf : "center", display : "flex", width: "360px"}}>
                            <GridItem className={classes.rightContainer}>

                                <GridItem style={{padding: "5px 0", alignSelf : "center", width: "100px"}} >
                                    <Badges whole={props.whole} riff={props.riff} solo={props.solo}/>
                                </GridItem>

                                {difficulty ? loadStars(difficulty) : loadStars(expDifficulty)}

                                <GridItem style={{alignSelf : "center", textAlign: "center", padding: "0", marginLeft: "15px", marginRight: "15px", width: "60px"}}>
                                    <Button id={props.id} justIcon round color="primary" onClick={(e)=>{
                                        e.preventDefault();
                                        if (difficulty){
                                            dispatch(deleteLearnedPost({id: e.currentTarget.id}));
                                        }
                                        else {
                                            dispatch(deleteWish({id: e.currentTarget.id}));
                                        }
                                        }} >
                                        <Delete />
                                    </Button>
                                </GridItem>            
                                
                            </GridItem>
                        </GridItem>
                    </div>
                </div>
            </Card>
        </GridContainer>

    )
}


export default CardHorizontal;