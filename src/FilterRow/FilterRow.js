import React from 'react';

export default
class FilterRow extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            str:''
        }   
    }

    handleChange = (event) => { 
            this.setState(() => {
                return {
                    str: event.target.value
                }
            });  
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.filterItem(this.state.str);
        this.props.sortItem(null);
      }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange}></input>
                <input type="submit" value="Найти"></input>
            </form>
        )
    }
}