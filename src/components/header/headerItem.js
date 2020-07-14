import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
export class HeaderItem extends Component {
    render() {
        let name = this.props.name;
        return (
            <NavLink to={this.props.url} exact className="item" activeClassName="active">
                {name}
            </NavLink>
        );
    }
}
export default HeaderItem;
//   onClick={() => {
//     if (typeof callbackOnClick !== 'function') {
//         return;
//     }
//     return callbackOnClick(this.props.name);
// }}