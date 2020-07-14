import React from 'react';

// Component Life Cycle
// 1 - Mount
// 2 - Updating
// 3- UnMount 
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = { msg: 'Are you sure?', isApproved: false };
    }

    render() {
        return (
            <div className='card'>
                <div className='image'>
                    <img src={this.props.avatar}  alt="" />
                </div>
                <div className='content'>
                    <div className='header'>
                        {this.props.firstName} {this.props.lastName}
                    </div>
                    <div className='meta'>
                        <span>Friends</span>
                    </div>
                    <div className='description'>{this.props.jobArea}</div>
                </div>
                <div className='extra content'>
                    <span className='right floated'>Joined in {this.props.joinDate}</span>
                    <span>
                        <i className='user icon'></i>
                        {this.props.friendsCount} Friends
                    </span>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Card;
