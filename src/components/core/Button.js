import React from 'react';

class Button extends React.Component {
   render() {
        return(
            <div>
                <button onClick={this.props.onClick} className="btn-primary">
                   
                    {this.props.children}
                    
                        
                </button>
            </div>
        );
        }    
}
export default Button;