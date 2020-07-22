import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/core/Button';
import List from './components/List';
import Add from './components/Add'
import Pay from './components/Pay'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      activeTab: 'add',
      items: []
    }
  }
  render() {
    
    return (
      <div>
        
        <Add>add</Add>
        <List>list</List>
        <Pay>pay</Pay>
      </div>
    );
  }
  
}
export default App;