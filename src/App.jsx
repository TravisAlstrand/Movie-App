import { createBrowserRouter, RouterProvider, useLoaderData } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MoviesContainer from './components/MoviesContainer';
import MovieDetails from './components/MovieDetails';

import { data } from '../dummydata.json';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MoviesContainer movies={data} />
  }, 
  {
    path: '/movie/:id',
    element: <MovieDetails />,
    loader: async ({ params }) => {
      console.log(params.id)
    },
  }
])

const App = () => {
  return (
    <div className='bg-gray-900'>
      <Header />
      <SearchBar />
      <RouterProvider router={router} />
    </div>
  )
};

export default App;
