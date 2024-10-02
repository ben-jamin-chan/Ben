import { footer } from "../contants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <nav>
        {footer.map((item) => (
          <Link 
          className=" px-5 font-bold text-color-1 flex-grow"
           key={item.id}
           to={item.url}
           >
            {item.title}
           </Link>
      ))}
      </nav>
    </div>
  )
}

export default Footer;
