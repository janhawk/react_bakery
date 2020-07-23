import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/core/Button';
import List from './components/List';
import Add from './components/Add';
import Pay from './components/Pay';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      activeTab: 'list',
      items: []
    };

  }

  onClickTabAdd() {
    this.setState({
      activeTab: 'add'
    });
  }
  onClickTabList() {
    this.setState({
      activeTab: 'list'
    });
  }
  onClickTabPay() {
    this.setState({
      activeTab: 'pay'
    });
  }

  renderTabAdd() {
    if (this.state.activeTab === 'add') {
      return (
        <Add />
      );
    }
    return null;
  }
  renderTabList() {
    if (this.state.activeTab === 'list') {
      return (
        <List />
      );
    }
    return null;
  }
  renderTabPay() {
    if (this.state.activeTab === 'pay') {
      return (
        <Pay />
      );
    }
    return null;
  }
  render() {
    
    return (
      <div className="container-fluid">
        <div className="row">
          <Button onClick={this.onClickTabAdd}>Add</Button>
          <Button onClick={this.onClickTabList}>List</Button>
          <Button onClick={this.onClickTabPay}>Pay</Button>
        </div>
      <div className="row"> 
        {this.renderTabAdd()}
        {this.renderTabList()}
        {this.renderTabPay()}
   
      </div>
      </div>
    );
  }
  
}
export default App;