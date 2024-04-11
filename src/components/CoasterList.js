export function CoasterList(props) {

    return (
        <div className="container">
            <h1 className="mt-3">Roller Coasters</h1>   
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>URL</th>
                    </tr>
                </thead>
                <tbody>
                    {props.coasters.map((coaster, index) => {
                        return (
                            <tr key={index}>
                                <td>{coaster.name}</td>
                                <td>{coaster.location}</td>
                                <td><a href={coaster.url}>{coaster.name}</a></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );

};