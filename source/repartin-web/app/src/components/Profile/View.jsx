import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import WorkIcon from "@material-ui/icons/Work";
import BackButton from "../Common/BackButton";
import HouseInfo from "./components/HouseInfo";
import UserInfo from "./components/UserInfo";
import styles from "./styles";

const View = ( { user, house, signOut, exitHouse, classes } ) => {

  return (
    <>
      <div className={ classes.houseBackground }>
        <BackButton className={ classes.backButton } to="/"/>
        <img className={ classes.houseImage } src={ house.image } alt=""/>
        <div className={ classes.houseImageOverlay }></div>
      </div>
      <Grid className={ classes.info } container spacing={ 0 }>
        <Grid item xs={ 12 }>
          <UserInfo user={ user }/>
        </Grid>
        <Grid className={ classes.house } item xs={ 12 }>
          <HouseInfo house={ house } admin={ user.isAdmin }/>
        </Grid>
        <Grid className={ classes.actions } item xs={ 12 }>
          <Button className={ classes.action } onClick={ signOut }>
            <ExitToAppIcon className={ classes.actionIcon }/>
          </Button>
          <Button className={ classes.action } onClick={ exitHouse }>
            <WorkIcon className={ classes.actionIcon }/>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles( styles )( View );