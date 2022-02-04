import { useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  useEffect(() => {
    window.Electron.ipcRenderer.once('ipc-example', (arg) => {
      console.log(arg);
    });

    window.Electron.ipcRenderer.myPing();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>dsadsa</div>} />
      </Routes>
    </Router>
  );
};

export default App;
