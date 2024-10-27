const SelectedItem = ({selectedItem}) => {

    const {role, player_img, player_name, handedness} = selectedItem;

    return (
        <div className="border p-4 my-2 flex justify-between items-center rounded-xl">
           <div className="flex items-center">
           <div className="h-20 w-32 mr-4">
                <img className="h-full w-full rounded-xl object-cover" src={player_img} alt="player" />
            </div>
            <div>
                <h2 className="font-bold text-xl">{player_name}</h2>
                <p className="mt-2 text-slate-600">{handedness}</p>
            </div>
           </div>
           <div><p>Delete</p></div>
        </div>
    );
};

export default SelectedItem