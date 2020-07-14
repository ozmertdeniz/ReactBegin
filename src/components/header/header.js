import React, { Component } from 'react';
import { HeaderItem } from './headerItem';
import SearchBox from '../searchbox/searchBox';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { active: 'Home' };
    }

    headerItemClick = (name) => {
        console.log(name);
        this.setState({ active: name });
    };

    searchBarClick = (value, sourceType) => {
        console.log(`Value: ${value}\nSourceType:${sourceType}`);
    };

    render() {
        let itemParams = {
            activeName: this.state.active,
            callbackOnClick: this.headerItemClick
        };

        return (
            <div className='ui top fixed menu'>
                <HeaderItem name='Dashboad' url="/" params={itemParams} />
                <HeaderItem name='Category Management' url="/category" params={itemParams} />
                <HeaderItem name='Unit Management' url="/unit" params={itemParams} />

                <SearchBox
                    params={{
                        position: 'right',
                        callWhenChange: false,
                        callbackOnClick: this.searchBarClick
                    }}
                />
            </div>
        );
    }
}

export default Header;
