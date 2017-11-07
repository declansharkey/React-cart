import React from 'react';

const Title = (props) => {

    return(
        <div className="title">
            <div className="steps"></div>
            <div className="main-title">{props.page}</div>
        </div>
    )
}

export default Title;