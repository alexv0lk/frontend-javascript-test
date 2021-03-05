
import React from 'react';

export default
class AddRow extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
                    id: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    address:{streetAddress:'нет информации'},
                    description: 'нет информации'
            
        }   
    }

    handleChange = (event) => { 
        let name = event.target.name; 
            this.setState(() => {
                return {
                            [name]: event.target.value   
                }
            });  
        if( !document.forms.form.checkValidity() ){
            document.querySelector('.input-submit').setAttribute('disabled', true);
        } else {
            document.querySelector('.input-submit').removeAttribute('disabled');
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        document.forms.form.reset();

        this.props.addRow( this.state );
        this.props.sortItem( null );
      }

    
    render(){
        return(
            <form name='form' className="form" onSubmit= { this.handleSubmit }>

                <span> только цифры</span>
                <label >id
                    <input name = "id" type="number" pattern = "\d+"  required onChange= { this.handleChange }/>
                    
                </label>

                <span> только латиница</span>
                <label >firstName
                    <input name = "firstName" type = "text" pattern = "[A-Za-z]+" required onChange = { this.handleChange }/>
                </label>

                <span> только латиница</span>
                <label>lastName
                    <input name = "lastName" type = "text" pattern = "[A-Za-z]+" required onChange = { this.handleChange }/>
                </label>

                <span> формат: xxx@xxx.xx</span>
                <label>email
                    <input name = "email" type = "email" pattern = "\w+@\w+\.[a-z]+" required onChange = { this.handleChange }/>
                </label>  

                <span> формат: (xxx)xxx-xxxx</span>  
                <label>phone
                    <input name = "phone" type = "tel" pattern = "\(\d{3}\)\d{3}-\d{4}" required onChange = { this.handleChange }/>
                </label>

                <input  className = "input-submit" type = "submit" disabled = {true} value = "Добавить в таблицу"/>
            </form>
        
        )}
}