import React, { Component } from 'react';
class SearchBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: ''
        };
    }

    hasCallbackFunction = () => typeof this.props.params.callbackOnClick === 'function';

    searchValueChange = (event) => {
        this.setState({ searchValue: event.target.value });

        if (this.hasCallbackFunction() && this.props.params.callWhenChange) {
            this.props.params.callbackOnClick(event.target.value, 'change');
        }
    };

    post = () => {
        if (!this.hasCallbackFunction()) {
            return;
        }

        this.props.params.callbackOnClick(this.state.searchValue, 'post');
        this.setState({ searchValue: '' });
    };

    render() {
        let position = this.props.params.position;
        let className = `menu ${position}`;

        return (
            <div className={className}>
                <div className='item'>
                    <div className='ui transparent icon input'>
                        <input className='prompt' type='text' value={this.state.searchValue} placeholder='Search...' onChange={this.searchValueChange} />
                        <i className='search link icon' onClick={this.post}></i>
                    </div>
                </div>
            </div>
        );
    }
}
export default SearchBox;
