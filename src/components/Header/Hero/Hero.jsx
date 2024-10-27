import banner from '../../../assets/images/banner-main.png'

import './hero.css'
const Hero = () => {
    
    return (
        <div className="hero h-[480px] bg-black flex flex-col justify-around items-center">
           

            <div className="hero-img w-60">
                <img className='w-full' src={banner} alt="" />
            </div>
            <div className="hero-text text-center">
                <h1 className='text-slate-200 text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-slate-300 my-6 text-2xl'>Beyond Boundaries Beyond Limits</p>
                <button className='bg-yellow-200 px-4 py-2 rounded-lg'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Hero