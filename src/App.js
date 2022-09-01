import './App.scss';
import Topbar from './component/Topbar';
import GlobalRouter from './router';

function App() {
  return (
    <main>
      <Topbar />
      <GlobalRouter />
    </main>
  );
}

export default App;
