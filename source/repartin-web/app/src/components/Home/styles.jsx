import { createStyles } from "@material-ui/core";

export default createStyles( {
  homeWrapper: {
    position: "relative",
    height: "100vh",
    overflowY: "scroll",
    overflowX: "hidden"
  },
  homeWrapperCollapsed: {
    maxHeight: "calc( 100vh - 56px )",
  },
  bottomNavigation: {
    position: "fixed",
    right: "0",
    bottom: "0",
    left: "0",
  }
} );
