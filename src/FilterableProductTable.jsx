import React from 'react';

import ProductTable from './ProductTable'
import SearchBar from './SearchBar';
import Products from './products';

export default class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filterText: '', inStockOnly: false };
        this.handleFilterTextChange = (filterText) => {
            this.setState({ filterText });
        }
        this.handleInStockOnlyChange = (inStockOnly) => {
            this.setState({ inStockOnly });
        }
    }

    render() {
        return (
            <div>
                <SearchBar
                    searchDetails={this.state}
                    handleInStockOnlyChange={this.handleInStockOnlyChange}
                    handleFilterTextChange={this.handleFilterTextChange}
                />
                <ProductTable products={Products} searchDetails={this.state} />
            </div>
        );
    }
}
