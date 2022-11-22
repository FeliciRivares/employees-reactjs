import EmploeersListItem from '../emploeers-list-item/emploeers-list-item';
import './emploeers-list.css';


    const EmploeersList =({data})=>{
        const elements = data.map(item =>{
            const {id, ...itemProps} = item;
            return(
                <EmploeersListItem
                 key={id}
                {...itemProps}
                onDelete={() => console.log('Deleted')}/>
            )
        })

        return (
            <ul className="app-list list-group">
               {elements}
            </ul>
        )
    }
export default EmploeersList;