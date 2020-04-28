import React, {useState} from 'react';
import style from './Paginator.module.scss';
import cn from "classnames";


const Paginator = ({ totalItemsCount, pageSize = 10, currentPage, onPageChanged }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / pageSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * pageSize + 1;
    let rightPortionPageNumber = portionNumber * pageSize;


    return (
        <div className={style.paginator}>
            {portionNumber > 1 &&
                <button className={style.pageButton} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={cn({
                        [style.selectedPage]: currentPage === p
                    }, style.pageNumber)}
                        key={p}
                        onClick={(e) => {
                            onPageChanged(p);
                        }}>{p}</span>
                })}
            {portionCount > portionNumber &&
                <button className={style.pageButton} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
        </div>
    )
}

export default Paginator;