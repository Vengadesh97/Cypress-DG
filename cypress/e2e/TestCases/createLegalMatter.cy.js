import loginpage from "../PageObject/loginpagePOM";
import legalMatters from "../PageObject/legalMatterPOM";
import loginData from "../../fixtures/login.json";
import matterData from "../../fixtures/createMatterData.json";
import viewlegalMatters from "../PageObject/viewMatterPOM";


describe("Create Legal Matter Scenario", () => {

    // Select Department and Client and Team Member and Document
    var selectDepartments = [matterData.common.Department1, matterData.common.Department2];
    var selectClients = [matterData.common.client1, matterData.common.client2];
    var selectTMs = [matterData.common.member1, matterData.common.member2];
    var selectDocuments = [matterData.common.document1, matterData.common.document2];

    // Assertion
    var checkSelectedMembers = [matterData.common.members1, matterData.common.members2, matterData.common.members3];
    var checkUnSelectedMembers = [matterData.common.UnSelectedmember1, matterData.common.UnSelectedmember2, data.common.UnSelectedmember3, data.common.UnSelectedmember4, data.common.UnSelectedmember5];
    var checkSelectedClients = [matterData.common.clients1, matterData.common.clients2];
    var checkSelectedDocuments = [matterData.common.documents1, matterData.common.documents2];
    var checkUnSelectedDocuments = [matterData.common.unSelecteddocument1, matterData.common.unSelecteddocument2];

    before(() => {
        loginpage.visit();
        loginpage.userName(loginData.codeword.email);
        loginpage.passWord(loginData.codeword.password);
        loginpage.loginButton();
    });

    afterEach(() => {
        loginpage.loadIssues();
        loginpage.homeButton();
        legalMatters.leftSideMatterTab();
    });

    it("1.Mandatory Fields with Cancel", () => {
        legalMatters.leftSideMatterTab();
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.scrollDown();
        legalMatters.cancelButton();
        cy.wait(1000);
        legalMatters.scrollUp();
        legalMatters.assertionCaseTitle();
        legalMatters.assertionCaseNumber();
    })

    it("2.Mandatory Field and DOF with Cancel", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.dateClick();
        legalMatters.dateOfFilling(matterData.createMatter.DateFill);
        cy.wait(1000);
        legalMatters.scrollDown();
        legalMatters.cancelButton();
        cy.wait(1000);
        legalMatters.scrollUp();
        legalMatters.assertionCaseTitle();
        legalMatters.assertionCaseNumber();
        legalMatters.assertionDOF();
    })

    it("3.Mandatory and Description with Cancel ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.descriptionField(matterData.createMatter.Description);
        legalMatters.scrollDown();
        legalMatters.cancelButton();
        cy.wait(1000);
        legalMatters.scrollUp();
        legalMatters.assertionCaseTitle();
        legalMatters.assertionCaseNumber();
        legalMatters.assertionDescription();
    })

    it("4.Mandatory and case types with Cancel ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.caseTypeField(matterData.createMatter.caseType);
        legalMatters.scrollDown();
        legalMatters.cancelButton();
        cy.wait(1000);
        legalMatters.scrollUp();
        legalMatters.assertionCaseTitle();
        legalMatters.assertionCaseNumber();
        legalMatters.assertionCaseType();
    })

    it("5.Mandatory and court with cancel ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.courtField(matterData.createMatter.Court);
        legalMatters.scrollDown();
        legalMatters.cancelButton();
        cy.wait(1000);
        legalMatters.scrollUp();
        legalMatters.assertionCaseTitle();
        legalMatters.assertionCaseNumber();
        legalMatters.assertionCourt();
    })

    it("6.Mandatory and Judge with cancel ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.judgeField(matterData.createMatter.Judge);
        legalMatters.scrollDown();
        legalMatters.cancelButton();
        cy.wait(1000);
        legalMatters.scrollUp();
        legalMatters.assertionCaseTitle();
        legalMatters.assertionCaseNumber();
        legalMatters.assertionJudge();
    })

    it("7.Mandatory and Priority with cancel ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.prioritySelect(matterData.createMatter.Priority)
        legalMatters.scrollDown();
        legalMatters.cancelButton();
    })

    it("8.Mandatory and Status with cancel ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.statusSelect(matterData.createMatter.Status);
        legalMatters.scrollDown();
        legalMatters.cancelButton();
    })

    it("9.Mandatory and Opponent Advocates with cancel ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.opponentAdvocateAddButton();
        legalMatters.opponentAdvocateName(matterData.createMatter.oppName);
        legalMatters.opponentAdvocateEmail(matterData.createMatter.oppEmail);
        legalMatters.opponentAdvocateNumber(matterData.createMatter.oppNumber);
        legalMatters.opponentAdvocateSavebutton();
        legalMatters.scrollDown();
        legalMatters.cancelButton();
        cy.wait(1000);
        legalMatters.scrollUp();
        legalMatters.assertionCaseTitle();
        legalMatters.assertionCaseNumber();
        legalMatters.assertionOpponentAdvocate();
    })

    it("10.Without enter the mandatory and Check the error message appear", () => {
        legalMatters.createTab();
        legalMatters.scrollDown();
        legalMatters.nextButton();
        cy.wait(1000);
        legalMatters.scrollUp();
        legalMatters.assertionMandatoryMessageCaseNumber();
        legalMatters.assertionMandatoryMessageCaseTitle();
    })

    it.skip("11.Mandatory with Next button disable in Department", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.scrollDown();
        legalMatters.nextButton();
        cy.wait(1000);
        legalMatters.scrollDown();
        legalMatters.assertionNextButton();
    })

    it("12.Mandatory with Departments with Cancel", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.scrollDown();
        legalMatters.nextButton();
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.scrollDown();
        legalMatters.cancelButton();
        legalMatters.scrollUp();
        legalMatters.emptyOnSelectedListonLeftSideVerify();
    })

    it("13.Mandatory with Departments and Clients with Cancel", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.scrollDown();
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.scrollDown();
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.cancelButton();
        legalMatters.scrollUp();
        legalMatters.emptyOnSelectedListonLeftSideVerify();
    })

    it("14.Mandatory with Departments and TM with Cancel", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.scrollDown();
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.scrollDown();
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.selectOnRightSide(selectTMs);
        legalMatters.cancelButton();
        legalMatters.scrollUp();
        legalMatters.emptyOnSelectedListonLeftSideVerify();
    })

    it("15.Mandatory with Departments and Documents with Cancel", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.scrollDown();
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.scrollDown();
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.cancelButton();
        legalMatters.scrollUp();
        legalMatters.emptyOnSelectedListonLeftSideVerify();
    })

    it("16.Mandatory with Departments,Clients,TeamMember and Documents with Cancel", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.scrollDown();
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.scrollDown();
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.selectOnRightSide(selectTMs);
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.cancelButton();
        legalMatters.scrollUp();
        legalMatters.emptyOnSelectedListonLeftSideVerify();
    })

    it("17.Mandatory with Select and unSelect the Departments", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.scrollDown();
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.RemoveOnLeftSide(selectDepartments);
        legalMatters.textVerifyUnSelectedListOnRightSide(selectDepartments);
    })

    it("18.Mandatory with Select and unSelect the Clients", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.scrollDown();
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.RemoveOnLeftSide(selectClients);
        legalMatters.textVerifyUnSelectedListOnRightSide(selectClients);
    })

    it("19.Mandatory with Select and unSelect the TM", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.scrollDown();
        legalMatters.nextButton();
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.selectOnRightSide(selectTMs);
        legalMatters.RemoveOnLeftSide(selectTMs);
        legalMatters.textVerifyUnSelectedListOnRightSide(selectTMs);
    })

    it("20.Mandatory with Select and unSelect the Documents", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.scrollDown();
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
        legalMatters.RemoveOnLeftSide(selectDocuments);
        legalMatters.textVerifyUnSelectedListOnRightSide(selectDocuments);
    })

    it("21.Mandatory with Departments and Select all and Unselect all and verify", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.scrollDown();
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectAllButton();
        legalMatters.emptyOnUnSelectListonRightSideVerify();
        legalMatters.selectAllButton();
        legalMatters.emptyOnSelectedListonLeftSideVerify();
    })


    it("22.Mandatory with Clients and Select all and Unselect all and verify", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.scrollDown();
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectAllButton();
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectAllButton();
        legalMatters.emptyOnUnSelectListonRightSideVerify();
        legalMatters.selectAllButton();
        legalMatters.emptyOnSelectedListonLeftSideVerify();

    })

    it("23.Mandatory with TeamMembers and Select all and Unselect all and verify", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.scrollDown();
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectAllButton();
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectAllButton();
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.selectAllButton();
        legalMatters.emptyOnUnSelectListonRightSideVerify();
        legalMatters.selectAllButton();
        legalMatters.emptyOnSelectedListonLeftSideVerify();
    })

    it("24.Mandatory with Documents and Select all and Unselect all and verify", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.scrollDown();
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectAllButton();
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectAllButton();
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.selectAllButton();
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectAllButton();
        legalMatters.emptyOnUnSelectListonRightSideVerify();
        legalMatters.selectAllButton();
        legalMatters.emptyOnSelectedListonLeftSideVerify();
    })

    it("25.Mandatory with Departments", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.CMatter.caseTitle);
        legalMatters.caseNumberField(matterData.CMatter.caseNumber);
        legalMatters.scrollDown();
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success popup
        legalMatters.successViewMatterButton();
        // Assertions
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter.caseTitle);
        // View Matter Action Button
        viewlegalMatters.actionButtonsClick(matterData.CMatter.caseTitle);
        // Edit Matter info
        viewlegalMatters.editMatterInfoMenuButton();
        viewlegalMatters.verifyEditMatterInfoCaseTitle(matterData.CMatter.caseTitle);
        viewlegalMatters.verifyEditMatterInfoCaseNumber(matterData.CMatter.caseNumber);
        viewlegalMatters.editMatterInfoCancelButton();
        viewlegalMatters.actionButtonsClick(matterData.CMatter.caseTitle);
        // Update Department
        viewlegalMatters.updateDepartmentMenuButton();
        viewlegalMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("26.Mandatory with Departments and Clients", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.CMatter1.caseTitle);
        legalMatters.caseNumberField(matterData.CMatter1.caseNumber);
        legalMatters.scrollDown();
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success popup
        legalMatters.successViewMatterButton();
        // Assertions
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter1.caseTitle);
        viewlegalMatters.actionButtonsClick(matterData.CMatter1.caseTitle);
        // View Details 
        viewlegalMatters.viewDetailsMenuButton();
        // Both Team Member and Client Tab
        viewlegalMatters.viewDetailsTeamMemberAndExternalCounselTab();
        // Client Tab
        viewlegalMatters.viewDetailsExternalCounselTab();
        // Check selected Client name is appear
        viewlegalMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClients);
        legalMatters.scrollUp();
        viewlegalMatters.viewTab();
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter1.caseTitle);
        viewlegalMatters.actionButtonsClick(matterData.CMatter1.caseTitle);
        // Edit Matter info
        viewlegalMatters.editMatterInfoMenuButton();
        viewlegalMatters.verifyEditMatterInfoCaseTitle(matterData.CMatter1.caseTitle);
        viewlegalMatters.verifyEditMatterInfoCaseNumber(matterData.CMatter1.caseNumber);
        viewlegalMatters.editMatterInfoCancelButton();
        viewlegalMatters.actionButtonsClick(matterData.CMatter1.caseTitle);
        // Update Department
        viewlegalMatters.updateDepartmentMenuButton();
        viewlegalMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("27.Mandatory with Departments and TM", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.CMatter2.caseTitle);
        legalMatters.caseNumberField(matterData.CMatter2.caseNumber);
        legalMatters.scrollDown();
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team members
        legalMatters.selectOnRightSide(selectTMs);
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success popup
        legalMatters.successViewMatterButton();
        // Assertions
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter2.caseTitle);
        viewlegalMatters.actionButtonsClick(matterData.CMatter2.caseTitle);
        // View Details
        viewlegalMatters.viewDetailsMenuButton();
        // Team Member and Client Tab
        viewlegalMatters.viewDetailsTeamMemberAndExternalCounselTab();
        // Select Team Member
        viewlegalMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedMembers);
        // unSelect Team Member
        viewlegalMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectedMembers);
        legalMatters.scrollUp();
        viewlegalMatters.viewTab();
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter2.caseTitle);
        viewlegalMatters.actionButtonsClick(matterData.CMatter2.caseTitle);
        // Edit Matter info
        viewlegalMatters.editMatterInfoMenuButton();
        viewlegalMatters.verifyEditMatterInfoCaseTitle(matterData.CMatter2.caseTitle);
        viewlegalMatters.verifyEditMatterInfoCaseNumber(matterData.CMatter2.caseNumber);
        viewlegalMatters.editMatterInfoCancelButton();
        viewlegalMatters.actionButtonsClick(matterData.CMatter2.caseTitle);
        // Update Department
        viewlegalMatters.updateDepartmentMenuButton();
        viewlegalMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("28.Mandatory with Departments and Document", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.CMatter3.caseTitle);
        legalMatters.caseNumberField(matterData.CMatter3.caseNumber);
        legalMatters.scrollDown();
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success popup
        legalMatters.successViewMatterButton();
        // Assertions
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter3.caseTitle);
        viewlegalMatters.actionButtonsClick(matterData.CMatter3.caseTitle);
        // View Details
        viewlegalMatters.viewDetailsMenuButton();
        // Document Tab
        viewlegalMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewlegalMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewlegalMatters.addNewTab();
        // Check Selected Document Name Appear
        viewlegalMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewlegalMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        legalMatters.scrollUp();
        viewlegalMatters.viewTab();
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter3.caseTitle);
        viewlegalMatters.actionButtonsClick(matterData.CMatter3.caseTitle);
        // Edit Matter info
        viewlegalMatters.editMatterInfoMenuButton();
        viewlegalMatters.verifyEditMatterInfoCaseTitle(matterData.CMatter3.caseTitle);
        viewlegalMatters.verifyEditMatterInfoCaseNumber(matterData.CMatter3.caseNumber);
        viewlegalMatters.editMatterInfoCancelButton();
        viewlegalMatters.actionButtonsClick(matterData.CMatter3.caseTitle);
        // update department
        viewlegalMatters.updateDepartmentMenuButton();
        viewlegalMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("29.Mandatory with Departments and Clients and TM", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.CMatter4.caseTitle);
        legalMatters.caseNumberField(matterData.CMatter4.caseNumber);
        legalMatters.scrollDown();
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team members
        legalMatters.selectOnRightSide(selectTMs);
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success popup
        legalMatters.successViewMatterButton();
        //Assertions
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter4.caseTitle);
        viewlegalMatters.actionButtonsClick(matterData.CMatter4.caseTitle);
        // View Details
        viewlegalMatters.viewDetailsMenuButton();
        // Team Member and Clients Tab
        viewlegalMatters.viewDetailsTeamMemberAndExternalCounselTab();
        // Check Selected Team Member 
        viewlegalMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedMembers);
        // Check UnSelected Team Member
        viewlegalMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(checkUnSelectedMembers);
        // Client Tab
        viewlegalMatters.viewDetailsExternalCounselTab();
        // Check Selected Client 
        viewlegalMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(checkSelectedClients);
        legalMatters.scrollUp();
        viewlegalMatters.viewTab();
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter4.caseTitle);
        viewlegalMatters.actionButtonsClick(matterData.CMatter4.caseTitle);
        // Edit Matter info
        viewlegalMatters.editMatterInfoMenuButton();
        viewlegalMatters.verifyEditMatterInfoCaseTitle(matterData.CMatter4.caseTitle);
        viewlegalMatters.verifyEditMatterInfoCaseNumber(matterData.CMatter4.caseNumber);
        viewlegalMatters.editMatterInfoCancelButton();
        viewlegalMatters.actionButtonsClick(matterData.CMatter4.caseTitle);
        // update Department
        viewlegalMatters.updateDepartmentMenuButton();
        viewlegalMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("30.Mandatory with Departments and Clients and Documents", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.CMatter5.caseTitle);
        legalMatters.caseNumberField(matterData.CMatter5.caseNumber);
        legalMatters.scrollDown();
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success popup
        legalMatters.successViewMatterButton();
        // View Matter
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter5.caseTitle);
        viewlegalMatters.actionButtonsClick(matterData.CMatter5.caseTitle);
        // View Details
        viewlegalMatters.viewDetailsMenuButton();
        // Document Tab
        viewlegalMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewlegalMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewlegalMatters.addNewTab();
        // Check Selected Document Name Appear
        viewlegalMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewlegalMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        legalMatters.scrollUp();
        // Team Member and Client Tab
        viewlegalMatters.viewDetailsTeamMemberAndExternalCounselTab();
        // Client Tab
        viewlegalMatters.viewDetailsExternalCounselTab();
        viewlegalMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(selectClients);
        legalMatters.scrollUp();
        viewlegalMatters.viewTab();
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter5.caseTitle);
        viewlegalMatters.actionButtonsClick(matterData.CMatter5.caseTitle);
        // Edit Matter info
        viewlegalMatters.editMatterInfoMenuButton();
        viewlegalMatters.verifyEditMatterInfoCaseTitle(matterData.CMatter5.caseTitle);
        viewlegalMatters.verifyEditMatterInfoCaseNumber(matterData.CMatter5.caseNumber);
        viewlegalMatters.editMatterInfoCancelButton();
        viewlegalMatters.actionButtonsClick(matterData.CMatter5.caseTitle);
        // Update Department
        viewlegalMatters.updateDepartmentMenuButton();
        viewlegalMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it("31.Mandatory with All", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.CMatter6.caseTitle);
        legalMatters.caseNumberField(matterData.CMatter6.caseNumber);
        legalMatters.scrollDown();
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectOnRightSide(selectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(selectClients);
        legalMatters.commonNextButton();
        //Team members
        legalMatters.selectOnRightSide(selectTMs);
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(selectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success popup
        legalMatters.successViewMatterButton();
        // View Matter
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter6.caseTitle);
        viewlegalMatters.actionButtonsClick(matterData.CMatter6.caseTitle);
        // View Details
        viewlegalMatters.viewDetailsMenuButton();
        // Document Tab
        viewlegalMatters.viewDetailsDocumentTab();
        // Check Selected Document Name Appear
        viewlegalMatters.viewDetailsCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Add New + Tab
        viewlegalMatters.addNewTab();
        // Check Selected Document Name Appear
        viewlegalMatters.viewDetailsAddExistingCheckSelectedDocumentNameAppear(checkSelectedDocuments);
        // Check UnSelected Document Name Appear
        viewlegalMatters.viewDetailsAddExistingCheckUnSelectedDocumentNameAppear(checkUnSelectedDocuments);
        legalMatters.scrollUp();
        // Team member and Client Tab
        viewlegalMatters.viewDetailsTeamMemberAndExternalCounselTab();
        // Check Selected Team Member
        viewlegalMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(namesToSelectMembers);
        // Check unSelected Team Member
        viewlegalMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(namesToCheckUnSelectMembers);
        // Client Tab
        viewlegalMatters.viewDetailsExternalCounselTab();
        // Check Selected Client Name
        viewlegalMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(namesToSelectedClient);
        legalMatters.scrollUp();
        viewlegalMatters.viewTab();
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter6.caseTitle);
        viewlegalMatters.actionButtonsClick(matterData.CMatter6.caseTitle);
        // Edit Matter info Tab
        viewlegalMatters.editMatterInfoMenuButton();
        viewlegalMatters.verifyEditMatterInfoCaseTitle(matterData.CMatter6.caseTitle);
        viewlegalMatters.verifyEditMatterInfoCaseNumber(matterData.CMatter6.caseNumber);
        viewlegalMatters.editMatterInfoCancelButton();
        viewlegalMatters.actionButtonsClick(matterData.CMatter6.caseTitle);
        // Update Department
        viewlegalMatters.updateDepartmentMenuButton();
        viewlegalMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })

    it.skip("32.All Field entered and Verify", () => {
        legalMatters.leftSideMatterTab();
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.CMatter7.caseTitle);
        legalMatters.caseNumberField(matterData.CMatter7.caseNumber);
        legalMatters.scrollDown();
        cy.wait(1000);
        legalMatters.dateClick();
        cy.wait(1000);
        legalMatters.dateOfFilling(matterData.CMatter7.DateFill);
        legalMatters.descriptionField(matterData.CMatter7.Description);
        legalMatters.caseTypeField(matterData.CMatter7.caseType);
        legalMatters.courtField(matterData.CMatter7.Court);
        legalMatters.judgeField(matterData.CMatter7.Judge);
        legalMatters.prioritySelect(matterData.CMatter7.Priority);
        legalMatters.opponentAdvocateAddButton();
        legalMatters.opponentAdvocateName(matterData.CMatter7.oppName);
        legalMatters.opponentAdvocateEmail(matterData.CMatter7.oppEmail);
        legalMatters.opponentAdvocateNumber(matterData.CMatter7.oppNumber);
        legalMatters.opponentAdvocateSavebutton();
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        var namesToSelectDepartments = [matterData.CMatter7.Department1, matterData.CMatter7.Department2];
        legalMatters.selectOnRightSide(namesToSelectDepartments);
        legalMatters.commonNextButton();
        cy.wait(1000);
        //Clients
        var namesToSelectClients = [matterData.CMatter7.client1, matterData.CMatter7.client2];
        legalMatters.selectOnRightSide(namesToSelectClients);
        legalMatters.commonNextButton();
        cy.wait(1000);
        //Team members
        var namesToSelectMembers = [matterData.CMatter7.member1, matterData.CMatter7.member2];
        legalMatters.selectOnRightSide(namesToSelectMembers);
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success popup
        legalMatters.successViewMatterButton();
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter7.caseTitle);
        viewlegalMatters.actionButtonsClick(matterData.CMatter7.caseTitle);
        viewlegalMatters.viewDetailsMenuButton();
        viewlegalMatters.viewDetailsTeamMemberAndExternalCounselTab();
        var namesToSelectMembers = [matterData.CMatter7.members1, matterData.CMatter7.members2, matterData.CMatter7.members3];
        viewlegalMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(namesToSelectMembers);
        var namesToCheckUnSelectMembers = [matterData.CMatter7.UnSelectedmember1, matterData.CMatter7.UnSelectedmember2, matterData.CMatter7.UnSelectedmember3, matterData.CMatter7.UnSelectedmember4, matterData.CMatter7.UnSelectedmember5];
        viewlegalMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(namesToCheckUnSelectMembers);
        viewlegalMatters.viewDetailsExternalCounselTab();
        var namesToSelectedClient = [matterData.CMatter7.clients1, matterData.CMatter7.clients2];
        viewlegalMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(namesToSelectedClient);
        legalMatters.scrollUp();
        viewlegalMatters.viewTab();
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter7.caseTitle);
        viewlegalMatters.actionButtonsClick(matterData.CMatter7.caseTitle);
        viewlegalMatters.editMatterInfoMenuButton();
        viewlegalMatters.verifyEditMatterInfoCaseTitle(matterData.CMatter7.caseTitle);
        viewlegalMatters.verifyEditMatterInfoCaseNumber(matterData.CMatter7.caseNumber);
        viewlegalMatters.verifyEditMatterInfoDescription(matterData.CMatter7.Description);
        viewlegalMatters.verifyEditMatterInfoCaseType(matterData.CMatter7.caseType);
        viewlegalMatters.verifyEditMatterInfoCourt(matterData.CMatter7.Court);
        viewlegalMatters.verifyEditMatterInfoJudges(matterData.CMatter7.Judge);
        viewlegalMatters.editMatterInfoCancelButton();
        viewlegalMatters.actionButtonsClick(matterData.CMatter7.caseTitle);
        viewlegalMatters.updateDepartmentMenuButton();
        viewlegalMatters.updateDepartmentCheckSelectedDepartmentName(namesToSelectDepartments);
    })
})
