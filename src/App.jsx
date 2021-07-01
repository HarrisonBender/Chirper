import React from 'react';

const App = () => {
    this.state = {
        chirps: [
          {
            text1: 'Chirp1'
          },
          {
            text2: 'Chirp2'
          },
          {
            text3: 'Chirp3'
          }
        ]
      };
    }
    return (
        value={this.state.text}
        onChange={event => {
          this.setState({ text: event.target.value })
        };
        };




export default App;