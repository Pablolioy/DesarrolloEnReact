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
    const responseUser = await firebase.auth().signInWithEmailAndPassword(email, password);
    if (responseUser.user.uid) {
        const userDocument = await firebase.firestore().collection('usuarios_tp_final').where('userId', '==', responseUser.user.uid).get();
        console.log(userDocument.docs[0].data())
        return userDocument.docs[0].data();
    }
    return {};
}

