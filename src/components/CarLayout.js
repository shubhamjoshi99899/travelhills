import React from 'react';
import '../car.css'
function CarLayout(props) {
    return <div>
        <div className="header bs1">
            <div className="d-flex justify-content-between">


            </div>
        </div>
        <div className="content">
            {props.children}
        </div>
    </div>;
}

export default CarLayout;
