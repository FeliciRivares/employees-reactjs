import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploeersList from '../emploeers-list/emploeers-list';
import EmploeersAddForm from '../emploeers-add-form/emploeers-add-form';


import './app.css';



function App(){

    const data =[
        {name: 'Luna', salary:5000, increase: false},
        {name: 'Kola', salary:7000, increase: true},
        {name: 'Dyna', salary:4000, increase: false},
        {name: 'Runa', salary:9000, increase: false},
    ];
    return (
        <div className='app' >
            <AppInfo/>
            <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
            </div>
                <EmploeersList data={data}/>
                <EmploeersAddForm/>
        
        </div>

    );
} 


export default App