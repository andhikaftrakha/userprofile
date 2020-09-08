import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      title: 'Employees Profile',
      act: 0,
      index: '',
      datas: []
    }
  }

   componentDidMount(){
    this.refs.fname.focus();
  }

  fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let fname = this.refs.fname.value;
    let lname = this.refs.lname.value;
    let address = this.refs.address.value;
    let pnumber = this.refs.pnumber.value;
    let description = this.refs.description.value;

    if(this.state.act === 0){   //new
      let data ={
        fname, lname, address, pnumber, description
      }
      datas.push(data);
    }else{                      //update
      let index = this.state.index;
      datas[index].fname = fname;
      datas[index].lname = lname;
      datas[index].address = address;
      datas[index].pnumber = pnumber;
      datas[index].description = description;
    }

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.fname.focus();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.fname.focus();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.fname.value = data.fname;
    this.refs.lname.value = data.lname;
    this.refs.fname.value = data.fname;
    this.refs.address.value = data.address;
    this.refs.pnumber.value = data.pnumber;
    this.refs.description.value = data.description;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.fname.focus();

  }
  
 render() {
   let datas = this.state.datas;
  return (
    <div className="App">
      <h2>{this.state.title}</h2>
      <form ref="myForm" className="myForm">
      <input type="text" ref="fname" placeholder="First Name" className="formField" />
      <input type="text" ref="lname" placeholder="Last Name" className="formField" />
      <input type="text" ref="address" placeholder="Address" className="formField" />
      <input type="text" ref="pnumber" placeholder="Phone Number" className="formField" />
      <input type="text" ref="description" placeholder="Description" className="formField" /> 
      <button onClick={this.fSubmit} className="myButton">Submit </button>
      </form>
      <pre>
        {datas.map((data, i) =>
          <li key={i} className="myList">
            {i+1}. {data.fname}, {data.lname}, {data.address}, {data.pnumber}, {data.description}
            <button onClick={()=>this.fRemove(i)} className="myListButton">remove </button>
            <button onClick={()=>this.fEdit(i)} className="myListButton">edit </button>
          
          
          </li>
          
          )}

      </pre>
     
    </div>
  );
 }
}
export default App;
