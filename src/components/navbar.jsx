function Navbar({ onNavigate }) {
    return (
      <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
        <button onClick={() => onNavigate('home')} style={{margin: "10px"}}>Home</button>
        <button onClick={() => onNavigate('wishlist')} style={{margin: "10px"}}>Wishlist</button>
        <button onClick={() => onNavigate('recommendations')} style={{margin: "10px"}}>Recommendations</button>
        <button onClick={() => onNavigate('about')} style={{margin: "10px"}}>About</button>
      </nav>
    );
  }
  
  export default Navbar;
  
  