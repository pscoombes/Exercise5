import React from 'react';

const ProductRow = (props) => {
    return (
        <tr>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
            <td>{props.product.name}</td>
        </tr>
    );
}
 
export default ProductRow;