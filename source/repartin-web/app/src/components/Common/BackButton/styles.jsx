import { createStyles } from "@material-ui/core";

export default ( theme ) => {

  return createStyles( {
    button: {
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