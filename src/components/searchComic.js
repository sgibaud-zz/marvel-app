import React, {Component} from 'react';
import SearchIcon from '@material-ui/icons/Search';

import '../css/searchBarstyle.css';

// function recherche lié à la page Comics
class SearchComic extends Component {

    constructor(props){
        super(props);

        this.state = {
            inputText:''
        }
    }

    handleChange = (event) => {
        this.setState({inputText:event.target.value})
    }

    render(){
        return(
            <div className="searchBar">
                <input
                    id="searchInput"
                    onChange={this.handleChange}
                    type='text'
                    placeholder="Enter the name of your favourite Marvel Comics"
                    value={this.state.inputText}
                ></input>
                <button
                id="searchButton"
                onClick={() => this.props.handleSearch(this.state.inputText)}
                > <SearchIcon fontSize="small"/> GO!</button>
            </div>
        )
    }
}

export default SearchComic;