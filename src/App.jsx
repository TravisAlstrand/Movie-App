import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';

// COMPONENTS
import RootLayout from './components/RootLayout';
import HomePage from './components/HomePage';
import MoviesContainer, { loader as initMoviesLoader } from './components/MoviesContainer';
import MovieDetails, { loader as movieDetailsLoader } from './components/MovieDetails';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index element={<HomePage />} />
    <Route path='/search/:id' element={<MoviesContainer />} loader={initMoviesLoader} />
    <Route path='/movie/:id' element={<MovieDetails />} loader={movieDetailsLoader} />
  </Route>
))

const App = () => {
  return (
    <div className='bg-gray-900'>
      <RouterProvider router={router} />
    </div>
  )
};

export default App;