import React from "react";

export const Table = ({drgns}) => {
    return ( 
        <div className="table-container">
            <table className="dragon-table">
                <tr>
                    <th>Name</th>
                    {drgns.map((dragon) => (<td>{dragon.name}</td>))}
                </tr>
                <tr>
                    <th>Class</th>
                    {drgns.map((dragon) => (<td>{dragon.type}</td>))}
                </tr>
                <tr>
                    <th>Habitat</th>
                    {drgns.map((dragon) => (<td>{dragon.habitat}</td>))}
                </tr>
                <tr>
                    <th>Trainable</th>
                    {drgns.map((dragon) => (<td>{dragon.trainable ? 'Yes' : 'No'}</td>))}
                </tr>
                <tr>
                    <th>Attack</th>
                    {drgns.map((dragon) => (<td>{dragon.atk}</td>))}
                </tr>
                <tr>
                    <th>Speed</th>
                    {drgns.map((dragon) => (<td>{dragon.speed}</td>))}
                </tr>
                <tr>
                    <th>Armor</th>
                    {drgns.map((dragon) => (<td>{dragon.armor}</td>))}
                </tr>
                <tr>
                    <th>Firepower</th>
                    {drgns.map((dragon) => (<td>{dragon.firepower}</td>))}
                </tr>
                <tr>
                    <th>Shot Limit</th>
                    {drgns.map((dragon) => (<td>{dragon.shotlimit}</td>))}
                </tr>
                <tr>
                    <th>Venom</th>
                    {drgns.map((dragon) => (<td>{dragon.venom}</td>))}
                </tr>
                <tr>
                    <th>Jaw Strength</th>
                    {drgns.map((dragon) => (<td>{dragon.jawstrength}</td>))}
                </tr>
                <tr>
                    <th>Stealth</th>
                    {drgns.map((dragon) => (<td>{dragon.stealth}</td>))}
                </tr>
            </table>          
        </div>
    );
}