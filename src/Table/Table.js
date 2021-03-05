import React from 'react';

import Row from "../Row/Row";

export default
class Table extends React.Component{
    render(){
        return (
            <table className = "table">
              <thead>
                <tr>
                  <td onClick = { () => this.props.sortItem('id') }>
                    <button >id</button>
                    <span className = "span-id"></span>
                  </td>
                  <td onClick = { () => this.props.sortItem('firstName') }>
                    <button >firstName</button>
                    <span className = "span-fn"></span>
                  </td>
                  <td onClick = { () => this.props.sortItem('lastName') }> 
                    <button >lastName</button>
                    <span className = "span-ln"></span>
                  </td>
                  <td onClick = { () => this.props.sortItem('email') }>
                    <button >email</button>
                    <span className = "span-em"></span>
                  </td>
                  <td onClick = { () => this.props.sortItem('phone') }>
                    <button >phone</button>
                    <span className = "span-ph"></span>
                  </td>
                </tr>
              </thead>
              <tbody>
                <Row 
                    choiseData = { this.props.choiseData } 
                    items = { this.props.items } 
                    error = { this.props.error } 
                    maxRow = { this.props.maxRow }
                    setActiveRow = { this.props.setActiveRow }
                />
              </tbody>
            </table>
        );
    }
}