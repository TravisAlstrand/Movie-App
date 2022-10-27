import { Form } from 'react-router-dom';

const SearchBar = () => {
  return (
    <div className="flex justify-center">
      <Form method="post" action="/search/:id">
        <input type="text" name="searchBar" id="searchBar" className="my-4 rounded-xl h-8 w-64 py-2 px-4" placeholder="search for a movie"/>
      </Form>
    </div>
  )
};

export default SearchBar;