/*
   Created by Miracle Programmer
 */


/*---------------- This is an example of a class component ----------------*/
// import React, {Component} from 'react';
// import axios from "axios";
//
// class Covid19 extends Component {
//
//     // to create a state
//     constructor(props) {
//         super(props);
//         this.state = {
//             covid19: []
//         }
//     };
//
//     // to use axios
//     componentDidMount() {
//         axios.get("https://api.covid19api.com/summary")
//             .then((response) => {
//                 this.setState({
//                     covid19: response.data.Countries
//                 })
//             });
//     };
//
//     render() {
//         return (
//             <div className="container-fluid">
//                 <div className="row mt-3">
//                     <div className="col-12">
//                         <table className="table table-hover table-striped">
//                             <thead className="bg-warning">
//                             <tr>
//                                 <th className="text-white">№</th>
//                                 <th className="text-info">Country</th>
//                                 <th className="text-primary">Country Code</th>
//                                 <th className="text-dark">Total Confirmed</th>
//                                 <th className="text-danger">Total Deaths</th>
//                                 <th className="text-success">Total Recovered</th>
//                                 <th className="text-danger">New Confirmed</th>
//                                 <th className="text-secondary">Date</th>
//                             </tr>
//                             </thead>
//                             {this.state.covid19.map((item, index) => {
//                                 return (
//                                     <tbody>
//                                     <tr>
//                                         <td>{ (index + 1) }</td>
//                                         <td className="text-info">{ item.Country }</td>
//                                         <td className="text-primary">{ item.CountryCode }</td>
//                                         <td className="text-dark">{ item.TotalConfirmed }</td>
//                                         <td className="text-danger">{ item.TotalDeaths }</td>
//                                         <td className="text-success">{ item.TotalRecovered }</td>
//                                         <td className="text-danger">{ item.NewConfirmed }</td>
//                                         <td className="text-dark">{ item.Date.slice(0, 10) + " " + item.Date.slice(12, 19) }</td>
//                                     </tr>
//                                     </tbody>
//                                 )
//                             })}
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default Covid19;


/*---------------- This is an example of arrow function component ----------------*/
import React, { useState, useEffect } from 'react';
import axios from "axios";

const Covid19 = () => {

    // to create a useState
    const [ covid19, setCovid19 ] = useState([]);

    // to use useEffect
    useEffect(() => {
        axios.get('https://api.covid19api.com/summary')
            .then((res) => {
                setCovid19(res.data.Countries);
            });
    }, []);


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-12 col-xl-12 my-3">
                    <table className="table table-hover table-striped">
                        <thead className="bg-info">
                        <tr>
                            <th className="text-white h5">№</th>
                            <th className="text-dark h5">Country</th>
                            <th className="text-dark h5">Country Code</th>
                            <th className="text-warning h5">Total Confirmed</th>
                            <th className="text-danger h5">Total Deaths</th>
                            <th className="text-primary h5">Total Recovered</th>
                            <th className="text-danger h5">New Confirmed</th>
                            <th className="text-secondary h5">Date</th>
                        </tr>
                        </thead>
                        {covid19.map((item, index) => {
                            return (
                                <tbody>
                                <tr>
                                    <td>{ (index + 1) }</td>
                                    <td>{ item.Country }</td>
                                    <td>{ item.CountryCode }</td>
                                    <td className="text-warning">{ item.TotalConfirmed }</td>
                                    <td className="text-danger">{ item.TotalDeaths }</td>
                                    <td className="text-primary">{ item.TotalRecovered }</td>
                                    <td className="text-danger">{ item.NewConfirmed }</td>
                                    <td className="text-secondary">{ item.Date.slice(0, 10) + " " + item.Date.slice(11, 16) }</td>
                                </tr>
                                </tbody>
                            )
                        })}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Covid19;