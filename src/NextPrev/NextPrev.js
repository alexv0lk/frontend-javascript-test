import React from 'react';

export default
class NextPrev extends React.Component{

    render(){
            return(
                <div className = "next-prev-container">
                    <button className = "choise-button" onClick = { () => { this.props.changePage( false ) } }>Назад</button>
                    <button className = "choise-button" onClick = { () => { this.props.changePage( true ) } }>Вперед</button>
                    <p>{ this.props.page + 1 }</p>
                </div>
            ) 
        }
}