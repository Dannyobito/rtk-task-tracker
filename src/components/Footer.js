import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2023 by Obito</p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
