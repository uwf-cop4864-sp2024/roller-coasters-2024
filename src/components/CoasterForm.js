import { useState } from 'react';


export function CoasterForm(props) {

    const [coasterName, setCoasterName] = useState("");
    const [coasterLocation, setCoasterLocation] = useState(""); 
    const [coasterUrl, setCoasterUrl] = useState("");

    const handleSubmit = (event) => {props.addCoaster({name: coasterName, location: coasterLocation, url: coasterUrl}); event.preventDefault();};

    const nameChange = (event) => setCoasterName(event.target.value);
    const locationChange = (event) => setCoasterLocation(event.target.value);
    const urlChange = (event) => setCoasterUrl(event.target.value);

    return (
        <div className="container">
            <form method="post" onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                    <label htmlFor="coasterName">Coaster Name</label>
                    <input className="form-control" id="coasterName" name="coasterName" onChange={nameChange} value={coasterName}/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="coasterLocation">Coaster Location</label>
                    <select id="coasterLocation" name="coasterLocation" className="form-select" aria-label="List of locations" onChange={locationChange}>
                        <option value="">Choose a Location</option>
                        <option value="USA">USA</option>
                        <option value="Europe">Europe</option>
                        <option value="Asia">Asia</option>
                    </select>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="coasterUrl">Coaster URL</label>
                    <input className="form-control" id="coasterUrl" name="coasterUrl"  onChange={urlChange} value={coasterUrl}/>
                </div>
                <input type="submit" className="btn btn-primary mt-3" value="Save"/>
            </form>
        </div>
    );
}
