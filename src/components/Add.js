import React from 'react';


class Add extends React.Component {
    constructor(props) {
        super(props);
    
        this.state={
          input: '',
          price: 1,
        }
      } 
    render() {
        return(
            <div>
              Add
              {/* <input></input>
              <button>add</button> */}
            </div>
        );
    }
}
export default Add;