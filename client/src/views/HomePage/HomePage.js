import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import Reorder from "@material-ui/icons/Reorder";
import AddBox from "@material-ui/icons/AddBox";
import People from "@material-ui/icons/People"
import AudioTrackIcon from "@material-ui/icons/Audiotrack";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";

// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import NavPills from "../../components/NavPills/NavPills.js";
import Paginations from "../../components/Pagination/Pagination.js";
import CardHorizontal from "../../components/Card/CardHorizontal.js";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import additionalStyles from "../../assets/jss/material-kit-react/views/homePage.js";

import image from "../../assets/img/guitar3.jpg";

import {Scrollbars} from 'react-custom-scrollbars';

import { useSelector, useDispatch} from 'react-redux';
import { addLearnedPost,getLearnedPosts } from '../../actions/index.js';
import { addWish, getWishes } from '../../actions/index.js';

import axios from "axios";

import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
  
Transition.displayName = "Transition";

const useStyles = makeStyles(additionalStyles);
const ClientID = "98e0c9ad192d4266a8d7b2cc48ff6dbd";
const ClientSecret = "bee39de2bde840f787b1551ab232726e";

function HomePage (props){
    const [token, setToken] = React.useState('');
    const dispatch = useDispatch();
 
    useEffect(() => {    
        axios("https://accounts.spotify.com/api/token", {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(ClientID + ":" + ClientSecret) 
            },
            data: 'grant_type=client_credentials',
            method: 'POST'
        })
        .then(tokenResponse => {
            setToken(tokenResponse.data.access_token);
        })
    }, [])
    const creatorEmail = JSON.parse(localStorage.getItem('profile'))?.result?.email;

    const [checked, setChecked] = React.useState([24, 22]);
    const [clicked, setClicked] = React.useState({one: false, two: false, three: true, four: false, five: false});
    const [classicModal, setClassicModal] = React.useState(false);
    const [postInfo, setPostInfo] = React.useState({
        artist: "",
        song: "",
        whole: false,
        solo: false,
        riff: false,
        difficulty: 3,
        imageLink: "",
        creatorEmail: ""
    });

    const [wishInfo, setWishInfo] = React.useState({
        artist: "",
        song: "",
        whole: false,
        solo: false,
        riff: false,
        expDifficulty: 3,
        imageLink: "",
        creatorEmail: ""
    });

    useEffect(()=> {
        dispatch(getLearnedPosts({creatorEmail}));
        dispatch(getWishes({creatorEmail}));
    }, []);

    const picks = useSelector((function(state){return state.learnedPicks}));

    const wishes = useSelector((function(state){return state.wishes})); 

    function updateArtist(e){
        setPostInfo(prevValue => {return {...prevValue, [e.target.name]: e.target.value, creatorEmail: creatorEmail}});
    }
    function updateArtistWish(e){
        setWishInfo(prevValue => {return {...prevValue, [e.target.name]: e.target.value, creatorEmail: creatorEmail}});
    }

    function updateSong(e){
        setPostInfo(prevValue => {return {...prevValue, [e.target.name]: e.target.value}});
    }
    function updateSongWish(e){
        setWishInfo(prevValue => {return {...prevValue, [e.target.name]: e.target.value}});
    }

    function updateCheckbox(name, val){
        setPostInfo(prevValue => {
            return {...prevValue, [name] : val}})
        handleToggle(21);
    }
    function updateCheckboxWish(name, val){
        setWishInfo(prevValue => {
            return {...prevValue, [name] : val}})
        handleToggle(21);
    }

    const handleToggle = (value) => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
      };

    const classes = useStyles();
    const {...rest} = props;
 
    function displayModal(){
        return(<GridContainer>
            <GridItem xs={12} sm={12} md={6} lg={4}>
              <Dialog
                classes={{
                  root: classes.center,
                  paper: classes.modal,
                }}
                open={classicModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setClassicModal(false)}
                aria-labelledby="classic-modal-slide-title"
                aria-describedby="classic-modal-slide-description"
              >
                <DialogTitle
                  id="classic-modal-slide-title"
                  disableTypography
                  className={classes.modalHeader}
                >
                  <IconButton
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={() => setClassicModal(false)}
                  >
                    <Close className={classes.modalClose} />
                  </IconButton>
                  <h4 className={classes.modalTitle}>Couldn't find that artist or band ...</h4>
                </DialogTitle>
                <DialogContent
                  id="classic-modal-slide-description"
                  className={classes.modalBody}
                >
                  <p>
                    Sorry - we couldn't find that artist or band. Please try again.
                  </p>
                </DialogContent>
                <DialogActions className={classes.modalFooter}>

                  <Button
                    onClick={() => setClassicModal(false)}
                    color="info"
                    // simple
                  >
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </GridItem>
          </GridContainer>)
    }

    return (
        <div>
            {JSON.parse(localStorage.getItem('profile')) && 
            <div>
            <Header absolute color="transparent" brand="PickGuard" {...rest} rightLinks={<HeaderLinks homepage="home" />}/>
            <div className={classes.pageHeader}
                style={{
                    backgroundImage : "url(" + image + ")", 
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.wideContainer}>
                    <GridContainer justify="center">
                        {classicModal && displayModal("error")}

                        <GridItem xs={12} sm={12} md={12} lg={12}>
                        <NavPills
                            horizontal={{
                                tabsGrid: { xs: 12, sm: 2, md: 2, lg: 1},
                                contentGrid: { xs: 12, sm: 10, md: 10, lg: 11},
                            }}
                            color="info"
                            tabs={[
                            {
                                tabButton: "Picks",
                                tabIcon: Reorder,
                                tabContent: (
                                <span >
                                    <Scrollbars
                                    renderThumbVertical={({style, ...props}) => < div {...props} style={{...style, backgroundColor: "rgba(255,255,255,0.2)"}} className="thumbVertical"/>}
                                    renderTrackHorizontal={props => <div style={{display: 'none'}} className="track-horizontal"/>} style={{height: "600px"}}
                                    >
                                    <GridContainer justify="center" >
                                        {picks.map((element, key) => {

                                            return (
                                            <GridItem>
                                                <CardHorizontal 

                                                id={element._id}
                                                songTitle={element.song} 
                                                author={element.artist} 
                                                whole={element.whole}
                                                riff={element.riff}
                                                solo={element.solo}
                                                difficulty={element.difficulty}
                                                imageLink={element.imageLink}
                                                />
                                            </GridItem>  
                                            )                                      
                                        })
                                        }
                                    </GridContainer>
                                    </Scrollbars>

                                </span>
                                ),
                            },
                            {
                                tabButton: "Create a Pick",
                                tabIcon: AddBox,
                                tabContent: (
                                <span>
                                    <GridContainer justify="center">
                                        <GridItem xs={12} sm={12} md={6} lg={4}>
                                            <Card>
                                                <CardHeader justify="center" color="primary" className={classes.cardHeader}> 
                                                    <h3>Create a new Pick</h3>
                                                </CardHeader>
                                                <CardBody>

                                                <CustomInput 
                                                    labelText="Name of Artist/Band"
                                                    id="artist"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        type: "text",
                                                        name: "artist",
                                                        value: postInfo.artist,

                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <People className={classes.inputIconsColor}/>
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    name="artist"
                                                    onInputChange={(e) => {updateArtist(e)}}
                                                />
                                                <CustomInput 
                                                    labelText="Song Title"
                                                    id="song"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        type: "text",
                                                        name: "song",
                                                        value: postInfo.song,

                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <AudioTrackIcon className={classes.inputIconsColor}/>
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                    onInputChange={updateSong}
                                                    name="song"
                                                    >
                                                </CustomInput>

                                                <h5 className={classes.greyOut}>I learned the ...</h5>

                                                <GridContainer justify="center">
                                                <div className={classes.checkboxAndRadio}>
                                                    <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                        value={postInfo.whole}
                                                        checked={postInfo.whole}

                                                        tabIndex={-1}
                                                        onClick={function(event){
                                                            updateCheckbox("whole", event.target.checked)
                                                        }}
                                                        checkedIcon={<Check className={classes.checkedIcon} />}
                                                        icon={<Check className={classes.uncheckedIcon} />}
                                                        classes={{
                                                            checked: classes.checked,
                                                            root: classes.checkRoot,
                                                        }}
                                                        name="whole"
                                                        />
                                                    }
                                                    classes={{ label: classes.label, root: classes.labelRoot }}
                                                    label="Whole Song"
                                                    />
                                                </div>
                                                <div className={classes.checkboxAndRadio}>
                                                    <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                        tabIndex={-1}
                                                        value={postInfo.solo}
                                                        checked={postInfo.solo}
                                                        onClick={function(event){
                                                            updateCheckbox("solo", event.target.checked)
                                                        }}
                                                        checkedIcon={<Check className={classes.checkedIcon} />}
                                                        icon={<Check className={classes.uncheckedIcon} />}
                                                        classes={{
                                                            checked: classes.checked,
                                                            root: classes.checkRoot,
                                                        }}
                                                        name="solo"
                                                        />
                                                    }
                                                    
                                                    classes={{ label: classes.label, root: classes.labelRoot }}
                                                    label="Solo(s)"
                                                    />
                                                </div>
                                                <div className={classes.checkboxAndRadio}>
                                                    <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                        value = {postInfo.riff}
                                                        checked={postInfo.riff}
                                                        tabIndex={-1}
                                                        onClick={function(event){
                                                            updateCheckbox("riff", event.target.checked)
                                                        }}
                                                        checkedIcon={<Check className={classes.checkedIcon} />}
                                                        icon={<Check className={classes.uncheckedIcon} />}
                                                        classes={{
                                                            checked: classes.checked,
                                                            root: classes.checkRoot,
                                                        }}
                                                        name="riff"
                                                        />
                                                    }
                                                    classes={{ label: classes.label, root: classes.labelRoot }}
                                                    label="Riff(s)"
                                                    />
                                                </div>
                                                </GridContainer>
                                                
                                                <h5 className={classes.greyOut}>Difficulty</h5>

                                                <GridContainer>
                                                <GridItem sm={12} md={12} lg={12}>
                                                    <Paginations
                                                    pages={[
                                                    { text: 1, 
                                                      onClick: () => {setClicked({one: true, two: false, three: false, four: false, five: false})
                                                      postInfo.difficulty = 1;
                                                      },
                                                      active: clicked.one
                                                    },
                                                    { text: 2,
                                                      onClick: () => {setClicked({one: false, two: true, three: false, four: false, five: false})
                                                      postInfo.difficulty = 2;
                                                      },
                                                      active: clicked.two
                                                    },
                                                    { text: 3,
                                                      onClick: () => {setClicked({one: false, two: false, three: true, four: false, five: false})
                                                      postInfo.difficulty = 3;
                                                      },
                                                      active: clicked.three },
                                                    { text: 4,
                                                      onClick: () => {
                                                          setClicked({one: false, two: false, three: false, four: true, five: false})
                                                          postInfo.difficulty = 4;
                                                      },
                                                      active: clicked.four  },
                                                    { text: 5,
                                                      onClick: () => {
                                                          setClicked({one: false, two: false, three: false, four: false, five: true})
                                                          postInfo.difficulty = 5;
                                                          },
                                                      active: clicked.five }
                                                    ]}

                                                    color="primary"
                                                />
                                                </GridItem>
                                                </GridContainer>   

                                                </CardBody>
                                                <CardFooter className={classes.cardFooter}>
                                                    <Button type="submit" onClick={function(e) {
                                                        e.preventDefault();
                                                        const result = postInfo.artist;
                                                        console.log(postInfo);
                                                        
                                                        setPostInfo(prevValue => {return {...prevValue, creatorEmail: ""+ JSON.parse(localStorage.getItem('profile')).result.email}});
                                                        console.log(postInfo)

                                                        const formattedTitle = result.split(" ").join("+");
                                                        axios(`https://api.spotify.com/v1/search?q=${formattedTitle}&type=artist`, {
                                                            method: 'GET',
                                                            headers: {
                                                                'Authorization' : 'Bearer ' + token
                                                            }
                                                        }).then(response => {

                                                            if (response.data.artists.items){
                                                                const artist = response.data.artists.items[0];
                                                                const img = artist.images[2];
                                                                postInfo.imageLink = img.url;
                                                                dispatch(addLearnedPost(postInfo));

                                                                setClicked({one: false, two: false, three: true, four : false, five: false});

                                                                setPostInfo({creatorEmail: "", artist: "", song: "", whole: false, solo: false, riff : false, difficulty: 3, imageLink : ""});                                                           
                                                                }
                                                        }, reason => {
                                                            console.log(reason);
                                                        }

                                                        ).catch(error => {
                                                            console.log(error);
                                                            setClassicModal(true);
                                                        })

                                                        setPostInfo({id: -1, artist: "", song: "", whole: false, solo: false, riff : false, difficulty: 3, imageLink: ""}); 
                                                    }} color="primary">
                                                        Create
                                                    </Button>
                                                </CardFooter>
                                            </Card>
                                        </GridItem>
                                    </GridContainer>
                                </span>
                                ),
                            },
                            {
                                tabButton: "Wishlist",
                                tabIcon: Reorder,
                                tabContent: (
                                <span >
                                    <Scrollbars
                                    renderThumbVertical={({style, ...props}) => < div {...props} style={{...style, backgroundColor: "rgba(255,255,255,0.2)"}} className="thumbVertical"/>}
                                    renderTrackHorizontal={props => <div {...props} style={{display: 'none'}} className="track-horizontal"/>} style={{height: "500px"}}
                                    >

                                    <GridContainer justify="center" style={{minWidth: "430px"}}>
                                        {wishes.map((element, idx) => {

                                            return (
                                            <GridItem>
                                                <CardHorizontal
                                                // key={idx}
                                                id={element._id}
                                                songTitle={element.song}
                                                author={element.artist}
                                                whole={element.whole}
                                                riff={element.riff}
                                                solo={element.solo}
                                                expDifficulty={element.expDifficulty}
                                                imageLink={element.imageLink}
                                                />
                                            </GridItem>  
                                            )                                      
                                        })
                                        }
                                    </GridContainer>
                                    </Scrollbars>

                                </span>
                                ),
                            },
                            {
                                tabButton: "Create a Wish",
                                tabIcon: AddBox,
                                tabContent: (
                                <span>
                                    <GridContainer justify="center">
                                        <GridItem xs={12} sm={12} md={6} lg={4}>
                                            <Card>
                                                <CardHeader justify="center" color="primary" className={classes.cardHeader}> 
                                                    <h3>Create a new Wish</h3>
                                                </CardHeader>
                                                <CardBody>

                                                <CustomInput 
                                                    labelText="Name of Artist/Band"
                                                    id="artist"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        type: "text",
                                                        name: "artist",
                                                        value: wishInfo.artist,

                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <People className={classes.inputIconsColor}/>
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    name="artist"
                                                    onInputChange={(e) => {updateArtistWish(e)}}
                                                />
                                                <CustomInput 
                                                    labelText="Song Title"
                                                    id="song"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        type: "text",
                                                        name: "song",
                                                        value: wishInfo.song,
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <AudioTrackIcon className={classes.inputIconsColor}/>
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                    onInputChange={updateSongWish}
                                                    name="song"
                                                    >
                                                </CustomInput>

                                                <h5 className={classes.greyOut}>I learned the ...</h5>

                                                <GridContainer justify="center">
                                                <div className={classes.checkboxAndRadio}>
                                                    <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                        value={wishInfo.whole}
                                                        checked={wishInfo.whole}

                                                        tabIndex={-1}
                                                        onClick={function(event){
                                                            updateCheckboxWish("whole", event.target.checked)
                                                        }}
                                                        checkedIcon={<Check className={classes.checkedIcon} />}
                                                        icon={<Check className={classes.uncheckedIcon} />}
                                                        classes={{
                                                            checked: classes.checked,
                                                            root: classes.checkRoot,
                                                        }}
                                                        name="whole"
                                                        />
                                                    }
                                                    classes={{ label: classes.label, root: classes.labelRoot }}
                                                    label="Whole Song"
                                                    />
                                                </div>
                                                <div className={classes.checkboxAndRadio}>
                                                    <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                        tabIndex={-1}
                                                        value={wishInfo.solo}
                                                        checked={wishInfo.solo}
                                                        onClick={function(event){
                                                            updateCheckboxWish("solo", event.target.checked)
                                                        }}
                                                        checkedIcon={<Check className={classes.checkedIcon} />}
                                                        icon={<Check className={classes.uncheckedIcon} />}
                                                        classes={{
                                                            checked: classes.checked,
                                                            root: classes.checkRoot,
                                                        }}
                                                        name="solo"
                                                        />
                                                    }
                                                    
                                                    classes={{ label: classes.label, root: classes.labelRoot }}
                                                    label="Solo(s)"
                                                    />
                                                </div>
                                                <div className={classes.checkboxAndRadio}>
                                                    <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                        value = {wishInfo.riff}
                                                        checked={wishInfo.riff}
                                                        tabIndex={-1}
                                                        onClick={function(event){
                                                            updateCheckboxWish("riff", event.target.checked)
                                                        }}
                                                        checkedIcon={<Check className={classes.checkedIcon} />}
                                                        icon={<Check className={classes.uncheckedIcon} />}
                                                        classes={{
                                                            checked: classes.checked,
                                                            root: classes.checkRoot,
                                                        }}
                                                        name="riff"
                                                        />
                                                    }
                                                    classes={{ label: classes.label, root: classes.labelRoot }}
                                                    label="Riff(s)"
                                                    />
                                                </div>
                                                </GridContainer>
                                                
                                                <h5 className={classes.greyOut}>Difficulty</h5>

                                                <GridContainer>
                                                <GridItem sm={12} md={12} lg={12}>
                                                    <Paginations
                                                    pages={[
                                                    { text: 1, 
                                                      onClick: () => {setClicked({one: true, two: false, three: false, four: false, five: false})
                                                      wishInfo.expDifficulty = 1;
                                                      },
                                                      active: clicked.one
                                                    },
                                                    { text: 2,
                                                      onClick: () => {setClicked({one: false, two: true, three: false, four: false, five: false})
                                                      wishInfo.expDifficulty = 2;
                                                      },
                                                      active: clicked.two
                                                    },
                                                    { text: 3,
                                                      onClick: () => {setClicked({one: false, two: false, three: true, four: false, five: false})
                                                      wishInfo.expDifficulty = 3;
                                                      },
                                                      active: clicked.three },
                                                    { text: 4,
                                                      onClick: () => {
                                                          setClicked({one: false, two: false, three: false, four: true, five: false})
                                                          wishInfo.expDifficulty = 4;
                                                      },
                                                      active: clicked.four  },
                                                    { text: 5,
                                                      onClick: () => {
                                                          setClicked({one: false, two: false, three: false, four: false, five: true})
                                                          wishInfo.expDifficulty = 5;
                                                          },
                                                      active: clicked.five }
                                                    ]}

                                                    color="primary"
                                                />
                                                </GridItem>
                                                </GridContainer>   

                                                </CardBody>
                                                <CardFooter className={classes.cardFooter}>
                                                    <Button type="submit" onClick={function(e) {
                                                        e.preventDefault();
                                                        const result = wishInfo.artist;

                                                        // console.log(wishInfo);
                                                        
                                                        // uncomment if stops working
                                                        //setWishInfo(prevValue => {return {...prevValue, creatorEmail: ""+ JSON.parse(localStorage.getItem('profile')).result.email}});
                                                        
                                                        // console.log(wishInfo)
                                                        
                                                        const formattedTitle = result.split(" ").join("+");
                                                        axios(`https://api.spotify.com/v1/search?q=${formattedTitle}&type=artist`, {
                                                            method: 'GET',
                                                            headers: {
                                                                'Authorization' : 'Bearer ' + token
                                                            }
                                                        }).then(response => {
                                                            if (response.data.artists.items){
                                                                const artist = response.data.artists.items[0];
                                                                const img = artist.images[2];
                                                                wishInfo.imageLink = img.url;
                                                                dispatch(addWish(wishInfo));
                                                                setClicked({one: false, two: false, three: true, four : false, five: false});
                                                                setWishInfo({creatorEmail: "", artist: "", song: "", whole: false, solo: false, riff : false, expDifficulty: 3, imageLink : ""});                                                           
                                                                console.log(wishInfo);
                                                                }
                                                        }, reason => {
                                                            console.log(reason);
                                                        }

                                                        ).catch(error => {
                                                            console.log(error);
                                                            setClassicModal(true);
                                                        })
                                                        setWishInfo({id: -1, artist: "", song: "", whole: false, solo: false, riff : false, expDifficulty: 3, imageLink: ""}); 
                                                    }} color="primary">
                                                        Create
                                                    </Button>
                                                </CardFooter>
                                            </Card>
                                        </GridItem>
                                    </GridContainer>
                                </span>
                                ),
                            }

                            ]}
                        />
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
            </div>
            }
        </div>
    )
}

export default HomePage;