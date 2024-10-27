import footer_logo from '../../assets/images/logo-footer.png'
const Footer = () => {
    return (
        <div className="bg-slate-950 h-[620px]">
            <div className="empty-space h-1/3">

            </div>
           <div className="w-10/12 mx-auto">
            <div className='flex justify-center align-middle'>
                <img src={footer_logo} alt="footer-logo" />
            </div>
            <div className='flex justify-between my-10'>
                <div className='w-1/3'>
                    <h3 className='text-white mb-2'>About Us</h3>
                    <p className='text-neutral-600 w-72'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div className='w-1/3'>
                    <h3 className='text-white mb-2'>Quick Links</h3>
                    <ul className='text-neutral-600'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className='w-1/3'>
                    <h3 className='text-white'>Subscribe</h3>
                    <p className='text-neutral-600 my-2'>Subscribe to our newsletter for the latest updates.</p>
                    <form action="#">
                    <input className='px-5 py-2 rounded-l-lg' type="text" placeholder='Enter your email'/>
                    <button className='bg-yellow-200 px-3 py-2 rounded-r-lg'>Subscribe</button>
                </form>
                </div>
            </div>
            <div className="copyright border-t-2 py-5">
                <p className='text-neutral-600 text-center'>@2024 Your Company All Rights Reserved.</p>
            </div>
           </div>
        </div>
    );
};

export default Footer