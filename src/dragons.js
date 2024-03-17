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
export const drgns = [
    new Drgn('Ala Acorazada', 'Misterio', 'Cuevas', 'Si', 12, 7, 50, 10, 4, 0, 11, 1),
    new Drgn('Alaeterna', 'Misterio', 'Laderas de Montañas', 'No se sabe', 0, 0, 0, 0, 0, 0, 0, 0),
    new Drgn('Ala licántropo', 'No se sabe', 'No se sabe', 'No se sabe', 0, 0, 0, 0, 0, 0, 0, 0),
    new Drgn('Albañilero', 'Piedra', 'Cuevas/Selva', 'Si', 0, 0, 0, 6, 0, 0, 0, 0),
    new Drgn('Alacambiante', 'Misterio', 'Bosque', 'No se sabe', 9, 14, 1, 12, 10, 0, 2, 20),
    new Drgn('Buffalord', 'Misterio', 'Planicie', 'Si', 8, 6, 16, 12, 6, -20, 6, 4),
    new Drgn('Caldero', 'Marejada', 'Océano', 'Si', 10, 6, 6, 14, 14, 10, 4, 10),
    new Drgn('Canto Mortal', 'Misterio', 'Isla Melodía y las selvas del sur', 'Si', 16, 17, 16, 13, 8, 0, 10, 4),
    new Drgn('Clavagarras', 'Afilada', 'No se sabe', 'Si', 10, 16, 8, 10, 8, 2, 3, 10),
    new Drgn('Centinela', 'Piedra', 'Vanaheim', 'No', 12, 12, 40, 6, 8, 0, 10, 16),
]
/*
    new Drgn('Cerro Espinoso'),
    new Drgn('Cola Quemante'),
    new Drgn('Colmillo Afilado'),
    new Drgn('Cortaleña'),
    new Drgn('Cortalluvia'),
    new Drgn('Cortatormentas'),
    new Drgn('Cremallerus Espantosus'),
    new Drgn('Cuernatronante'),
    new Drgn('Destripador Carmesí'),
    new Drgn('Destripador Submarino'),
    new Drgn('Destroza Cavernas'),
    new Drgn('Dramillón'),
    new Drgn('Eructcálido'),
    new Drgn('Erupciodón'),
    new Drgn('Espectro de Nieve'),
    new Drgn('Extinguehumo'),
    new Drgn('Furia Nocturna'),
    new Drgn('Furia Luminosa'),
    new Drgn('Garra Mortal'),
    new Drgn('Garratrueno'),
    new Drgn('Gobsucker'),
    new Drgn('Grito Mortal'),
    new Drgn('Gronckle'),
    new Drgn('Gruñón Tambaleante'),
    new Drgn('Gusafuego'),
    new Drgn('Hobglotón'),
    new Drgn('Látigo Afilado'),
    new Drgn('Libélula'),
    new Drgn('Licuador'),
    new Drgn('Mascavientos'),
    new Drgn('Mordida Lúgubre'),
    new Drgn('Mortífero Nadder'),
    new Drgn('Mudraker'),
    new Drgn('Muerdehuevos'),
    new Drgn('Muerte Púrpura'),
    new Drgn('Muerte Roja'),
    new Drgn('Muerte Susurrante'),
    new Drgn('Olfateador'),
    new Drgn('Pesadilla Monstruosa'),
    new Drgn('Pesadilla Voladora'),
    new Drgn('Pisarrocas'),
    new Drgn('Rapidijón'),
    new Drgn('Reptil Alado'),
    new Drgn('Rompehuesos'),
    new Drgn('Salvajibestia'),
    new Drgn('Silkspanner'),
    new Drgn('Shock Marino'),
    new Drgn('Skrill'),
    new Drgn('Sombra Sigilosa'),
    new Drgn('Sombra Sigilosa Alfa'),
    new Drgn('Stinger'),
    new Drgn('Submaridestrozador'),
    new Drgn('Submaripper'),
    new Drgn('Temblor Catastrófico'),
    new Drgn('Terrible Terror'),
    new Drgn('Terror Nocturno'),
    new Drgn('Terror Nocturno Albino'),
    new Drgn('Terror Nocturno Rojo'),
    new Drgn('Tifómerang'),
    new Drgn('Traga Arena'),
    new Drgn('Tramphocico'),
    new Drgn('Triple Ataque'),
    new Drgn('Trueno Tambor')    

]
*/