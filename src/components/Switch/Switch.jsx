const Switch = () => {
    return (
        <div className="flex justify-between items-center">
           <div>
            <div><h2>Available Players</h2></div>
            <div className="hidden"><h2>Selected Player</h2></div>
           </div>
           <div>
            <button className="p-2 bg-yellow-200 rounded-md">Available</button>
            <button className="p-4 rounded-md">Selected</button>
           </div>
        </div>
    );
};

export default Switch