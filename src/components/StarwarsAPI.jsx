import React from 'react' 

class StarwarsAPI extends React.Component { 
  constructor(){ 
    super() 
    this.state = {
      character: { }
    }
  }

  componentDidMount(){ 
    fetch("https://swapi.co/api/people/1")
    //resolve the promise by using a .then 
      .then( response => response.json() )
      .then( data => { 
        this.setState({ 
          character: data
      })
    })
  }

  render(){ 
    return( 
      <div> 
        {this.state.character.name}
      </div>
    ); 
  }
}

export default StarwarsAPI