import './news.css'
const News = () => {
    return (
        <div className='bg-slate-100 p-4 rounded-md bg-opacity-25 border border-slate-100'>
           <div className="news-bg h-72 flex justify-center items-center mx-auto bg-white">
            <div className='text-center'>
                <h2 className='bold text-3xl'>Subscribe to our Newsletter</h2>
                <p className='text-neutral-600 my-4'>Get the latest updates and news right in your inbox!</p>
                <form action="#">
                    <input className='border px-8 py-2 rounded-lg mr-2' type="text" placeholder='Enter your email'/>
                    <button className='bg-yellow-200 px-4 py-2 rounded-lg'>Subscribe</button>
                </form>
            </div>
           </div>
        </div>
    );
};

export default News