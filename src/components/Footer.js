import { Link, useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  return (
    <footer>
      <p>Copyright &copy; 2023 by Obito</p>
      {location.pathname === "/" ? <Link to="/about">About</Link> : null}
    </footer>
  );
};

export default Footer;
