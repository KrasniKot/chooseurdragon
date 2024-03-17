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
    new Drgn('Grito Mortal', 'Piedra', 'Bajo tierra, en túneles', 'No', 16, 8, 20, 10, 2, 10, 11, 14),
    new Drgn('Gronckle', 'Piedra', 'Bosques, Cuevas', 'Si', 8, 4, 20, 14, 6,0,8,5),
    new Drgn('Gruñón Tambaleante', 'Fogonero', 'Bosques en planicies', 'Si', 18, 14, 6, 18, 13, 0, 7, 12),
    new Drgn('Gusafuego', 'Fogonero', 'Agujeros en la tierra', 'No', 16, 12, 15, 30, 6, 0, 0, 0),
    new Drgn('Hobglotón', 'Misterio/Fogonero', 'No menciona', 'Si', 8, 8, 4, 6, 28, 0, 12, 18),
    new Drgn('Látigo Afilado', 'Afilada', 'isla de las doncellas aladas', 'Si', 18, 18, 32, 12, 10, 8, 7, 5),
    new Drgn('Libélula', 'Fogonera', 'Viven cerca de cuerpos de agua y arbustos', 'Si', 14, 6, 3, 10, 6, 40, 2, 7),
    new Drgn('Mordida Lúgubre', 'Afilada', 'Vanaheim', 'No se sabe', 10, 12, 7, 9, 5, 0, 12, 7),
    new Drgn('Mortífero Nadder', 'Rastreadora', 'Bosque', 'Si', 10, 8, 16, 14, 6, 16, 5, 10),
    new Drgn('Mudraker', 'Marejada', 'Pantanos y océanos', 'Si', 0, 0, 0, 0, 7, 0, 0, 0),
    new Drgn('Muerte Roja', 'Fogonero', 'Volcanes', 'No menciona', 28, 6, 30, 27, 9, 0, 22, 2),
    new Drgn('Muerte Susurrante', 'Piedra', 'Montaña, túneles subterráneos', 'Si', 8, 7, 7, 3, 1, 2, 4, 10),
    new Drgn('Pesadilla Monstruosa', 'Fogonero', 'Bosques y volcanes', 'Si', 15, 16, 12, 15, 10, 0, 6, 9),
    new Drgn('Pesadilla Voladora', 'Misterio', 'Viven cerca de cualquier cuerpo de agua (generalmente de agua dulce) que contenga algas luminosas.', 'No se sabe', 10, 8, 4, 7, 4, 10, 4, 7),
    new Drgn('Pisarrocas', 'Fogonero', 'Desiertos', 'Si', 0, 5, 0, 8.5, 3, 0, 0, 0),
    new Drgn('Rapidijón (Jesucristo)', 'Afilada', 'Cuevas y bosques', 'Si', 12, 30, 10, 0, 0, 15, 5, 30),
    new Drgn('Reptil Alado', 'Misterio', 'Isla del Reptil Alado', 'No', 14, 18, 13, 0, 0, 20, 8, 9),
    new Drgn('Rompehuesos', 'Misterio', 'No confirmado', 'Si', 7, 10, 18, 9, 6, 0, 4, 8),
    new Drgn('Salvajibestia', 'Marejada', 'Océanos', 'Si', 50, 6, 40, 45, 8, 0, 42, 2),
    new Drgn('Shock Marino', 'Marejada', 'Principalmente en las profundidades del océano', 'Si', 18, 16, 20, 7, 12, 14, 8, 10),
    new Drgn('Skrill', 'Embsetida', 'No se sabe', 'Si', 14, 19, 10, 12, 4, 0, 5, 18),
    new Drgn('Sombra Sigilosa', 'Fogonero', 'Bosques', 'No', 25, 14, 15, 18, 60, 0, 12, 4),
    new Drgn('Sombra Sigilosa Alfa', 'Fogonero', 'bosques y cuevas (posiblemente)', 'No se sabe', 25, 14, 15, 18, 60, 0, 12, 4),
    new Drgn('Submaridestrozador', 'Marejada', 'Océanos', 'No', 20, 16, 14, 0, 0, 0, 30, 12),
    new Drgn('Temblor Catastrófico', 'Piedra', 'Terrenos rocosos', 'Si', 12, 14, 35, 10, 6, 0, 20, 3),
    new Drgn('Terrible Terror', 'Fogonero', 'Casi todos los conocidos', 'Si', 8, 10, 6, 12, 10, 12, 2, 12),
    new Drgn('Terror Nocturno', 'Fogonero', 'Pantanos y bosques', 'Si', 6, 6, 4, 10, 5, 0, 3, 14),
    new Drgn('Terror Nocturno Albino', 'Fogonero', 'Si', 6, 6, 4, 10, 5, 0, 3, 14),
    new Drgn('Tifómerang', 'Fogonero', 'Bosuqe', 'Si', 14, 19, 12, 17, 10, 0, 6, 6),
    new Drgn('Traga Arena', 'Misterio', 'Cavernas, playas', 'No', 13, 11, 8, 10, 6, 0, 6, 17),
    new Drgn('Tramphocico', 'Espanto', 'Lugares lluviosos', 'Si', 10, 4, 4, 6, 4, 18, 28, 60),
    new Drgn('Triple Ataque', 'Embestida', 'Bosques', 'Si', 15, 20, 18, 14, 6, 10, 6, 18),
    new Drgn('Trueno Tambor', 'Marejada', 'Cuevas y estanques marinos, bosques (en ocasiones)', 'Si', 12, 14, 10, 16, 6, 0, 7, 8)
]