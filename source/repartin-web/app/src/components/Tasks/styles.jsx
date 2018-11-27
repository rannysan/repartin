import { createStyles } from "@material-ui/core/";

export default ( theme ) => {

  return createStyles( {
    root: {
      height: "100vh"
    },
    body:{
      maxWidth: "800px",
      margin: "auto"
    },
    addButton: {
      position: "fixed",
      bottom: theme.spacing.unit * 9,
      right: theme.spacing.unit * 2,
    }
  } );
}