import Header from './components/Header';
import MoviesContainer from './components/MoviesContainer';

import { data } from '../dummydata.json';

const App = () => {
  return (
    <div className='bg-gray-900 h-screen'>
      <Header />
      <MoviesContainer movies={data} />
    </div>
  )
};

export default App;
