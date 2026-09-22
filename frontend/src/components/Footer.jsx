import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div
      className="flex flex-col gap-12 text-[#d9d9d9] bg-[#323232] items-center 
    py-16 px-12 mt-10" id='contattaci'
    >
      <div className="w-full grid lg:grid-cols-[1fr_1fr_1fr] gap-10">
        <div className="">
          <a className="" href="/">      
              <div className="mb-6 w-full">
          <p className="flex flex-col text-red-500 italic  font-bold text-3xl">Pomodoro
            <span className="text-green-600 -mt-2">Ristorante</span>
            </p>
            <div className=" text-green-500 border-2 mt-1 w-40 "></div>
        </div>
          </a>
          <p className="hidden mb-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{' '}
            Unde fugit reiciendis recusandae, excepturi aut modi.
          </p>
          <div className="flex gap-4 w-40 items-center">
           <a target='_blank' href="https://www.tiktok.com/@javascriptdazero"> <img src={assets.tiktok_icon} alt="" className='w-11 h-11 bg-white rounded-full'/></a>
           <a target='_blank' href="https://www.instagram.com/ec_web25"><img src={assets.instagram_icon} alt="" className='w-12 h-12 bg-white rounded-full'/></a> 
           <a target='_blank' href="https://www.linkedin.com/in/ec-web-2b62a237b"> <img src={assets.linkedin_icon} alt="" /></a>
          </div>
        </div>
        <div className="flex flex-col item-start">
          <h2 className="text-2xl font-semibold mb-5 text-orange-500">
            Pomodoro Ristorante
          </h2>
          <ul className='cursor-pointer'>
            <a
              className="hover:underline hover:text-orange-500 hover:font-semibold"
              href="/"
            >
              Home
            </a>
            <li className="hover:underline hover:text-orange-500 hover:font-semibold">
              Chi siamo
            </li>
            <li className="hover:underline hover:text-orange-500 hover:font-semibold">
              Delivery
            </li>
            <li className="hover:underline hover:text-orange-500 hover:font-semibold">
              Regole
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-orange-500">
            Contattaci
          </h2>
          <li>+39 012 345 6789</li>
          <li>pomodoro.ristorante@test.com</li>
        </div>
      </div>
      <hr className='h-1 w-full bg-violet-600 border-none'/>
      <p className="text-[#d9d9d9]">
        Copyright © 2023 Pomodoro Ristorante. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
