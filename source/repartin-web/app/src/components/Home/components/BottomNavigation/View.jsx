import React from "react";
import { BottomNavigation, BottomNavigationAction, withStyles } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ListAltIcon from "@material-ui/icons/ListAlt";
import styles from "./styles";

const View = ( { value, visible, handleChange, className, classes } ) => {

  const actionClasses = {
    root: classes.actionRoot,
    selected: classes.actionSelected
  };

  return (
    <>
      {
        visible
          ? (
            <BottomNavigation
              value={ value }
              onChange={ handleChange }
              showLabels
              className={ className }
            >
              <BottomNavigationAction classes={ actionClasses } label="Home" icon={ <HomeIcon/> }/>
              <BottomNavigationAction classes={ actionClasses } label="Finanças" icon={ <AttachMoneyIcon /> }/>
              <BottomNavigationAction classes={ actionClasses } label="Tarefas" icon={ <ListAltIcon/> }/>
            </BottomNavigation>
          ) : ''
      }
    </>
  );
};

export default withStyles( styles )( View );