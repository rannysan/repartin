import React from "react";
import TextField from '@material-ui/core/TextField';

export default props => {
    return(<div>
        <TextField
            name='name'
            label='Nome da despesa'
            onChange={props.handleChange}
        />
        <button onClick={props.handleSubmit}></button>
    </div>
)
}

