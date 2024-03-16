import React, {useState} from 'react';
import { Table } from './Table';

// Defining a dragon
class Drgn {
    constructor(name,type,habitat,trainable,atk,speed,armor,firepower,shotlimit,venom,jawstrength,stealth) {
        this.name = name;
        this.type = type;
        this.habitat = habitat;
        this.trainable = trainable;
        this.atk = atk;
        this.speed = speed;
        this.armor = armor;
        this.firepower = firepower;
        this.shotlimit = shotlimit;
        this.venom = venom;
        this.jawstrength = jawstrength;
        this.stealth = stealth;
    }
}

// Creating the HTYD dragons
const drgns = [
    new Drgn('Armorwing','Mistery','Caves',true,12,7,50,10,4,0,11,1),
    new Drgn('Bewilderbeast','Tidal','Oceans / Ice Nests',true,50,18,38,60,8,0,48,2),
    new Drgn('Boneknapper','Mistery','Dragon graveyards',true,7,10,18,9,6,0,4,8)
]

export const Body = () => {
    const [op, setOp] = useState('<');
    const [val, setVal] = useState(0);
    const [filteredDrgns, setFilteredDrgns] = useState(drgns);

    const opChange = (e) => {
        setOp(e.target.value);
        filterDrgns(e.target.value, val);
    }

    const valChange = (e) => {
        setVal(e.target.value);
        filterDrgns(op, e.target.value);
    }

    const filterDrgns = (operator, value) => {
        const filtered = drgns.filter(drgn => {
            switch(operator) {
                case '<':
                    return drgn.speed < value;
                case '=':
                    return drgn.speed === +value;
                case '>':
                    return drgn.speed > value;
                default:
                    return true;
            }
        });

        setFilteredDrgns(filtered);
    }

    return ( 
        <div>
            <div className='SFilter'>
                <label htmlFor='speedOperator'> Speed </label>
                <select id='speedOperator' value={op} onChange={opChange}>
                    <option value='<'> &#60; </option>
                    <option value='='> = </option>
                    <option value='>'> &#62; </option>
                </select>
                <input type='number' value={val} onChange={valChange} />
            </div>
            <Table drgns={filteredDrgns} />
        </div>
    );
}


