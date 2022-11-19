import EmploeersListItem from '../emploeers-list-item/emploeers-list-item';
import './emploeers-list.css';


    const EmploeersList =()=>{

        return (
            <ul className="app-list list-group">
               < EmploeersListItem/>
               < EmploeersListItem/>
               < EmploeersListItem/>
               < EmploeersListItem/>
            </ul>
        )
    }
export default EmploeersList;