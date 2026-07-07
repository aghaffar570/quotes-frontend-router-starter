// ============================================================
// Navbar.jsx
//
// Shows on every page (it's rendered once, above <Routes>, in
// routes.jsx — not inside any individual page).
// ============================================================

// Part 2: <NavLink> is a <Link> that ALSO knows whether it points at the
//   page you're currently on. That lets us style the "you are here" link
//   differently. Use NavLink for nav bars; plain Link for one-off links.
//   Docs: https://reactrouter.com/start/declarative/navigating#navlink
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <nav className="navbar">
      {/* Part 2: two nav links.
          The "className" here is a FUNCTION, not a plain string. NavLink
          calls it and hands us { isActive } — true when this link matches
          the current url. We return the class "active" in that case, which
          the ".navbar a.active" rule in App.css styles.

          "end" on the Home link means "only count as active on EXACTLY /".
          Without it, Home would light up on /quotes/new too, because that
          url also starts with "/". */}
      <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>
      <NavLink to="/quotes/new" className={({ isActive }) => (isActive ? 'active' : '')}>
        Add Quote
      </NavLink>
    </nav>
  )
}

export default Navbar
