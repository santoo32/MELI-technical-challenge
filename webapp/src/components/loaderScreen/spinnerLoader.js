import React from 'react'
import "./spinner.scss";

function SpinnerLoader() {
    return (
        <div className="spinner">
        <span className="spinner-inner-1"></span>
        <span className="spinner-inner-2"></span>
        <span className="spinner-inner-3"></span>
      </div>
    )
}

export default SpinnerLoader
