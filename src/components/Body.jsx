import React from 'react';
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
    new Drgn('Bewilderbeast','Tidal','Oceans / Ice Nests',true,50,'6 on land / 50 underwater',38,60,8,0,48,2),
    new Drgn('Boneknapper','Mistery','Dragon graveyards',true,7,10,'2 / 18 with bones',9,6,0,4,8)
]

export const Body = () => {
    return ( 
        <div>
            <Table drgns={drgns} />
        </div>
    );
}

