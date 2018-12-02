import { createStyles } from "@material-ui/core";

export default ( theme ) => {

  return createStyles( {
    titleBlock: {
      display: "flex",
      alignItems: "flex-end"
    },
    title: {
      marginLeft: ".4rem"
    },
    submit: {
      display: "flex",
      justifyContent: "flex-end",
      paddingTop: "1.4rem"
    }
  } )
}