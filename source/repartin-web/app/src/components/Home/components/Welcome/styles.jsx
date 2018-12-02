import { createStyles } from "@material-ui/core";

export default ( theme ) => {

  const palette = theme.palette;

  return createStyles( {
    root: {
      height: "100%"
    },
    welcomeColumn: {
      height: "100%",
      paddingTop: "10rem"
    },
    text: {
      padding: "0 .6rem"
    },
    centerButton: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center" 
    },
    actions: {
      maxWidth: "260px",
      margin: "0 auto"
    },
    action: {
      height: "44px"
    },
    firstAction: {
      marginBottom: ".8rem"
    },
    title: {
      fontWeight: "bold"
    },
    pendingTitle: {
      marginBottom: ".4rem"
    },
    cancel: {
      marginTop: ".8rem"
    }
  } );
}