import { Link, useLocation } from "react-router-dom";
import { headers } from "../contants";


const Headers = () => {
  return (
    <div>
      <nav className=" relative z-2 flex flex-row justify-center text-center p-8">
        {headers.map((item) => (
          <Link
            className=" px-5 font-bold text-fuchsia-700"
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

export default Headers;
