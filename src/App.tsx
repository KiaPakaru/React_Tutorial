import React from "react";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import TodoList from "./components/TodoList";
import FormPractice from "./components/forms/FormPractice";
//import Form from "./components/forms/Form";
//import ApiRequest from "./components/ApiRequest/ApiRequest";
//import LoginCheck from './components/loginCheck/loginCheck'
//import MyInfo from './components/MyInfo';

class App extends React.Component {
  render() {
    return (
      <div>
        <FormPractice />
        <Header />
        <TodoList />
        <Footer />
      </div>
    );
  }
}
export default App;
