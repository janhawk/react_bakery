import React from 'react';

const Button = ({ children, isSelected, onClick }) => {


   
        return(
            <div>
                <button className="btn-primary"
                    onclick={onClick}>
                        {children}
                </button>
            </div>
        );
    
    }


export default Button;