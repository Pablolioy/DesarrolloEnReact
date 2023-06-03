import firebase from "../config/firebase"

export async function create(payload) {
    const responseUser = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
    const document = await firebase.firestore().collection("usuarios_tp_final")
        .add({
            name: payload.nombre,
            lastname: payload.apellido,
            userId: responseUser.user.uid
        })
    return document.id
}

export async function login(email, password) {
    const responseUser = await firebase.auth().signInWithEmailAndPassword(email, password)
    return (responseUser.user.providerId)
}

