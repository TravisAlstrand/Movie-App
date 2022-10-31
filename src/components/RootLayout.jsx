import { Outlet } from "react-router-dom";


function RootLayout() {
  return (
    <>
      <main className="min-h-screen bg-slate-900">
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout;