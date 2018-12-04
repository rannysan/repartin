import { createStyles } from "@material-ui/core/";

export default ( theme ) => {

  return createStyles( {
    root:{
      backgroundColor: "#eeeeee",
      marginBottom: ".8rem"
    },
    status: {
      color: "#FFB300"
    },
    actions: {
      display: "flex",
      justifyContent: "space-between",
      padding: "4px",
      backgroundColor: "#cccccc"
    },
    edit: {
      color: "#333"
    },
    delete: {
      color: "#888"
    },
    pay: {
      color: "#fff",
      backgroundColor: "#66BB6A"
    },
    user: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end"
    },
    userIcon: {
      fontSize: "1.32em",
      marginRight: ".2rem"
    },
    payments: {
      display: "flex",
      alignItems: "center"
    },
    moneyIcon: {
      fontSize: "1.12em",
      width: "16px"
    },
    info: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: "1rem"
    },
    value: {
      lineHeight: "1em",
      color: "#EF5350"
    },
    date: {
      lineHeight: "1em",
      color: "#888"
    }
  } );
}