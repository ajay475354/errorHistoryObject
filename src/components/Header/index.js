import "./index.css";

const Header = () => {
  return (
    <nav className="nav_container">
      <div className="nav_details_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="logo_image"
          className="logo_image"
        />
        <div className="details">
          <ul className="nav_list">
            <li className="list">Home</li>
            <li className="list">Products</li>
            <li className="list">Cart</li>
          </ul>
          <button type="button" className="logout_button">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Header;
