import React from 'react';
import './GridA.scss';
import Tile from '../components/tile.component';
function GridARoute() {
    return (
        <div className="gridA">
            <Tile gridWidth={3}></Tile>
            <Tile gridWidth={3}></Tile>
            <Tile gridWidth={3}></Tile>
            <Tile gridWidth={3}></Tile>
            <Tile gridWidth={3}></Tile>
            <Tile gridWidth={3}></Tile>
            <Tile gridWidth={3}></Tile>
            <Tile gridWidth={3}></Tile>
        </div>
    )
}

export default GridARoute;
