import { createStyles } from "@material-ui/core";

export default ( theme ) => {

  const palette = theme.palette;

  return createStyles( {
    root: {
      height: "100vh"
    },
    welcomeColumn: {
      height: "100%",
      paddingTop: "10rem"
    },
    text: {
      padding: "0 1.72rem"
    },
    signOut: {
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
    }
  } );
}