const Player = ({player}) => {
    
    const {player_name, player_img, country, role, price, handedness} = player;

    return (
        <div className="border p-4 rounded-lg">
            <div className="">
                <div className="h-52"><img className="w-full rounded-xl h-full object-cover" src={player_img} alt="Player" /></div>
                <h1 className="my-2">{player_name}</h1>
                <div className="flex justify-between">
                    <p>{country}</p>
                    <p className="p-2 bg-neutral-200 rounded-md">{role}</p>
                </div>
            </div>
            <hr className="w-10/12 mx-auto my-2"/>
            <div>
                <p>Rating</p>
                <div className="flex justify-between my-2">
                    <p>Hand Preference</p>
                    <p>{handedness}</p>
                </div>
                <div className="flex justify-between">
                    <p>price: {price}</p>
                    <button className="border p-2 rounded-md">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default Player