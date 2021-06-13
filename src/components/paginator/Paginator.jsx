import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState, useEffect } from "react";

let Paginator = (props) => {
  let [page, setPage] = useState(props.page);
  let [totalPages, setTotalPages] = useState(props.totalPages);

  useEffect(() => {
    setTotalPages(props.totalPages);
  }, [props.totalPages]);

  let previousPage = () => {
    if (page === 1) {
      setPage(page);
      return page;
    }
    setPage(page - 1);
    return page - 1;
  };
  let nextPage = () => {
    if (page === totalPages) {
      setPage(totalPages);
      return totalPages;
    }
    setPage(page + 1);
    return page + 1;
  };

  return (
    <>
      <div className="py-2 bg-pine-tree">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li
              className="page-item"
              onClick={() => props.handleClickPagination(previousPage())}
            >
              <span className="page-link">
                <FaAngleLeft />
              </span>
            </li>
            <li className="page-item active">
              <span className="page-link">{`${page}/${totalPages}`}</span>
            </li>
            <li
              className="page-item"
              onClick={() => props.handleClickPagination(nextPage())}
            >
              <span className="page-link">
                <FaAngleRight />
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Paginator;

/*
<div class="py-2 bg-pine-tree">
                <div class="container">
                    <div class="row my-5">
                        <div class="col-xs-10 col-sm-10 col-md-10 col-lg-8">
                            <div>
                                <Pagination>
                                    <Pagination.First />
                                    <Pagination.Prev />
                                    <Pagination.Item>{1}</Pagination.Item>
                                    <Pagination.Ellipsis />

                                    <Pagination.Item>{10}</Pagination.Item>
                                    <Pagination.Item>{11}</Pagination.Item>
                                    <Pagination.Item className="active">{12}</Pagination.Item>
                                    <Pagination.Item>{13}</Pagination.Item>

                                    <Pagination.Ellipsis />
                                    <Pagination.Item>{20}</Pagination.Item>
                                    <Pagination.Next />
                                    <Pagination.Last />
                                </Pagination>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="py-2 bg-pine-tree">
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
*/
