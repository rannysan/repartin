import { createStyles } from "@material-ui/core/";

export default ( theme ) => {

  return createStyles( {
    body:{
      maxWidth: "800px",
      // margin: "auto" //<-- isso aqui ta deixando tudo torto aqui
    },
  } );
}