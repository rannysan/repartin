import { createStyles } from "@material-ui/core/";

export default (theme) => {

  return createStyles({
    textField: {
      width: "100%"
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    button: {
      marginLeft: 10
    },
    input: {
      display: 'none',
    },
    pos: {
      marginBottom: 12,
    },
    rightIcon: {
      marginLeft: 10
    },
    buttonInput: {
      marginTop: 8,
      display: "flex",
      justifyContent: "flex-end"
    },
    colorPicker: {
      marginTop: 8
    },
    label: {
      display: "block",
      marginTop: 8
    },
    submit: {
      marginTop: 16
    }
  });
}