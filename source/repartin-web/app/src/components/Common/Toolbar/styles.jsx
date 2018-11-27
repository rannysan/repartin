import { createStyles } from "@material-ui/core/";

export default ( theme ) => {

  return createStyles( {
    root: {
      position: "relative",
      display: "flex"
    },
    search: {
      flex: "1 auto"
    },
    select: {
      position: "absolute",
      top: "58px",
      right: "6px",
      opacity: "0"
    }
  } );
}