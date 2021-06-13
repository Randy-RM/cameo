let MediaCardLoader = () => {
  return (
    <>
      <div className="col-md-3 p-3 my-1">
        <div className="card-film text-white">
          <div className="text-center">
            <div className="card-overlay">
              <div className="card-loader py-2 position-relative">
                <div className="position-absolute top-50 start-50 translate-middle">
                  <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center p-2">
          <p className="h4 text-white">Loading...</p>
          <p className="fw-bold">
            <span className="text-deep-saffron">Ratings : Loading...</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default MediaCardLoader;
