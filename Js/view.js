
const view = {}
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        // login 
        case `loginScreen`:
            document.getElementById('app').innerHTML = components.loginScreen
            const loginScreen = document.getElementById('login-form')
            loginScreen.addEventListener('submit', (event) => {
                event.preventDefault()
                const dataLogin = {
                    email: loginScreen.email.value,
                    password: loginScreen.password.value
                }
                console.log(dataLogin)
                controller.login(dataLogin)
            })
            // chuyen huong sang man hinh register
            const Account = document.getElementById('redirect-to-Regiser')
            Account.addEventListener('click', (e) => {
                view.setActiveScreen('registerScreen')
            })
            break;
        case 'registerScreen':
            document.getElementById('app').innerHTML = components.registerScreen
            const registerForm = document.getElementById('register-form')
            registerForm.addEventListener('submit', (event) => {
                event.preventDefault() // ko cho trinh duyet load lai , chi dung cho submit
                const data = {
                    // lay du lieu nguoi dung
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value
                }
                console.log(data)
                controller.register(data)
            })
            // chuyen huong sang man hinh login
            const alReady = document.getElementById('redirect-to-login')
            alReady.addEventListener('click', (e) => {
                view.setActiveScreen('loginScreen')
            })
            break;
        case 'playScreen':
            document.getElementById('app').innerHTML = components.playScreen
            view.addOco(status)
        // view.checkRow()

        // model.updateRooms()
        model.listenRoomsChange()
    }
}
view.checkCross2 = (value, Cur_row, Cur_col) => {
    let countLeftup = 0
    let countRightDown = 0
    let temp1 = 0;
    let temp2 = 0;
    // move left up
    for (let j = Cur_row; j >= 0; j--) {
        if (model.arrChess[i][Cur_col - temp1] === value) {
            countLeftup++
            temp1++
        }
    }
    // move right down
    for (let i = Cur_row + 1; i >= 0; i++) {
        if (model.arrChess[i][Cur_col + temp2]) {
            countRightDown++
            temp2++
        } else {
            break;
        }
    }
    if (countLeftup + countRightDown >= 5) {
        return 1;
    }
}
view.checkCross1 = (value, Cur_row, Cur_col) => {
    let countRightUp = 0;
    let countLeftDown = 0;
    let temp1 = 0;
    let temp2 = 0;
    // move right up
    for (let i = Cur_row; i >= 0; i--) {
        if (model.arrChess[i][Cur_col + temp1] === value) {
            countRightUp++;
            temp1++
        } else {
            break;
        }
    }
    // move left down
    for (let j = Cur_row + 1; j >= 0; j++) {
        if (model.arrChess[j][Cur_col - temp2] === value) {
            countLeftDown++;
            temp2++
        } else {
            break;
        }
    }
    if (countLeftDown + countRightUp >= 5) {
        console.log('you win')
        return 1;
    }
}
view.checkCol = (value, Cur_row, Cur_col) => {

    let countUp = 0;
    let countDown = 0;
    // move up
    for (let i = Cur_row - 1; i >= 0; i--) {
        if (model.arrChess[i][Cur_col] === value) {
            countUp++;
        } else {
            break;
        }
    }
    // move down
    for (let j = Cur_row; j >= 0; j++) {
        if (model.arrChess[j][Cur_col] === value) {
            countDown++
        } else {
            break;
        }
    }
    if (countUp + countDown >= 5) {
        console.log("you win")
        return 1;
    }
}
view.checkRow = (value, Cur_row, Cur_col) => {
    let countLeft = 0;
    let countRight = 0;
    // move left
    for (let i = Cur_col; i >= 0; i--) {
        if (model.arrChess[Cur_row][i] === value) {
            countLeft++;
        } else {
            break;
        }
    }
    // move right
    for (let j = Cur_col; j >= 0; j++) {
        if (model.arrChess[Cur_row][j] === value) {
            countRight++
        } else {
            break;
        }
    }
    if (countLeft + countRight >= 5) {
        console.log("you win")
        return 1;
    }
}
view.addOco = () => {
    let currentText = 'x'
    for (let i = 0; i < 20; i++) {
        model.arrChess.push([])
        const playscreen = document.createElement('div')
        playscreen.classList.add('playscreen-row')
        for (let j = 0; j < 35; j++) {
            const oco = document.createElement('div')
            oco.classList.add('oco')
            oco.id = `oco-${i}-${j}`
            playscreen.appendChild(oco)
            model.arrChess[i].push('')
            oco.addEventListener("click", (e) => {
                // console.log(i + '-' + j)
                let temp1 = 0;
                let temp2 = 1;
                model.arrChess[i][j] = currentText
                view.checkRow(currentText, i, j)
                view.checkCol(currentText, i, j)
                view.checkCross1(currentText,i - temp1,j + temp2) 
                view.checkCross2()

                // console.log(model.arrChess)
                if (oco.innerText === '') {
                    oco.innerText = currentText
                    if (currentText === "x") {
                        currentText = "o"
                    } else {
                        currentText = "x"
                    }
                }
                model.updateRooms(i, j)
            })
        }
        document.querySelector(".playscreen").appendChild(playscreen)
    }
}


