import React from "react";
import { TextField, InputAdornment, Button, Select, MenuItem, FormControl } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import styles from "./styles";

const View = ( { search, filter, handleSearch, handleFilter, toggleSelect, classes } ) => {

  return (
    <form autoComplete="off" className={ classes.root }>
      <TextField
        placeholder="Buscar"
        value={ search.value }
        onChange={ handleSearch }
        className={ classes.search }
        InputProps={ {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          )
        } }
      />
      <Button className={ classes.filter } onClick={ toggleSelect( true ) }>
        <FilterListIcon/>
      </Button>
      <FormControl className={ classes.select }>
        <Select
          open={ filter.open }
          onClose={ toggleSelect( false ) }
          onOpen={ toggleSelect( true ) }
          value={ filter.value }
          onChange={ handleFilter }

        >
          <MenuItem value="2">Minhas</MenuItem>
          <MenuItem value="1">Abertas</MenuItem>
          <MenuItem value="0">Todas</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}

export default withStyles( styles )( View );