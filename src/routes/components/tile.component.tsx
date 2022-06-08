import React from 'react';
type TileProps = {
    gridWidth: number
}

const Tile = ({ gridWidth }: TileProps) => {
    return (
        <div className={`item item-width-${gridWidth}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quo dolorum sit aliquid corrupti explicabo.
        </div>
    );
}

export default Tile;
