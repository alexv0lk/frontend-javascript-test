import React from 'react';

export default
class ActiveRow extends React.Component{
    

    render(){
        if ( this.props.activeRow === null ) {
            return <p>выбери ряд для вывода полной информации</p>
        } else {
            return (
                <>  
                Выбран пользователь <b> { this.props.activeRow.firstName + " " + this.props.activeRow.lastName }</b><br></br>
                Описание:<br></br>
                <textarea value= { this.props.activeRow.description } readOnly/><br></br>
                Адрес проживания: <b> { this.props.activeRow.address.streetAddress } </b><br></br>
                Город: <b> { this.props.activeRow.address.city } </b><br></br>
                Провинция/штат: <b> { this.props.activeRow.address.state } </b><br></br>
                Индекс: <b> { this.props.activeRow.address.zip } </b>  
                </>
        )}
    }
}