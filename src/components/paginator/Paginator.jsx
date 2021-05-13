import { Pagination } from "react-bootstrap";
import ReactPaginate from "react-paginate";

let Paginator = (props) => {

    return (
        <>
            <div class="py-2 bg-pine-tree">
                <div class="container">
                    <div class="row my-5">
                        <div class="col-12 col-md-10 col-lg-8">
                            <div>
                                <Pagination size="sm">
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

        </>
    );
};

export default Paginator;