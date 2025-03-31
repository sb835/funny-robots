import React from 'react';
import './Searchbox.css';

function Searchbox({ searchfield, searchChange }) {
    return (
        <div className="div1">
            <input
                className="input1"
                type="search"
                placeholder="search robots"
                onChange={searchChange}
            />
        </div>
    );
}

export default Searchbox;
