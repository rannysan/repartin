import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import FullCard from "./components/FullCard";
import Card from "./components/Card";

const View = ( { signOut } ) => {

  return (
    <>
      <FullCard />
      <Card />
      <Card />
    </>
  );
}

export default withStyles( styles )( View );