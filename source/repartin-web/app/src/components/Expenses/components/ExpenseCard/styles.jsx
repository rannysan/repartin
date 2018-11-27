import { createStyles } from "@material-ui/core/";

export default ( theme ) => {

  return createStyles( {
    cardStyle:{
      display: "flex", 
      justifyContent:"space-between",
      backgroundColor: "#eeeeee"
    }
  } );
}