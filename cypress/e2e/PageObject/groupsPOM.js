const { expect } = require("chai");

class groupsPOM {

  // Web Element declartaions 
  elements = {

    elementLeftSideGroupMenu: () => cy.xpath("//span[text()='Departments']"),

    elementCreateGroupTab: () => cy.xpath("//button[text()='Add Department']"),

    elementGroupNameInput: () => cy.get('input#caseTitle'),

    elementDescriptionInput: () => cy.get('textarea[name="description"]'),

    alertnobutton: () => cy.xpath("//button[text()='No']"),

    alertyesbutton: () => cy.xpath("//button[text()='Yes']"),

    addButton: () => cy.get('i[aria-hidden="true"]'),

    nextbutton: () => cy.xpath("//div //button[text()='Next']"),

    savebutton: () => cy.xpath("//div //button[text()='Save']"),

    cancelbutton: () => cy.xpath("//button[text()='Cancel']"),

    backbutton: () => cy.xpath("//button[text()='Back']"),

    popupaddDepartment: () => cy.xpath("//button[text()='Add Departments']"),

    popupViewChanges: () => cy.xpath("//div //button[text()='View Changes']"),

    viewgroupTab: () => cy.xpath("//button[text()='View Departments']"),

    viewgroupSearch: () => cy.get("input[placeholder='Search Departments']"),

    // EditGroup Info

    editgroupinfobutton: () => cy.get(':nth-child(1) > .dropdown-item'),

    elementEditGroupInfosuccessPopup: () => cy.xpath("(//button[text()='OK'])[4]"),

    assertgroupname: () => cy.get('#caseTitle'),

    assertdescription: () => cy.get(':nth-child(2) > .form-group > .form-control'),

    groupcancelbutton: () => cy.get('.btncancel'),

    // Department Members

    updategroupmembersbutton: () => cy.get(':nth-child(2) > .dropdown-item'),

    removebutton: () => cy.xpath("//div //button[text()='Remove All']"),

    noalertpopup: () => cy.xpath("//div //button[text()='No']"),

    yesalertpopup: () => cy.xpath("//div //button[text()='Yes']"),

    oksuccesspopupDeparment: () => cy.xpath("(//button[text()='OK'])[3]"),

    updatedepartmentHeadbutton: () => cy.get(':nth-child(3) > .dropdown-item'),

    noalertpopUpDepartmentHead : () => cy.get('#modalCancel > .modal-dialog > .modal-content > .alertbutton > .alertbtnno'),

    yesalertpopUPDepartmentHead : () => cy.get('#modalCancel > .modal-dialog > .modal-content > .alertbutton > .alertbtnyes'),
  
    savenoalertpopupDepartmentHead : () => cy.xpath("(//div //button[@data-bs-dismiss='modal'])[5]"),
   
    saveYesalertpopupDepartmentHead : () => cy.xpath("(//div //button[@data-bs-dismiss='modal'])[6]"), 

    oksuccessDepartmentHead : () => cy.xpath("(//button[text()='OK'])[2]"),
   
    viewgroupVerifygroupName: () => cy.xpath('//tr //td[1]'),

    viewgroupverifyDescription: () => cy.xpath('//tr //td[2]'),

    viewgroupverifygroupHeadName: () => cy.xpath('//tr //td[3]'),

    assertiondepartmentinfo: () => cy.xpath("//label[@for='title']"),

    assertionadddepartmentMembers: () => cy.xpath("//a[@class='groups optionone compone addGroup active']"),

    assertionselecteddepartmentMembers: () => cy.xpath("//a[@class='groups optiontwo comptwo active']"),

    assertionassigndepartmenthead: () => cy.xpath("//label[text()='Assign Department Head']"),

    assertionviewdepartmentscreen: () => cy.xpath("//tr //th //p[text()=' Departments Name']"),

    actiondeletebutton : () => cy.get(":nth-child(4) > .dropdown-item"),

    deletebutton : () => cy.xpath("//div //button[text()='Delete']"),

    okdeletesuccesspopup : () => cy.xpath("(//div //button[text()='OK'])[1]")
  }

