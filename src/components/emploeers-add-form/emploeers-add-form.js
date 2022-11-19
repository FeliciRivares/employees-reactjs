import './emploeers-add-form.css'

const EmploeersAddForm =()=>{
    return (
        <div className="app-add-form">
            <h3>Add new emploeers</h3>
            <form 
             className="add-form d-flex">
                <input type="text" 
                    className="form-control new-post-label"
                    placeholder="what he`s name?"  />
                <input type="number" 
                    className="form-control new-post-label"
                    placeholder="how match&" />
                <button type="submit"
                        className="btn btn-outline-light">Add</button>
             </form>
        </div>
    )
}

export default EmploeersAddForm;