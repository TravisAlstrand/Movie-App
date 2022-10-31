import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';

// COMPONENTS
import RootLayout from './components/RootLayout';
import Header from './components/Header';
import HomePage from './components/HomePage';
import MoviesContainer, { action as searchAction } from './components/MoviesContainer';
import MovieDetails, { loader as movieDetailsLoader } from './components/MovieDetails';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index element={<HomePage />} />
    <Route path='/search/:id' element={<MoviesContainer />} action={searchAction} />
    <Route path='/movie/:id' element={<MovieDetails />} loader={movieDetailsLoader} />
  </Route>
))

const App = () => {

  return (
    <div className='bg-gray-900'>
      <Header />
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  )
};

export default App;