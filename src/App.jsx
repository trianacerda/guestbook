import Home from './views/Home/Home';
import LayoutViews from './views/LayoutViews/LayoutViews';
import { PrivateRoute } from '';

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/guestbook">
          <LayoutViews>
            <Home />
          </LayoutViews>
        </PrivateRoute>
      </Router>
    </ProvideAuth>
  );
}
