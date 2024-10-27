import SelectedItem from '../SelectedItem/SelectedItem'
const Selected = ({selected}) => {
    return (
        <div className="w-full min-h-[480px]">
           <div>
            {selected.length}
           </div>
           
           {
            selected.map(selectedItem => <SelectedItem key={selectedItem.id} selectedItem={selectedItem}></SelectedItem>)
           }
           <button className="p-2 bg-yellow-200 rounded-md my-8">Add More Player</button>
           <div className="h-60"></div>
        </div>
    );
};

export default Selected