import React, {useState} from 'react';
import { Table } from './Table';

import { drgns } from '../dragons';

export const Body = () => {

    // Dragon that meet the filter
    const [sfiltered, setsFilteredDrgns] = useState(drgns); // Speed
    const [afiltered, setaFilteredDrgns] = useState(drgns); // Attack
    const [tfiltered, settFilteredDrgns] = useState(drgns); // Trainable
    const [arfiltered, setarFilteredDrgns] = useState(drgns); // Armor
    const [ffiltered, setfFilteredDrgns] = useState(drgns); // Fire Power
    const [shfiltered, setshFilteredDrgns] = useState(drgns); // Shot Limit
    const [vfiltered, setvFilteredDrgns] = useState(drgns); // venom
    const [jfiltered, setjFilteredDrgns] = useState(drgns); // Jaw Strength
    const [stfiltered, setstFilteredDrgns] = useState(drgns); // Stealth

    // Speed Filters
    const [sop, setsOp] = useState();
    const [sval, setsVal] = useState();

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
    const [aop, setaOp] = useState();
    const [aval, setaVal] = useState();

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
        filtertDrgns(e.target.value);
    }

    const filtertDrgns = (op) => {
        const filtered = drgns.filter(drgn => {
            return drgn.trainable === op;
        });
    
        settFilteredDrgns(filtered);
    }

    // Armor Filters
    const [arop, setarOp] = useState();
    const [arval, setarVal] = useState();

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
    const [fop, setfOp] = useState();
    const [fval, setfVal] = useState();

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
    const [shop, setshOp] = useState();
    const [shval, setshVal] = useState();
    
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
                case '>':
                    return drgn.firepower > val;
                default:
                    return true;
            }
        });
    
        setshFilteredDrgns(filtered);
    }

        // Venom Filters
        const [vop, setvOp] = useState();
        const [vval, setvVal] = useState();
    
        const vopChange = (e) => {
            setvOp(e.target.value);
            filtervDrgns(e.target.value, vval);
    
        }
    
        const vvalChange = (e) => {
            setvVal(e.target.value);
            filtervDrgns(vop, e.target.value);
        }
    
        const filtervDrgns = (op, val) => {
            const filtered = drgns.filter(drgn => {
                switch(op) {
                    case '<':
                        return drgn.venom < val;
                    case '>':
                        return drgn.venom > val;
                    default:
                        return true;
                }
            });
    
            setvFilteredDrgns(filtered);
        }

        // Jaw Strength Filters
        const [jop, setjOp] = useState();
        const [jval, setjVal] = useState();
    
        const jopChange = (e) => {
            setjOp(e.target.value);
            filterjDrgns(e.target.value, jval);
    
        }
    
        const jvalChange = (e) => {
            setjVal(e.target.value);
            filterjDrgns(jop, e.target.value);
        }
    
        const filterjDrgns = (op, val) => {
            const filtered = drgns.filter(drgn => {
                switch(op) {
                    case '<':
                        return drgn.venom < val;
                    case '>':
                        return drgn.venom > val;
                    default:
                        return true;
                }
            });
    
            setjFilteredDrgns(filtered);
        }

            // Jaw Strength Filters
            const [stop, setstOp] = useState();
            const [stval, setstVal] = useState();
        
            const stopChange = (e) => {
                setstOp(e.target.value);
                filterstDrgns(e.target.value, stval);
        
            }
        
            const stvalChange = (e) => {
                setstVal(e.target.value);
                filterstDrgns(stop, e.target.value);
            }
        
            const filterstDrgns = (op, val) => {
                const filtered = drgns.filter(drgn => {
                    switch(op) {
                        case '<':
                            return drgn.venom < val;
                        case '>':
                            return drgn.venom > val;
                        default:
                            return true;
                    }
                });
        
                setstFilteredDrgns(filtered);
            }
    
    let farrays = [sfiltered, afiltered, tfiltered, arfiltered, ffiltered, shfiltered, vfiltered, jfiltered, stfiltered];

    return ( 
        <div>

            <div className='TFilter'>
                <select id='trainableOperator' value={top} onChange={topChange}>
                    <option value='Si'>Trainable</option>
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
                <input type='number' value={shval} onChange={valshChange} />
            </div>

            <div className='VFilter'>
                <label htmlFor='venomOperator'> Venom </label>
                <select id='venomOperator' value={vop} onChange={vopChange}>
                    <option value='<'> &#60; </option>
                    <option value='>'> &#62; </option>
                </select>
                <input type='number' value={vval} onChange={vvalChange} />
            </div>

            <div className='JFilter'>
                <label htmlFor='jawOperator'> Jaw Strength </label>
                <select id='jawOperator' value={jop} onChange={jopChange}>
                    <option value='<'> &#60; </option>
                    <option value='>'> &#62; </option>
                </select>
                <input type='number' value={jval} onChange={jvalChange} />
            </div>

            <div className='STFilter'>
                <label htmlFor='STOperator'> Stealth </label>
                <select id='STOperator' value={stop} onChange={stopChange}>
                    <option value='<'> &#60; </option>
                    <option value='>'> &#62; </option>
                </select>
                <input type='number' value={stval} onChange={stvalChange} />
            </div>

            <Table drgns={drgns.filter(d => {return farrays.every(farray => {return farray.some(fd => { return d.name === fd.name})})})} />
        </div>
    );
}


