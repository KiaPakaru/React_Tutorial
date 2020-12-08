import React from "react";
import TodoItem from "./todo/TodoItem";
import TodoItemData from "./todo/TodoItemData";
//import ProductData from './products/ProductData'
//import Product from './products/Product';
//import JokeItem from './jokes/JokeItem';

class TodoList extends React.Component {
  render() {
    const todoItems = TodoItemData.map((todoItem) => (
      <TodoItem key={todoItem.id} item={todoItem} />
    ));

    //const products = ProductData.map(product => <Product key={product.id} item={product}/>)
    return <div className="TodoList">{todoItems}</div>;
  }
}

export default TodoList;
