import { createStyles } from "@material-ui/core";

export default ( theme ) => {
  const palette = theme.palette

  return createStyles( {
    modal: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "90vw",
      height: "auto",
      marginLeft: "-45vw",
      padding: "1.4rem 1.8rem",
      backgroundColor: palette.background.paper,
      transform: "translateY( -50% )"
    },
    form: {
      paddingTop: 16
    },
    inputButton: {
      display: "flex",
      justifyContent: "flex-end",
      paddingTop: 22
    }
  } )
}