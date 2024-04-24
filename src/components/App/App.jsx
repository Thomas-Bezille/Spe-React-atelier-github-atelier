import Header from '../Header/Header';
import Message from '../Message/Message';
import ReposResults from '../ReposResults/ReposResults';

import './App.scss';
import data from '../../data/repos';

function App() {
  return (
    <div className="App">
      <Header />
      <Message count={data.total_count} />
      <ReposResults data={data} />
    </div>
  );
}

export default App;
