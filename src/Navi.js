import { Link } from 'react-router-dom';
import axios from 'axios';

const Navi = () =>
{

  return(
    <nav className="nav-bg">
      <Link hi="hello" to="/">
        <span style={{textDecorationLine: 'none', fontSize: '20px', color: 'white', paddingRight: '15px'}}>Home</span>
      </Link>
      <Link to="/products">
          <span style={{textDecorationLine: 'none', fontSize: '20px', color: 'white', paddingRight: '15px'}}>Products</span>
      </Link>
      <Link to="/cart">
          <span style={{textDecorationLine: 'none', fontSize: '20px', color: 'white', paddingRight: '15px'}}>Cart</span>
      </Link>
    </nav>
  )
}

export default Navi;
