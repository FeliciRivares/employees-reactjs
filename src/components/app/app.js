import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploeersList from '../emploeers-list/emploeers-list';
import EmploeersAddForm from '../emploeers-add-form/emploeers-add-form';


import './app.css';



function App(){
    return (
    <div className='app' >
        <AppInfo/>
        <div className="search-panel">
           <SearchPanel/>
           <AppFilter/>
        </div>
             <EmploeersList/>
             <EmploeersAddForm/>
       
    </div>

    );
} 


export default App