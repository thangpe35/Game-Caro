const components = {}
components.loginScreen = `
<div class="login-container">
<div class="aside-right">
    <div class="header">
        <img src="../img/avatar1.svg">
    </div>
    <form id="login-form">
        <div class="input-name-wrapper">
                <div class="input-wrapper">
                    <input type="text" placeholder="Email" name="email">
                    <div class="error" id="email-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" placeholder="Password" name="password">                         
                    <div class="error" id="password-error"></div>                           
                </div>
                <div class="form-action">
                    <span id="redirect-to-Regiser">
                        Don't have an account? Register
                    </span>
                    <button class="btn" type="submit" id="btn">
                        login
                    </button>
                 </div>
            </div>
    </form>
</div>
</div>
`
components.registerScreen = `
<div class="register-container">
        <div class="aside-right">
            <div class="header">
                <h3>Create Account</h3>
            </div>
            <form id="register-form">
                <div class="input-name-wrapper">
                    <div class="input-wrapper">
                        <input type="text" placeholder="First Name" name="firstName">
                        <div class="error" id="first-name-error"></div>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" placeholder="Last Name" name="lastName">
                        <div class="error" id="last-name-error"></div>
                    </div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Email" name="email">
                    <div class="error" id="email-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" placeholder="Password" name="password">
                    <div class="error" id="password-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" placeholder="Confirm password" name="confirmPassword">
                    <div class="error" id="confirmPassword-error"></div>
                </div>
                <div class="form-action">
                   <span id="redirect-to-login" >
                       Already have an account? Login 
                   </span>
                   <button class="btn" type="submit" id="button-register">
                       Register
                   </button>
                </div>
            </form>
        </div>
    </div>`
components.playScreen = `
<div class="playscreen-container" id= "play-screen">
<div class="aside-left">
    <form class="form-player">
        <div class="player">
            <div>player1</div>
        </div>              
        <div class="player">
            <div>player2</div>
        </div>              
    </form>        
</div>
<div class="playscreen">
</div>
</div>`
