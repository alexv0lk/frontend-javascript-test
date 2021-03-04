import React from "react";
import './App.css';
import Table from "./Table/Table";
import ChoiseButtons from './ChoiseButtons/ChoiseButtons';
import NextPrev from './NextPrev/NextPrev';
import ActiveRow from './ActiveRow/ActiveRow';
import AddRow from './AddRow/AddRow';
import FilterRow from './FilterRow/FilterRow';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        choiseData: null,
        error: null,
        loadedBig: false,
        loadedMin: false,
        items: [],
        minData: [],
        bidData: [],
        page: 0,
        maxRow: 50, 
        activeRow: null,
        flagsObject: {i:0,p:0,e:0,f:0,l:0}
       
    };
  }

  filterItem = (str) => {
    let filterItems;
    let filtredItems;
    let concatItems;
    const reg = new RegExp(str, 'i');
    if(this.state.choiseData === 'min'){
      filterItems = this.state.minData
    }else if(this.state.choiseData === 'big'){
      filterItems = this.state.bigData
    }
    if(str === ''){
      filtredItems = filterItems
    } else{
      let filterID = filterItems.filter((obj)=>{
        return reg.test(obj['id']);
      });
      let filterFN = filterItems.filter((obj)=>{
        return reg.test(obj['firstName']);
      });
      let filterLN = filterItems.filter((obj)=>{
        return reg.test(obj['lastName']);
      });
      let filterEM = filterItems.filter((obj)=>{
        return reg.test(obj['email']);
      });
      let filterPH = filterItems.filter((obj)=>{
          return reg.test(obj['phone']);
      });
      concatItems = filterID.concat(filterFN,filterLN,filterEM,filterPH);
      
      filtredItems = concatItems.filter((item, index) =>{
        return concatItems.indexOf(item) === index;
      });
      
    }
    if(this.state.choiseData !== null){
      this.setState(() => {
        return {items: filtredItems}
      })
    }
    

  }

  sortItem = (type) =>{
    let sortItems = this.state.items;

    // переменные для отображение стрелочек сортировки
    const spanId = document.querySelector('.span-id');
    const spanFn = document.querySelector('.span-fn');
    const spanLn = document.querySelector('.span-ln');
    const spanEm = document.querySelector('.span-em');
    const spanPh = document.querySelector('.span-ph');
    const arrowDown = String.fromCharCode(8595);
    const arrowUp = String.fromCharCode(8593);

    if(type === null ){
    
      this.setState(() => {
        return {flagsObject:{i:0,p:0,e:0,f:0,l:0}}
      })
        spanId.textContent = "";
        spanFn.textContent = "";
        spanLn.textContent = "";
        spanEm.textContent = "";
        spanPh.textContent = "";
    }

    //логика сортировки
    //получаем объект Table и используем незанятые его свойства для "флажков"

    if(type === "id" && this.state.items.length > 1){
      if(this.state.flagsObject.i){
        sortItems.reverse();
        if(this.state.flagsObject.i%2){
            spanId.textContent = arrowUp;
        }else{spanId.textContent = arrowDown;}
        spanFn.textContent = "";
        spanLn.textContent = "";
        spanEm.textContent = "";
        spanPh.textContent = "";
        this.setState(() => {
          return {flagsObject:{i:this.state.flagsObject.i+1,p:0,e:0,f:0,l:0}}
        })
      }else{
        sortItems.sort((a,b) => a.id - b.id);
        spanId.textContent = arrowDown;
        spanFn.textContent = "";
        spanLn.textContent = "";
        spanEm.textContent = "";
        spanPh.textContent = "";
        this.setState(() => {
          return {flagsObject:{i:1,p:0,e:0,f:0,l:0}}
        })
      }
    } else if(type === "firstName" && this.state.items.length > 1){
      if(this.state.flagsObject.f){
        sortItems.reverse();
        if(this.state.flagsObject.f%2){
          spanFn.textContent = arrowUp;
        }else{spanFn.textContent = arrowDown;}
        spanId.textContent = "";
        spanLn.textContent = "";
        spanEm.textContent = "";
        spanPh.textContent = "";
        this.setState(() => {
          return {flagsObject:{f:this.state.flagsObject.f+1,p:0,e:0,i:0,l:0}}
        })
      }else{
        sortItems.sort((a,b) => {
          if ( a.firstName.toUpperCase() < b.firstName.toUpperCase() ) return -1;
        });
        spanFn.textContent = arrowDown;
        spanId.textContent = "";
        spanLn.textContent = "";
        spanEm.textContent = "";
        spanPh.textContent = "";
        this.setState(() => {
          return {flagsObject:{f:1,p:0,e:0,i:0,l:0}}
        })
        
      }
    } else if(type === "lastName" && this.state.items.length > 1){
      if(this.state.flagsObject.l){
        sortItems.reverse();
        if(this.state.flagsObject.l%2){
          spanLn.textContent = arrowUp;
        }else{spanLn.textContent = arrowDown;}
        spanId.textContent = "";
        spanFn.textContent = "";
        spanEm.textContent = "";
        spanPh.textContent = "";
        this.setState(() => {
          return {flagsObject:{l:this.state.flagsObject.l+1,p:0,e:0,i:0,f:0}}
        })
        
      }else{
        sortItems.sort((a,b) => {
          if ( a.lastName.toUpperCase() < b.lastName.toUpperCase() ) return -1;
        });
        spanLn.textContent = arrowDown;
        spanId.textContent = "";
        spanFn.textContent = "";
        spanEm.textContent = "";
        spanPh.textContent = "";
        this.setState(() => {
          return {flagsObject:{l:1,p:0,e:0,i:0,f:0}}
        })
        
      }
    } else if(type === "email" && this.state.items.length > 1){
      if(this.state.flagsObject.e){
        sortItems.reverse();
        if(this.state.flagsObject.e%2){
          spanEm.textContent = arrowUp;
        }else{spanEm.textContent = arrowDown;}
        spanId.textContent = "";
        spanFn.textContent = "";
        spanLn.textContent = "";
        spanPh.textContent = "";
        this.setState(() => {
          return {flagsObject:{e:this.state.flagsObject.e+1,p:0,l:0,i:0,f:0}}
        })
      }else{
        sortItems.sort((a,b) => {
          if ( a.email.toUpperCase() < b.email.toUpperCase() ) return -1;
        });
        spanEm.textContent = arrowDown;
        spanId.textContent = "";
        spanFn.textContent = "";
        spanLn.textContent = "";
        spanPh.textContent = "";
        this.setState(() => {
          return {flagsObject:{e:1,p:0,l:0,i:0,f:0}}
        })
        
      }
    } else if(type === "phone" && this.state.items.length > 1){
      if(this.state.flagsObject.p){
        sortItems.reverse();
        if(this.state.flagsObject.p%2){
          spanPh.textContent = arrowUp;
        }else{spanPh.textContent = arrowDown;}
        spanId.textContent = "";
        spanFn.textContent = "";
        spanLn.textContent = "";
        spanEm.textContent = "";
        this.setState(() => {
          return {flagsObject:{p:this.state.flagsObject.p+1,e:0,l:0,i:0,f:0}}
        })
      }else{
        sortItems.sort((a,b) => a.phone.slice(1,4) - b.phone.slice(1,4));
        spanPh.textContent = arrowDown;
        spanId.textContent = "";
        spanFn.textContent = "";
        spanLn.textContent = "";
        spanEm.textContent = "";
        this.setState(() => {
          return {flagsObject:{p:1,e:0,l:0,i:0,f:0}}
        })
        
      }
    }

   
    if(type !== null){
      this.setState(() => {
        return {items: sortItems}
      })
    }
    
  }

  addRow = item =>{
    
    this.setState(() => {
        return {items: [item, ...this.state.items]}
    })
    
  }

  setActiveRow = item =>{
    this.setState(() => {
        return {activeRow: item}
    })
  }

  changePage = dir => {
    this.setState(() => {
      // логика переключения страниц и 
      // установки максимального и минимального кол-ва страниц зависимое от количества рядов
      if(dir){
        if(this.state.page < Math.ceil(this.state.items.length/this.state.maxRow)-1){
          return {
            page: this.state.page +1
          }
        } else { 
          return {page: this.state.page}
        }
      } else {
        if(this.state.page >0){
          return {
            page: this.state.page -1
          }
        } else {
          return {page: this.state.page}
        }
        
      }
    })
  }

  setChoiseData = choise =>{
    this.setState(() => {
      
      if(choise === "min"){
        
        return {
          choiseData: choise,
          items: this.state.minData
          
        }
      } else if(choise === "big"){
        
        return {
          choiseData: choise,
          items: this.state.bigData
        }
      }
     
      
    }) 
  }


  componentDidMount(){
    
    fetch('https://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        loadedMin: true,
                        minData: res
                    })
                },
                (err) => {
                    this.setState({
                        loadedMin: true,
                        error: err
                    })
                }
            )
    fetch('https://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        loadedBig: true,
                        bigData: res
                    })
                },
                (err) => {
                    this.setState({
                        loadedBig: true,
                        error: err
                    })
                }
            )    
            
            
  }        
  
  render(){

    return <div className="main-container">
            <ChoiseButtons 
              setChoiseData={this.setChoiseData}
              loadedMin={this.state.loadedMin} 
              loadedBig={this.state.loadedBig}
              choiseData={this.state.choiseData}
            />
            <NextPrev 
              changePage={this.changePage}
              page={this.state.page}
            />
            <div className="top-bar">
              <FilterRow
                  filterItem={this.filterItem}
                  sortItem={this.sortItem}
                />
              <button className="add-button"onClick={() =>{document.forms.form.classList.toggle('form-visible') }}>Добавить</button>
            </div>
            <div className="tableContainer">
              <Table 
                sortItem={this.sortItem}
                setActiveRow={this.setActiveRow}
                choiseData={this.state.choiseData} 
                items={this.state.items} 
                error={this.state.error} 
                page={this.state.page}
                maxRow={this.state.maxRow}
              />
              
              <AddRow
                addRow={this.addRow}
                sortItem={this.sortItem}
              />
            </div>
            
            <ActiveRow 
                activeRow={this.state.activeRow}
              />
           </div>;
  }
  
}

export default App;
