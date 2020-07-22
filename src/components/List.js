import React from 'react';


class List extends React.Component {
    render() {
        return(
            <div>
             {this.props.children}
            </div>
        );
    }
}
export default List;