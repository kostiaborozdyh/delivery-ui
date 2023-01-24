import React from 'react';
import {getPagesArray} from "../../utils/pages";

function Pagination({totalPages, page, setPage}) {
    const changePage = (p) => {
        if(p<1){
            setPage(1)
        } else if(p>totalPages){
            setPage(totalPages)
        } else {
            setPage(p)
        }

    }
    const pagesArray = getPagesArray(totalPages)
    return (
        totalPages > 1
            ?
            <div className="row justify-content-center">
                <div className="col-md-auto">
                    <nav>
                        <ul className="pagination">
                            <li className="page-item">
                                <button className="page-link" onClick={() => changePage(page - 1)}>previous</button>
                            </li>
                            {pagesArray.map(p =>
                                <li key={p} className={page === p ? 'page-item active' : 'page-item'}>
                                    <button className="page-link" onClick={() => changePage(p)}>{p}
                                    </button>
                                </li>
                            )}
                            <li className="page-item">
                                <button className="page-link" onClick={() => changePage(page + 1)}>next</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            :
            <div></div>
    );
}

export default Pagination;