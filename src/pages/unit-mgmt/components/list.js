import React from 'react';
import DataTable from '../../../components/datacompenents/datatable'
import { connect } from 'react-redux'
import { ACTION_TYPE_UNIT, loadDataActionCreator } from '../../../actions'

class List extends React.Component {
    handleLoadData = () => {
        this.props.dispatch(loadDataActionCreator(ACTION_TYPE_UNIT));
    }
    render() {
        return (
            <div className="ui container">
                <button className="ui labeled icon button" onClick={this.handleLoadData}><i className="refresh icon"></i>Refresh</button>
                <DataTable headerText={['userId', 'id', 'title', 'body']}
                    data={this.props.units} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { units: state.units };
}
export default connect(mapStateToProps)(List)
//export default connect(mapStateToProps,{ACTION_SET_DATA})(List)