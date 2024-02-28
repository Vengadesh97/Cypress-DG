import loginPage from "../PageObject/loginpagePOM";
import legalMatters from "../PageObject/legalMatterPOM";
import viewMatters from "../PageObject/viewMatterPOM";
import loginPageData from "../../fixtures/login.json";
import data from "../../fixtures/createMatterData1.json";


describe("Create Legal Matter Scenario 2 ", () => {

    // while Creating matter , select the Department ,Clients,Team Members and Documents.
    var selectDepartments = [data.Common.Department1, data.Common.Department2];
    var selectClients = [data.Common.client1, data.Common.client2];
    var selectTeamMembers = [data.Common.member1, data.Common.member2];
    var selectDocuments = [data.Common.document1, data.Common.document2];

    // Assertions
    var checkSelectMembers = [data.Common.members1, data.Common.members2, data.Common.members3];
    var checkUnSelectMembers = [data.Common.UnSelectedmember1, data.Common.UnSelectedmember2, data.Common.UnSelectedmember3, data.Common.UnSelectedmember4, data.Common.UnSelectedmember5];
    var checkSelectedClient = [data.Common.clients1, data.Common.clients2];
    var checkSelectedDocuments = [data.Common.documents1, data.Common.documents2];
    var checkUnSelectedDocuments = [data.Common.unSelecteddocument1, data.Common.unSelecteddocument2];

    before(() => {
        loginPage.visit();
        loginPage.userName(loginPageData.codeword.email);
        loginPage.passWord(loginPageData.codeword.password);
        loginPage.loginButton();
    })

    after(() => {
        loginPage.loadIssues();
        loginPage.homeButton();
        legalMatters.leftSideMatterTab();
    })

    it("1.Mandatory and DOF with Departments", () => {
        legalMatters.leftSideMatterTab();
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text1.caseTitle);
        legalMatters.caseNumberField(data.text1.caseNumber);
        legalMatters.dateClick();
        legalMatters.dateOfFilling(data.text1.DateFill);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success popup
        legalMatters.successViewMatterButton();
        viewMatters.viewMatterSearchBox(data.text1.caseTitle);
        viewMatters.actionButtonsClick(data.text1.caseTitle);
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text1.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text1.caseNumber);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text1.caseTitle);
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("2.Mandatory and DOF with Departments and Clients", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text2.caseTitle);
        legalMatters.caseNumberField(data.text2.caseNumber);
        legalMatters.dateClick();
        legalMatters.dateOfFilling(data.text2.DateFill);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //TeamMembers
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text2.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text2.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text2.caseTitle);
        viewMatters.actionButtonsClick(data.text2.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text2.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text2.caseNumber);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text2.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("3.Mandatory and DOF with Departments and TM", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text3.caseTitle);
        legalMatters.caseNumberField(data.text3.caseNumber);
        legalMatters.dateClick();
        legalMatters.dateOfFilling(data.text3.DateFill);
        legalMatters.nextButton();
        // Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        // Clients
        legalMatters.commonNextButton();
        // Team Members
        legalMatters.selectOnRightSide(selectTeamMembers);
        legalMatters.commonNextButton();
        // Documents
        legalMatters.submitButton();
        // Confirmation popup
        legalMatters.confirmationYesButton();
        // Success Popup
        legalMatters.successViewMatterButton();
        // View Matter 
        viewMatters.viewMatterSearchBox(data.text3.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text3.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        viewMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text3.caseTitle);
        viewMatters.actionButtonsClick(data.text3.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text3.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text3.caseNumber);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text3.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("4.Mandatory and DOF with Departments and Document ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text4.caseTitle);
        legalMatters.caseNumberField(data.text4.caseNumber);
        legalMatters.dateClick();
        legalMatters.dateOfFilling(data.text4.DateFill);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text4.caseTitle);
        viewMatters.actionButtonsClick(data.text4.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Document Tab
        viewMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewMatters.addNewTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text4.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text4.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text4.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text4.caseNumber);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text4.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("5.Mandatory and DOF with Departments ,Clients and TM ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text5.caseTitle);
        legalMatters.caseNumberField(data.text5.caseNumber);
        legalMatters.dateClick();
        legalMatters.dateOfFilling(data.text5.DateFill);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.selectOnRightSide(selectTeamMembers);
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();

        //View Matter 
        viewMatters.viewMatterSearchBox(data.text5.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text5.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        viewMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text5.caseTitle);
        viewMatters.actionButtonsClick(data.text5.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text5.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text5.caseNumber);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text5.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("6.Mandatory and DOF with Departments , Clients and Documents ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text6.caseTitle);
        legalMatters.caseNumberField(data.text6.caseNumber);
        legalMatters.dateClick();
        legalMatters.dateOfFilling(data.text6.DateFill);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text6.caseTitle);
        viewMatters.actionButtonsClick(data.text6.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Document Tab
        viewMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewMatters.addNewTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text6.caseTitle);
        viewMatters.actionButtonsClick(data.text6.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text6.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text6.caseNumber);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("7.Mandatory and DOF with All ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text7.caseTitle);
        legalMatters.caseNumberField(data.text7.caseNumber);
        legalMatters.dateClick();
        legalMatters.dateOfFilling(data.text7.DateFill);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.selectOnRightSide(selectTeamMembers);
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text7.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text7.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Document Tab
        viewMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewMatters.addNewTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        viewMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text7.caseTitle);
        viewMatters.actionButtonsClick(data.text7.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text7.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text7.caseNumber);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("8.Mandatory and Description with Departments", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text8.caseTitle);
        legalMatters.caseNumberField(data.text8.caseNumber);
        legalMatters.scrollDown();
        legalMatters.descriptionField(data.text8.Description);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success popup
        legalMatters.successViewMatterButton();
        viewMatters.viewMatterSearchBox(data.text8.caseTitle);
        viewMatters.actionButtonsClick(data.text8.caseTitle);
        // Edit Matter info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text8.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text8.caseNumber);
        viewMatters.verifyEditMatterInfoDescription(data.text8.Description);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text8.caseTitle);
        // update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("9.Mandatory and Description with Departments and Clients", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text9.caseTitle);
        legalMatters.caseNumberField(data.text9.caseNumber);
        legalMatters.scrollDown();
        legalMatters.descriptionField(data.text9.Description);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //TeamMembers
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text9.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text9.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text9.caseTitle);
        viewMatters.actionButtonsClick(data.text9.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text9.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text9.caseNumber);
        viewMatters.verifyEditMatterInfoDescription(data.text9.Description);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text9.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("10.Mandatory and Description with Departments and TM", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text10.caseTitle);
        legalMatters.caseNumberField(data.text10.caseNumber);
        legalMatters.scrollDown();
        legalMatters.descriptionField(data.text10.Description);
        legalMatters.nextButton();
        // Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        // Clients
        legalMatters.commonNextButton();
        // Team Members
        legalMatters.selectOnRightSide(selectTeamMembers);
        legalMatters.commonNextButton();
        // Documents
        legalMatters.submitButton();
        // Confirmation popup
        legalMatters.confirmationYesButton();
        // Success Popup
        legalMatters.successViewMatterButton();
        // View Matter 
        viewMatters.viewMatterSearchBox(data.text10.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text10.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        viewMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text10.caseTitle);
        viewMatters.actionButtonsClick(data.text10.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text10.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text10.caseNumber);
        viewMatters.verifyEditMatterInfoDescription(data.text10.Description);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text10.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("11.Mandatory and Description with Departments and Document ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text11.caseTitle);
        legalMatters.caseNumberField(data.text11.caseNumber);
        legalMatters.scrollDown();
        legalMatters.descriptionField(data.text11.Description);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text11.caseTitle);
        viewMatters.actionButtonsClick(data.text11.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Document Tab
        viewMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewMatters.addNewTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text11.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text11.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text11.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text11.caseNumber);
        viewMatters.verifyEditMatterInfoDescription(data.text11.Description);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text11.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("12.Mandatory and Description with Departments , Clients and TM ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text12.caseTitle);
        legalMatters.caseNumberField(data.text12.caseNumber);
        legalMatters.scrollDown();
        legalMatters.descriptionField(data.text12.Description);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.selectOnRightSide(selectTeamMembers);
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text12.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text12.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        viewMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text12.caseTitle);
        viewMatters.actionButtonsClick(data.text12.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text12.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text12.caseNumber);
        viewMatters.verifyEditMatterInfoDescription(data.text12.Description);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text12.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("13.Mandatory and Description with Departments , Clients and Documents ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text13.caseTitle);
        legalMatters.caseNumberField(data.text13.caseNumber);
        legalMatters.scrollDown();
        legalMatters.descriptionField(data.text13.Description);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text13.caseTitle);
        viewMatters.actionButtonsClick(data.text13.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Document Tab
        viewMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewMatters.addNewTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text13.caseTitle);
        viewMatters.actionButtonsClick(data.text13.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text13.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text13.caseNumber);
        viewMatters.verifyEditMatterInfoDescription(data.text13.Description);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text13.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("14.Mandatory and Description with All ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text14.caseTitle);
        legalMatters.caseNumberField(data.text14.caseNumber);
        legalMatters.scrollDown();
        legalMatters.descriptionField(data.text14.Description);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.selectOnRightSide(selectTeamMembers);
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text14.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text14.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Document Tab
        viewMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewMatters.addNewTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        viewMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text14.caseTitle);
        viewMatters.actionButtonsClick(data.text14.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text14.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text14.caseNumber);
        viewMatters.verifyEditMatterInfoDescription(data.text14.Description);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text14.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("15.Mandatory and CaseType with Departments", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text15.caseTitle);
        legalMatters.caseNumberField(data.text15.caseNumber);
        legalMatters.scrollDown();
        legalMatters.caseTypeField(data.text15.caseType);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success popup
        legalMatters.successViewMatterButton();
        viewMatters.viewMatterSearchBox(data.text15.caseTitle);
        viewMatters.actionButtonsClick(data.text15.caseTitle);
        // Edit Matter info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text15.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text15.caseNumber);
        viewMatters.verifyEditMatterInfoCaseType(data.text15.caseType);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text15.caseTitle);
        // update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("16.Mandatory and CaseType with Departments and Clients", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text16.caseTitle);
        legalMatters.caseNumberField(data.text16.caseNumber);
        legalMatters.scrollDown();
        legalMatters.caseTypeField(data.text16.caseType);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //TeamMembers
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text16.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text16.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text16.caseTitle);
        viewMatters.actionButtonsClick(data.text16.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text16.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text16.caseNumber);
        viewMatters.verifyEditMatterInfoCaseType(data.text16.caseType);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text16.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("17.Mandatory and CaseType with Departments and TM", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text17.caseTitle);
        legalMatters.caseNumberField(data.text17.caseNumber);
        legalMatters.scrollDown();
        legalMatters.caseTypeField(data.text17.caseType);
        legalMatters.nextButton();
        // Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        // Clients
        legalMatters.commonNextButton();
        // Team Members
        legalMatters.selectOnRightSide(selectTeamMembers);
        legalMatters.commonNextButton();
        // Documents
        legalMatters.submitButton();
        // Confirmation popup
        legalMatters.confirmationYesButton();
        // Success Popup
        legalMatters.successViewMatterButton();
        // View Matter 
        viewMatters.viewMatterSearchBox(data.text17.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text17.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        viewMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text17.caseTitle);
        viewMatters.actionButtonsClick(data.text17.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text17.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text17.caseNumber);
        viewMatters.verifyEditMatterInfoCaseType(data.text17.caseType);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text17.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("18.Mandatory and CaseType with Departments and Document ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text18.caseTitle);
        legalMatters.caseNumberField(data.text18.caseNumber);
        legalMatters.scrollDown();
        legalMatters.caseTypeField(data.text18.caseType);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text18.caseTitle);
        viewMatters.actionButtonsClick(data.text18.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Document Tab
        viewMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewMatters.addNewTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text18.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text18.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text18.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text18.caseNumber);
        viewMatters.verifyEditMatterInfoCaseType(data.text18.caseType);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text18.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("19.Mandatory and CaseType with Departments , Clients and TM ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text19.caseTitle);
        legalMatters.caseNumberField(data.text19.caseNumber);
        legalMatters.scrollDown();
        legalMatters.caseTypeField(data.text19.caseType);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.selectOnRightSide(selectTeamMembers);
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text19.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text19.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        viewMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text19.caseTitle);
        viewMatters.actionButtonsClick(data.text19.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text19.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text19.caseNumber);
        viewMatters.verifyEditMatterInfoCaseType(data.text19.caseType);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text19.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("20.Mandatory and CaseType with Departments , Clients and Documents ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text20.caseTitle);
        legalMatters.caseNumberField(data.text20.caseNumber);
        legalMatters.scrollDown();
        legalMatters.caseTypeField(data.text20.caseType);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text20.caseTitle);
        viewMatters.actionButtonsClick(data.text20.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Document Tab
        viewMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewMatters.addNewTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text20.caseTitle);
        viewMatters.actionButtonsClick(data.text20.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text20.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text20.caseNumber);
        viewMatters.verifyEditMatterInfoCaseType(data.text20.caseType);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text20.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("21.Mandatory and CaseType with All ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text21.caseTitle);
        legalMatters.caseNumberField(data.text21.caseNumber);
        legalMatters.scrollDown();
        legalMatters.caseTypeField(data.text21.caseType);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.selectOnRightSide(selectTeamMembers);
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text21.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text21.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Document Tab
        viewMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewMatters.addNewTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        viewMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text21.caseTitle);
        viewMatters.actionButtonsClick(data.text21.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text21.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text21.caseNumber);
        viewMatters.verifyEditMatterInfoCaseType(data.text21.caseType);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text21.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("22.Mandatory and Court with Departments", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text22.caseTitle);
        legalMatters.caseNumberField(data.text22.caseNumber);
        legalMatters.scrollDown();
        legalMatters.courtField(data.text22.court);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success popup
        legalMatters.successViewMatterButton();
        viewMatters.viewMatterSearchBox(data.text22.caseTitle);
        viewMatters.actionButtonsClick(data.text22.caseTitle);
        // Edit Matter info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text22.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text22.caseNumber);
        viewMatters.verifyEditMatterInfoCourt(data.text22.court);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text22.caseTitle);
        // update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("23.Mandatory and Court with Departments and Clients", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text23.caseTitle);
        legalMatters.caseNumberField(data.text23.caseNumber);
        legalMatters.scrollDown();
        legalMatters.courtField(data.text23.court);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //TeamMembers
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text23.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text23.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text23.caseTitle);
        viewMatters.actionButtonsClick(data.text23.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text23.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text23.caseNumber);
        viewMatters.verifyEditMatterInfoCourt(data.text23.court);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text23.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("24.Mandatory and Court with Departments and TM", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text24.caseTitle);
        legalMatters.caseNumberField(data.text24.caseNumber);
        legalMatters.scrollDown();
        legalMatters.courtField(data.text24.court);
        legalMatters.nextButton();
        // Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        // Clients
        legalMatters.commonNextButton();
        // Team Members
        legalMatters.selectOnRightSide(selectTeamMembers);
        legalMatters.commonNextButton();
        // Documents
        legalMatters.submitButton();
        // Confirmation popup
        legalMatters.confirmationYesButton();
        // Success Popup
        legalMatters.successViewMatterButton();
        // View Matter 
        viewMatters.viewMatterSearchBox(data.text24.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text24.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        viewMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text24.caseTitle);
        viewMatters.actionButtonsClick(data.text24.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text24.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text24.caseNumber);
        viewMatters.verifyEditMatterInfoCourt(data.text24.court);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text24.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("25.Mandatory and Court with Departments and Document ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text25.caseTitle);
        legalMatters.caseNumberField(data.text25.caseNumber);
        legalMatters.scrollDown();
        legalMatters.courtField(data.text25.court);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text25.caseTitle);
        viewMatters.actionButtonsClick(data.text25.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Document Tab
        viewMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewMatters.addNewTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text25.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text25.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text25.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text25.caseNumber);
        viewMatters.verifyEditMatterInfoCourt(data.text25.court);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text25.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("26.Mandatory and Court with Departments , Clients and TM ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text26.caseTitle);
        legalMatters.caseNumberField(data.text26.caseNumber);
        legalMatters.scrollDown();
        legalMatters.courtField(data.text26.court);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.selectOnRightSide(selectTeamMembers);
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text26.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text26.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        viewMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text26.caseTitle);
        viewMatters.actionButtonsClick(data.text26.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text26.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text26.caseNumber);
        viewMatters.verifyEditMatterInfoCourt(data.text26.court);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text26.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("27.Mandatory and Court with Departments , Clients and Documents ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text27.caseTitle);
        legalMatters.caseNumberField(data.text27.caseNumber);
        legalMatters.scrollDown();
        legalMatters.courtField(data.text27.court);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text27.caseTitle);
        viewMatters.actionButtonsClick(data.text27.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Document Tab
        viewMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewMatters.addNewTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text27.caseTitle);
        viewMatters.actionButtonsClick(data.text27.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text27.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text27.caseNumber);
        viewMatters.verifyEditMatterInfoCourt(data.text27.court);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text27.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("28.Mandatory and Court with All ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text28.caseTitle);
        legalMatters.caseNumberField(data.text28.caseNumber);
        legalMatters.scrollDown();
        legalMatters.courtField(data.text28.court);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.selectOnRightSide(selectTeamMembers);
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text28.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text28.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Document Tab
        viewMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewMatters.addNewTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        viewMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text28.caseTitle);
        viewMatters.actionButtonsClick(data.text28.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text28.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text28.caseNumber);
        viewMatters.verifyEditMatterInfoCourt(data.text28.court);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text28.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("29.Mandatory and Judges with Departments", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text29.caseTitle);
        legalMatters.caseNumberField(data.text29.caseNumber);
        legalMatters.scrollDown();
        legalMatters.judgeField(data.text29.judge);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success popup
        legalMatters.successViewMatterButton();
        viewMatters.viewMatterSearchBox(data.text29.caseTitle);
        viewMatters.actionButtonsClick(data.text29.caseTitle);
        // Edit Matter info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text29.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text29.caseNumber);
        viewMatters.verifyEditMatterInfoJudges(data.text29.judge);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text29.caseTitle);
        // update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("30.Mandatory and Judges with Departments and Clients", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text30.caseTitle);
        legalMatters.caseNumberField(data.text30.caseNumber);
        legalMatters.scrollDown();
        legalMatters.judgeField(data.text30.judge);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //TeamMembers
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text30.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text30.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text30.caseTitle);
        viewMatters.actionButtonsClick(data.text30.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text30.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text30.caseNumber);
        viewMatters.verifyEditMatterInfoJudges(data.text30.judge);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text30.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("31.Mandatory and Judges with Departments and TM", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text31.caseTitle);
        legalMatters.caseNumberField(data.text31.caseNumber);
        legalMatters.scrollDown();
        legalMatters.judgeField(data.text31.judge);
        legalMatters.nextButton();
        // Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        // Clients
        legalMatters.commonNextButton();
        // Team Members
        legalMatters.selectOnRightSide(selectTeamMembers);
        legalMatters.commonNextButton();
        // Documents
        legalMatters.submitButton();
        // Confirmation popup
        legalMatters.confirmationYesButton();
        // Success Popup
        legalMatters.successViewMatterButton();
        // View Matter 
        viewMatters.viewMatterSearchBox(data.text31.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text31.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        viewMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text31.caseTitle);
        viewMatters.actionButtonsClick(data.text31.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text31.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text31.caseNumber);
        viewMatters.verifyEditMatterInfoJudges(data.text31.judge);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text31.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("32.Mandatory and Judges with Departments and Document ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text32.caseTitle);
        legalMatters.caseNumberField(data.text32.caseNumber);
        legalMatters.scrollDown();
        legalMatters.judgeField(data.text32.judge);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text32.caseTitle);
        viewMatters.actionButtonsClick(data.text32.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Document Tab
        viewMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewMatters.addNewTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text32.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text32.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text32.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text32.caseNumber);
        viewMatters.verifyEditMatterInfoJudges(data.text32.judge);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text32.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("33.Mandatory and Judges with Departments , Clients and TM ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text33.caseTitle);
        legalMatters.caseNumberField(data.text33.caseNumber);
        legalMatters.scrollDown();
        legalMatters.judgeField(data.text33.judge);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.selectOnRightSide(selectTeamMembers);
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text33.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text33.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        viewMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text33.caseTitle);
        viewMatters.actionButtonsClick(data.text33.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text33.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text33.caseNumber);
        viewMatters.verifyEditMatterInfoJudges(data.text33.judge);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text33.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("34.Mandatory and Judges with Departments , Clients and Documents ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text34.caseTitle);
        legalMatters.caseNumberField(data.text34.caseNumber);
        legalMatters.scrollDown();
        legalMatters.judgeField(data.text34.judge);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text34.caseTitle);
        viewMatters.actionButtonsClick(data.text34.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Document Tab
        viewMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewMatters.addNewTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text34.caseTitle);
        viewMatters.actionButtonsClick(data.text34.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text34.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text34.caseNumber);
        viewMatters.verifyEditMatterInfoJudges(data.text34.judge);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text34.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("35.Mandatory and Judges with All ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text35.caseTitle);
        legalMatters.caseNumberField(data.text35.caseNumber);
        legalMatters.scrollDown();
        legalMatters.judgeField(data.text35.judge);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.selectOnRightSide(selectTeamMembers);
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text35.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text35.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Document Tab
        viewMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewMatters.addNewTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        viewMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text35.caseTitle);
        viewMatters.actionButtonsClick(data.text35.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text35.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text35.caseNumber);
        viewMatters.verifyEditMatterInfoJudges(data.text35.judge);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text35.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("36.Mandatory and Priority with Departments", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text36.caseTitle);
        legalMatters.caseNumberField(data.text36.caseNumber);
        legalMatters.scrollDown();
        legalMatters.prioritySelect(data.text36.priority);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success popup
        legalMatters.successViewMatterButton();
        viewMatters.viewMatterSearchBox(data.text36.caseTitle);
        viewMatters.actionButtonsClick(data.text36.caseTitle);
        // Edit Matter info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text36.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text36.caseNumber);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text36.caseTitle);
        // update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("37.Mandatory and Priority with Departments and Clients", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text37.caseTitle);
        legalMatters.caseNumberField(data.text37.caseNumber);
        legalMatters.scrollDown();
        legalMatters.prioritySelect(data.text37.priority);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //TeamMembers
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text37.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text37.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text37.caseTitle);
        viewMatters.actionButtonsClick(data.text37.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text37.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text37.caseNumber);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text37.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("38.Mandatory and Priority with Departments and TM", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text38.caseTitle);
        legalMatters.caseNumberField(data.text38.caseNumber);
        legalMatters.scrollDown();
        legalMatters.prioritySelect(data.text38.priority);
        legalMatters.nextButton();
        // Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        // Clients
        legalMatters.commonNextButton();
        // Team Members
        legalMatters.selectOnRightSide(selectTeamMembers);
        legalMatters.commonNextButton();
        // Documents
        legalMatters.submitButton();
        // Confirmation popup
        legalMatters.confirmationYesButton();
        // Success Popup
        legalMatters.successViewMatterButton();
        // View Matter 
        viewMatters.viewMatterSearchBox(data.text38.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text38.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        viewMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text38.caseTitle);
        viewMatters.actionButtonsClick(data.text38.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text38.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text38.caseNumber);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text38.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("39.Mandatory and Priority with Departments and Document ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text39.caseTitle);
        legalMatters.caseNumberField(data.text39.caseNumber);
        legalMatters.scrollDown();
        legalMatters.prioritySelect(data.text39.priority);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text39.caseTitle);
        viewMatters.actionButtonsClick(data.text39.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Document Tab
        viewMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewMatters.addNewTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text39.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text39.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text39.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text39.caseNumber);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text39.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("40.Mandatory and Priority with Departments , Clients and TM ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text40.caseTitle);
        legalMatters.caseNumberField(data.text40.caseNumber);
        legalMatters.scrollDown();
        legalMatters.prioritySelect(data.text40.priority);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.selectOnRightSide(selectTeamMembers);
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text40.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text40.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        viewMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text40.caseTitle);
        viewMatters.actionButtonsClick(data.text40.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text40.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text40.caseNumber);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text40.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("41.Mandatory and Priority with Departments , Clients and Documents ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text41.caseTitle);
        legalMatters.caseNumberField(data.text41.caseNumber);
        legalMatters.scrollDown();
        legalMatters.prioritySelect(data.text41.priority);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text41.caseTitle);
        viewMatters.actionButtonsClick(data.text41.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Document Tab
        viewMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewMatters.addNewTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text41.caseTitle);
        viewMatters.actionButtonsClick(data.text41.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text41.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text41.caseNumber);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text41.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("42.Mandatory and Priority with All ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text42.caseTitle);
        legalMatters.caseNumberField(data.text42.caseNumber);
        legalMatters.scrollDown();
        legalMatters.prioritySelect(data.text42.priority);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.selectOnRightSide(selectTeamMembers);
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text42.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text42.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Document Tab
        viewMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewMatters.addNewTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        viewMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text42.caseTitle);
        viewMatters.actionButtonsClick(data.text42.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text42.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text42.caseNumber);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text42.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("43.Mandatory and Status with Departments", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text43.caseTitle);
        legalMatters.caseNumberField(data.text43.caseNumber);
        legalMatters.scrollDown();
        legalMatters.statusSelect(data.text43.status);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success popup
        legalMatters.successViewMatterButton();
        viewMatters.viewMatterSearchBox(data.text43.caseTitle);
        viewMatters.actionButtonsClick(data.text43.caseTitle);
        // Edit Matter info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text43.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text43.caseNumber);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text43.caseTitle);
        // update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("44.Mandatory and Status with Departments and Clients", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text44.caseTitle);
        legalMatters.caseNumberField(data.text44.caseNumber);
        legalMatters.scrollDown();
        legalMatters.statusSelect(data.text44.status);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //TeamMembers
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text44.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text44.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text44.caseTitle);
        viewMatters.actionButtonsClick(data.text44.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text44.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text44.caseNumber);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text44.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("45.Mandatory and Status with Departments and TM", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text45.caseTitle);
        legalMatters.caseNumberField(data.text45.caseNumber);
        legalMatters.scrollDown();
        legalMatters.statusSelect(data.text45.status);
        legalMatters.nextButton();
        // Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        // Clients
        legalMatters.commonNextButton();
        // Team Members
        legalMatters.selectOnRightSide(selectTeamMembers);
        legalMatters.commonNextButton();
        // Documents
        legalMatters.submitButton();
        // Confirmation popup
        legalMatters.confirmationYesButton();
        // Success Popup
        legalMatters.successViewMatterButton();
        // View Matter 
        viewMatters.viewMatterSearchBox(data.text45.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text45.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        viewMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text45.caseTitle);
        viewMatters.actionButtonsClick(data.text45.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text45.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text45.caseNumber);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text45.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("46.Mandatory and Status with Departments and Document ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text46.caseTitle);
        legalMatters.caseNumberField(data.text46.caseNumber);
        legalMatters.scrollDown();
        legalMatters.statusSelect(data.text46.status);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text46.caseTitle);
        viewMatters.actionButtonsClick(data.text46.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Document Tab
        viewMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewMatters.addNewTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text46.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text46.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text46.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text46.caseNumber);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text46.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("47.Mandatory and Status with Departments , Clients and TM ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text47.caseTitle);
        legalMatters.caseNumberField(data.text47.caseNumber);
        legalMatters.scrollDown();
        legalMatters.statusSelect(data.text47.status);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.selectOnRightSide(selectTeamMembers);
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text47.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text47.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        viewMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text47.caseTitle);
        viewMatters.actionButtonsClick(data.text47.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text47.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text47.caseNumber);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text47.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("48.Mandatory and Status with Departments , Clients and Documents ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text48.caseTitle);
        legalMatters.caseNumberField(data.text48.caseNumber);
        legalMatters.scrollDown();
        legalMatters.statusSelect(data.text48.status);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text48.caseTitle);
        viewMatters.actionButtonsClick(data.text48.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Document Tab
        viewMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewMatters.addNewTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text48.caseTitle);
        viewMatters.actionButtonsClick(data.text48.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text48.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text48.caseNumber);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text48.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("49.Mandatory and Status with All ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(data.text49.caseTitle);
        legalMatters.caseNumberField(data.text49.caseNumber);
        legalMatters.scrollDown();
        legalMatters.statusSelect(data.text49.status);
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.selectOnRightSide(selectTeamMembers);
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success Popup
        legalMatters.successViewMatterButton();
        //View Matter 
        viewMatters.viewMatterSearchBox(data.text49.caseTitle);
        // Action Button
        viewMatters.actionButtonsClick(data.text49.caseTitle);
        // View Details
        viewMatters.viewDetailsMenuButton();
        // Document Tab
        viewMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewMatters.addNewTab();
        // Check Selected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        // Team Member and Client Tab
        viewMatters.viewDetailsTeamMemberAndExternalCounselTab();
        //Selected Team Member
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectMembers);
        //Unselected Team Member
        viewMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectMembers);
        //Client Tab
        viewMatters.viewDetailsExternalCounselTab();
        //Selected Client
        viewMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClient);
        legalMatters.scrollUp();
        viewMatters.viewTab();
        viewMatters.viewMatterSearchBox(data.text49.caseTitle);
        viewMatters.actionButtonsClick(data.text49.caseTitle);
        // Edit Matter Info
        viewMatters.editMatterInfoMenuButton();
        viewMatters.verifyEditMatterInfoCaseTitle(data.text49.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text49.caseNumber);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text49.caseTitle);
        // Update Department
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

})