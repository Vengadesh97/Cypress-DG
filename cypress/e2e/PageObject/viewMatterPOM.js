class viewMatterPage {

    //WebElement Declaration

    elements = {

        pomViewTab: () => cy.xpath("//div //a[text()='View']"),

        pomViewMatterSearchBox: () => cy.xpath("//div //input[@type='text']"),

        pomViewDetailsMenuButton : () => cy.xpath("(//div //button[@role='menuitem'])[1]"),

        pomEditMatterInfoMenuButton : () => cy.xpath("(//div //button[@role='menuitem'])[2]"),

        pomUpdateDepartmentsMenuButton : () => cy.xpath("(//div //button[@role='menuitem'])[3]"),

        pomReopenAndCloseMatterMenuButton : () => cy.xpath("(//div //button[@role='menuitem'])[4]"),

        pomDeleteMatterMenuButton : () => cy.xpath("(//div //button[@role='menuitem'])[5]"),

        pomViewDetailsDocumentTab : () => cy.get("button#pills-profile-tab"),

        pomViewDetailsTeamMemberAndExternalCounsel : () => cy.get("button#pills-contact-tab")

    }

    // Methods 

    viewTab() {
        this.elements.pomViewTab().click();
    }

    viewMatterSearchBox(text) {
        this.elements.pomViewMatterSearchBox().clear();
        this.elements.pomViewMatterSearchBox().type(text);
    }

    //Action Button
    actionButtonClick(name) {
        // Iterate through groupNameText elements
        cy.xpath('//tr /td[1]').each(($groupNameText, index) => {
            const groupTextComp = $groupNameText.text();

            if (name.includes(groupTextComp)) {
                // Click on the action menu using Cypress
                cy.get('.dropdown > .btn').eq(index).click();
            }
        })
    }

    // Under Action Menu

    // View Details
    viewDetailsMenuButton() {
        this.elements.pomViewDetailsMenuButton().click();
    }
    // Edit Matter info
    editMatterInfoMenuButton() {
        this.elements.pomEditMatterInfoMenuButton().click();
    }
    // Update Department
    updateDepartmentMenuButton() {
        this.elements.pomUpdateDepartmentsMenuButton().click();
    }
    // Reopen / Close Button
    viewTab() {
        this.elements.pomReopenAndCloseMatterMenuButton().click();
    }
    // Delete Matter
    viewTab() {
        this.elements.pomDeleteMatterMenuButton().click();
    }

    // View Details


 
  // Check Selected document is appear or not 
  viewDetailsSelectedDocumentVerify(namesToSelect) {
    for (let i = 0; i < namesToSelect.length; i++) {
      cy.xpath("(//tr //td[text()='" + namesToSelect[i] + "'])[1]").should('be.visible');
    }
  }


  // Check Selected Team Member is appear or not
  viewDetailsSelectedTeamMemberOrClientVerify(namesToSelect) {
    for (let i = 0; i < namesToSelect.length; i++) {
      cy.xpath("//label[text()='" + namesToSelect[i] + "']").should('be.visible');
    }
  }



}