import SearchIcon from "../../dist/assets/search-solid.svg";

let SearchBar = (props) => {

    return (
        <>
            <div class="row justify-content-center py-4">
                <div class="col-12 col-md-10 col-lg-8">
                    <form class="card card-sm bg-opac-0">
                        <div class="card-body row no-gutters align-items-center">
                            <div class="col-auto text-white">
                                <img className="input-search-icon" src={SearchIcon} alt="search" />
                            </div>

                            <div class="col">
                                <input class="form-control form-control-lg form-control-borderless" type="search"
                                    placeholder={props.placeholder} />
                            </div>

                        </div>
                    </form>
                </div>

            </div>
        </>
    );
};

export default SearchBar;