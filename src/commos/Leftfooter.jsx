import { Link } from "react-router-dom"
import { leftFooter } from "../contants"

const Leftfooter = () => {
  return (
    <div>
        <nav className=" grid grid-rows-4 grid-flow-col gap-4 ">
            {leftFooter.map((item) => (
                <Link className=" grid-cols-1 relative flex row-auto px-2 container" 
                key={item.id}
                to={item.url}
                >{item.title}</Link>
            ))}
        </nav>
    </div>
  )
}

export default Leftfooter
