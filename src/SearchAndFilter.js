import React from 'react';
import { Navbar} from 'react-bootstrap';


export class SearchAndFilter extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             searchQuery: "",
             region: "Filter by Region"
        }
    }
    

    handleSearchSubmit = (event) => {
        event.preventDefault();
        this.setState({searchQuery: event.target.value})
        this.props.search(event);
    }

    handleRegionSubmit = (event) => {
        event.preventDefault();
        this.setState({region: event.target.value})
    }

    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg" style={{display:"flex", justifyContent: "space-between"}}>
                        <input type="text" value={this.state.searchQuery} onChange={this.handleSearchSubmit} />
                        <select value={this.state.region} onChange={this.handleRegionSubmit}>
                            <option>Filter by Region</option>
                            <option>Africa</option>
                            <option>America</option>
                            <option>Asia</option>
                            <option>Europe</option>
                            <option>Oceania</option>
                        </select>
                </Navbar>
            </div>
        )
    }
}

export default SearchAndFilter