  // Left side Group Name 
  leftSideGroup() {
    cy.scrollTo('bottom');
    this.elements.elementLeftSideGroupMenu().click();
  }
  // elementCreateGroupTab button
  createGroupsTab() {
    this.elements.elementCreateGroupTab().click();
  }
  // GroupName
  groupName(name) {
    this.elements.elementGroupNameInput().clear();
    this.elements.elementGroupNameInput().type(name);
  }
  // Descrptions
  descrptions(text) {
    this.elements.elementDescriptionInput().clear();
    this.elements.elementDescriptionInput().type(text);
  }

  alertNoButton() {
    this.elements.alertnobutton().click();
  }

  alertYesButton() {
    this.elements.alertyesbutton().click();
  }

  cancelButton() {
    this.elements.cancelbutton().click();
  }

  backButton() {
    this.elements.backbutton().click();
  }

  // Add Buttons
  addButtons() {
    this.elements.addButton().click();
  }
  // NextButton
  nextButton() {
    this.elements.nextbutton().click();
  }
  // Savebutton
  saveButton() {
    this.elements.savebutton().click();
  }

  alertPopupAddDepartment() {
    this.elements.popupaddDepartment().click();
  }

  // View Changes Button
  alertPopupViewChanges() {
    this.elements.popupViewChanges().click();
  }
  // SelectMultiple Name
  selectMultipleMember(namesToSelect) {
    for (let i = 0; i < namesToSelect.length; i++) {
      cy.xpath("//div //div[text()='" + namesToSelect[i] + "'] //following::input[1]").click();
    }
  }

  // Remove Team Member
  removeMultipleMember(namesToSelect) {
    for (let i = 0; i < namesToSelect.length; i++) {
      cy.xpath("//div //div[text()='" + namesToSelect[i] + "'] //following::i[1]").click();
    }
  }
  //Single TeamMember select
  oneTeamMemberSelect(text1) {
    cy.xpath("//div //div[text()='" + text1 + "'] //following::input[1]").click();
  }

  //Single team member verifications
  oneTeamMemberVerifications(expectedTexts) {
    cy.xpath("//div[@class='multicheck form-control textbox active'] //div").should('have.text', expectedTexts)
  }

  //Single name Remove place verifications

  removeplaceOneTeamMemberVerifications(expectedTexts) {
    cy.xpath("//div //div[@class='form-control textbox']").should('have.text', expectedTexts)
  }

  // Name verifications
  MultipleSelectedNameVerification(expectedTexts) {
    cy.xpath("//div[@class='multicheck form-control textbox active'] //div").each(($element, index) => {
      cy.wrap($element).should('have.text', expectedTexts[index]);
    });
  }

  // Remove place verifications
  MultipleRemoveNamePlaceVerification(expectedTexts) {
    cy.xpath("//div //div[@class='form-control textbox']").each(($element, index) => {
      cy.wrap($element).should('have.text', expectedTexts[index]);
    })
  }

  // Group Head place verifications
  MultipleDepartmentHeadNameplaceVerifications(expectedTexts) {
    cy.xpath("//div //div[@class='callselect']").each(($element, index) => {
      cy.wrap($element).should('have.text', expectedTexts[index]);
    })
  }

  createSelectedGroupHeadNameVerifications(expectedTexts) {
    cy.xpath("//div[@class='multicheck form-control textbox active'] //div").should('have.text', expectedTexts);
  }

  assertionDepartmentInfo() {
    this.elements.assertiondepartmentinfo().should('be.visible')
  }

  assertionAddDepartmentMembers() {
    this.elements.assertionadddepartmentMembers().should('be.visible')
  }

  assertionSelectedDepartmentMembers() {
    this.elements.assertionselecteddepartmentMembers().should('be.visible')
  }

  assertionAssignDepartmentHead() {
    this.elements.assertionassigndepartmenthead().should('be.visible')
  }

  assertionViewDepartmentScreen() {
    this.elements.assertionviewdepartmentscreen().should('be.visible')
  }



  // View Group Page
  viewGroupTab() {
    this.elements.viewgroupTab().click();
  }
  // View Groups in inside the searchbar
  ViewGroupSearchBar(name) {
    this.elements.viewgroupSearch().clear();
    this.elements.viewgroupSearch().type(name);
  }

  // Actions Button
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

  // ************

