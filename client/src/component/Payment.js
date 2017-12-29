import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Payments extends Component {
    render(){

        return(
            <StripeCheckout
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey= "pk_test_38sp3punXkIIkm0523mRV6Dq"
                description="$5 for 5 email credit"
                >
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Payments);

