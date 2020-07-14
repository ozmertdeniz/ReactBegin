import React from 'react'
import DataRow from './datarow'
export default class DataTable extends React.Component {
    render() {
        let result = this.props.data.map((item, index) => {
            return <DataRow
                key={index}
                {...item}/>
                //columCount={this.props.headerText.length} /> // ()=> Fat Arrow Function
        });
        return (<table className="ui celled table">
            <thead>
                <tr>
                    {this.props.headerText.map((headerColum, index) => <th key={index}>{headerColum}</th>)}
                </tr>
            </thead>
            <tbody>
                {result}
            </tbody>
        </table>)
    }
}