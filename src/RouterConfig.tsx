import React from 'react';
import loadable from 'react-loadable';
import { BrowserRouter, NavLink as Link, Route, Switch } from 'react-router-dom';
import { add } from "./add";

// loading view
const LoadingComponent = () => <h3>please wait...</h3>;

// home component

const AsyncHome = loadable({
  loader: () => import('./Home'),
  loading: LoadingComponent
});

// about component
const AsyncAbout = loadable({
  loader: () => import('./About'),
  loading: LoadingComponent
});

// contact component
const AsyncContact = loadable({
  loader: () => import('./Contact'),
  loading: LoadingComponent
});

const handleClick = (num1: number, num2: number) => {
  // import('./add').then((response: any) => console.log(response.add(num1, num2)));
  add(num1, num2)
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
          <Route exact path="/" component={AsyncHome} />
          <Route path="/about" component={AsyncAbout} />
          <Route path="/contact" component={AsyncContact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export { RouterConfig };

