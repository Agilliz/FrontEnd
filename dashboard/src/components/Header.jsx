import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='h-full w-1/6 flex flex-col'>
      <div className="nav-area flex flex-col h-full">
        
          <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;