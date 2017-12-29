import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payment';

class Header extends Component {

    _renderAuthContent(){

        if(this.props.auth === null){
            return "";
        }else if(this.props.auth._id === undefined){
            return <li><a href="/auth/google">Sign In</a></li>;
        }else{
            return [
                <li key="1"><Payments/></li>,
                <li key="3" style={{ margin : '0 10px'}}>Credits: {this.props.auth.credits}</li>,
                <li key="2"><a href="/api/logout">Logout</a></li>];
        }
    }


    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={ this.props.auth ? '/surveys' : '/' }
                        className="left brand-logo"
                    >
                        Emaily
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-small-and-down">
                        {this._renderAuthContent()}
                        <li><a href="/surveys">Survey</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return { auth : state.auth }
}

export default connect(mapStateToProps)(Header);