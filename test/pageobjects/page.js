const { browser } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    
    open (path) {
        browser.maximizeWindow()
        return browser.url(`https://magento.softwaretestingboard.com/`)
    }


    async generateString(length) {
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';

        let result = [
            uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length)),
            lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length)),
            numberChars.charAt(Math.floor(Math.random() * numberChars.length))
        ];
    
        const allChars = uppercaseChars + lowercaseChars + numberChars;
        for (let i = 3; i < length; i++) { 
            result.push(allChars.charAt(Math.floor(Math.random() * allChars.length)));
        }
    
        result = result.sort(() => Math.random() - 0.5);
        return result.join(''); 
    }
}
