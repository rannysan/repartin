import { createStyles } from "@material-ui/core";

export default ( theme ) => {

  return createStyles( {
    button: {
      position: "absolute",
      top: theme.spacing.unit * 1,
      left: theme.spacing.unit * 1,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      color: "#fff"
    }
  } );
};