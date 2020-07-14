import React from 'react';

class ApproveCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isApproved: false, isBlameClicked: false };
    }

    onFriendClick = () => {
        this.setState({ isApproved: true });
    };
    onBlameClick = () => {
        this.setState({ isApproved: false, isBlameClicked: true });
    };

    reset = () => {
        this.setState({ isApproved: false, isBlameClicked: false });
    };

    // componentDidMount() {
    //     console.log(`Rendered And DidMount`);
    // }

    // componentDidUpdate() {
    //     console.log(`Rendered And DidUpdate`);
    // }

    // componentWillUnmount(){}
    // shouldComponentUpdate
    // getDerivedStateFromProps
    // getSnapshotBeforeUpdate

    render() {
        let additionalPart;
        if (this.state.isApproved) {
            additionalPart = <div className='ui bottom attached button'>Thank you, you already friend</div>;
        } else if (this.state.isBlameClicked) {
            additionalPart = (
                <div className='extra content'>
                    <span className='ui tiny button left floated white disabled'>
                        <i className='frown outline icon' />
                        But why?
                    </span>

                    <button className='ui tiny button right floated blue' onClick={this.reset}>
                        <i className='undo icon' />
                        Undo!
                    </button>
                </div>
            );
        } else {
            additionalPart = (
                <div className='extra content'>
                    <button className='ui tiny button left floated green' onClick={this.onFriendClick}>
                        <i className='add icon' />
                        Make Friend
                    </button>
                    <button className='ui tiny button right floated red' onClick={this.onBlameClick}>
                        <i className='remove icon' />
                        Blame!
                    </button>
                </div>
            );
        }
        return additionalPart;
    }
}

export default ApproveCard;
