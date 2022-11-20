class CssSelector {
    selector = {
        AutomationExSite: "https://automationexercise.com/login",

        username: '[data-qa="login-email"]',
        password: '[data-qa="login-password"]',
        loginButton: '[data-qa="login-button"]',
        contactus: '[href="/contact_us"]',
        conusername: '[name="name"]',
        conEmail: '[name="email"]',
        conSub: '[name="subject"]',
        conMessage: '[id="message"]',
        conAttach: '[name="upload_file"]',
        conSubmit: '[name="submit"]',
        conText:'[class="status alert alert-success"]'
    }
}

export default CssSelector

