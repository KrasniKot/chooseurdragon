import React from "react";

export const Table = ({drgns}) => {
    return ( 
        <div className="table-container">
            <table className="dragon-table">
                <tr className='gray'>
                    <th>Name</th>
                    {drgns.map((dragon) => (<td>{dragon.name}</td>))}
                </tr>
                <tr>
                    <th>Class</th>
                    {drgns.map((dragon) => (<td>{dragon.type}</td>))}
                </tr>
                <tr className='gray'>
                    <th>Habitat</th>
                    {drgns.map((dragon) => (<td>{dragon.habitat}</td>))}
                </tr>
                <tr>
                    <th>Trainable</th>
                    {drgns.map((dragon) => (<td>{dragon.trainable}</td>))}
                </tr>
                <tr className='gray'>
                    <th>Attack</th>
                    {drgns.map((dragon) => (<td>{dragon.atk}</td>))}
                </tr>
                <tr>
                    <th>Speed</th>
                    {drgns.map((dragon) => (<td>{dragon.speed}</td>))}
                </tr>
                <tr className='gray'>
                    <th>Armor</th>
                    {drgns.map((dragon) => (<td>{dragon.armor}</td>))}
                </tr>
                <tr>
                    <th>Firepower</th>
                    {drgns.map((dragon) => (<td>{dragon.firepower}</td>))}
                </tr>
                <tr className='gray'>
                    <th>Shot Limit</th>
                    {drgns.map((dragon) => (<td>{dragon.shotlimit}</td>))}
                </tr>
                <tr>
                    <th>Venom</th>
                    {drgns.map((dragon) => (<td>{dragon.venom}</td>))}
                </tr>
                <tr className='gray'>
                    <th>Jaw Strength</th>
                    {drgns.map((dragon) => (<td>{dragon.jawstrength}</td>))}
                </tr>
                <tr>
                    <th>Stealth</th>
                    {drgns.map((dragon) => (<td>{dragon.stealth}</td>))}
                </tr>
            </table>
            Results: {drgns.length}
        </div>
    );
}