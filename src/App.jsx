import Home from './views/Home/Home';
import LayoutViews from './views/LayoutViews/LayoutViews';
import { PrivateRoute } from '';
import { ProvideAuth } from './context/ProvideAuth';

export default function App() {
  return (
    <>
      <ProvideAuth>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/guestbook">
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
