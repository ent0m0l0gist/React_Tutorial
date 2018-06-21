import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
   state = {
   		persons:[
   		{id:'asdf12',name:'Raghav', age:21},
   		{id:'ghtr123',name:'Leo', age: 31}
		],
		showPersons:false
		
   	}


	deletePersonHandler=(deleteIndex)=>
	{
		//first make a copy of state, make changes to that copy, and then update the state.
		//const person = this.state.persons just copies the pointer. any change to persons will be made to the state as well immediately.
		const persons = [...this.state.persons];
		persons.splice(deleteIndex,1);
		this.setState({persons:persons});

		//passing this index helps us to work on particular element of list
	}

	nameChangeHandler= (event,id) => {
	
		const personIndex = this.state.persons.findIndex(p=>{
			return p.id === id;
		});

		const person = {...this.state.persons[personIndex]};
		person.name = event.target.value;

		const newPersons = [...this.state.persons];
		newPersons[personIndex]=person;
		//alert(person.name);
		//console.log(person.name);
		this.setState({persons:newPersons});
	}	
	

	togglePersons=()=>{
		var temp = this.state.showPersons;
		this.setState({showPersons: !temp});
	}

   render() {  
//render function is called again when react reloads a component

	let persons = null;

	
	if ( this.state.showPersons ) {
		persons = (
		  <div>
			{this.state.persons.map((person, index) => {
			  return <Person
				click={() => this.deletePersonHandler(index)}
				name={person.name} 
				age={person.age}
				key={person.id}
				changed={(event) => this.nameChangeHandler(event, person.id)} />
			})}
		  </div>
		);
	  }

	   
	const style = {
		backgroundColor : 'white',
		cursor:'pointer',
		border :'1px solid blue'
	}
    return (

      <div className="App">
       		<h1>Hi, I am a React app </h1>
       		<button style = {style} onClick={this.togglePersons}>Toggle</button>
			{persons}
			
      </div>
    );
  }
  //ONE WAY TO PUT CONDITION : this.state.showPersons ? (JSX HERE) : (else wala JSX)


  //<button style = {style} onClick={()=>this.myFunc("MEssi messi")}>Switch Name</button>
  //different ways to bind values : 1. arrow function  2. using this.func.bind()
  ///JSX gets con erted to the thing below
  //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Through react createElement'));
}


export default App;
