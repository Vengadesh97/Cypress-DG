class viewMatterPage {

    //WebElement Declaration

    elements = {

        pomViewTab: () => cy.xpath("//div //a[text()='View']"),

        pomViewMatterSearchBox: () => cy.xpath("//div //input[@type='text']"),

        // View Matter Menu List

        pomViewDetailsMenuButton: () => cy.xpath("(//div //button[@role='menuitem'])[1]"),

        pomEditMatterInfoMenuButton: () => cy.xpath("(//div //button[@role='menuitem'])[2]"),

        pomUpdateDepartmentsMenuButton: () => cy.xpath("(//div //button[@role='menuitem'])[3]"),

        pomReopenAndCloseMatterMenuButton: () => cy.xpath("(//div //button[@role='menuitem'])[4]"),

        pomDeleteMatterMenuButton: () => cy.xpath("(//div //button[@role='menuitem'])[5]"),

        // View Details Tab List

        pomViewDetailsDocumentTab: () => cy.xpath("//li //button[text()='Document(s)']"),

        pomViewDetailsAddNewTab: () => cy.xpath("//button[text()='Add New +']"),

        pomViewDetailsTeamMemberAndExternalCounselTab: () => cy.get("button#pills-contact-tab"),

        pomViewDetailsTeamMemberTab: () => cy.xpath("//li //button[text()='Team Member(s)']"),

        pomViewDetailsExternalCounselTab: () => cy.xpath("//li //button[text()='External Counsel(s)']"),

        // Edit Matter info

        pomCaseTitleInputBox: () => cy.get("input#title"),

        pomCaseNumberInputBox: () => cy.get("input#caseNumbr"),

        pomDateOfFillingCheck: () => cy.xpath("//input[@name='date_of_filling']"),

        pomDescriptionInputBox: () => cy.xpath("//textarea[@name='description']"),

        pomCaseTypeInputBox: () => cy.get("input#case_type"),

        pomCourtInputBox: () => cy.xpath("//input[@name='court_name']"),

        pomJudgesInputBox: () => cy.xpath("//input[@name='judges']"),

    }

    // Methods 

    viewTab() {
        this.elements.pomViewTab().click();
    }

    viewMatterSearchBox(text) {
       // this.elements.pomViewMatterSearchBox().clear();
        this.elements.pomViewMatterSearchBox().type(text);
    }

    //Action Button
    actionButtonClick(name) {
        // Iterate through groupNameText elements
        cy.xpath('//tr /td[1]').each(($groupNameText, index) => {
            cy.wait(1000);
            const groupTextComp = $groupNameText.text();

            if (name.includes(groupTextComp)) {
                // Click on the action menu using Cypress
                cy.wait(3000);
                cy.xpath("//span[text()='Action']").eq(index).click();
                cy.wait(3000);
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
    reOpenAndCloseMenuButton() {
        this.elements.pomReopenAndCloseMatterMenuButton().click();
    }
    // Delete Matter
    deleteMatterMenuButton() {
        this.elements.pomDeleteMatterMenuButton().click();
    }

    // List of View Matter , Matter Name Verifications

    // Matter Name Verifications
    viewMatterCheckMatterName(Name) {
        cy.xpath("//tr //td[1]").contains(Name);
    }

    // View Details Tab Name

    viewDetailsDocumentTab() {
        this.elements.pomViewDetailsDocumentTab().click();
    }

    viewDetailsTeamMemberAndExternalCounselTab() {
        this.elements.pomViewDetailsTeamMemberAndExternalCounselTab().click();
    }

    viewDetailsTeamMemberTab() {
        this.elements.pomViewDetailsTeamMemberTab().click();
    }

    viewDetailsExternalCounselTab() {
        this.elements.pomViewDetailsExternalCounselTab().click();
    }

    // Assertion in View Details

    // Document Tab

    // Check Selected document is appear or not 
    viewDetailsCheckSelectedDocumentNameAppear(namesToSelect) {
        for (let i = 0; i < namesToSelect.length; i++) {
            cy.xpath("(//tr //td[text()='" + namesToSelect[i] + "'])[1]").should('be.visible');
        }
    }

    // Add Existing

    // Check Selected Document 

    viewDetailsAddExistingCheckSelectedDocumentNameAppear(namesToSelect) {
        for (let i = 0; i < namesToSelect.length; i++) {
            cy.xpath("(//table[@class='table table-borderless tblgrid'])[1] //tr //td[1][text()='" + namesToSelect[i] + "']").should('be.visible');
        }
    }

    // Check UnSelected Document 

    viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(namesToSelect) {
        for (let i = 0; i < namesToSelect.length; i++) {
            cy.xpath("(//table[@class='table table-borderless tblgrid'])[2] //tr //td[1][text()='" + namesToSelect[i] + "']").should('be.visible');
        }
    }

    // Team Member and Client Tab

    // Check Selected Team Member and Client is appear or not
    viewDetailsCheckSelectedTeamMemberOrClientNameAppear(namesToSelect) {
        for (let i = 0; i < namesToSelect.length; i++) {
            cy.xpath("//label[text()='" + namesToSelect[i] + "']").should('be.visible');
        }
    }

    // Check UnSelected list Team Member and Client is appear or not
    viewDetailsCheckUnSelectedTeamMemberOrClientName(namesToSelect) {
        for (let i = 0; i < namesToSelect.length; i++) {
            cy.xpath("//div //div[@class='callselect'][text()='" + namesToSelect[i] + "']").should('be.visible');

        }
    }

    // Edit Matter info in Assertion

    verifyEditMatterInfoCaseTitle(Name) {
        this.elements.pomCaseTitleInputBox().invoke('val').should('eql', Name);
    }

    verifyEditMatterInfoCaseNumber(Name) {
        this.elements.pomCaseNumberInputBox().invoke('val').should('eql', Name);
    }

    verifyEditMatterInfoDOF(Name) {
        this.elements.pomDateOfFillingCheck().invoke('val').should('eql', Name);
    }

    verifyEditMatterInfoDescription(Name) {
        this.elements.pomDescriptionInputBox().invoke('val').should('eql', Name);
    }

    verifyEditMatterInfoCaseType(Name) {
        this.elements.pomCaseTypeInputBox().invoke('val').should('eql', Name);
    }

    verifyEditMatterInfoCourt(Name) {
        this.elements.pomCourtInputBox().invoke('val').should('eql', Name);
    }

    verifyEditMatterInfoJudges(Name) {
        this.elements.pomJudgesInputBox().invoke('val').should('eql', Name);
    }

    // Update Department Assertion

    // Check selected department list in Left side
    viewDetailsCheckSelectedDepartmentName(namesToSelect) {
        for (let i = 0; i < namesToSelect.length; i++) {
            cy.xpath("//div[@id='selectedgroup']//div[text()='" + namesToSelect[i] + "']").should('be.visible');
        }
    }

    // Check Unselected department list in Right side
    viewDetailsCheckUnSelectedDepartmentName(namesToSelect) {
        for (let i = 0; i < namesToSelect.length; i++) {
            cy.xpath("//div[@class='callselect'][text()='" + namesToSelect[i] + "']").should('be.visible');
        }
    }

}

module.exports = new viewMatterPage();