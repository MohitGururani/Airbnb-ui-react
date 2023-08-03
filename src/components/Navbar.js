import logo from "../images/airbnb.png";

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="" className="nav--logo"/>
    </nav>
  );
}

export default Navbar;
