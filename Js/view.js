
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
    }
}


view.addOco = (addOcos) => {
    const oco = document.createElement('div')
    oco.classList.add('oco')
    for(let i = 0 ; i< 200; i++){
        oco.querySelector('.playScreen').appendChild('<div class="oco"></div>')
    }
}
    

