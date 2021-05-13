import captainAmerica from "../../dist/img/captain_america.jpg";
import { useState, useEffect } from 'react';
import SearchBar from "../search/SearchBar.jsx";
import MoviesSection from "../movie_section/MoviesSection.jsx";
import Paginator from "../paginator/Paginator.jsx";

let Movies = (props) => {

    const apiKey = "54476c52f6659a1c87aca096a4365b14";
    const apiUrl = "https://api.themoviedb.org";

    //https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1

    const discoverMoviesUrl = `${apiUrl}/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;
    //const MoviesApiUrls = { "discoverMoviesUrl": discoverMoviesUrl };
    const MoviesApiUrls = [discoverMoviesUrl];

    let [movieList, setMovieList] = useState([]);
    let [page, setPage] = useState([]);
    let [totalPages, setTotalPages] = useState([]);
    let [totalResults, setTotalResults] = useState([]);

    async function fetchData() {
        try {
            await Promise.all(MoviesApiUrls.map((url) =>
                fetch(url).then(response => response.json())
            )).then(data => {
                setMovieList(data[0].results);
                setPage(data[0].page);
                setTotalPages(data[0].total_pages);
                setTotalResults(data[0].total_results);
            })
        } catch (error) {
            console.error("erreur de connection");
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log(movieList, page, totalPages, totalResults);

    return (
        <>
            <div className="py-5 bg-pine-tree text-light">
                <div class="container py-5 mt-5">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-10 col-lg-8">
                            <h1 class="text-center size-hero">Movies</h1>
                        </div>
                    </div>
                    <SearchBar placeholder="Search Movie(s)" />
                </div>
            </div>

            <MoviesSection
                backgroundColor="bg-pine-tree"
                movies={movieList}
                handleClickMovieCard={props.handleClickMovieCard}
            />

            <div class="py-2 bg-pine-tree">
                <div class="container">
                    <div class="row my-5">
                        <div class="col-12 col-md-10 col-lg-8">
                            <div>
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Paginator />
        </>
    );
};

export default Movies;