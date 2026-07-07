// ============================================================
// routes.jsx
//
// All route definitions live here instead of inline in main.jsx.
// Navbar renders once, above <Routes>, so it shows on every page
// no matter which route is active.
// ============================================================

// Part 1: <Routes> and <Route> are how we tell React Router
//   "for THIS url, render THIS component". Everything comes from the
//   "react-router" package (same one main.jsx imports BrowserRouter from).
//   Docs: https://reactrouter.com/start/declarative/routing
import { Routes, Route } from 'react-router'

// Part 2: the navbar that shows on every page.
import Navbar from './components/Navbar.jsx'

// The four pages, one per route:
import Home from './pages/Home.jsx'             // Part 1
import QuoteDetail from './pages/QuoteDetail.jsx' // Part 3
import AddQuote from './pages/AddQuote.jsx'       // Part 4
import NotFound from './pages/NotFound.jsx'       // Part 5

function AppRoutes() {
  return (
    <>
      {/* Part 2: Navbar sits OUTSIDE <Routes>, so it is not tied to any
          single url — it renders on every page. */}
      <Navbar />

      <Routes>
        {/* Part 1 — the Home page at the root path "/".
            "index" is shorthand for "this is the page at the parent's
            own path". Here the parent path is "/", so Home shows at "/". */}
        <Route index element={<Home />} />

        {/* Part 4 — a fixed path. NOTE: this must come BEFORE the
            "/quotes/:id" route below. React Router reads top to bottom;
            if ":id" came first it would treat "new" as an id and match
            the wrong page. More specific routes go first. */}
        <Route path="/quotes/new" element={<AddQuote />} />

        {/* Part 3 — a DYNAMIC path. The ":id" is a placeholder: it
            matches /quotes/1, /quotes/2, /quotes/anything. Inside
            QuoteDetail we read that value back out with useParams(). */}
        <Route path="/quotes/:id" element={<QuoteDetail />} />

        {/* Part 5 — the catch-all. "*" matches any url that none of the
            routes above matched. It MUST be last, or it would swallow
            every route below it. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRoutes
