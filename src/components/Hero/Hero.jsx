import banner from '../../assets/images/banner-main.png'

import './hero.css'
import Header from '../Header/Header'
const Hero = () => {

    const addCoin = () => {
        let money = 500000;
        let newBalance = document.getElementById("balance").innerText;
        let newBalanceAmount = parseFloat(newBalance);

        let amount = newBalanceAmount + money;
           document.getElementById("balance").innerText = amount;
    }
    
    return (
        <div>
            <Header></Header>
            <div className="hero h-[480px] bg-black flex flex-col justify-around items-center">
           

           <div className="hero-img w-60">
               <img className='w-full' src={banner} alt="" />
           </div>
           <div className="hero-text text-center">
               <h1 className='text-slate-200 text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
               <p id="taka" className='text-white'></p>
               <p className='text-slate-300 my-6 text-2xl'>Beyond Boundaries Beyond Limits</p>
               <button onClick={addCoin} className='bg-yellow-200 px-4 py-2 rounded-lg'>Claim Free Credit</button>
           </div>
       </div>
        </div>
    );
};

export default Hero