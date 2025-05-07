function Navbar({ onNavigate }) {
    return (
      <nav className="navbar">
        <h2>WishCart</h2>
        <ul>
          <li onClick={() => onNavigate('home')}>Home</li>
          <li onClick={() => onNavigate('wishlist')}>Wishlist</li>
          <li onClick={() => onNavigate('recommendations')}>Recommendations</li>
          <li onClick={() => onNavigate('about')}>About</li>
        </ul>
      </nav>
    );
}
  
export default Navbar;