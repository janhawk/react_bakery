import React from 'react';
import Slider from "./core/Slider";


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
            <div className="container-fluid">
              <div className="row">
                Add
                <input></input>
                <button>add</button>
              </div>
              <Slider
                value={this.props.price}
                min={this.props.min}
                max={this.props.max}
                // onChange={this.props.}
              /> 
            </div>
        );
    }
}
export default Add;