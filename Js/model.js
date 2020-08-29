const model = {}
model.currentUser = undefined
model.currentPlayer = undefined
model.arrChess = new Array()
model.register = (data) =>{
    firebase.auth().createUserWithEmailAndPassword(data.email , data.password).then((res) =>{
        firebase.auth().currentUser.updateProfile({
            displayName: data.firstName + ' ' + data.lastName
        })
        firebase.auth().currentUser.sendEmailVerification()
        alert('The email has been registered, please check you email')
        view.setActiveScreen('loginScreen')
    }).catch((err) => {
        console.log(err)
    })
}
model.login = async (dataLogin) => {
    try {
        const response = await firebase.auth().signInWithEmailAndPassword(dataLogin.email, dataLogin.password)
    } catch (err) {
        console.log(err)
        alert(err.message)
    }
}
model.updateRooms= (i,j) => {
    const dataToUpdate = {
        location : {
            x: i,
            y:j
        },
        user: model.currentUser.email
    }
    firebase.firestore().collection("rooms").doc('R2gEF1TOAFXix1gi5vw0').update(dataToUpdate)
}
model.listenRoomsChange = () => {
    let firstRun = true
    firebase.firestore().collection("rooms").where('users' , 'array-contains', model.currentUser.email)
    .onSnapshot((res)=>{
        if(firstRun){
            firstRun = false
            return
        }
        const docChanges = res.docChanges()
        for(oneChange of docChanges){
            console.log(docChanges)
            const type = oneChange.type
            if(type === 'modified'){
                const docData = getDataFromDoc(oneChange.doc)
                for(let i = 0 ; i < model.currentPlayer.length;i++){
                    if(model.currentPlayer[i].id === docData.id){
                        model.currentUser[i].id = docData
                    }
                }
            }
        }
    })
} 