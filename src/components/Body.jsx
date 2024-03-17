import React, {useState} from 'react';
import { Table } from './Table';

import { drgns } from '../dragons';

export const Body = () => {
    let fdrgns = [];

    const [sfiltered, setsFilteredDrgns] = useState(drgns);
    const [afiltered, setaFilteredDrgns] = useState(drgns);
    const [tfiltered, settFilteredDrgns] = useState(drgns);
    const [arfiltered, setarFilteredDrgns] = useState(drgns);
    const [ffiltered, setfFilteredDrgns] = useState(drgns);
    const [shfiltered, setshFilteredDrgns] = useState(drgns);


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
        const sfiltered = drgns.filter(drgn => {
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

        // setFilteredDrgns(filtered);
        setsFilteredDrgns(sfiltered);
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
        const filtered = drgns.filter(drgn => {
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

        setaFilteredDrgns(filtered);
    }

    // Trainable Filters
    const [top, settOp] = useState('Yes');

    const topChange = (e) => {
        settOp(e.target.value);
        filtertDrgns(e.target.value)
    }

    const filtertDrgns = (op) => {
        const filtered = drgns.filter(drgn => {
            return drgn.trainable === true ? op === 'Yes' : drgn.trainable === false;
        });
    
        settFilteredDrgns(filtered);
    }

    // Armor Filters
    const [arop, setarOp] = useState('>')
    const [arval, setarVal] = useState('0')

    const aropChange = (e) => {
        setarOp(e.target.value);
        filterarDrgns(e.target.value, arval);

    }

    const arvalChange = (e) => {
        setarVal(e.target.value);
        filterarDrgns(aop, e.target.value);
    }

    const filterarDrgns = (op, val) => {
        const filtered = drgns.filter(drgn => {
            switch(op) {
                case '<':
                    return drgn.armor < val;
                case '>':
                    return drgn.armor > val;
                default:
                    return true;
            }
        });

        setarFilteredDrgns(filtered);
    }

    // Firepower Filters
    const [fop, setfOp] = useState('>')
    const [fval, setfVal] = useState('0')

    const opfChange = (e) => {
        setfOp(e.target.value);
        filterfDrgns(e.target.value, fval);

    }

    const valfChange = (e) => {
        setfVal(e.target.value);
        filterfDrgns(fop, e.target.value);
    }

    const filterfDrgns = (op, val) => {
        const filtered = drgns.filter(drgn => {
            switch(op) {
                case '<':
                    return drgn.firepower < val;
                case '>':
                    return drgn.firepower > val;
                default:
                    return true;
            }
        });

        setfFilteredDrgns(filtered);
    }

    // Shot Limit Filters
    const [shop, setshOp] = useState('>')
    const [shval, setshVal] = useState('0')
    
    const opshChange = (e) => {
        setshOp(e.target.value);
        filtershDrgns(e.target.value, shval);
    }
    
    const valshChange = (e) => {
        setshVal(e.target.value);
        filtershDrgns(shop, e.target.value);
    }
    
    const filtershDrgns = (op, val) => {
        const filtered = drgns.filter(drgn => {
            switch(op) {
                case '<':
                    return drgn.firepower < val;
                case '=':
                    return drgn.firepower === +val;
                case '>':
                    return drgn.firepower > val;
                default:
                    return true;
            }
        });
    
        setshFilteredDrgns(filtered);
    }

    const farrays = [sfiltered, afiltered, tfiltered, arfiltered, ffiltered, shfiltered];
    fdrgns = drgns.filter(d => {return farrays.every(farray => {return farray.some(fd => { return d.name === fd.name})})});


    return ( 
        <div>

            <div className='TFilter'>
                <select id='trainableOperator' value={top} onChange={topChange}>
                    <option value='Yes'>Trainable</option>
                    <option value='No'>No trainable</option>
                </select>
            </div>

            <div className='AFilter'>
                <label htmlFor='attackOperator'> Attack </label>
                <select id='attackOperator' value={aop} onChange={aopChange}>
                    <option value='<'> &#60; </option>
                    <option value='>'> &#62; </option>
                </select>
                <input type='number' value={aval} onChange={avalChange} />
            </div>

            <div className='SFilter'>
                <label htmlFor='speedOperator'> Speed </label>
                <select id='speedOperator' value={sop} onChange={sopChange}>
                    <option value='<'> &#60; </option>
                    <option value='>'> &#62; </option>
                </select>
                <input type='number' value={sval} onChange={svalChange} />
            </div>

            <div className='ARFilter'>
                <label htmlFor='armorOperator'> Armor </label>
                <select id='armorOperator' value={arop} onChange={aropChange}>
                    <option value='<'> &#60; </option>
                    <option value='>'> &#62; </option>
                </select>
                <input type='number' value={arval} onChange={arvalChange} />
            </div>

            <div className='FFilter'>
                <label htmlFor='firepowerOperator'> Firepower </label>
                <select id='firepowerOperator' value={fop} onChange={opfChange}>
                    <option value='<'> &#60; </option>
                    <option value='>'> &#62; </option>
                </select>
                <input type='number' value={fval} onChange={valfChange} />
            </div>

            <div className='SHFilter'>
                <label htmlFor='shotlimitOperator'> Shot Limit </label>
                <select id='shotlimitOperator' value={shop} onChange={opshChange}>
                    <option value='<'> &#60; </option>
                    <option value='>'> &#62; </option>
                </select>
                <input type='number' value={fval} onChange={valshChange} />
            </div>

            <Table drgns={fdrgns} />

        </div>
    );
}


