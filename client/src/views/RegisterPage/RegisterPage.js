import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

import GoogleLogin from 'react-google-login';

import {useHistory} from 'react-router-dom';
// core components
import Header from "../../components/Header/Header.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";

import additionalStyles from "../../assets/jss/material-kit-react/views/loginPage.js";

import image from "../../assets/img/landingPage2.1.png";
import {useDispatch} from 'react-redux';
import { signin, signup } from "../../actions/auth.js";
const useStyles = makeStyles(additionalStyles);


function RegisterPage (props){

    const dispatch = useDispatch();

    const classes = useStyles();
    const [isSignedup, setIsSignedup] = React.useState(true);
    const [cardAnimation, setCardAnimation] = React.useState('cardHidden');
    const [registrationData, setRegistrationData] = React.useState({firstName: '', lastName: '', email: '', password: ''});

    setTimeout(function(){
        setCardAnimation("")
    }, 700);
    const {...rest} = props;
    const handleChange = function(e){
        setRegistrationData({...registrationData, [e.target.name]: e.target.value})
    }

    const history = useHistory();
    const googleSuccess = async (res) => {        
        const result = res?.profileObj;
        const token = res?.tokenId;
        try{
            dispatch({type: "AUTH", payload:{result, token}})
            history.push("/home");
        }
        catch(error){
            console.log(error);
        }
    }

    const googleFailure = (error) => {
        console.log("Google Sign In was unsuccessful");
        console.log(error);
    }
    const handleSignInSubmit = () => {
        setRegistrationData(prevValue => 
            {   
                const loginData = {...prevValue, firstName: "", lastName: ""};
                return loginData;
            });     
            
        handleSubmit();
    }

    const handleSubmit = () => {
        if (registrationData.firstName === ''){
            dispatch(signin(registrationData, history));
        } 
        else{
            dispatch(signup(registrationData, history));
        }
    }

    return (
        <div>
            <Header absolute color="transparent" brand="PickGuard" {...rest}/>
            <div className={classes.pageHeader} style={{backgroundImage : "url(" + image + ")", backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className={classes.container} style={{paddingBottom: "100px"}}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={5}>
                        <Card className={classes[cardAnimation]}>
                        <form className={classes.form} autoComplete="off">
                            {isSignedup && (
                            <>
                            <CardHeader justify="center" color="primary" className={classes.cardHeader}> 
                                <h3>Sign In</h3>
                            </CardHeader>
                            <CardBody>
                                <CustomInput 
                                    labelText="Email"
                                    id="email"
                                    name="email"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        name: "email",
                                        type: "email",
                                    }}
                                    value={registrationData.email}
                                    onInputChange={handleChange}
                                    >

                                </CustomInput>
                                <CustomInput 
                                    labelText="Password"
                                    id="password"
                                    name="password"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        name: "password"                                        
                                    }}

                                    value={registrationData.password}
                                    onInputChange={handleChange}
                                    >
                                </CustomInput>     
                            </CardBody>

                            <CardFooter className={classes.cardFooter}>
                                <GridContainer justify="center">
                                    
                                    <GridItem style={{textAlign: "center"}}>
                                        <Button 
                                            style={{width: "50%"}}  type="submit" 
                                            onClick={function(e) {
                                                e.preventDefault();
                                                handleSignInSubmit();
                                            }} 
                                            color="primary">
                                            Sign In
                                        </Button>
                                    </GridItem>
                                    <GridItem style={{textAlign: "center"}}>
                                        <GoogleLogin
                                            clientId="492820037648-227c68hvc8rntdpauk1g7g1i8rl9bd45.apps.googleusercontent.com"
                                            render={(renderProps) => (
                                                <Button style={{width: "50%"}} color="info" size="sm"
                                                onClick={renderProps.onClick}                                                
                                                startIcon={<img alt="Google Logo" src="https://img.icons8.com/color-glass/32/000000/google-logo.png"/>}
                                                >
                                                    Google Sign In
                                                </Button>

                                            )}
                                            onSuccess={googleSuccess}
                                            onFailure={googleFailure}
                                            cookiePolicy="single_host_origin"
                                        />
                                    </GridItem>
                                    <GridItem style={{textAlign: "center"}}>
                                        <Button  style={{width: "50%"}} simple onClick={function(e) {
                                            e.preventDefault();
                                            setIsSignedup(false);
                                             }} color="primary">
                                            Create an Account
                                        </Button>
                                    </GridItem>
                                </GridContainer> 
                            </CardFooter>
                            </>
                            )}

                            {!isSignedup && (
                            <>
                            <CardHeader justify="center" color="primary" className={classes.cardHeader}> 
                                <h3>Registration Form</h3>
                            </CardHeader>
                            <CardBody>
                                <CustomInput 
                                    labelText="First Name"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        name: "firstName",
                                        type: "text",
                                    }}
                                    onInputChange={handleChange}
                                    required
                                    >

                                </CustomInput>
                                <CustomInput 
                                    labelText="Last Name"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        name: "lastName",
                                        type: "text",
                                    }}
                                    onInputChange={handleChange}
                                    required
                                    >

                                </CustomInput>
                                <CustomInput 
                                    labelText="Email"
                                    id="email"
                                    name="email"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        name: "email",
                                        type: "email"
                                    }}
                                    value={registrationData.email}
                                    onInputChange={handleChange}
                                    >

                                </CustomInput>
                                <CustomInput 
                                    labelText="Password"
                                    id="text"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        name: "password",
                                    }}
                                    name="password"
                                    value={registrationData.password}
                                    onInputChange={handleChange}
                                    required
                                    >
                                </CustomInput>     
                            </CardBody>

                            <CardFooter className={classes.cardFooter}>
                                <GridContainer justify="center">
                                    <GridItem style={{textAlign: "center"}}>
                                        <Button type="submit"  
                                        onClick={function(e) {
                                            e.preventDefault();  
                                            handleSubmit();
                                            }} 
                                            color="primary">
                                            Register
                                        </Button>
                                    </GridItem>

                                    <GridItem style={{textAlign: "center"}}>
                                        <Button type="submit" simple onClick={function(e) {
                                            e.preventDefault()
                                            setIsSignedup(true);
                                             }} color="primary">
                                            I already have an account
                                        </Button>
                                    </GridItem>
                                </GridContainer> 
                           
                            </CardFooter>
                            </>
                            )}
                            </form>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
            
            </div>
        </div>



    )
}

export default RegisterPage;