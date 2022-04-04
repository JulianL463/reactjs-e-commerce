import React from 'react'

const Loader = ({ className }) => {
    return (
        <div className={className}>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader