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
    var checkSelectMembers = [data.Common.members1, matterData.Common.members2, matterData.Common.members3];
    var checkUnSelectMembers = [data.Common.UnSelectedmember1, data.Common.UnSelectedmember2, data.Common.UnSelectedmember3, data.Common.UnSelectedmember4, data.Common.UnSelectedmember5];
    var checkSelectedClient = [data.Common.clients1, data.Common.clients2];
    var checkSelectedDocuments = [matterData.common.documents1, matterData.common.documents2];
    var checkUnSelectedDocuments = [matterData.common.unSelecteddocument1, matterData.common.unSelecteddocument2];

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
        legalMatters.leftSideMatterTab();
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




})