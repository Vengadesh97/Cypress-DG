import loginpage from "../PageObject/loginpagePOM";
import legalMatters from "../PageObject/legalMatterPOM";
import loginData from "../../fixtures/login.json";
import matterData from "../../fixtures/createMatterData.json";
import viewlegalMatters from "../PageObject/viewMatterPOM";


describe("Create Legal Matter Scenario", () => {

    var namesToSelectDepartment = [matterData.createMatter.Department1, matterData.createMatter.Department2];
    var namesToSelectClients = [matterData.createMatter.client1, matterData.createMatter.client2];
    var namesToSelectTM = [matterData.createMatter.member1, matterData.createMatter.member2];
    var namesToSelectDocuments = [matterData.createMatter.document1, matterData.createMatter.document2];

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
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.cancelButton();
        cy.wait(1000);
        cy.scrollTo('top');
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
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.cancelButton();
        cy.wait(1000);
        cy.scrollTo('top');
        legalMatters.assertionCaseTitle();
        legalMatters.assertionCaseNumber();
        legalMatters.assertionDOF();
    })

    it("3.Mandatory and Description with Cancel ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.descriptionField(matterData.createMatter.Description);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.cancelButton();
        cy.wait(1000);
        cy.scrollTo('top');
        legalMatters.assertionCaseTitle();
        legalMatters.assertionCaseNumber();
        legalMatters.assertionDescription();
    })

    it("4.Mandatory and case types with Cancel ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.caseTypeField(matterData.createMatter.caseType);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.cancelButton();
        cy.wait(1000);
        cy.scrollTo('top');
        legalMatters.assertionCaseTitle();
        legalMatters.assertionCaseNumber();
        legalMatters.assertionCaseType();
    })

    it("5.Mandatory and court with cancel ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.courtField(matterData.createMatter.Court);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.cancelButton();
        cy.wait(1000);
        cy.scrollTo('top');
        legalMatters.assertionCaseTitle();
        legalMatters.assertionCaseNumber();
        legalMatters.assertionCourt();
    })

    it("6.Mandatory and Judge with cancel ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.judgeField(matterData.createMatter.Judge);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.cancelButton();
        cy.wait(1000);
        cy.scrollTo('top');
        legalMatters.assertionCaseTitle();
        legalMatters.assertionCaseNumber();
        legalMatters.assertionJudge();
    })

    it("7.Mandatory and Priority with cancel ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.prioritySelect(matterData.createMatter.Priority)
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.cancelButton();
    })

    it("8.Mandatory and Status with cancel ", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.statusSelect(matterData.createMatter.Status);
        cy.scrollTo('bottom');
        cy.wait(1000);
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
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.cancelButton();
        cy.wait(1000);
        cy.scrollTo('top');
        legalMatters.assertionCaseTitle();
        legalMatters.assertionCaseNumber();
        legalMatters.assertionOpponentAdvocate();
    })

    it("10.Without enter the mandatory and Check the error message appear", () => {
        legalMatters.createTab();
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        cy.scrollTo('top');
        legalMatters.assertionMandatoryMessageCaseNumber();
        legalMatters.assertionMandatoryMessageCaseTitle();
    })

    it.skip("11.Mandatory with Next button disable in Department", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        cy.scrollTo('bottom');
        legalMatters.assertionNextButton();
    })

    it("12.Mandatory with Departments with Cancel", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        legalMatters.selectOnRightSide(namesToSelectDepartment);
        cy.scrollTo('bottom');
        legalMatters.cancelButton();
        cy.scrollTo('top');
        legalMatters.emptyOnSelectedListonLeftSideVerify();
    })

    it("13.Mandatory with Departments and Clients with Cancel", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectOnRightSide(namesToSelectDepartment);
        cy.scrollTo('bottom');
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(namesToSelectClients);
        legalMatters.cancelButton();
        cy.scrollTo('top');
        legalMatters.emptyOnSelectedListonLeftSideVerify();
    })

    it("14.Mandatory with Departments and TM with Cancel", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectOnRightSide(namesToSelectDepartment);
        cy.scrollTo('bottom');
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.selectOnRightSide(namesToSelectTM);
        legalMatters.cancelButton();
        cy.scrollTo('top');
        legalMatters.emptyOnSelectedListonLeftSideVerify();
    })

    it("15.Mandatory with Departments and Documents with Cancel", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectOnRightSide(namesToSelectDepartment);
        cy.scrollTo('bottom');
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(namesToSelectDocuments);
        legalMatters.cancelButton();
        cy.scrollTo('top');
        legalMatters.emptyOnSelectedListonLeftSideVerify();
    })

    it("16.Mandatory with Departments,Clients,TeamMember and Documents with Cancel", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectOnRightSide(namesToSelectDepartment);
        cy.scrollTo('bottom');
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(namesToSelectClients);
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.selectOnRightSide(namesToSelectTM);
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(namesToSelectDocuments);
        legalMatters.cancelButton();
        cy.scrollTo('top');
        legalMatters.emptyOnSelectedListonLeftSideVerify();
    })

    it("17.Mandatory with Select and unSelect the Departments", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectOnRightSide(namesToSelectDepartment);
        legalMatters.RemoveOnLeftSide(namesToSelectDepartment);
        legalMatters.textVerifyUnSelectedListOnRightSide(namesToSelectDepartment);
    })

    it("18.Mandatory with Select and unSelect the Clients", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectOnRightSide(namesToSelectDepartment);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.selectOnRightSide(namesToSelectClients);
        legalMatters.RemoveOnLeftSide(namesToSelectClients);
        legalMatters.textVerifyUnSelectedListOnRightSide(namesToSelectClients);
    })

    it("19.Mandatory with Select and unSelect the TM", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectOnRightSide(namesToSelectDepartment);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.selectOnRightSide(namesToSelectTM);
        legalMatters.RemoveOnLeftSide(namesToSelectTM);
        legalMatters.textVerifyUnSelectedListOnRightSide(namesToSelectTM);
    })

    it("20.Mandatory with Select and unSelect the Documents", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectOnRightSide(namesToSelectDepartment);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        //Documents
        legalMatters.selectOnRightSide(namesToSelectDocuments);
        legalMatters.RemoveOnLeftSide(namesToSelectDocuments);
        legalMatters.textVerifyUnSelectedListOnRightSide(namesToSelectDocuments);
    })

    it("21.Mandatory with Departments and Select all and Unselect all and verify", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        cy.scrollTo('bottom');
        cy.wait(1000);
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
        cy.scrollTo('bottom');
        cy.wait(1000);
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
        cy.scrollTo('bottom');
        cy.wait(1000);
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
        cy.scrollTo('bottom');
        cy.wait(1000);
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
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        var namesToSelectDepartments = [matterData.CMatter.Department1, matterData.CMatter.Department2];
        legalMatters.selectOnRightSide(namesToSelectDepartments);
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
        cy.wait(1000);
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter.caseTitle);
        cy.wait(1000);
        viewlegalMatters.actionButtonsClick(matterData.CMatter.caseTitle);
        viewlegalMatters.editMatterInfoMenuButton();
        cy.wait(1000);
        viewlegalMatters.verifyEditMatterInfoCaseTitle(matterData.CMatter.caseTitle);
        viewlegalMatters.verifyEditMatterInfoCaseNumber(matterData.CMatter.caseNumber);
        viewlegalMatters.editMatterInfoCancelButton();
        cy.wait(3000);
        viewlegalMatters.actionButtonsClick(matterData.CMatter.caseTitle);
        viewlegalMatters.updateDepartmentMenuButton();
        viewlegalMatters.updateDepartmentCheckSelectedDepartmentName(namesToSelectDepartments);
    })

    it("26.Mandatory with Departments and Clients", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.CMatter1.caseTitle);
        legalMatters.caseNumberField(matterData.CMatter1.caseNumber);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        var namesToSelectDepartments = [matterData.CMatter1.Department1, matterData.CMatter1.Department2];
        legalMatters.selectOnRightSide(namesToSelectDepartments);
        legalMatters.commonNextButton();
        //Clients
        var namesToSelectClients = [matterData.CMatter1.client1, matterData.CMatter1.client2];
        legalMatters.selectOnRightSide(namesToSelectClients);
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
        cy.wait(1000);
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter1.caseTitle);
        cy.wait(1000);
        viewlegalMatters.actionButtonsClick(matterData.CMatter1.caseTitle);
        viewlegalMatters.viewDetailsMenuButton();
        viewlegalMatters.viewDetailsTeamMemberAndExternalCounselTab();
        cy.wait(1000);
        viewlegalMatters.viewDetailsExternalCounselTab();
        var namesToSelectedClient = [matterData.CMatter1.clients1, matterData.CMatter1.clients2];
        viewlegalMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(namesToSelectedClient);
        cy.scrollTo('top');
        cy.wait(2000);
        viewlegalMatters.viewTab();
        cy.wait(3000);
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter1.caseTitle);
        cy.wait(1000);
        viewlegalMatters.actionButtonsClick(matterData.CMatter1.caseTitle);
        viewlegalMatters.editMatterInfoMenuButton();
        cy.wait(1000);
        viewlegalMatters.verifyEditMatterInfoCaseTitle(matterData.CMatter1.caseTitle);
        viewlegalMatters.verifyEditMatterInfoCaseNumber(matterData.CMatter1.caseNumber);
        viewlegalMatters.editMatterInfoCancelButton();
        cy.wait(3000);
        viewlegalMatters.actionButtonsClick(matterData.CMatter1.caseTitle);
        viewlegalMatters.updateDepartmentMenuButton();
        viewlegalMatters.updateDepartmentCheckSelectedDepartmentName(namesToSelectDepartments);
    })

    it("27.Mandatory with Departments and TM", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.CMatter2.caseTitle);
        legalMatters.caseNumberField(matterData.CMatter2.caseNumber);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        var namesToSelectDepartments = [matterData.CMatter2.Department1, matterData.CMatter2.Department2];
        legalMatters.selectOnRightSide(namesToSelectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team members
        var namesToSelectMembers = [matterData.CMatter2.member1, matterData.CMatter2.member2];
        legalMatters.selectOnRightSide(namesToSelectMembers);
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success popup
        legalMatters.successViewMatterButton();
        // Assertions
        cy.wait(1000);
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter2.caseTitle);
        cy.wait(1000);
        viewlegalMatters.actionButtonsClick(matterData.CMatter2.caseTitle);
        viewlegalMatters.viewDetailsMenuButton();
        viewlegalMatters.viewDetailsTeamMemberAndExternalCounselTab();
        var namesToSelectMembers = [matterData.CMatter2.members1, matterData.CMatter2.members2, matterData.CMatter2.members3];
        viewlegalMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(namesToSelectMembers);
        var namesToCheckUnSelectMembers = [matterData.CMatter2.UnSelectedmember1, matterData.CMatter2.UnSelectedmember2, matterData.CMatter2.UnSelectedmember3, matterData.CMatter2.UnSelectedmember4, matterData.CMatter2.UnSelectedmember5];
        viewlegalMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(namesToCheckUnSelectMembers);
        cy.wait(1000);
        cy.scrollTo('top');
        cy.wait(2000);
        viewlegalMatters.viewTab();
        cy.wait(3000);
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter2.caseTitle);
        cy.wait(1000);
        viewlegalMatters.actionButtonsClick(matterData.CMatter2.caseTitle);
        viewlegalMatters.editMatterInfoMenuButton();
        cy.wait(1000);
        viewlegalMatters.verifyEditMatterInfoCaseTitle(matterData.CMatter2.caseTitle);
        viewlegalMatters.verifyEditMatterInfoCaseNumber(matterData.CMatter2.caseNumber);
        viewlegalMatters.editMatterInfoCancelButton();
        cy.wait(3000);
        viewlegalMatters.actionButtonsClick(matterData.CMatter2.caseTitle);
        viewlegalMatters.updateDepartmentMenuButton();
        viewlegalMatters.updateDepartmentCheckSelectedDepartmentName(namesToSelectDepartments);
    })

    it("28.Mandatory with Departments and Document", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.CMatter3.caseTitle);
        legalMatters.caseNumberField(matterData.CMatter3.caseNumber);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        var namesToSelectDepartments = [matterData.CMatter3.Department1, matterData.CMatter3.Department2];
        legalMatters.selectOnRightSide(namesToSelectDepartments);
        legalMatters.commonNextButton();
        //Clients
        legalMatters.commonNextButton();
        //Team members
        legalMatters.commonNextButton();
        //Documents
        var namesToSelectDocuments = [matterData.CMatter3.document1, matterData.CMatter3.document2];
        legalMatters.selectOnRightSide(namesToSelectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success popup
        legalMatters.successViewMatterButton();
        // Assertions
        cy.wait(2000);
        viewlegalMatters.viewTab();
        cy.wait(3000);
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter3.caseTitle);
        cy.wait(1000);
        viewlegalMatters.actionButtonsClick(matterData.CMatter3.caseTitle);
        viewlegalMatters.editMatterInfoMenuButton();
        cy.wait(1000);
        viewlegalMatters.verifyEditMatterInfoCaseTitle(matterData.CMatter3.caseTitle);
        viewlegalMatters.verifyEditMatterInfoCaseNumber(matterData.CMatter3.caseNumber);
        viewlegalMatters.editMatterInfoCancelButton();
        cy.wait(3000);
        viewlegalMatters.actionButtonsClick(matterData.CMatter3.caseTitle);
        viewlegalMatters.updateDepartmentMenuButton();
        viewlegalMatters.updateDepartmentCheckSelectedDepartmentName(namesToSelectDepartments);
    })

    it("29.Mandatory with Departments and Clients and TM", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.CMatter4.caseTitle);
        legalMatters.caseNumberField(matterData.CMatter4.caseNumber);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        var namesToSelectDepartments = [matterData.CMatter4.Department1, matterData.CMatter4.Department2];
        legalMatters.selectOnRightSide(namesToSelectDepartments);
        legalMatters.commonNextButton();
        //Clients
        var namesToSelectClients = [matterData.CMatter4.client1, matterData.CMatter4.client2];
        legalMatters.selectOnRightSide(namesToSelectClients);
        legalMatters.commonNextButton();
        //Team members
        var namesToSelectMembers = [matterData.CMatter4.member1, matterData.CMatter4.member2];
        legalMatters.selectOnRightSide(namesToSelectMembers);
        legalMatters.commonNextButton();
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success popup
        legalMatters.successViewMatterButton();
        //Assertions
        cy.wait(1000);
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter4.caseTitle);
        cy.wait(1000);
        viewlegalMatters.actionButtonsClick(matterData.CMatter4.caseTitle);
        viewlegalMatters.viewDetailsMenuButton();
        viewlegalMatters.viewDetailsTeamMemberAndExternalCounselTab();
        var namesToSelectMembers = [matterData.CMatter4.members1, matterData.CMatter4.members2, matterData.CMatter4.members3];
        viewlegalMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(namesToSelectMembers);
        var namesToCheckUnSelectMembers = [matterData.CMatter4.UnSelectedmember1, matterData.CMatter4.UnSelectedmember2, matterData.CMatter4.UnSelectedmember3, matterData.CMatter4.UnSelectedmember4, matterData.CMatter4.UnSelectedmember5];
        viewlegalMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(namesToCheckUnSelectMembers);
        cy.wait(1000);
        viewlegalMatters.viewDetailsExternalCounselTab();
        var namesToSelectedClient = [matterData.CMatter4.clients1, matterData.CMatter4.clients2];
        viewlegalMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(namesToSelectedClient);
        cy.scrollTo('top');
        cy.wait(2000);
        viewlegalMatters.viewTab();
        cy.wait(3000);
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter4.caseTitle);
        cy.wait(1000);
        viewlegalMatters.actionButtonsClick(matterData.CMatter4.caseTitle);
        viewlegalMatters.editMatterInfoMenuButton();
        cy.wait(1000);
        viewlegalMatters.verifyEditMatterInfoCaseTitle(matterData.CMatter4.caseTitle);
        viewlegalMatters.verifyEditMatterInfoCaseNumber(matterData.CMatter4.caseNumber);
        viewlegalMatters.editMatterInfoCancelButton();
        cy.wait(3000);
        viewlegalMatters.actionButtonsClick(matterData.CMatter4.caseTitle);
        viewlegalMatters.updateDepartmentMenuButton();
        viewlegalMatters.updateDepartmentCheckSelectedDepartmentName(namesToSelectDepartments);
    })

    it("30.Mandatory with Departments and Clients and Documents", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.CMatter5.caseTitle);
        legalMatters.caseNumberField(matterData.CMatter5.caseNumber);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        var namesToSelectDepartments = [matterData.CMatter5.Department1, matterData.CMatter5.Department2];
        legalMatters.selectOnRightSide(namesToSelectDepartments);
        legalMatters.commonNextButton();
        //Clients
        var namesToSelectClients = [matterData.CMatter5.client1, matterData.CMatter5.client2];
        legalMatters.selectOnRightSide(namesToSelectClients);
        legalMatters.commonNextButton();
        //Team members
        legalMatters.commonNextButton();
        //Documents
        var namesToSelectDocuments = [matterData.CMatter5.document1, matterData.CMatter5.document2];
        legalMatters.selectOnRightSide(namesToSelectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success popup
        legalMatters.successViewMatterButton();
        cy.wait(1000);
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter5.caseTitle);
        cy.wait(1000);
        viewlegalMatters.actionButtonsClick(matterData.CMatter5.caseTitle);
        viewlegalMatters.viewDetailsMenuButton();
        viewlegalMatters.viewDetailsTeamMemberAndExternalCounselTab();
        cy.wait(1000);
        viewlegalMatters.viewDetailsExternalCounselTab();
        var namesToSelectedClient = [matterData.CMatter5.clients1, matterData.CMatter5.clients2];
        viewlegalMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(namesToSelectedClient);
        cy.scrollTo('top');
        cy.wait(2000);
        viewlegalMatters.viewTab();
        cy.wait(3000);
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter5.caseTitle);
        cy.wait(1000);
        viewlegalMatters.actionButtonsClick(matterData.CMatter5.caseTitle);
        viewlegalMatters.editMatterInfoMenuButton();
        cy.wait(1000);
        viewlegalMatters.verifyEditMatterInfoCaseTitle(matterData.CMatter5.caseTitle);
        viewlegalMatters.verifyEditMatterInfoCaseNumber(matterData.CMatter5.caseNumber);
        viewlegalMatters.editMatterInfoCancelButton();
        cy.wait(3000);
        viewlegalMatters.actionButtonsClick(matterData.CMatter5.caseTitle);
        viewlegalMatters.updateDepartmentMenuButton();
        viewlegalMatters.updateDepartmentCheckSelectedDepartmentName(namesToSelectDepartments);
    })

    it("31.Mandatory with All", () => {
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.CMatter6.caseTitle);
        legalMatters.caseNumberField(matterData.CMatter6.caseNumber);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        var namesToSelectDepartments = [matterData.CMatter6.Department1, matterData.CMatter6.Department2];
        legalMatters.selectOnRightSide(namesToSelectDepartments);
        legalMatters.commonNextButton();
        //Clients
        var namesToSelectClients = [matterData.CMatter6.client1, matterData.CMatter6.client2];
        legalMatters.selectOnRightSide(namesToSelectClients);
        legalMatters.commonNextButton();
        //Team members
        var namesToSelectMembers = [matterData.CMatter6.member1, matterData.CMatter6.member2];
        legalMatters.selectOnRightSide(namesToSelectMembers);
        legalMatters.commonNextButton();
        //Documents
        var namesToSelectDocuments = [matterData.CMatter6.document1, matterData.CMatter6.document2];
        legalMatters.selectOnRightSide(namesToSelectDocuments);
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success popup
        legalMatters.successViewMatterButton();
        cy.wait(1000);
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter6.caseTitle);
        cy.wait(1000);
        viewlegalMatters.actionButtonsClick(matterData.CMatter6.caseTitle);
        viewlegalMatters.viewDetailsMenuButton();
        viewlegalMatters.viewDetailsTeamMemberAndExternalCounselTab();
        var namesToSelectMembers = [matterData.CMatter6.members1, matterData.CMatter6.members2, matterData.CMatter6.members3];
        viewlegalMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(namesToSelectMembers);
        var namesToCheckUnSelectMembers = [matterData.CMatter6.UnSelectedmember1, matterData.CMatter6.UnSelectedmember2, matterData.CMatter6.UnSelectedmember3, matterData.CMatter6.UnSelectedmember4, matterData.CMatter6.UnSelectedmember5];
        viewlegalMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(namesToCheckUnSelectMembers);
        cy.wait(1000);
        viewlegalMatters.viewDetailsExternalCounselTab();
        var namesToSelectedClient = [matterData.CMatter6.clients1, matterData.CMatter6.clients2];
        viewlegalMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(namesToSelectedClient);
        cy.scrollTo('top');
        cy.wait(3000);
        viewlegalMatters.viewTab();
        cy.wait(3000);
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter6.caseTitle);
        cy.wait(1000);
        viewlegalMatters.actionButtonsClick(matterData.CMatter6.caseTitle);
        viewlegalMatters.editMatterInfoMenuButton();
        cy.wait(1000);
        viewlegalMatters.verifyEditMatterInfoCaseTitle(matterData.CMatter6.caseTitle);
        viewlegalMatters.verifyEditMatterInfoCaseNumber(matterData.CMatter6.caseNumber);
        viewlegalMatters.editMatterInfoCancelButton();
        cy.wait(3000);
        viewlegalMatters.actionButtonsClick(matterData.CMatter6.caseTitle);
        viewlegalMatters.updateDepartmentMenuButton();
        viewlegalMatters.updateDepartmentCheckSelectedDepartmentName(namesToSelectDepartments);
    })

    it.only("32.All Field entered and Verify", () => {
        legalMatters.leftSideMatterTab();
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.CMatter7.caseTitle);
        legalMatters.caseNumberField(matterData.CMatter7.caseNumber);
        cy.scrollTo('bottom');
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
        cy.wait(1000);
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
        cy.wait(1000);
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success popup
        legalMatters.successViewMatterButton();
        cy.wait(1000);
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter7.caseTitle);
        cy.wait(1000);
        viewlegalMatters.actionButtonsClick(matterData.CMatter7.caseTitle);
        viewlegalMatters.viewDetailsMenuButton();
        viewlegalMatters.viewDetailsTeamMemberAndExternalCounselTab();
        var namesToSelectMembers = [matterData.CMatter7.members1, matterData.CMatter7.members2, matterData.CMatter7.members3];
        viewlegalMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(namesToSelectMembers);
        var namesToCheckUnSelectMembers = [matterData.CMatter7.UnSelectedmember1, matterData.CMatter7.UnSelectedmember2, matterData.CMatter7.UnSelectedmember3, matterData.CMatter7.UnSelectedmember4, matterData.CMatter7.UnSelectedmember5];
        viewlegalMatters.viewDetailsCheckUnSelectedTeamMemberOrClientName(namesToCheckUnSelectMembers);
        cy.wait(1000);
        viewlegalMatters.viewDetailsExternalCounselTab();
        var namesToSelectedClient = [matterData.CMatter7.clients1, matterData.CMatter7.clients2];
        viewlegalMatters.viewDetailsCheckSelectedTeamMemberOrClientNameAppear(namesToSelectedClient);
        cy.scrollTo('top');
        cy.wait(3000);
        viewlegalMatters.viewTab();
        cy.wait(3000);
        viewlegalMatters.viewMatterSearchBox(matterData.CMatter7.caseTitle);
        cy.wait(1000);
        viewlegalMatters.actionButtonsClick(matterData.CMatter7.caseTitle);
        viewlegalMatters.editMatterInfoMenuButton();
        cy.wait(1000);
        viewlegalMatters.verifyEditMatterInfoCaseTitle(matterData.CMatter7.caseTitle);
        viewlegalMatters.verifyEditMatterInfoCaseNumber(matterData.CMatter7.caseNumber);
        viewlegalMatters.verifyEditMatterInfoDescription(matterData.CMatter7.Description);
        viewlegalMatters.verifyEditMatterInfoCaseType(matterData.CMatter7.caseType);
        viewlegalMatters.verifyEditMatterInfoCourt(matterData.CMatter7.Court);
        viewlegalMatters.verifyEditMatterInfoJudges(matterData.CMatter7.Judge);
        viewlegalMatters.editMatterInfoCancelButton();
        cy.wait(3000);
        viewlegalMatters.actionButtonsClick(matterData.CMatter7.caseTitle);
        viewlegalMatters.updateDepartmentMenuButton();
        viewlegalMatters.updateDepartmentCheckSelectedDepartmentName(namesToSelectDepartments);
    })
})
