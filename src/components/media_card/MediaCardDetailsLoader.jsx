let MediaCardDetailsLoader = () => {
  return (
    <>
      <div className="col-md-4 p-3 my-2">
        <div className="card-film-detail text-light">
          <div className="card-img bg-deep-saffron">
            <div className="loader">
              <div className="">
                <div className="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-2">
          <p className="text-center h4 fw-bold text-deep-saffron">Loading...</p>
        </div>
        <div className="text-center">
          <p className="h4 fw-bold text-deep-saffron">Loading</p>
          <p className="">
            <span className="text-deep-saffron">...</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default MediaCardDetailsLoader;
