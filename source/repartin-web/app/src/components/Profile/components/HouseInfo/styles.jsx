import { createStyles } from "@material-ui/core";

export default ( theme ) => {

  return createStyles( {
    root: {
      textAlign: "center"
    },
    name: {
      paddingLeft: "40px"
    },
    editButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",
      height: "40px",
      minWidth: "initial",
      padding: "0",
      marginLeft: ".4rem",
      borderRadius: "50%"
    },
    editButtonIcon: {
      fontSize: "1.6em"
    },
    address: {
      display: "inline-block",
      maxWidth: "180px"
    }
  } );
};