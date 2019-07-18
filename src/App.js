import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {employees: []};


    }
    componentDidMount() {
      try {
        axios({
          method: 'get',
          url: 'http://dummy.restapiexample.com/api/v1/employees'
        }).then(response => {
          console.log('All Employee Details');
          console.log(response.data);

          this.setState({ data: response.data });
        });
      } catch (err){
        console.log('Error on fetching all employee details');
        console.log(err);
      }
    }
  
    render(){
     
      return (
        <div className='App'>
         <header className='App-header'>

         </header>
        </div>
      );
    }

  }

export default App;
