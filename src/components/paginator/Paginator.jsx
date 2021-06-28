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
