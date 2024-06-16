const { $ } = require('@wdio/globals')
const Page = require('./page');

 
class LoginPage extends Page {
   

    get createAccount() { return $("//div[@class='panel header']//a[normalize-space()='Create an Account']")}
    get signIn() { return $("//div[@class='panel header']//a[normalize-space()='Sign In']")}
    get email() { return $("//input[@id='email']")}
    get loginPassword() { return $("//input[@name='login[password]']")}
    get send() { return $("(//button[@id='send2'])[1]")}
    get firstName() { return $("//input[@id='firstname']")}
    get lastName() { return $("//input[@id='lastname']")}
    get emailAddress() { return $("//input[@id='email_address']")}
    get password() { return $("//input[@id='password']")}
    get confirmPassword() { return $("//input[@id='password-confirmation']")}
    get createbutton() { return $("//button[@title='Create an Account']")}
    get accounInformation() { return $("//strong[normalize-space()='Account Information']")}
    get signOutButton() { return $("//div[@class='panel header']//button[@type='button']")}
    get signOut() { return $("//div[@aria-hidden='false']//a[normalize-space()='Sign Out']")}

    open () {
        return super.open();
    }

    constructor() {
        super();
    
        this.generateString(5).then(firstName => {
            this.FirstName = firstName;
            this.generateString(5).then(lastName => {
                this.LastName = lastName;
                this.Username = this.FirstName + this.LastName + '@gmail.com';
            });
        });
    
        this.generateString(10).then(randomString => {
            this.Password = randomString;
        });
    }
    

    async clickOnCreateAccount()
    {
        await this.createAccount.waitForDisplayed()
        await this.createAccount.click()
        await browser.pause(500)
    }

    async enterFirstName()
    {
        await this.firstName.waitForDisplayed()
        await this.FirstName
        await this.firstName.addValue(this.FirstName)
        await browser.pause(500)
    }

    async enterLastName()
    {
        await this.LastName
        await this.lastName.addValue(this.LastName)
        await browser.pause(500)
    }

    async enterEmail()
    {
        await this.Username
        await this.emailAddress.addValue(this.Username)
        await browser.pause(500)
    }

    async enterPassword()
    {
        await this.Password
        await this.password.addValue(this.Password)
        await browser.pause(500)
    }

    async passwordConfirm()
    {
        (await this.confirmPassword).addValue(this.Password)
        await browser.pause(500)
    }

    async clickonCreate()
    {
        await this.createbutton.waitForClickable()
        await this.createbutton.click()
        await browser.pause(500)
        await this.accounInformation.waitForDisplayed()
        await this.accounInformation.isDisplayed()
    }

    async clickOnsignOut()
    {
        await this.signOutButton.click()
        await this.signOut.click()
    }

    async login () 
    {
        await this.email.setValue(this.Username);
        await this.loginPassword.setValue(this.Password);
        await this.send.click();
        await this.signOutButton.waitForDisplayed()
        await this.signOutButton.isDisplayed()
    }

    async clickonsiginin()
    {
        await this.signIn.waitForDisplayed()
        await this.signIn.click()
    }

}

module.exports = new LoginPage();
