import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./views/Home";

import About from "./views/About";

import About_Members from "./views/About_Members";

import KNSSE from "./views/KNSSE";
import Board from "./views/Board";
import PostNewQuestion from "./views/PostNewQuestion";
import Book from "./views/Book/App";
import Journal from "./views/Journal/App";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: () => <Home /> },
  { path: "/k-nsse", key: "K-NSSE", component: () => <KNSSE /> },
  { path: "/about/members", key: "members", component : () => <About_Members/>},
  { path: "/about", key: "ABOUT", component: () => <About /> },
  { path: "/board/Newpost", key: "Newpost", component: () => <PostNewQuestion /> },
  { path: "/board", key: "BOARD", component: () => <Board /> },
  { path: "/research/book", key: "Book", component: () => <Book /> },
  { path: "/research/journal", key: "Journal", component: () => <Journal /> }
];

export default ROUTES;

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}
