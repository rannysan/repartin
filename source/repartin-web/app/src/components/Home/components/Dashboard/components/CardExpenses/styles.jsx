import { createStyles } from "@material-ui/core/";

export default ( theme ) => {

  return createStyles( {
    cardStyle: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "space-between"
    },
  } );
}