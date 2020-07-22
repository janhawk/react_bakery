import React from 'react';


class Button extends React.Component {
    render() {
        return(
            <div>
                {this.props.children}
                <button>
                    
                </button>
                
            </div>
        );
    }
}
export default Button;