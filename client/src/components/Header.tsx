import { BsMoonStars } from "react-icons/bs";

const Header = () => {
  return (
    <nav className='h-[14vh] w-full justify-between flex items-center text-[2rem] text-white py-[2vw] px-[2vw]'>
        <div className='text-[2em] font-extralight font-[Header]'>CodeCanvas</div>
        <div className="relative">
        <div className="text-[0.7em] text-[#0079f2]">
          <BsMoonStars/>
        </div>
        <div className="h-[150px] w-[150px] absolute mt-[0.5vw] right-0 rounded-lg bg-[red]"></div>
        </div>

    </nav>
  )
}

export default Header