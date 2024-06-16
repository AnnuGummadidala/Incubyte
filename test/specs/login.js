const loginPage = require('../pageobjects/login.page')

describe('Create a Account', () => {
    it('Open application', async () => {
        await loginPage.open()
    })

    it('Click on Create Account', async () =>{
        await loginPage.clickOnCreateAccount()
    })

    it('Enter First Name', async () =>{
        await loginPage.enterFirstName()
    })

    it('Enter Last Name', async () =>{
        await loginPage.enterLastName()
    })
    
    it('Enter Email', async () =>{
        await loginPage.enterEmail()
    })

    it('Enter Password', async () =>{
        await loginPage.enterPassword()
    })

    it('Enter Confirm Password', async () =>{
        await loginPage.passwordConfirm()
    })

    it('Click on Create account button', async () =>{
        await loginPage.clickonCreate()
    })

    it('Sign out from application', async() =>{
        await loginPage.clickOnsignOut()
    })
})

describe('Log into Application', ()=>{
    it('Open application', async () => {
        await loginPage.open()
    })

    it('Click on Signin', async () =>{
        await loginPage.clickonsiginin()
    })

    it('Log into application', async () =>{
        await loginPage.login()
    })

})

