import Home from './views/Home/Home';
import LayoutViews from './views/LayoutViews/LayoutViews';

export default function App() {
  return (
    <ProvideAuth>
      <LayoutViews>
        <Home />
      </LayoutViews>
    </ProvideAuth>
  );
}
