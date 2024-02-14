import loginpage from "../PageObject/loginpagePOM";
import legalMatters from "../PageObject/legalMatterPOM";
import loginData from "../../fixtures/login.json";
import matterData from "../../fixtures/createMatterData.json";


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
    })
})
