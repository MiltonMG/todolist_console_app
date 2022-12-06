import { v4 as uuidv4 } from 'uuid';

class Tarea {
    id = '';
    desc = '';
    completadoEn = null;

    constructor( desc ) {

        this.id = uuidv4();
        this.desc = desc
        //completado inicia en null,
        // no se agrega aca por que seria redundante

    }

}

export {
    Tarea
}


