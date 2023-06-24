class Login
{
    txtUserName="input[placeholder='Username']";
    txtPassword="input[placeholder='Password']";
    btnSubmit="button[type='submit']";
    lblmsg=".oxd-topbar-header-breadcrumb > .oxd-text";


    setUserName(usename)
    {
        cy.get(this.txtUserName).type(usename);
    }
    setPassword(password)
    {
        cy.get(this.txtPassword).type(password);
    }
    clickSubmit()
    {
        cy.get(this.btnSubmit).click();
    }
    verifyLogin()
    {
        cy.get(this.lblmsg).should('have.text', 'Dashboard')
    }
}

export default Login;