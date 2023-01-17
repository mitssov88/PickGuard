
const horizontalCardStyle = {
    leftText : {
        margin: "5px 10px",
        alignSelf: "center",
        display: "inline-flex",
        color: "rgba(0,0,0,0.6)",
        fontWeight: "900"
    },
    image : {
        display: "inline-block",
        borderTopLeftRadius: "6px",
        borderBottomLeftRadius: "6px",
    },
    starImage: {
        margin: "5px 0",
        alignSelf: "center",
        display: "inline-flex",
        color: "rgba(0,0,0,0.6)",
        fontWeight: "900"
    },
    gridItem : {
        padding: "0",
        display: "flex"
    },
    rightContainer: {
        display: "flex",
        marginRight: "15px",
        padding: "0",
    },
    rightContainerContainer : {
        alignSelf: "center",
        display: "flex",
        "@media (min-width: 0px)": {
            width: "auto",
          },
          "@media (min-width: 783px)": {
            width: "360px",
          },
    },
    middleContainer : {
        padding: "0",
        display: "flex",
    },

    hover: {
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out"
    },
    slimRow: {
        marginTop: "5px",
        marginBottom: "5px"
    }
    
}

export default horizontalCardStyle;