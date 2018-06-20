import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const myFunc = () =>
{
	alert("HELLO");
}

class App extends Component {
   state = {
   		persons:[
   		{name:"Raghav", age:21},
   		{name:"Leo", age: 31}
   		]
   	}

   	myFunc=(newName) =>
    {
	//alert("HELLO");
	this.setState( {
		persons:[
   		{name:"Raghav Agrawal", age:21},
   		//{name:"Leo", age: 312}
   		{name: newName, age:50}
   		]
   				}
		)
	} 
	

	nameChangeHandler=(event)=>
	{
		this.setState(
			{
				persons:[
					{name: event.target.value, age:21},
					//{name:"Leo", age: 312}
					{name: "Messi", age:50}
					]
			}
		)
	}

   render() {  
	   
	const style = {
		backgroundColor : 'white',
		cursor:'pointer',
		border :'1px solid blue'
	}
    return (

      <div className="App">
       		<h1>Hi, I am a React app </h1>

       		<button style = {style} onClick={()=>this.myFunc("MEssi messi")}>Switch Name</button>
       		<Person name ={this.state.persons[0].name} age = {this.state.persons[0].age} changed={this.nameChangeHandler}>huhahuhahuha</Person>
       		<Person name ={this.state.persons[1].name} age = {this.state.persons[1].age} click={this.myFunc.bind(this, "lipistic")}/>
       		
      </div>
    );
  }
  //different ways to bind values : 1. arrow function  2. using this.func.bind()
  ///JSX gets con erted to the thing below
  //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Through react createElement'));
}


export default App;
