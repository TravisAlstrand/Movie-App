import { Outlet } from "react-router-dom";

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