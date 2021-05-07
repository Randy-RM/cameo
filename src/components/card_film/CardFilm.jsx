import captainAmerica from "../../dist/img/captain_america.jpg";

let CardFilm = () => {
    return (
        <>
            <div className="col-md-3 p-3 my-1">
                <div className="card-film text-white">
                    <div className="text-center">
                        <div className="card-overlay">
                            <p className="card-img py-2">
                                <img src={captainAmerica} alt="" />
                            </p>
                            <div className="overlay rounded">
                                <p className="card-text-overlay">See more</p>
                            </div>
                        </div>
                        <h3 className="h4">Captain América</h3>
                        <p className="fw-bold">Note : 8.5</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardFilm;