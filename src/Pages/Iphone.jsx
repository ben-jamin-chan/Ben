import { iphone, eiffeltower, ben } from "../assets";

const Iphone = () => {
  return (
    <div>
      <div className="grid grid-rows-3 grid-flow-col gap-4 relative">
        <div>
          <img
            className=" backdrop:blur-3xl"
            src={iphone}
          />
        </div>
        <div>
          <img
            src={eiffeltower}
          />
        </div>
        <div>
          <img
            src={ben}
          />
        </div>
        <div className=" lg:text-color-1">
          <h1 className=" font-bold mt-36 size-15 lg:h1 md:h1">Hellow Ben</h1>
        </div>
        </div>
      </div>
  )
}

export default Iphone;
