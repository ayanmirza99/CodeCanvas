import { MdArrowDownward } from "react-icons/md";


const Home = () => {
  return (
    <div className='h-[86vh] w-full flex justify-center items-center text-white text-[2rem] flex-col px-[3vw]'>
      <h1 className='text-[2em] font-semibold'>Idea to software, fast</h1>
      <h1 className='text-[1em] text-[#c2c8cc] font-thin'>Code, Compile, Conquer - Unleash Your Web Development Potential!</h1>
      <button className='pt-[0.3vw] pb-[0.4vw] px-[1vw] text-[0.8em] bg-[#0053A6] rounded-xl mt-[1vw] font-medium transition-all ease-in-out duration-500 button-shadow'>Start creating</button>
      <div className="text-white text-[1.5em] font-thin mt-[2vw]">
        <MdArrowDownward />
      </div>
    </div>
  )
}

export default Home