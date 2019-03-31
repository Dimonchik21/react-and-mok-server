import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (
            <div className="content_bar__sorting">
                Сортировка:
                <select>
                    <option>Избраные</option>
                    <option>Новые</option>
                </select>
            </div>
        );
    }
}

export default Sort;