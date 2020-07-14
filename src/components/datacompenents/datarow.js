import React from 'react'

const DataRow = (props) => {
    return (
        <tr>
            {
                props ?
                    Object.keys(props).map((column, index) => <td key={index}>{props[column]}</td>) :
                    <td colSpan={this.props.columCount}>No Data</td>
            }
        </tr>
    )
}

export default DataRow;