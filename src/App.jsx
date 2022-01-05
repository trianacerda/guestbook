import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import LayoutViews from './views/LayoutViews/LayoutViews';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { ProvideAuth } from './context/ProvideAuth';

export default function App() {
  return (
    <>
      <ProvideAuth>
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/">
              <LayoutViews>
                <Home />
              </LayoutViews>
            </PrivateRoute>
          </Switch>
        </Router>
      </ProvideAuth>
    </>
  );
}
