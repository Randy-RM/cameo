import { FaSearch } from "react-icons/fa";

let SearchBar = (props) => {
  return (
    <>
      <div className="row justify-content-center py-4">
        <div className="col-12 col-md-10 col-lg-8">
          <form className="card card-sm bg-opac-0">
            <div className="card-body row no-gutters align-items-center">
              <div className="col-auto text-white fs-1 fw-bolder">
                <FaSearch />
              </div>

              <div className="col">
                <input
                  className="form-control form-control-lg form-control-borderless"
                  type="search"
                  placeholder={props.placeholder}
                  onChange={props.handleSearch}
                  value={props.searchBar}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
