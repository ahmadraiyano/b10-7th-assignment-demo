const Selected = ({selected}) => {
    return (
        <div className="w-full min-h-[480px]">
           <div>
            {selected.length}
           </div>
           <button className="p-2 bg-yellow-200 rounded-md my-8">Add More Player</button>
        </div>
    );
};

export default Selected