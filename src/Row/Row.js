
import UUID from 'node-uuid';
import React from 'react';

export default
class Row extends React.Component{
   
    render() {
        const { error, items, choiseData, page, maxRow } = this.props;
        let renderItems

        if ( items.length > maxRow ) {

            let renderItemsArray =[];

            let startNumber = 0;
            let finishNumber = maxRow;

            for(let i=0; i < Math.ceil( items.length / maxRow ); i++){
                
                let page = items.slice( startNumber , finishNumber );
                renderItemsArray.push( page );

                startNumber += maxRow;
                finishNumber += maxRow;  
            }
            renderItems = renderItemsArray[page];
        } else {
            renderItems = items;
        }

        if ( choiseData === null ){

            return  <>
                    <tr>
                        <th colSpan = "5">Нажмите minData для вывода малого объема данных</th>
                    </tr>
                    <tr>
                        <th colSpan = "5">Либо bigData для вывода большого объема данных</th>
                    </tr>
                    </>;  

        }  else {

            if ( error ) {

                return <tr><th colSpan = "5">Ошибка: { error.message }</th></tr>;

            } else {

                return (
                    <>
                        {renderItems.map(( item ) => (
                            <tr key={UUID.v4()} onClick={ () => { this.props.setActiveRow( item ) }}>
                                <td>{ item.id }</td>
                                <td>{ item.firstName }</td>
                                <td>{ item.lastName }</td>
                                <td>{ item.email }</td>
                                <td>{ item.phone }</td>
                            </tr>
                        
                        ))}
                    </> 
                );
            }
        }
    }
}
