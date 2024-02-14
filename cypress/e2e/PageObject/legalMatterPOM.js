class legalcaseMatter {

    // WebElement Declarations

    elements = {

        pomLeftsideMatterTab : () => cy.xpath("//div //span[text()='Matters']"),

        pomLegalMatterTab : () => cy.xpath("//div //a[text()='Legal Matters']"),

        pomGeneralMatterTab : () => cy.xpath("//div //a[text()='General Matters']"),

        pomCreateTab : () => cy.xpath("//div //a[text()='Create']"),

        pomCaseTitleInputBox : () => cy.get("input#title"),

        pomCaseNumberInputBox : () => cy.get("input#caseNumbr"),

        pomdateoffilling : () => cy.xpath("//input[starts-with(@id,'mat-input')]"),

        pomDateOFillingAddButton : () => cy.xpath("//span[@class='mat-mdc-button-touch-target']"),

        pomDateOfFillingbutton : () => cy.xpath("//*[@class='mat-mdc-button-touch-target']"),

        pomDescriptionInputBox : () => cy.xpath("//textarea[@name='description']"),

        pomCaseTypeInputBox : () => cy.get("input#case_type"),

        pomCourtInputBox : () => cy.xpath("//input[@name='court_name']"),

        pomJudgesInputBox : () => cy.xpath("//input[@name='judges']"),

        pomOpponentAdvocateAddButton : () => cy.xpath("//input[@type='button']"),

        pomOpponentAdvocateName : () => cy.get("input#name"),

        pomOpponentAdvocateEmail : () => cy.get("input#email"),

        pomOpponentAdvocateNumber : () => cy.get("input#phone"),

        pomOpponentAdvocateSaveButton : () => cy.xpath("//button[text()='Save']"),

        pomSelectAllCheckBox : () => cy.get("input#selectAll"),

        pomCancelButtonMatterinfo : () => cy.xpath("//button[text()='Cancel']"),

        pomNextButtonMatterinfo : () => cy.xpath("//span[text()='Next']"),

        pomAssertionPriority : () => cy.xpath("//button[text()='High']"),

        pomAssertionStatus : () => cy.xpath("//button[text()='Active']"),

        pomAssertionOpponentAdv : () => cy.xpath("//label[normalize-space()='Name']"),

        pomAssertioncaseTitleMandatory : () => cy.xpath("//div[text()='Case Title is required']"),

        pomAssertioncaseNumberMandatory : () => cy.xpath("//div[text()='Case Number is required']"),

        pomNextButtonDepartment : () => cy.xpath("//button[text()='Next']"),

        pomSumbitButtonDocument : () => cy.xpath("//button[text()='Submit']"),

        pomYesButtonConfirmation : () => cy.xpath("//button[text()='Yes']"),

        pomNoButtonConfirmation : () => cy.xpath("//button[text()='No']"),

        pomViewMatterSuccess : () => cy.xpath("//button[text()='View Matter List']"),

        pomAddMatterSuccess : () => cy.xpath("//button[text()='Add Matter']")

    }

    leftSideMatterTab()
    {
        this.elements.pomLeftsideMatterTab().click();
    }

    legalMatterTab()
    {
        this.elements.pomLeftsideMatterTab().click();
    }

    generalMatterTab()
    {
        this.elements.pomGeneralMatterTab().click();
    }

    createTab()
    {
        cy.wait(8000);
        this.elements.pomCreateTab().click();
    }

    // Matter Info Page
    caseTitleField(name)
    {
        this.elements.pomCaseTitleInputBox().type(name);
    }

    caseNumberField(name)
    {
        this.elements.pomCaseNumberInputBox().type(name);
    }

    dateClick()
    {
        this.elements.pomDateOFillingAddButton().click();
    }

    dateOfFilling(date)
    {   
        cy.wait(500);
        cy.xpath("//div[text()='" + date + "']").click();
    }
    
    descriptionField(text)
    {
        this.elements.pomDescriptionInputBox().type(text);
    }

    caseTypeField(text)
    {
        this.elements.pomCaseTypeInputBox().type(text);
    }

    courtField(text)
    {
        this.elements.pomCourtInputBox().type(text);
    }

    judgeField(text)
    {
        this.elements.pomJudgesInputBox().type(text);
    }

    prioritySelect(name)
    {
        cy.xpath("//button[text()='" + name + "']").click();
    }

    statusSelect(name)
    {
        cy.xpath("//button[text()='" + name + "']").click();
    }

    opponentAdvocateAddButton()
    {
       this.elements.pomOpponentAdvocateAddButton().click();   
    }

    opponentAdvocateName(text)
    {
        this.elements.pomOpponentAdvocateName().type(text);
    }

    opponentAdvocateEmail(text)
    {
        this.elements.pomOpponentAdvocateEmail().type(text);
    }

    opponentAdvocateNumber(text)
    {
        this.elements.pomOpponentAdvocateNumber().type(text);
    }

    opponentAdvocateSavebutton()
    {
        this.elements.pomOpponentAdvocateSaveButton().click();
    }

    cancelButton()
    {
        this.elements.pomCancelButtonMatterinfo().click();
    }

    nextButton()
    {
        this.elements.pomNextButtonMatterinfo().click();
    }

    commonNextButton()
    {
        cy.wait(1000);
        this.elements.pomNextButtonDepartment().click();
    }

    selectAllButton()
    {
        this.elements.pomSelectAllCheckBox().click();
    }

    submitButton()
    {
        cy.wait(1000);
        this.elements.pomSumbitButtonDocument().click();
    }

    confirmationNoButton()
    {
        cy.wait(1000);
        this.elements.pomNoButtonConfirmation().click();
    }

    confirmationYesButton()
    {
        cy.wait(1000);
        this.elements.pomYesButtonConfirmation().click();
    }

    successAddMatterButton()
    {
        cy.wait(1000);
        this.elements.pomAddMatterSuccess().click();
    }

    successViewMatterButton()
    {
        cy.wait(1000);
        this.elements.pomViewMatterSuccess().click();
    }

    assertionCaseTitle()
    {
        this.elements.pomCaseTitleInputBox().should('be.empty');
    }

    assertionCaseNumber()
    {
        this.elements.pomCaseNumberInputBox().should('be.empty');
    }

    assertionDOF()
    {
        this.elements.pomdateoffilling().should('be.empty');
    }

    assertionDescription()
    {
        this.elements.pomDescriptionInputBox().should('be.empty');
    }

    assertionCaseType()
    {
        this.elements.pomCaseTypeInputBox().should('be.empty');
    }

    assertionCourt()
    {
        this.elements.pomCourtInputBox().should('be.empty');
    }

    assertionJudge()
    {
        this.elements.pomJudgesInputBox().should('be.empty');
    }

    assertionPriority()
    {
        this.elements.pomAssertionPriority().should('be.visible');
    }

    assertionStatus()
    {
        this.elements.pomAssertionStatus().should('be.visible');
    }

    assertionOpponentAdvocate()
    {
        this.elements.pomAssertionOpponentAdv().should('not.be.visible');
    }

    assertionMandatoryMessageCaseTitle()
    {
        this.elements.pomAssertioncaseTitleMandatory().should('be.visible');
    }

    assertionMandatoryMessageCaseNumber()
    {
        this.elements.pomAssertioncaseNumberMandatory().should('be.visible');
    }

    assertionNextButton()
    {
        this.elements.pomNextButtonMatterinfo().should('be.disabled');
    }

    // Department Page 

   // Right Side Select 
  selectOnRightSide(namesToSelect) {
    for (let i = 0; i < namesToSelect.length; i++) {
      cy.xpath("(//div[@class='col-6 matterpadding'])[2] //div[text()='" + namesToSelect[i] + "']//following::input[1]").click();
    }
  }
   // Left Side Unselect
  RemoveOnLeftSide(namesToSelect)
  {
    for (let i = 0; i < namesToSelect.length; i++) {
        cy.xpath("(//div[@class='col-6 matterpadding'])[1] //div[text()='" + namesToSelect[i] + "']//following::i[1]").click();
      }
  }

  // Check the name Right side Selected
  textVerifyUnSelectedListOnRightSide(namesToSelect) {
    for (let i = 0; i < namesToSelect.length; i++) {
      cy.xpath("(//div[@class='col-6 matterpadding'])[2] //div[text()='" + namesToSelect[i] + "']").should('be.visible');
    }
  }

  // Check the name left side Unselected
  textVerifySelectedListOnLeftSide(namesToSelect) {
    for (let i = 0; i < namesToSelect.length; i++) {
      cy.xpath("(//div[@class='col-6 matterpadding'])[1] //div[text()='" + namesToSelect[i] + "']").should('be.visible');
    }
  }

  // Left side Empty 
  emptyOnSelectedListonLeftSideVerify()
  {
    cy.xpath("(//div[@class='col-6 matterpadding'])[1] //div").should('be.empty');
  }

  //Right side Empty
  emptyOnUnSelectListonRightSideVerify()
  {
    cy.xpath("(//div[@class='col-6 matterpadding'])[2] //div[3]").should('be.empty');
  }



  }



module.exports = new legalcaseMatter();