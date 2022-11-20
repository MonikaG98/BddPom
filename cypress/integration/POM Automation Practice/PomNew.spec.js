/// <reference types="cypress" />


import GenericMethod from "../POM Automation Practice/GenericMethod"
import CssSelector from "../POM Automation Practice/selector"

let sel = new CssSelector()
let file1 ='monika_cv.docx'

describe("Automation Exercise Site", function () {

    it("login with valid credential", function () {
        GenericMethod.visitUrl(sel.selector.AutomationExSite)
        GenericMethod.type(sel.selector.username, 'gauri@gmail.com')
        GenericMethod.type(sel.selector.password, 'Gauri99')
        GenericMethod.click(sel.selector.loginButton)
        GenericMethod.visible('Full-Fledged practice website for Automation Engineers')

    })
    it("visit contact us page", function () {
        GenericMethod.click(sel.selector.contactus)
        GenericMethod.type(sel.selector.conusername,'monika')
        GenericMethod.type(sel.selector.conEmail,'gosavimonika01@gmail.com')
        GenericMethod.type(sel.selector.conSub,'information')
        GenericMethod.type(sel.selector.conMessage,'give information about your page')
        GenericMethod.attchFile1(sel.selector.conAttach,file1)
        GenericMethod.click(sel.selector.conSubmit)
        GenericMethod.validtext(sel.selector.conText,'Success! Your details have been submitted successfully.')
    })
})



