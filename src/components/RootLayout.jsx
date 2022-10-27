import { Outlet, redirect } from "react-router-dom";
import { getSearchedMovies } from "../Context";

import Header from "./Header";
import SearchBar from "./SearchBar";

function RootLayout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="min-h-screen bg-slate-900">
        <SearchBar />
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout;

export async function action({request}) {
  const formData = await request.formData();
  const search = {
    query: formData.get('searchBar')
  }
  console.log(search)
  const response = await getSearchedMovies(search.query);
  console.log(response.Search)
  return redirect(`/search/${search.query}`);
}