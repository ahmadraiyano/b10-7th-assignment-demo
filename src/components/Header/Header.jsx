import logo from '../../assets/images/logo.png'
const Header = () => {
    return (
        <div class="flex justify-between items-center p-4">
            <img src={logo} alt="logo" />
            <div className="flex gap-2 items-center">
                <ul className="flex gap-2">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Fixture</a></li>
                    <li><a href="#">Teams</a></li>
                    <li><a href="#">Schedules</a></li>
                </ul>
                <div class="flex border p-2"><p><span>0</span><span class="mx-2">Coin</span></p>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header