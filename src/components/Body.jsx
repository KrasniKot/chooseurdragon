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
    const [filteredDrgns, setFilteredDrgns] = useState(drgns);

    // Speed Filters
    const [sop, setsOp] = useState('>');
    const [sval, setsVal] = useState(0);

    const sopChange = (e) => {
        setsOp(e.target.value);
        filtersDrgns(e.target.value, sval);
    }

    const svalChange = (e) => {
        setsVal(e.target.value);
        filtersDrgns(sop, e.target.value);
    }

    const filtersDrgns = (operator, value) => {
        const filtered = filteredDrgns.filter(drgn => {
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

    // Attack Filters
    const [aop, setaOp] = useState('>')
    const [aval, setaVal] = useState('0')

    const aopChange = (e) => {
        setaOp(e.target.value);
        filteraDrgns(e.target.value, aval);

    }

    const avalChange = (e) => {
        setaVal(e.target.value);
        filteraDrgns(aop, e.target.value);
    }

    const filteraDrgns = (op, val) => {
        const filtered = filteredDrgns.filter(drgn => {
            switch(op) {
                case '<':
                    return drgn.atk < val;
                case '=':
                    return drgn.atk === +val;
                case '>':
                    return drgn.atk > val;
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
                <select id='speedOperator' value={sop} onChange={sopChange}>
                    <option value='<'> &#60; </option>
                    <option value='='> = </option>
                    <option value='>'> &#62; </option>
                </select>
                <input type='number' value={sval} onChange={svalChange} />
            </div>

            <div className='AFilter'>
                <label htmlFor='attackOperator'> Attack </label>
                <select id='attackOperator' value={aop} onChange={aopChange}>
                    <option value='<'> &#60; </option>
                    <option value='='> = </option>
                    <option value='>'> &#62; </option>
                </select>
                <input type='number' value={aval} onChange={avalChange} />
            </div>

            <Table drgns={filteredDrgns} />

        </div>
    );
}


