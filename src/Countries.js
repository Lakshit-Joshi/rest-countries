import React, { Component } from 'react';
import getApiResponse from './utils/apiHandler';
import { Card, Container } from 'react-bootstrap';
import SearchAndFilter from './SearchAndFilter';
import "./Countries.css";

export class Countries extends Component {

    constructor() {
        super();
        this.countries = [];
        this.state = {
          filteredCountries: [],
        };
      }
    

    performAPICall = async () => {
        let response = {};
        let errored = false;
    
        try {
          response = await getApiResponse(
            'https://restcountries.eu/rest/v2/all', 
            "GET"
            );
        } catch (e) {
          errored = true;
        }

        if (this.validateResponse(errored, response)) {
            return response;
          }
      };


    validateResponse = (errored, response) => {
        if (errored || (!response.length && !response.message)) {
          console.log(
            "Could not fetch countries. Check that the backend is running, reachable and returns valid JSON."
          );
          return false;
        }
    
        if (!response.length) {
          console.log(response.message || "No countries found in database");
          return false;
        }
    
        return true;
      };

    getCountries = async () => {
        let response = await this.performAPICall();
    
        if(response) {
          this.Countries = response.slice(0,16);
          let cloneCountries = [...this.Countries];
          this.setState({filteredCountries: cloneCountries});
        }
      };
    
    componentDidMount() {
        this.getCountries();
    }

    handleSearch = (event) => {
      
    }


    renderCountries = () => {

        let countries = this.state.filteredCountries.map((element) => {

                return(
                    <div className="card-wrapper">
                        <Card key={element.numericode} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={element.flag} style={{height: "192px"}} />
                            <Card.Body>
                                <div className="card-body">
                                    <h5>
                                        {element.name}
                                    </h5>
                                    <p>
                                        Polulation: {element.population}
                                    </p>
                                    <p>
                                        Region: {element.region}
                                    </p>
                                    <p>
                                        Capital: {element.capital}
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                )
            }
        )

        return (countries);
    }
    


    render() {
        return (
                <Container>
                  <SearchAndFilter search={this.handleSearch}/>
                    <div className="countries-wrapper">
                        {this.renderCountries()}
                    </div>
                </Container>
        )
    }
}

export default Countries
