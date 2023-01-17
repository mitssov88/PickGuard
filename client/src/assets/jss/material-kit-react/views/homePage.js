import {   
  primaryColor,
  dangerColor,
  roseColor,
  grayColor, 
  container, title } from "../../../../assets/jss/material-kit-react.js";

import modalStyle from "../../../../assets/jss/material-kit-react/modalStyle.js";
import tooltipsStyle from "../../../../assets/jss/material-kit-react/tooltipsStyle.js";
import popoverStyles from "../../../../assets/jss/material-kit-react/popoverStyles.js";

const homePageStyle = {

  leftCard: {
    margin: "0",
    padding: "0",
    display: "inline-block",
    alignItems: "center",
  },

  wideContainer : {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "10vh", // changed to 10 from 20
    color: "#FFFFFF",
    paddingBottom: "100px",  
    "@media (min-width: 576px)": {
      maxWidth: "720px",
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px",
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px",
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1800px",
    },

  },
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "20vh",
    color: "#FFFFFF",
    paddingBottom: "200px",
  },

  // ADDED THE ABOVE
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)",
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.2)", // 0.5
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF",
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%",
    },
  },
  form: {
    margin: "0",
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "0 15px",
    letterSpacing: "0.05em",
    marginBottom: "15px",
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center",
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important",
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0",
  },
  inputIconsColor: {
    color: "#495057",
  },
  // Checkbox copy:
  checkRoot: {
    padding: "12px",
    "&:hover": {
      backgroundColor: "unset",
    },
  },
  radioRoot: {
    padding: "12px",
    "&:hover": {
      backgroundColor: "unset",
    },
  },
  labelRoot: {
    marginLeft: "-14px",
  },
  checkboxAndRadio: {
    position: "relative",
    display: "inline-block",
    marginTop: "10px",
    marginBottom: "10px",
  },
  checkboxAndRadioHorizontal: {
    position: "relative",
    display: "block",
    "&:first-child": {
      marginTop: "10px",
    },
    "&:not(:first-child)": {
      marginTop: "-14px",
    },
    marginTop: "0",
    marginBottom: "0",
  },
  checked: {
    color: primaryColor + "!important",
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "3px",
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "9px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "3px",
  },
  disabledCheckboxAndRadio: {
    opacity: "0.45",
  },
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: "rgb(0, 0, 0)",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    display: "inline-flex",
    transition: "0.3s ease all",
    letterSpacing: "unset",
  },
  labelHorizontal: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "39px",
    marginRight: "0",
    "@media (min-width: 992px)": {
      float: "right",
    },
  },
  labelHorizontalRadioCheckbox: {
    paddingTop: "22px",
  },
  labelLeftHorizontal: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "22px",
    marginRight: "0",
  },
  labelError: {
    color: dangerColor,
  },
  radio: {
    color: primaryColor + "!important",
  },
  radioChecked: {
    width: "16px",
    height: "16px",
    border: "1px solid " + primaryColor,
    borderRadius: "50%",
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "7px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "50%",
  },
  inlineChecks: {
    marginTop: "8px",
  },
  iconCheckbox: {
    height: "116px",
    width: "116px",
    color: grayColor,
    "& > span:first-child": {
      borderWidth: "4px",
      borderStyle: "solid",
      borderColor: "#CCCCCC",
      textAlign: "center",
      verticalAlign: "middle",
      borderRadius: "50%",
      color: "inherit",
      margin: "0 auto 20px",
      transition: "all 0.2s",
    },
    "&:hover": {
      color: roseColor,
      "& > span:first-child": {
        borderColor: roseColor,
      },
    },
  },
  iconCheckboxChecked: {
    color: roseColor,
    "& > span:first-child": {
      borderColor: roseColor,
    },
  },
  iconCheckboxIcon: {
    fontSize: "40px",
    lineHeight: "111px",
  },
  switchBase: {
    color: primaryColor + "!important",
  },
  switchIcon: {
    boxShadow: "0 1px 3px 1px rgba(0, 0, 0, 0.4)",
    color: "#FFFFFF !important",
    border: "1px solid rgba(0, 0, 0, .54)",
  },
  switchBar: {
    width: "30px",
    height: "15px",
    backgroundColor: "rgb(80, 80, 80)",
    borderRadius: "15px",
    opacity: "0.7!important",
  },
  switchChecked: {
    "& + $switchBar": {
      backgroundColor: "rgba(156, 39, 176, 1) !important",
    },
    "& $switchIcon": {
      borderColor: "#9c27b0",
    },
  },
  switchRoot: {
    height: "48px",
  },


  // Labels in Create a new Pick form

  greyOut: {
    color: "rgba(0,0,0,0.65)"
  },
  slimRow: {
    marginTop: "5px",
    marginBottom: "5px"
  },
  thumbVertical : {
    position: "relative",
    display: "block",
    width: "100px",
    height: "100px",
    cursor: "pointer",
    borderRadius: "inherit",
    backgroundColor: "rgb(255, 255, 0)"
  }
// MODAL
  ,
  section: {
    padding: "70px 0 0",
  },
  modalContainer: {
    ...container
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  icon: {
    width: "17px",
    height: "17px",
    marginRight: "4px",
  },
  ...modalStyle,
  modalLabel: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    transition: "0.3s ease all",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingLeft: "0",
    letterSpacing: "normal",
  },
  ...tooltipsStyle,
  ...popoverStyles,














};

export default homePageStyle;