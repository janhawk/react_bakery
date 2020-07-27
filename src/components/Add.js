import React from 'react';
import Slider from "./core/Slider";


class Add extends React.Component {
    constructor(props) {
        super(props);
    
        this.state={
          input: '',
          price: 1,
        } 
        this.onChange=this.onChange.bind(this)   
      } 
      onChange(evt) {
       
        this.setState({
          input: evt.target.value,
        });
      }
    render() {
      console.log(this.state.input)
        return(
            <div className="container-fluid">
              <div className="row">
                Add
                <input onChange={this.onChange}>
                 
                
                </input>
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