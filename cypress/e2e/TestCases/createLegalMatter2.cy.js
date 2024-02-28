import loginpages from "../PageObject/loginpagePOM";
import create from "../PageObject/legalMatterPOM";
import view from "../PageObject/viewMatterPOM";
import data from "../../fixtures/createMatterData2.json";


describe("Create Legal Matter Scenario 3",()=>{

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
        loginpages.visit();
        loginpages.userName();
        loginpages.passWord();
        loginpages.loginButton();
    })

    after(()=>{
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
        create.selectOnRightSide(selectDocuments);
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
        view.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        view.addNewTab();
        // Check Selected Document Name Appear
        view.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        view.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
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
        create.selectOnRightSide(selectDocuments);
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
        view.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        view.addNewTab();
        // Check Selected Document Name Appear
        view.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        view.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
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
        create.selectOnRightSide(selectDocuments);
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
        view.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        view.addNewTab();
        // Check Selected Document Name Appear
        view.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        view.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
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
        view.actionButtonsClick(data.text7.caseTitle);
        // Update Department
        view.updateDepartmentMenuButton();
        view.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })










})