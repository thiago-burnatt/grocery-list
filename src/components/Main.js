import React, { Component } from 'react';

import Form from './Form';
import List from './List';

import './Main.css';

export default class Main extends Component {
  state = {
    newItem: '',
    itemList: [],
    index: -1,
  };

  componentDidMount() {
    const itemList = JSON.parse(localStorage.getItem('list'));

    if (!itemList) return;

    this.setState({ itemList });
  }

  componentDidUpdate(prevProps, prevState) {
    const { itemList } = this.state;

    if (itemList === prevState.list) return;

    localStorage.setItem('list', JSON.stringify(itemList));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { newItem, itemList, index } = this.state;

    const newItemList = [...itemList];

    if (!newItem || newItemList.indexOf(newItem) !== -1) return;

    if (index === -1) {
      this.setState({
        itemList: [...newItemList, newItem],
        newItem: '',
      });
    } else {
      newItemList[index] = newItem;
      this.setState({
        itemList: [...newItemList],
        index: -1,
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      newItem: e.target.value,
    });
  };

  handleDelete = (index) => {
    const { itemList } = this.state;
    const newItemList = [...itemList];

    newItemList.splice(index, 1);

    this.setState({
      itemList: [...newItemList],
    });
  };

  handleEdit = (index) => {
    const { itemList } = this.state;

    this.setState({
      index,
      newItem: itemList[index],
    });
  };

  render() {
    const { newItem, itemList } = this.state;
    return (
      <div className="main-div">
        <h1>Grocery List</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newItem={newItem}
        />
        <List
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          itemList={itemList}
        />
      </div>
    );
  }
}
