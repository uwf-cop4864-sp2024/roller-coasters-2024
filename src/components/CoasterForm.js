export function Navbar() {

    return (
        <div class="container">
            <form method="post">
                <div class="form-group mt-3">
                    <label for="coasterName">Coaster Name</label>
                    <input class="form-control" id="coasterName" name="coasterName" value=""/>
                </div>
                <div class="form-group mt-3">
                    <label for="coasterLocation">Coaster Location</label>
                    <select id="coasterLocation" name="coasterLocation" class="form-select" aria-label="List of locations">
                        <option value="">Choose a Location</option>
                        <option value="USA">USA</option>
                        <option value="Europe">Europe</option>
                        <option value="Asia">Asia</option>
                    </select>
                </div>
                <div class="form-group mt-3">
                    <label for="coasterUrl">Coaster URL</label>
                    <input class="form-control" id="coasterUrl" name="coasterUrl" value=""/>
                </div>
                <input type="submit" class="btn btn-primary mt-3" value="Save"/>
            </form>
        </div>
    );
}
