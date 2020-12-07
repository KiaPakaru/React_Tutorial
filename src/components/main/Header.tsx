import React from "react";

class Header extends React.Component {
  render() {
    let name = "Nico";
    return (
      <div>
        <header className="Navbar">Todo List of {name}</header>
      </div>
    );
  }
}

export default Header;
