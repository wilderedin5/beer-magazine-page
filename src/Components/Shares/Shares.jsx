import React from 'react';
import Share from './Share/Share';
import style from './Shares.module.scss';

const Shares = (props) => {
    return (
        <div className={style.shares}>
            {
                props.shares.map(share => <Share {...share} />)
            }
        </div>
    )
}

export default Shares;