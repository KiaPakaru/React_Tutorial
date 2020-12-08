import React from "react";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import TodoList from "./components/TodoList";
//import ApiRequest from "./components/ApiRequest/ApiRequest";
//import LoginCheck from './components/loginCheck/loginCheck'
//import MyInfo from './components/MyInfo';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <TodoList />
        <Footer />
      </div>
    );
  }
}
export default App;
