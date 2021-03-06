import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ListCard from '../ListCard';
import styles from "./styles";
import Down from '@material-ui/icons/ExpandMore';
import { CardContent, Typography, IconButton } from "@material-ui/core";

const feed = [ 1, 2, 3, 4, 5]

const View = ( { classes } ) => {

  return (
    <div style={{margin: "0px", padding: "0px"}}>
      <Typography color="primary" component="h1" variant="h4" align="center"  style={{margin: "20px 0px"}}>FEED</Typography>
      <Typography color="primary" component="h2" align="center"  style={{margin: "20px 0px"}}>
        <Down/>
      </Typography>
      <div>
        {feed.map((item, i) => 
          <ListCard key={i} />
        )}
      </div>
    </div>
  );
}

export default withStyles( styles )( View );