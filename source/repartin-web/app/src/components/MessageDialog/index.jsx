import React, { Component } from "react";
import View from "./View";

class MessageDialog extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View {...this.props} />
        );
    }
}

export default MessageDialog;