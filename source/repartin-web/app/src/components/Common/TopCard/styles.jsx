import { createStyles } from "@material-ui/core/";

export default ( theme ) => {

  return createStyles( {
    root: {
      paddingTop: "12px"
    },
    cardBlockTitle: {
      marginBottom: ".52rem",
      fontWeight: "bold"
    },
    quickTipWrapper: {
      paddingTop: ".72rem",
      textAlign: "center"
    },
    quickTip: {
      display: "inline-block",
      fontWeight: "bold",
      cursor: "pointer"
    }
  } );
}