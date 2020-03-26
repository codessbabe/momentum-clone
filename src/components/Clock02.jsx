import React from 'react' 

class Clock02 extends React.Component { 
  constructor(props) {
    super(props)
    this.state = this.getTime();
  }

  componentDidMount(){ 
    this.setTimer()
  }

  setTimer(){ 
    clearTimeout(this.timeout); 
    this.timeout = setTimeout(this.updateClock.bind(this), 1000)
  }

  updateClock() { 
    this.setState( this.getTime, this.setTimer ); 
  }

  getTime() { 
    const currentTime = new Date(); 
    return { 
      hours: currentTime.getHours(), 
      minutes: currentTime.getMinutes()
    }
  }

  render() { 
    const {hours, minutes} = this.state;

    return(
      <div> 
        <h2>Clock02</h2>
        <div className="clock">
        { 
        hours === 0 ? 12 : (hours > 12) ? hours-12 : hours 
        }:{ 
        minutes > 9 ? minutes : `0${minutes}`
        }
        </div> 

      </div> 
    )
  }
}

export default Clock02 