  // Under Action "Edit Group Info"
  editGroupInfo() {
    this.elements.editgroupinfobutton().click();
    cy.scrollTo('top');
  }

  okButtonEditGroupInfosuccessPopup() {
    this.elements.elementEditGroupInfosuccessPopup().click();
  }

  //Cancel
  groupCancelButton() {
    this.elements.groupcancelbutton().click();
  }


  //Assertion

  //Group Name
  assertGroupName(Name) {
    this.elements.assertgroupname().invoke('val').should('eql', Name);
  }

  //Descrption
  assertDescription(Name) {
    this.elements.assertdescription().invoke('val').should('eql', Name);
  }

  // Update Group Members List
  updateGroupMembersButton() {
    this.elements.updategroupmembersbutton().click();
  }

  // SelectMultiple Name
  selectOrRemoveMember(namesToSelect) {
    for (let i = 0; i < namesToSelect.length; i++) {
      cy.xpath("//div //div[text()='" + namesToSelect[i] + "']//following::input[1]").click();
    }
  }

  // SelectMultiple Name
  selectOrRemoveMember1(namesToSelect) {
    for (let i = 0; i < namesToSelect.length; i++) {
      cy.xpath("//div[@class='col-6'] //div[text()='" + namesToSelect[i] + "'] //following::i[1]").click();
    }
  }

  removeButtonUpdateDepartmentMember() {
    this.elements.removebutton().click();
  }

  noAlertPopupRemoveButtonUpdateDepartmentMembers() {
    cy.wait(1000);
    this.elements.noalertpopup().click();
  }

  yesAlertPopupRemoveButtonUpdateDepartmentMembers() {
    cy.wait(1000);
    this.elements.yesalertpopup().click();
  }

  okSuccessPopupDeparmentMember() {
    this.elements.oksuccesspopupDeparment().click();
  }

  //Right side 

  // SelectMultiple Name
  unSelectedTeamMemberNameVerify(namesToSelect) {
    for (let i = 0; i < namesToSelect.length; i++) {
      cy.xpath("//div[text()='" + namesToSelect[i] + "']").should('be.visible');
    }
  }

  // Left side 

  // Slected Team MemberName verify
  selectedTeamMemberNameVerify(names) {
    cy.get(':nth-child(1) > :nth-child(n+3) > #selectedgroup > .form-control').each(($element, index) => {
      cy.wrap($element).should('have.text', names[index]);
    });
  }

  // Update Department Head

  upadateDepartmentHeadButtonMenu()
  {
    this.elements.updatedepartmentHeadbutton().click();
  }

  selectNewDepartmentHead(namesToSelect)
  {
    cy.xpath("//div[@class='form-group']//following::label[text()='" + namesToSelect+ "']").click();
  }

  cancelNoAlertPopup()
  {
    this.elements.noalertpopUpDepartmentHead().click();
  }

  cancelYesAlertPopup()
  {
    this.elements.yesalertpopUPDepartmentHead().click();
  }

  saveNoAlertPopup()
  {
    this.elements.savenoalertpopupDepartmentHead().click();
  }

  saveYesAlertPopup()
  {
    this.elements.saveYesalertpopupDepartmentHead().click();
  }

  okSuccessPopupDepartmentHead()
  {
    this.elements.oksuccessDepartmentHead().click();
  }

  //Delete Page

  assignDeleteDepartments(namesToSelect)
  {
    cy.wait(2000);
    cy.xpath("//div[@class='form-group']//following::label[text()='" + namesToSelect+ "']").click();
  }

  actionDeleteButton()
  {
    this.elements.actiondeletebutton().click();
  }

  deleteButton()
  {
    this.elements.deletebutton().click();
  }

  okDeleteButton()
  {
    this.elements.okdeletesuccesspopup().click();
  }

  // View Groups verify the group name 

  //Group Name
  viewGroupVerifyGroupName(Name) {
    this.elements.viewgroupVerifygroupName().contains(Name);
  }

  //Descrption
  viewGroupVerifyDescription(Name) {
    this.elements.viewgroupverifyDescription().contains(Name);
  }

  // Group Head
  viewgroupVerifyGroupHeadName(Name) {
    this.elements.viewgroupverifygroupHeadName().contains(Name);
  }

}


module.exports = new groupsPOM();