import { createStyles } from "@material-ui/core/";

export default ( theme ) => {

  return createStyles( {
    grid:{
      padding: "16px", 
      maxWidth: "800px", 
      margin: "auto"
    }
  } );
}