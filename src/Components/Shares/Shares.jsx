import React from 'react';
import Share from './Share/Share';
import style from './Shares.module.scss';

const Shares = (props) => {
    const shareId = props.match.params.id;
    return (
        <div className={style.shares}>
            { !shareId ?
                props.shares.map(share => <Share {...share} />)
                :
                props.shares.filter(share => String(share.id) === shareId).map(share => <Share deleteCommentOfShares={props.deleteCommentOfShares} toggleLikeCommentOfShares={props.toggleLikeCommentOfShares} {...share} shareOpened={shareId} />)
            }
        </div>
    )
}

export default Shares;