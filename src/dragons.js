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
    new Drgn('Ala licántropo', 'Unknown', 'No se sabe', 'No se sabe', 0, 0, 0, 0, 0, 0, 0, 0),
    new Drgn('Albañilero', 'Piedra', 'Cuevas/Selva', 'Si', 0, 0, 0, 6, 0, 0, 0, 0),
    new Drgn('Alacambiante', 'Misterio', 'Bosque', 'No se sabe', 9, 14, 1, 12, 10, 0, 2, 20),
    new Drgn('Buffalord', 'Misterio', 'Planicie', 'Si', 8, 6, 16, 12, 6, -20, 6, 4),
    new Drgn('Caldero', 'Marejada', 'Océano', 'Si', 10, 6, 6, 14, 14, 10, 4, 10),
    new Drgn('Canto Mortal', 'Misterio', 'Isla Melodía y las selvas del sur', 'Si', 16, 17, 16, 13, 8, 0, 10, 4),
    new Drgn('Clavagarras', 'Afilada', 'No se sabe', 'Si', 10, 16, 8, 10, 8, 2, 3, 10),
    new Drgn('Centinela', 'Piedra', 'Vanaheim', 'No', 12, 12, 40, 6, 8, 0, 10, 16),
    new Drgn('Cerro Espinoso', 'Afilada', 'Bosques', 'Si', 0, 0, 0, 6, 0, 0, 0, 0),
    new Drgn('Cola Quemante', 'Fogonero', 'Bosques', 'Si', 17, 15, 15, 20, 10, 0, 4, 10),
    new Drgn('Colmillo Afilado', 'Piedra', 'Zonas templadas y bosques abiertos', 'Si', 9, 5, 17, 13, 6, 12, 8, 8),
    new Drgn('Cortaleña', 'Afilada', 'Bosques', 'Si', 34, 12, 8, 21, 8, 0, 3, 13),
    new Drgn('Cortalluvia', 'Afilada', 'Lugares húmedos y lluviosos', 'Si', 8, 8, 6, 12, 10, 6, 5, 14),
    new Drgn('Cortatormentas', 'Afilada', 'No se sabe', 'Si', 18, 20, 14, 21, 8, 0, 12, 30),
    new Drgn('Cremallerus Espantosus', 'Misterio', 'No menciona', 'Si', 12, 10, 10, 14, 6, 4, 6, 22),
    new Drgn('Cuernatronante', 'Rastreadora', 'Bosques', 'Si', 11, 7, 12, 22, 4, 0, 5, 6),
    new Drgn('Destripador Carmesí', 'Piedra', 'No menciona', 'Si', 17, 10, 18, 12, 6, 0, 12, 13),
    new Drgn('Destroza Cavernas', 'Misterio', 'Cavernas subterráneas', 'No', 14, 18, 16, 20, 16, 0, 8, 16),
    new Drgn('Dramillón', 'Misterio', 'Isla Dramillón', 'Si', 18, 14, 8, 20, 40, 0, 6, 8),
    new Drgn('Eructcálido', 'Piedra', 'Volcanes y lugares con yacimientos de metal', 'Si', 8, 4, 20, 14, 6, 0, 15, 5),
    new Drgn('Erupciodón', 'Piedra', 'Volcanes', 'Si', 9, 7, 36, 8, 7, 0, 14, 2),
    new Drgn('Espectro de Nieve', 'Embestida', 'Glaciares y regiones heladas', 'No', 18, 18, 22, 24, 10, 0, 8, 30),
    new Drgn('Extinguehumo', 'Misterio', 'Cuevas', 'No', 6, 8, 6, 6, 3, 0, 8, 15),
    new Drgn('Furia Nocturna', 'Embestida', 'Lugares cálidos', 'Si', 15, 20, 18, 14, 6, 0, 6, 18),
    new Drgn('Furia Luminosa', 'Embestida', 'Mundo Oculto', 15, 20, 18, 14, 6, 0, 6, 18),
    new Drgn('Garra Mortal', 'Embestida', 'Cavernas poco profundas', 'Si', 27, 12, 20, 12, 8, 12, 16, 6),
    new Drgn('Garratrueno', 'Rastreadora', 'Bosques y planicies', 'Si', 0,0,0,0,6,0,0,0),
    new Drgn('Grito Mortal', 'Piedra'),
    new Drgn('Gronckle', 'Piedra'),
    new Drgn('Gruñón Tambaleante', 'Fogonero'),
    new Drgn('Gusafuego', 'Fogonero'),
    new Drgn('Hobglotón', 'Misterio/Fogonero'),
    new Drgn('Látigo Afilado', 'Afilada'),
    new Drgn('Libélula', 'Fogonera'),
    new Drgn('Mordida Lúgubre', 'Afilada'),
    new Drgn('Mortífero Nadder', 'Rastreadora'),
    new Drgn('Mudraker', 'Marejada'),
    new Drgn('Muerte Roja', 'Fogonero'),
    new Drgn('Muerte Susurrante', 'Piedra'),
    new Drgn('Pesadilla Monstruosa', 'Fogonero'),
    new Drgn('Pesadilla Voladora', 'Misterio'),
    new Drgn('Pisarrocas', 'Fogonero'),
    new Drgn('Rapidijón (Jesucristo)', 'Afilada'),
    new Drgn('Reptil Alado', 'Misterio'),
    new Drgn('Rompehuesos', 'Misterio'),
    new Drgn('Salvajibestia', 'Marejada'),
    new Drgn('Shock Marino', 'Marejada'),
    new Drgn('Skrill', 'Embsetida'),
    new Drgn('Sombra Sigilosa', 'Fogonero'),
    new Drgn('Sombra Sigilosa Alfa', 'Fogonero'),
    new Drgn('Submaridestrozador', 'Marejada'),
    new Drgn('Temblor Catastrófico', 'Piedra'),
    new Drgn('Terrible Terror', 'Fogonero'),
    new Drgn('Terror Nocturno', 'Fogonero'),
    new Drgn('Terror Nocturno Albino', 'Fogonero'),
    new Drgn('Terror Nocturno Rojo', 'Fogonero'),
    new Drgn('Tifómerang', 'Fogonero'),
    new Drgn('Traga Arena', 'Misterio'),
    new Drgn('Tramphocico', 'Espanto'),
    new Drgn('Triple Ataque', 'Embestida'),
    new Drgn('Trueno Tambor', 'Marejada')
]