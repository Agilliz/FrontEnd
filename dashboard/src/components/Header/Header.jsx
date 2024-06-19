import { MdNotifications } from "react-icons/md";
import { PiUserRectangleFill } from "react-icons/pi";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import styles from "./Header.module.css"

const Header = () => {
  const location = useLocation();

  return (
    <header className="h-20 w-full flex">
      
      <div className="flex flex-col justify-end items-center w-1/2">
        {/* <strong>{location.pathname}</strong>  */}
      </div>
      <div className="flex justify-end w-full">
        <div className="flex items-center w-1/3 justify-around pr-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
</svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
          <span className={[styles.fonte]}>
            <h2>Usuário</h2>
            <h4>ID:</h4>
          </span>
          <label className={[styles.switch]}>
            <input type="checkbox" />
            <span className={[styles.slider]}>
              
            </span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
