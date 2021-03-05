import React from 'react';

export default
class ChoiseButtons extends React.Component{

    render(){
        if ( !this.props.loadedMin || !this.props.loadedBig ){
            return <div className = "button-container">
                    <p>Идет загрузка данных...</p>
                    </div>
        } else if ( this.props.choiseData === null ){

            return(
                <div className = "button-container">
                    <button className = "choise-button" onClick = { () => {this.props.setChoiseData("min")} }>minData</button>
                    <button className = "choise-button" onClick = { () => {this.props.setChoiseData("big")} }>bigData</button>
                </div>
            ) 
        } else {
            return (
                <div className = "button-container">
                    <p>выбрано: { this.props.choiseData } колличество данных</p>
                </div>
            )
        }
    }
}