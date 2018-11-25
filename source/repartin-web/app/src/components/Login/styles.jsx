import { createStyles } from "@material-ui/core";

export default ( theme ) => {

  const palette = theme.palette;

  return createStyles( {
    root: {
      height: "100vh"
    },
    loginColumn: {
      height: "100%"
    },
    formColumn: {
      paddingTop: "10rem"
    },
    app: {
      textAlign: "center"
    },
    logo: {
      width: "132px",
      height: "auto",
      marginBottom: "0.8rem"
    },
    buttons: {
      paddingTop: "2.2rem"
    },
    links: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingBottom: ".4rem"
    }
  } );
}