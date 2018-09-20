import React from 'react';
import { BrowserRouter, NavLink as Link, Route, Switch } from 'react-router-dom';
import About from "./About";
import { add } from "./add";
import Contact from "./Contact";
import Home from "./Home";

const handleClick = (num1: number, num2: number) => {
  console.log(add(num1, num2))
}

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <div className="content">
        <div className="menu">
          <Link exact to="/" activeClassName="active">Home</Link>
          <Link to="/about" activeClassName="active">About</Link>
          <Link to="/contact" activeClassName="active">Contact</Link>
        </div>

        <button onClick={() => handleClick(5, 5)}>Click me!</button>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export { RouterConfig };

