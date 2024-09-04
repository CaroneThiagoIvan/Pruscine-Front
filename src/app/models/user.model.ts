export interface IUser {
    idUsuario: number;
    nombre: string;
    email: string;
    contrasenia: string;
    fechaNacimiento: Date;
}

function newUser(
    idUsuario: number,
    nombre: string,
    email: string,
    contrasenia: string,
    fechaNacimiento: Date
): IUser {
    return {
        idUsuario: (idUsuario ?? 0),
        nombre: (nombre ?? ''),
        email: (email ?? ''),
        contrasenia: (contrasenia ?? ''),
        fechaNacimiento: (fechaNacimiento ?? '')
    };
}


export default {
    newUser
} as const;