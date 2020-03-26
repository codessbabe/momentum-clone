import React from 'react' 

class Greeting extends React.Component { 
  constructor() { 
    super() 
    this.state = { 
      firstName: "",
      lastName: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event){ 
    const {name, value} = event.target
    this.setState( { 
      [name]: value
    })
  }

  submitHandler(e) { 
    e.preventDefault(); 
  }

  //var with show input set to false 
  //in html show input if ture
  //when start app input=true, then false

  render() {
    const hours = new Date().getHours()
    let timeOfDay
    const styles = {
     fontSize: 30
    }
  
  //should I move this in the clock component
  //should I move this block of code in componentDidUpdate? 
    if (hours < 12) {
      timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
    } else {
      timeOfDay = "evening"
    }



    return (
      <div>
        <h1 style={styles}>Good {timeOfDay}, </h1>
        <form onSubmit={this.submitHandler}> 
          <input 
            type="text" 
            value={this.state.firstName} 
            name="firstName"
            onChange={this.handleChange}
          />
          {/* <br /> 
          <input 
            type="text" 
            value={this.state.lastName} 
            name="lastName"
            onChange={this.handleChange}
          /> */}
        </form>
      </div>
      
    )
  }
}

  export default Greeting