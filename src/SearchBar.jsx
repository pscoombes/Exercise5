import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = (event) => {
            this.props.handleFilterTextChange(event.target.value);
        }
        this.handleInStockOnlyChange = (event) => {
            this.props.handleInStockOnlyChange(event.target.checked);
        }
    }
    render(props) {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.searchDetails.filterText}
                    onChange={this.handleFilterTextChange}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.searchDetails.inStockOnly}
                        onChange={this.handleInStockOnlyChange}
                    />Only show products in stock
                </p>
            </form>
        );
    }
}
