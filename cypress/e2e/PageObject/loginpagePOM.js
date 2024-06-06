class LoginPage
{
    // WebElement declartion
    elements = {
         userEmail : () => cy.get('input#id_email'),
         passwords : () => cy.get('input#id_password'),
         button : () => cy.get('button[type="submit"]'),
         homebutton : () => cy.xpath("//div //div[@id='dashboard-icon']")
    }

    //Web Page Url
    visit()
    {
        cy.visit('http://staging.corp.lauditor.com/login');
    }

    userName(name)
    {
        this.elements.userEmail().type(name);
    }

    passWord(pass)
    {
        this.elements.passwords().type(pass);
    }

    loginButton()
    {
        this.elements.button().click();
    }

    homeButton()
    {
        cy.wait(1000);
        cy.scrollTo('topRight');
        cy.wait(1000);
        this.elements.homebutton().click();
    }

    loadIssues()
    {
        cy.wait(2000);
        cy.reload();
    }

}

module.exports = new LoginPage();