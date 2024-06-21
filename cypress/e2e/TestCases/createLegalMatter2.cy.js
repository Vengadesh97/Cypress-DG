import loginpages from "../PageObject/loginpagePOM";
import create from "../PageObject/legalMatterPOM";
import view from "../PageObject/viewMatterPOM";
import logindata from "../../fixtures/login.json";
import data from "../../fixtures/createMatterData2.json";


describe("Create Legal Matter Scenario 3",()=>{

 // while Creating matter , select the Department ,Clients,Team Members and Documents.
 var selectDepartments = [data.Common.Department1, data.Common.Department2];
 var selectClients = [data.Common.client1, data.Common.client2];
 var selectTeamMembers = [data.Common.member1, data.Common.member2];

 // Assertions
 var checkSelectMembers = [data.Common.members1, data.Common.members2, data.Common.members3];
 var checkUnSelectMembers = [data.Common.UnSelectedmember1, data.Common.UnSelectedmember2, data.Common.UnSelectedmember3, data.Common.UnSelectedmember4, data.Common.UnSelectedmember5];
 var checkSelectedClient = [data.Common.clients1, data.Common.clients2];

    before(() => {
        loginpages.visit();
        loginpages.userName(logindata.codeword.email);
        loginpages.passWord(logindata.codeword.password);
        loginpages.loginButton();
    })

    afterEach(()=>{
        loginpages.loadIssues();
        loginpages.homeButton();
        create.leftSideMatterTab();
    })


    it("1.Mandatory and Opponent Advocate with Departments", () => {
        create.leftSideMatterTab();
        create.createTab();
        create.caseTitleField(data.text1.caseTitle);
        create.caseNumberField(data.text1.caseNumber);
        create.scrollDown();
        create.opponentAdvocateAddButton();
        create.opponentAdvocateName(data.text1.oppName);
        create.opponentAdvocateEmail(data.text1.oppEmail);
        create.opponentAdvocateNumber(data.text1.oppNumber);
        create.opponentAdvocateSavebutton();
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.commonNextButton();
        //Team Members
        create.commonNextButton();
        //Documents
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success popup
        create.successViewMatterButton();
        view.viewMatterSearchBox(data.text1.caseTitle);
        view.actionButtonsClick(data.text1.caseTitle);
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text1.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text1.caseNumber);
        view.editMatterInfoCancelButton();
        view.viewMatterSearchBox(data.text1.caseTitle);
        view.actionButtonsClick(data.text1.caseTitle);
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("2.Mandatory and Opponent Advocate with Departments and Clients", () => {
        create.createTab();
        create.caseTitleField(data.text2.caseTitle);
        create.caseNumberField(data.text2.caseNumber);
        create.scrollDown();
        create.opponentAdvocateAddButton();
        create.opponentAdvocateName(data.text2.oppName);
        create.opponentAdvocateEmail(data.text2.oppEmail);
        create.opponentAdvocateNumber(data.text2.oppNumber);
        create.opponentAdvocateSavebutton();
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.selectOnRightSide(selectClients);
        create.commonNextButton();
        //TeamMembers
        create.commonNextButton();
        //Documents
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success Popup
        create.successViewMatterButton();
        //View Matter 
        view.viewMatterSearchBox(data.text2.caseTitle);
        // Action Button
        view.actionButtonsClick(data.text2.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Team Member and Client Tab
        view.viewDetailsTeamMemberAndExternalCounselTab();
        //Client Tab
        view.viewDetailsExternalCounselTab();
        //Selected Client
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text2.caseTitle);
        view.actionButtonsClick(data.text2.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text2.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text2.caseNumber);
        view.editMatterInfoCancelButton();
        view.viewMatterSearchBox(data.text2.caseTitle);
        view.actionButtonsClick(data.text2.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("3.Mandatory and Opponent Advocate with Departments and TM", () => {
        create.createTab();
        create.caseTitleField(data.text3.caseTitle);
        create.caseNumberField(data.text3.caseNumber);
        create.scrollDown();
        create.opponentAdvocateAddButton();
        create.opponentAdvocateName(data.text3.oppName);
        create.opponentAdvocateEmail(data.text3.oppEmail);
        create.opponentAdvocateNumber(data.text3.oppNumber);
        create.opponentAdvocateSavebutton();
        create.nextButton();
        // Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        // Clients
        create.commonNextButton();
        // Team Members
        create.selectOnRightSide(selectTeamMembers);
        create.commonNextButton();
        // Documents
        create.submitButton();
        // Confirmation popup
        create.confirmationYesButton();
        // Success Popup
        create.successViewMatterButton();
        // View Matter 
        view.viewMatterSearchBox(data.text3.caseTitle);
        // Action Button
        view.actionButtonsClick(data.text3.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Team Member and Client Tab
        view.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        view.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text3.caseTitle);
        view.actionButtonsClick(data.text3.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text3.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text3.caseNumber);
        view.editMatterInfoCancelButton();
        view.viewMatterSearchBox(data.text3.caseTitle);
        view.actionButtonsClick(data.text3.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("4.Mandatory and Opponent Advocate with Departments and Document ", () => {
        create.createTab();
        create.caseTitleField(data.text4.caseTitle);
        create.caseNumberField(data.text4.caseNumber);
        create.scrollDown();
        create.opponentAdvocateAddButton();
        create.opponentAdvocateName(data.text4.oppName);
        create.opponentAdvocateEmail(data.text4.oppEmail);
        create.opponentAdvocateNumber(data.text4.oppNumber);
        create.opponentAdvocateSavebutton();
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.commonNextButton();
        //Team Members
        create.commonNextButton();
        //Documents
        create.selectOnRightSide(data.text4.document1);
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success Popup
        create.successViewMatterButton();
        //View Matter 
        view.viewMatterSearchBox(data.text4.caseTitle);
        view.actionButtonsClick(data.text4.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Document Tab
        view.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        view.viewDetailsCheckSelectedDocumentNameAppear(data.text4.document1);
        // Add New + Tab
        view.addNewTab();
        // Check Selected Document Name Appear
        view.viewDetailsAddExistingCheckSelectedDocumentNameAppear(data.text4.document1);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text4.caseTitle);
        // Action Button
        view.actionButtonsClick(data.text4.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text4.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text4.caseNumber);
        view.editMatterInfoCancelButton();
        view.viewMatterSearchBox(data.text4.caseTitle);
        view.actionButtonsClick(data.text4.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("5.Mandatory and Opponent Advocate with Departments ,Clients and TM ", () => {
        create.createTab();
        create.caseTitleField(data.text5.caseTitle);
        create.caseNumberField(data.text5.caseNumber);
        create.scrollDown();
        create.opponentAdvocateAddButton();
        create.opponentAdvocateName(data.text5.oppName);
        create.opponentAdvocateEmail(data.text5.oppEmail);
        create.opponentAdvocateNumber(data.text5.oppNumber);
        create.opponentAdvocateSavebutton();
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.selectOnRightSide(selectClients);
        create.commonNextButton();
        //Team Members
        create.selectOnRightSide(selectTeamMembers);
        create.commonNextButton();
        //Documents
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success Popup
        create.successViewMatterButton();

        //View Matter 
        view.viewMatterSearchBox(data.text5.caseTitle);
        // Action Button
        view.actionButtonsClick(data.text5.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Team Member and Client Tab
        view.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        view.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        //Client Tab
        view.viewDetailsExternalCounselTab();
        //Selected Client
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text5.caseTitle);
        view.actionButtonsClick(data.text5.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text5.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text5.caseNumber);
        view.editMatterInfoCancelButton();
        view.viewMatterSearchBox(data.text5.caseTitle);
        view.actionButtonsClick(data.text5.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("6.Mandatory and Opponent Advocate with Departments , Clients and Documents ", () => {
        create.createTab();
        create.caseTitleField(data.text6.caseTitle);
        create.caseNumberField(data.text6.caseNumber);
        create.scrollDown();
        create.opponentAdvocateAddButton();
        create.opponentAdvocateName(data.text6.oppName);
        create.opponentAdvocateEmail(data.text6.oppEmail);
        create.opponentAdvocateNumber(data.text6.oppNumber);
        create.opponentAdvocateSavebutton();
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.selectOnRightSide(selectClients);
        create.commonNextButton();
        //Team Members
        create.commonNextButton();
        //Documents
        create.selectOnRightSide(data.text6.document1);
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success Popup
        create.successViewMatterButton();
        //View Matter 
        view.viewMatterSearchBox(data.text6.caseTitle);
        view.actionButtonsClick(data.text6.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Document Tab
        view.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        view.viewDetailsCheckSelectedDocumentNameAppear(data.text6.document1);
        // Add New + Tab
        view.addNewTab();
        // Check Selected Document Name Appear
        view.viewDetailsAddExistingCheckSelectedDocumentNameAppear(data.text6.document1);
        // Team Member and Client Tab
        view.viewDetailsTeamMemberAndExternalCounselTab();
        //Client Tab
        view.viewDetailsExternalCounselTab();
        //Selected Client
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text6.caseTitle);
        view.actionButtonsClick(data.text6.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text6.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text6.caseNumber);
        view.editMatterInfoCancelButton();
        view.viewMatterSearchBox(data.text6.caseTitle);
        view.actionButtonsClick(data.text6.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("7.Mandatory and Opponent Advocate with All ", () => {
        create.createTab();
        create.caseTitleField(data.text7.caseTitle);
        create.caseNumberField(data.text7.caseNumber);
        create.scrollDown();
        create.opponentAdvocateAddButton();
        create.opponentAdvocateName(data.text7.oppName);
        create.opponentAdvocateEmail(data.text7.oppEmail);
        create.opponentAdvocateNumber(data.text7.oppNumber);
        create.opponentAdvocateSavebutton();
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.selectOnRightSide(selectClients);
        create.commonNextButton();
        //Team Members
        create.selectOnRightSide(selectTeamMembers);
        create.commonNextButton();
        //Documents
        create.selectOnRightSide(data.text7.document1);
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success Popup
        create.successViewMatterButton();
        //View Matter 
        view.viewMatterSearchBox(data.text7.caseTitle);
        // Action Button
        view.actionButtonsClick(data.text7.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Document Tab
        view.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        view.viewDetailsCheckSelectedDocumentNameAppear(data.text7.document1);
        // Add New + Tab
        view.addNewTab();
        // Check Selected Document Name Appear
        view.viewDetailsAddExistingCheckSelectedDocumentNameAppear(data.text7.document1);
        // Team Member and Client Tab
        view.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        view.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        //Client Tab
        view.viewDetailsExternalCounselTab();
        //Selected Client
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text7.caseTitle);
        view.actionButtonsClick(data.text7.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text7.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text7.caseNumber);
        view.editMatterInfoCancelButton();
        view.viewMatterSearchBox(data.text7.caseTitle);
        view.actionButtonsClick(data.text7.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })


    it("8.Mandatory DOF and Description with Departments", () => {
        create.createTab();
        create.caseTitleField(data.text8.caseTitle);
        create.caseNumberField(data.text8.caseNumber);
        create.scrollDown();
        create.dateClick();
        create.dateOfFilling(data.text8.dateFill);
        create.descriptionField(data.text8.description);
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.commonNextButton();
        //Team Members
        create.commonNextButton();
        //Documents
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success popup
        create.successViewMatterButton();
        view.viewMatterSearchBox(data.text8.caseTitle);
        view.actionButtonsClick(data.text8.caseTitle);
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text8.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text8.caseNumber);
        view.verifyEditMatterInfoDescription(data.text8.Description);
        view.editMatterInfoCancelButton();
        view.viewMatterSearchBox(data.text8.caseTitle);
        view.actionButtonsClick(data.text8.caseTitle);
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("9.Mandatory DOF and Description with Departments and Clients", () => {
        create.createTab();
        create.caseTitleField(data.text9.caseTitle);
        create.caseNumberField(data.text9.caseNumber);
        create.scrollDown();
        create.dateClick();
        create.dateOfFilling(data.text9.dateFill);
        create.descriptionField(data.text9.description);
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.selectOnRightSide(selectClients);
        create.commonNextButton();
        //TeamMembers
        create.commonNextButton();
        //Documents
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success Popup
        create.successViewMatterButton();
        //View Matter 
        view.viewMatterSearchBox(data.text9.caseTitle);
        // Action Button
        view.actionButtonsClick(data.text9.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Team Member and Client Tab
        view.viewDetailsTeamMemberAndExternalCounselTab();
        //Client Tab
        view.viewDetailsExternalCounselTab();
        //Selected Client
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text9.caseTitle);
        view.actionButtonsClick(data.text9.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text9.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text9.caseNumber);
        view.verifyEditMatterInfoDescription(data.text9.Description);
        view.editMatterInfoCancelButton();
        view.viewMatterSearchBox(data.text9.caseTitle);
        view.actionButtonsClick(data.text9.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("10.Mandatory DOF and Description with Departments and TM", () => {
        create.createTab();
        create.caseTitleField(data.text10.caseTitle);
        create.caseNumberField(data.text10.caseNumber);
        create.scrollDown();
        create.dateClick();
        create.dateOfFilling(data.text10.dateFill);
        create.descriptionField(data.text10.description);
        create.nextButton();
        // Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        // Clients
        create.commonNextButton();
        // Team Members
        create.selectOnRightSide(selectTeamMembers);
        create.commonNextButton();
        // Documents
        create.submitButton();
        // Confirmation popup
        create.confirmationYesButton();
        // Success Popup
        create.successViewMatterButton();
        // View Matter 
        view.viewMatterSearchBox(data.text10.caseTitle);
        // Action Button
        view.actionButtonsClick(data.text10.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Team Member and Client Tab
        view.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        view.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text10.caseTitle);
        view.actionButtonsClick(data.text10.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text10.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text10.caseNumber);
        view.verifyEditMatterInfoDescription(data.text10.Description);
        view.editMatterInfoCancelButton();
        view.viewMatterSearchBox(data.text10.caseTitle);
        view.actionButtonsClick(data.text10.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("11.Mandatory DOF and Description with Departments and Document ", () => {
        create.createTab();
        create.caseTitleField(data.text11.caseTitle);
        create.caseNumberField(data.text11.caseNumber);
        create.scrollDown();
        create.dateClick();
        create.dateOfFilling(data.text11.dateFill);
        create.descriptionField(data.text11.description);
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.commonNextButton();
        //Team Members
        create.commonNextButton();
        //Documents
        create.selectOnRightSide(data.text11.document1);
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success Popup
        create.successViewMatterButton();
        //View Matter 
        view.viewMatterSearchBox(data.text11.caseTitle);
        view.actionButtonsClick(data.text11.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Document Tab
        view.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        view.viewDetailsCheckSelectedDocumentNameAppear(data.text11.document1);
        // Add New + Tab
        view.addNewTab();
        // Check Selected Document Name Appear
        view.viewDetailsAddExistingCheckSelectedDocumentNameAppear(data.text11.document1);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text11.caseTitle);
        // Action Button
        view.actionButtonsClick(data.text11.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text11.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text11.caseNumber);
        view.verifyEditMatterInfoDescription(data.text11.Description);
        view.editMatterInfoCancelButton();
        view.actionButtonsClick(data.text11.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("12.Mandatory DOF and Description with Departments ,Clients and TM ", () => {
        create.createTab();
        create.caseTitleField(data.text12.caseTitle);
        create.caseNumberField(data.text12.caseNumber);
        create.scrollDown();
        create.dateClick();
        create.dateOfFilling(data.text12.dateFill);
        create.descriptionField(data.text12.description);
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.selectOnRightSide(selectClients);
        create.commonNextButton();
        //Team Members
        create.selectOnRightSide(selectTeamMembers);
        create.commonNextButton();
        //Documents
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success Popup
        create.successViewMatterButton();
        //View Matter 
        view.viewMatterSearchBox(data.text12.caseTitle);
        // Action Button
        view.actionButtonsClick(data.text12.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Team Member and Client Tab
        view.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        view.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        //Client Tab
        view.viewDetailsExternalCounselTab();
        //Selected Client
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text12.caseTitle);
        view.actionButtonsClick(data.text12.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text12.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text12.caseNumber);
        view.verifyEditMatterInfoDescription(data.text12.Description);
        view.editMatterInfoCancelButton();
        view.actionButtonsClick(data.text12.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("13.Mandatory DOF and Description with Departments , Clients and Documents ", () => {
        create.createTab();
        create.caseTitleField(data.text13.caseTitle);
        create.caseNumberField(data.text13.caseNumber);
        create.scrollDown();
        create.dateClick();
        create.dateOfFilling(data.text13.dateFill);
        create.descriptionField(data.text13.description);
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.selectOnRightSide(selectClients);
        create.commonNextButton();
        //Team Members
        create.commonNextButton();
        //Documents
        create.selectOnRightSide(data.text13.document1);
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success Popup
        create.successViewMatterButton();
        //View Matter 
        view.viewMatterSearchBox(data.text13.caseTitle);
        view.actionButtonsClick(data.text13.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Document Tab
        view.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        view.viewDetailsCheckSelectedDocumentNameAppear(data.text13.document1);
        // Add New + Tab
        view.addNewTab();
        // Check Selected Document Name Appear
        view.viewDetailsAddExistingCheckSelectedDocumentNameAppear(data.text13.document1);
        // Team Member and Client Tab
        view.viewDetailsTeamMemberAndExternalCounselTab();
        //Client Tab
        view.viewDetailsExternalCounselTab();
        //Selected Client
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text13.caseTitle);
        view.actionButtonsClick(data.text13.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text13.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text13.caseNumber);
        view.verifyEditMatterInfoDescription(data.text13.Description);
        view.editMatterInfoCancelButton();
        view.actionButtonsClick(data.text13.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("14.Mandatory DOF and Description with All ", () => {
        create.createTab();
        create.caseTitleField(data.text14.caseTitle);
        create.caseNumberField(data.text14.caseNumber);
        create.scrollDown();
        create.dateClick();
        create.dateOfFilling(data.text14.dateFill);
        create.descriptionField(data.text14.description);
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.selectOnRightSide(selectClients);
        create.commonNextButton();
        //Team Members
        create.selectOnRightSide(selectTeamMembers);
        create.commonNextButton();
        //Documents
        create.selectOnRightSide(data.text14.document1);
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success Popup
        create.successViewMatterButton();
        //View Matter 
        view.viewMatterSearchBox(data.text14.caseTitle);
        // Action Button
        view.actionButtonsClick(data.text14.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Document Tab
        view.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        view.viewDetailsCheckSelectedDocumentNameAppear(data.text14.document1);
        // Add New + Tab
        view.addNewTab();
        // Check Selected Document Name Appear
        view.viewDetailsAddExistingCheckSelectedDocumentNameAppear(data.text14.document1);
        // Team Member and Client Tab
        view.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        view.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        //Client Tab
        view.viewDetailsExternalCounselTab();
        //Selected Client
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text14.caseTitle);
        view.actionButtonsClick(data.text14.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text14.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text14.caseNumber);
        view.verifyEditMatterInfoDescription(data.text14.Description);
        view.editMatterInfoCancelButton();
        view.actionButtonsClick(data.text14.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("15.Mandatory DOF and Case Type with Departments", () => {
        create.createTab();
        create.caseTitleField(data.text15.caseTitle);
        create.caseNumberField(data.text15.caseNumber);
        create.scrollDown();
        create.dateClick();
        create.dateOfFilling(data.text15.dateFill);
        create.caseTypeField(data.text15.caseType);
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.commonNextButton();
        //Team Members
        create.commonNextButton();
        //Documents
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success popup
        create.successViewMatterButton();
        view.viewMatterSearchBox(data.text15.caseTitle);
        view.actionButtonsClick(data.text15.caseTitle);
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text15.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text15.caseNumber);
        view.verifyEditMatterInfoCaseType(data.text15.caseType);
        view.editMatterInfoCancelButton();
        view.actionButtonsClick(data.text15.caseTitle);
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("16.Mandatory DOF and Case Type with Departments and Clients", () => {
        create.createTab();
        create.caseTitleField(data.text16.caseTitle);
        create.caseNumberField(data.text16.caseNumber);
        create.scrollDown();
        create.dateClick();
        create.dateOfFilling(data.text16.dateFill);
        create.caseTypeField(data.text16.caseType);
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.selectOnRightSide(selectClients);
        create.commonNextButton();
        //TeamMembers
        create.commonNextButton();
        //Documents
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success Popup
        create.successViewMatterButton();
        //View Matter 
        view.viewMatterSearchBox(data.text16.caseTitle);
        // Action Button
        view.actionButtonsClick(data.text16.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Team Member and Client Tab
        view.viewDetailsTeamMemberAndExternalCounselTab();
        //Client Tab
        view.viewDetailsExternalCounselTab();
        //Selected Client
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text16.caseTitle);
        view.actionButtonsClick(data.text16.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text16.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text16.caseNumber);
        view.verifyEditMatterInfoCaseType(data.text16.caseType);
        view.editMatterInfoCancelButton();
        view.actionButtonsClick(data.text16.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("17.Mandatory DOF and Case Type with Departments and TM", () => {
        create.createTab();
        create.caseTitleField(data.text17.caseTitle);
        create.caseNumberField(data.text17.caseNumber);
        create.scrollDown();
        create.dateClick();
        create.dateOfFilling(data.text17.dateFill);
        create.caseTypeField(data.text17.caseType);
        create.nextButton();
        // Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        // Clients
        create.commonNextButton();
        // Team Members
        create.selectOnRightSide(selectTeamMembers);
        create.commonNextButton();
        // Documents
        create.submitButton();
        // Confirmation popup
        create.confirmationYesButton();
        // Success Popup
        create.successViewMatterButton();
        // View Matter 
        view.viewMatterSearchBox(data.text17.caseTitle);
        // Action Button
        view.actionButtonsClick(data.text17.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Team Member and Client Tab
        view.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        view.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text17.caseTitle);
        view.actionButtonsClick(data.text17.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text17.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text17.caseNumber);
        view.verifyEditMatterInfoCaseType(data.text17.caseType);
        view.editMatterInfoCancelButton();
        view.actionButtonsClick(data.text17.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("18.Mandatory DOF and Case Type with Departments and Document ", () => {
        create.createTab();
        create.caseTitleField(data.text18.caseTitle);
        create.caseNumberField(data.text18.caseNumber);
        create.scrollDown();
        create.dateClick();
        create.dateOfFilling(data.text18.dateFill);
        create.caseTypeField(data.text18.caseType);
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.commonNextButton();
        //Team Members
        create.commonNextButton();
        //Documents
        create.selectOnRightSide(data.text18.document1);
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success Popup
        create.successViewMatterButton();
        //View Matter 
        view.viewMatterSearchBox(data.text18.caseTitle);
        view.actionButtonsClick(data.text18.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Document Tab
        view.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        view.viewDetailsCheckSelectedDocumentNameAppear(data.text18.document1);
        // Add New + Tab
        view.addNewTab();
        // Check Selected Document Name Appear
        view.viewDetailsAddExistingCheckSelectedDocumentNameAppear(data.text18.document1);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text18.caseTitle);
        // Action Button
        view.actionButtonsClick(data.text18.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text18.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text18.caseNumber);
        view.verifyEditMatterInfoCaseType(data.text18.caseType);
        view.editMatterInfoCancelButton();
        view.actionButtonsClick(data.text18.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("19.Mandatory DOF and Case Type with Departments ,Clients and TM ", () => {
        create.createTab();
        create.caseTitleField(data.text19.caseTitle);
        create.caseNumberField(data.text19.caseNumber);
        create.scrollDown();
        create.dateClick();
        create.dateOfFilling(data.text19.dateFill);
        create.caseTypeField(data.text19.caseType);
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.selectOnRightSide(selectClients);
        create.commonNextButton();
        //Team Members
        create.selectOnRightSide(selectTeamMembers);
        create.commonNextButton();
        //Documents
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success Popup
        create.successViewMatterButton();
        //View Matter 
        view.viewMatterSearchBox(data.text19.caseTitle);
        // Action Button
        view.actionButtonsClick(data.text19.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Team Member and Client Tab
        view.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        view.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        //Client Tab
        view.viewDetailsExternalCounselTab();
        //Selected Client
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text19.caseTitle);
        view.actionButtonsClick(data.text19.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text19.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text19.caseNumber);
        view.verifyEditMatterInfoCaseType(data.text19.caseType);
        view.editMatterInfoCancelButton();
        view.actionButtonsClick(data.text19.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("20.Mandatory DOF and Case Type with Departments , Clients and Documents ", () => {
        create.createTab();
        create.caseTitleField(data.text20.caseTitle);
        create.caseNumberField(data.text20.caseNumber);
        create.scrollDown();
        create.dateClick();
        create.dateOfFilling(data.text20.dateFill);
        create.caseTypeField(data.text20.caseType);
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.selectOnRightSide(selectClients);
        create.commonNextButton();
        //Team Members
        create.commonNextButton();
        //Documents
        create.selectOnRightSide(data.text20.document1);
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success Popup
        create.successViewMatterButton();
        //View Matter 
        view.viewMatterSearchBox(data.text20.caseTitle);
        view.actionButtonsClick(data.text20.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Document Tab
        view.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        view.viewDetailsCheckSelectedDocumentNameAppear(data.text20.document1);
        // Add New + Tab
        view.addNewTab();
        // Check Selected Document Name Appear
        view.viewDetailsAddExistingCheckSelectedDocumentNameAppear(data.text20.document1);
        // Team Member and Client Tab
        view.viewDetailsTeamMemberAndExternalCounselTab();
        //Client Tab
        view.viewDetailsExternalCounselTab();
        //Selected Client
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text20.caseTitle);
        view.actionButtonsClick(data.text20.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text20.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text20.caseNumber);
        view.verifyEditMatterInfoCaseType(data.text20.caseType);
        view.editMatterInfoCancelButton();
        view.actionButtonsClick(data.text20.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("21.Mandatory DOF and Case Type with All ", () => {
        create.createTab();
        create.caseTitleField(data.text21.caseTitle);
        create.caseNumberField(data.text21.caseNumber);
        create.scrollDown();
        create.dateClick();
        create.dateOfFilling(data.text21.dateFill);
        create.caseTypeField(data.text21.caseType);
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.selectOnRightSide(selectClients);
        create.commonNextButton();
        //Team Members
        create.selectOnRightSide(selectTeamMembers);
        create.commonNextButton();
        //Documents
        create.selectOnRightSide(data.text21.document1);
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success Popup
        create.successViewMatterButton();
        //View Matter 
        view.viewMatterSearchBox(data.text21.caseTitle);
        // Action Button
        view.actionButtonsClick(data.text21.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Document Tab
        view.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        view.viewDetailsCheckSelectedDocumentNameAppear(data.text21.document1);
        // Add New + Tab
        view.addNewTab();
        // Check Selected Document Name Appear
        view.viewDetailsAddExistingCheckSelectedDocumentNameAppear(data.text21.document1);
        // Team Member and Client Tab
        view.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        view.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        //Client Tab
        view.viewDetailsExternalCounselTab();
        //Selected Client
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text21.caseTitle);
        view.actionButtonsClick(data.text21.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text21.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text21.caseNumber);
        view.verifyEditMatterInfoCaseType(data.text21.caseType);
        view.editMatterInfoCancelButton();
        view.actionButtonsClick(data.text21.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("22.Mandatory DOF and Court with Departments", () => {
        create.createTab();
        create.caseTitleField(data.text22.caseTitle);
        create.caseNumberField(data.text22.caseNumber);
        create.scrollDown();
        create.dateClick();
        create.dateOfFilling(data.text22.dateFill);
        create.courtField(data.text22.court);
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.commonNextButton();
        //Team Members
        create.commonNextButton();
        //Documents
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success popup
        create.successViewMatterButton();
        view.viewMatterSearchBox(data.text22.caseTitle);
        view.actionButtonsClick(data.text22.caseTitle);
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text22.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text22.caseNumber);
        view.verifyEditMatterInfoCourt(data.text22.court);
        view.editMatterInfoCancelButton();
        view.actionButtonsClick(data.text22.caseTitle);
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("23.Mandatory DOF and Court with Departments and Clients", () => {
        create.createTab();
        create.caseTitleField(data.text23.caseTitle);
        create.caseNumberField(data.text23.caseNumber);
        create.scrollDown();
        create.dateClick();
        create.dateOfFilling(data.text23.dateFill);
        create.courtField(data.text23.court);
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.selectOnRightSide(selectClients);
        create.commonNextButton();
        //TeamMembers
        create.commonNextButton();
        //Documents
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success Popup
        create.successViewMatterButton();
        //View Matter 
        view.viewMatterSearchBox(data.text23.caseTitle);
        // Action Button
        view.actionButtonsClick(data.text23.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Team Member and Client Tab
        view.viewDetailsTeamMemberAndExternalCounselTab();
        //Client Tab
        view.viewDetailsExternalCounselTab();
        //Selected Client
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text23.caseTitle);
        view.actionButtonsClick(data.text23.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text23.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text23.caseNumber);
        view.verifyEditMatterInfoCourt(data.text23.court);
        view.editMatterInfoCancelButton();
        view.actionButtonsClick(data.text23.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("24.Mandatory DOF and Court with Departments and TM", () => {
        create.createTab();
        create.caseTitleField(data.text24.caseTitle);
        create.caseNumberField(data.text24.caseNumber);
        create.scrollDown();
        create.dateClick();
        create.dateOfFilling(data.text24.dateFill);
        create.courtField(data.text24.court);
        create.nextButton();
        // Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        // Clients
        create.commonNextButton();
        // Team Members
        create.selectOnRightSide(selectTeamMembers);
        create.commonNextButton();
        // Documents
        create.submitButton();
        // Confirmation popup
        create.confirmationYesButton();
        // Success Popup
        create.successViewMatterButton();
        // View Matter 
        view.viewMatterSearchBox(data.text24.caseTitle);
        // Action Button
        view.actionButtonsClick(data.text24.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Team Member and Client Tab
        view.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        view.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text24.caseTitle);
        view.actionButtonsClick(data.text24.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text24.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text24.caseNumber);
        view.verifyEditMatterInfoCourt(data.text24.court);
        view.editMatterInfoCancelButton();
        view.actionButtonsClick(data.text24.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("25.Mandatory DOF and Court with Departments and Document ", () => {
        create.createTab();
        create.caseTitleField(data.text25.caseTitle);
        create.caseNumberField(data.text25.caseNumber);
        create.scrollDown();
        create.dateClick();
        create.dateOfFilling(data.text25.dateFill);
        create.courtField(data.text25.court);
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.commonNextButton();
        //Team Members
        create.commonNextButton();
        //Documents
        create.selectOnRightSide(data.text25.document1);
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success Popup
        create.successViewMatterButton();
        //View Matter 
        view.viewMatterSearchBox(data.text25.caseTitle);
        view.actionButtonsClick(data.text25.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Document Tab
        view.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        view.viewDetailsCheckSelectedDocumentNameAppear(data.text25.document1);
        // Add New + Tab
        view.addNewTab();
        // Check Selected Document Name Appear
        view.viewDetailsAddExistingCheckSelectedDocumentNameAppear(data.text25.document1);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text25.caseTitle);
        // Action Button
        view.actionButtonsClick(data.text25.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text25.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text25.caseNumber);
        view.verifyEditMatterInfoCourt(data.text25.court);
        view.editMatterInfoCancelButton();
        view.actionButtonsClick(data.text25.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("26.Mandatory DOF and Court with Departments ,Clients and TM ", () => {
        create.createTab();
        create.caseTitleField(data.text26.caseTitle);
        create.caseNumberField(data.text26.caseNumber);
        create.scrollDown();
        create.dateClick();
        create.dateOfFilling(data.text26.dateFill);
        create.courtField(data.text26.court);
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.selectOnRightSide(selectClients);
        create.commonNextButton();
        //Team Members
        create.selectOnRightSide(selectTeamMembers);
        create.commonNextButton();
        //Documents
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success Popup
        create.successViewMatterButton();
        //View Matter 
        view.viewMatterSearchBox(data.text26.caseTitle);
        // Action Button
        view.actionButtonsClick(data.text26.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Team Member and Client Tab
        view.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        view.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        //Client Tab
        view.viewDetailsExternalCounselTab();
        //Selected Client
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text26.caseTitle);
        view.actionButtonsClick(data.text26.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text26.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text26.caseNumber);
        view.verifyEditMatterInfoCourt(data.text26.court);
        view.editMatterInfoCancelButton();
        view.actionButtonsClick(data.text26.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("27.Mandatory DOF and Court with Departments , Clients and Documents ", () => {
        create.createTab();
        create.caseTitleField(data.text27.caseTitle);
        create.caseNumberField(data.text27.caseNumber);
        create.scrollDown();
        create.dateClick();
        create.dateOfFilling(data.text27.dateFill);
        create.courtField(data.text27.court);
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.selectOnRightSide(selectClients);
        create.commonNextButton();
        //Team Members
        create.commonNextButton();
        //Documents
        create.selectOnRightSide(data.text27.document1);
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success Popup
        create.successViewMatterButton();
        //View Matter 
        view.viewMatterSearchBox(data.text27.caseTitle);
        view.actionButtonsClick(data.text27.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Document Tab
        view.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        view.viewDetailsCheckSelectedDocumentNameAppear(data.text27.document1);
        // Add New + Tab
        view.addNewTab();
        // Check Selected Document Name Appear
        view.viewDetailsAddExistingCheckSelectedDocumentNameAppear(data.text27.document1);
        // Team Member and Client Tab
        view.viewDetailsTeamMemberAndExternalCounselTab();
        //Client Tab
        view.viewDetailsExternalCounselTab();
        //Selected Client
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text27.caseTitle);
        view.actionButtonsClick(data.text27.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text27.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text27.caseNumber);
        view.verifyEditMatterInfoCourt(data.text27.court);
        view.editMatterInfoCancelButton();
        view.actionButtonsClick(data.text27.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("28.Mandatory DOF and Court with All ", () => {
        create.createTab();
        create.caseTitleField(data.text28.caseTitle);
        create.caseNumberField(data.text28.caseNumber);
        create.scrollDown();
        create.dateClick();
        create.dateOfFilling(data.text28.dateFill);
        create.courtField(data.text28.court);
        create.nextButton();
        //Departments
        create.selectOnRightSide(selectDepartments);
        create.commonNextButton();
        //Clients
        create.selectOnRightSide(selectClients);
        create.commonNextButton();
        //Team Members
        create.selectOnRightSide(selectTeamMembers);
        create.commonNextButton();
        //Documents
        create.selectOnRightSide(data.text28.document1);
        create.submitButton();
        //Confirmation Popup
        create.confirmationYesButton();
        //Success Popup
        create.successViewMatterButton();
        //View Matter 
        view.viewMatterSearchBox(data.text28.caseTitle);
        // Action Button
        view.actionButtonsClick(data.text28.caseTitle);
        // View Details
        view.viewDetailsMenuButton();
        // Document Tab
        view.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        view.viewDetailsCheckSelectedDocumentNameAppear(data.text28.document1);
        // Add New + Tab
        view.addNewTab();
        // Check Selected Document Name Appear
        view.viewDetailsAddExistingCheckSelectedDocumentNameAppear(data.text28.document1);
        // Team Member and Client Tab
        view.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        view.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        //Client Tab
        view.viewDetailsExternalCounselTab();
        //Selected Client
        view.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        create.scrollUp();
        view.viewTab();
        view.viewMatterSearchBox(data.text28.caseTitle);
        view.actionButtonsClick(data.text28.caseTitle);
        // Edit Matter Info
        view.editMatterInfoMenuButton();
        view.verifyEditMatterInfoCaseTitle(data.text28.caseTitle);
        view.verifyEditMatterInfoCaseNumber(data.text28.caseNumber);
        view.verifyEditMatterInfoCourt(data.text28.court);
        view.editMatterInfoCancelButton();
        view.actionButtonsClick(data.text28.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })




})