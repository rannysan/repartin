import { createStyles } from "@material-ui/core/";

export default ( theme ) => {

  return createStyles( {
    addButton: {
      position: "absolute",
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2,
    }
  } );
}