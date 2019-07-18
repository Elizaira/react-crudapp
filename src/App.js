import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


  class App extends Component {
    //rendering data inside the console log
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
          //rendering data inside the console log 
          //note: change the employees: to data will show the data in console log only
          //else it will show in the web page 
          this.setState({ employees: response.data });
        });
      } catch (err){
        console.log('Error on fetching all employee details');
        console.log(err);
      }
    }
  
    render(){
     
      return (
        <div className='container'>
         <header className='App'>
            <table>
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>Employee Name</th>
                  <th>Age</th>
                  <th>Salary</th>
                </tr>
                {
                  this.state.employees.map(employees => (
                    <tr key={employees.id}>
                      <td>{employees.id}</td>
                      <td>{employees.employee_name}</td>
                      <td>{employees.employee_age}</td>
                      <td>{employees.employee_salary}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
         </header>
        </div>
      );
    }

  }

export default App;
