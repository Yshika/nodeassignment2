import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DetailCard from './DetailCard';

class ShowDetailList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: []
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:8082/api/details')
            .then(res => {
                this.setState({
                    details: res.data
                })
            })
            .catch(err => {
                console.log('Error from ShowDetailList####', err);
            })
    };


    render() {
        const details = this.state.details;
        // console.log("PrintDetail: " + details);
        let detailList;

        if (!details) {
            detailList = "there is no profile record!";
        } else {
            detailList = details.map((detail, k) =>
                <DetailCard detail={detail} key={k} />
            );
        }

        return (
            <div className="ShowDetailList">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                            <h2 className="display-4 text-center">Profile's List</h2>
                        </div>

                        <div className="col-md-11">
                            <Link to="/create-details" className="btn btn-outline-warning float-right">
                                + Add New Profile
              </Link>
                            <br />
                            <br />
                            <hr />
                        </div>

                    </div>

                    <div className="list">
                        {detailList}
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowDetailList;