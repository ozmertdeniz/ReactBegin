import React from 'react';
import DataTable from '../../../components/datacompenents/datatable'
import { connect } from 'react-redux'
import { ACTION_TYPE_CATEGORY, loadDataActionCreator } from '../../../actions'

class List extends React.Component {
    hanleLoadData = () => {
        this.props.dispatch(loadDataActionCreator(ACTION_TYPE_CATEGORY));
    }
    render() {
        return (
            <div className="ui container">
                <button className="ui labeled icon button" onClick={this.hanleLoadData}><i className="refresh icon"></i>Refresh</button>
                <DataTable headerText={['Name', 'displayOrder', 'iconFile', 'iconPath', 'iconFileContentType', 'id', 'isActive', 'isDeleted', 'Created At', 'Updated At', 'Deleted At']}
                    data={this.props.categories} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    debugger
    return { categories: state.categories };
}
export default connect(mapStateToProps)(List)