import React, { Component } from 'react';
import { connect } from 'react-redux';

class Surveys extends Component {
    render(){
        return(
            <h2>Surveys</h2>
        )
    }
}

export default connect()(Surveys)