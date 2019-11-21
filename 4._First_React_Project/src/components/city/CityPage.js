import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export default class CitiesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            loading: true
        };
    }

    componentDidMount() {
        fetch("https://indian-cities-api-nocbegfhqg.now.sh/cities")
            .then(response => response.json())
            .then(cities => this.setState({cities}));
    }

    render() {
     /*    const hardCodedCities = [
            {name: "Copenhagen", language: "Danish", country: "Denmark"},
            {name: "Paris", language: "French", country: "France"},
        ]; */
        
        const {cities} = this.state;

        return (
            <div>
               {/*  <table>
                <tbody>
                    <tr>
                        <th>City</th>
                        <th>State</th>
                        <th>District</th>
                    </tr>
                     { cities.map((city, index) => {
                            return (
                                <tr key={"cityrow" + index}>
                                    <td>{city.City}</td>
                                    <td>{city.State}</td>
                                    <td>{city.District}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table> */}
                <div className='sweet-loading'>
                    <ClipLoader
                    css={override}
                    sizeUnit={"px"}
                    size={150}
                    color={'#123abc'}
                    loading={this.state.loading}
                    />
                </div> 
                <ReactTable
                    columns={[
                        {
                            Header: "City",
                            accessor: "City"
                        },
                        {
                            Header: "State",
                            accessor: "State"

                        },
                        {
                            Header: "District",
                            accessor: "District"
                        }
                    ]}

                    data={cities}
                />
            </div>
        );
    }
}