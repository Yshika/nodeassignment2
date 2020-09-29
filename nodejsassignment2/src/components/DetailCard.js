import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const DetailCard = (props) => {
    const detail = props.detail;
    // console.log(detail.filename);
    const img = require(`../../../assests/${detail.filename}`)

    return (
        <div className="card-container">
            <img src={img} height="200px" alt="ProfilePicture" />
            <div className="desc">
                <h2>
                    <Link to={`/show-details/${detail._id}`} style={{ color: "lightblue" }}>
                        {detail.name}
                    </Link>
                </h2>
                <h3>{detail.email}</h3>
                <p>{detail.mobile}</p>
            </div>
        </div>
    )
};

export default DetailCard;