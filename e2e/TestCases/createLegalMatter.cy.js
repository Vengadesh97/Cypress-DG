import loginpage from "../PageObject/loginpagePOM";
import legalMatters from "../PageObject/legalMatterPOM";
import loginData from "../../fixtures/login.json";
import matterData from "../../fixtures/createMatterData.json";


describe("Create Legal Matter Scenario",()=>{

    var namesToSelectDepartment = [matterData.createMatter.Department1,matterData.createMatter.Department2];
    var namesToSelectClients = [matterData.createMatter.client1,matterData.createMatter.client2];
    var namesToSelectTM = [matterData.createMatter.member1,matterData.createMatter.member2];
    var namesToSelectDocuments = [matterData.createMatter.document1,matterData.createMatter.document2];

    before(() =>{

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

    it("1.Mandatory Fields with Cancel",()=>{
        legalMatters.leftSideMatterTab();
        cy.wait(5000);
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

    it("2.Mandatory Field and DOF with Cancel",()=>{
        cy.wait(5000);
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

    it("3.Mandatory and Description with Cancel ",()=>{
        cy.wait(5000);
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

    it("4.Mandatory and case types with Cancel ",()=>{
        cy.wait(5000);
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

    it("5.Mandatory and court with cancel ",()=>{
        cy.wait(5000);
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

    it("6.Mandatory and Judge with cancel ",()=>{
        cy.wait(5000);
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

    it("7.Mandatory and Priority with cancel ",()=>{
        cy.wait(5000);
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.prioritySelect(matterData.createMatter.Priority)
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.cancelButton();
    })

    it("8.Mandatory and Status with cancel ",()=>{
        cy.wait(5000);
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        legalMatters.statusSelect(matterData.createMatter.Status);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.cancelButton();
    })

    it("9.Mandatory and Opponent Advocates with cancel ",()=>{
        cy.wait(5000);
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

    it("10.Without enter the mandatory and Check the error message appear",()=>{
        cy.wait(5000);
        legalMatters.createTab();
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        cy.scrollTo('top');
        legalMatters.assertionMandatoryMessageCaseNumber();
        legalMatters.assertionMandatoryMessageCaseTitle();
    })

    it.skip("11.Mandatory with Next button disable in Department",()=>{
        cy.wait(5000);
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

    it("12.Mandatory with Departments with Cancel",()=>{
        cy.wait(5000);
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

    it("13.Mandatory with Departments and Clients with Cancel",()=>{
        cy.wait(5000);
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
        legalMatters.nextButton();
        //Clients
        legalMatters.selectOnRightSide(namesToSelectClients);
        legalMatters.cancelButton();
        cy.scrollTo('top');
        legalMatters.emptyOnSelectedListonLeftSideVerify();
    })

    it("14.Mandatory with Departments and TM with Cancel",()=>{
        cy.wait(5000);
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
        legalMatters.nextButton();
        //Clients
        legalMatters.nextButton();
        //Team Members
        legalMatters.selectOnRightSide(namesToSelectTM);
        legalMatters.cancelButton();
        cy.scrollTo('top');
        legalMatters.emptyOnSelectedListonLeftSideVerify();
    })

    it("15.Mandatory with Departments and Documents with Cancel",()=>{
        cy.wait(5000);
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
        legalMatters.nextButton();
        //Clients
        legalMatters.nextButton();
        //Team Members
        legalMatters.nextButton();
        //Documents
        legalMatters.selectOnRightSide(namesToSelectDocuments);
        legalMatters.cancelButton();
        cy.scrollTo('top');
        legalMatters.emptyOnSelectedListonLeftSideVerify();
    })

    it("16.Mandatory with Departments,Clients,TeamMember and Documents with Cancel",()=>{
        cy.wait(5000);
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
        legalMatters.nextButton();
        //Clients
        legalMatters.selectOnRightSide(namesToSelectClients);
        legalMatters.nextButton();
        //Team Members
        legalMatters.selectOnRightSide(namesToSelectTM);
        legalMatters.nextButton();
        //Documents
        legalMatters.selectOnRightSide(namesToSelectDocuments);
        legalMatters.cancelButton();
        cy.scrollTo('top');
        legalMatters.emptyOnSelectedListonLeftSideVerify();
    })

    it("17.Mandatory with Select and unSelect the Departments",()=>{
        cy.wait(5000);
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

    it("18.Mandatory with Select and unSelect the Clients",()=>{
        cy.wait(5000);
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectOnRightSide(namesToSelectDepartment);
        legalMatters.nextButton();
        //Clients
        legalMatters.selectOnRightSide(namesToSelectClients);
        legalMatters.RemoveOnLeftSide(namesToSelectClients);
        legalMatters.textVerifyUnSelectedListOnRightSide(namesToSelectClients);
    })

    it("19.Mandatory with Select and unSelect the TM",()=>{
        cy.wait(5000);
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectOnRightSide(namesToSelectDepartment);
        legalMatters.nextButton();
        //Clients
        legalMatters.nextButton();
        //Team Members
        legalMatters.selectOnRightSide(namesToSelectTM);
        legalMatters.RemoveOnLeftSide(namesToSelectTM);
        legalMatters.textVerifyUnSelectedListOnRightSide(namesToSelectTM);
    })

    it("20.Mandatory with Select and unSelect the Documents",()=>{
        cy.wait(5000);
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectOnRightSide(namesToSelectDepartment);
        legalMatters.nextButton();
        //Clients
        legalMatters.nextButton();
        //Team Members
        legalMatters.nextButton();
        //Documents
        legalMatters.selectOnRightSide(namesToSelectDocuments);
        legalMatters.RemoveOnLeftSide(namesToSelectDocuments);
        legalMatters.textVerifyUnSelectedListOnRightSide(namesToSelectDocuments);
    })

    it("21.Mandatory with Departments and Select all and Unselect all and verify",()=>{
        cy.wait(5000);
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


    it("22.Mandatory with Clients and Select all and Unselect all and verify",()=>{
        cy.wait(5000);
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectAllButton();
        legalMatters.nextButton();
        //Clients
        legalMatters.selectAllButton();
        legalMatters.emptyOnUnSelectListonRightSideVerify();
        legalMatters.selectAllButton();
        legalMatters.emptyOnSelectedListonLeftSideVerify();
    })

    it("23.Mandatory with TeamMembers and Select all and Unselect all and verify",()=>{
        cy.wait(5000);
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectAllButton();
        legalMatters.nextButton();
        //Clients
        legalMatters.selectAllButton();
        legalMatters.nextButton();
        //Team Members
        legalMatters.selectAllButton();
        legalMatters.emptyOnUnSelectListonRightSideVerify();
        legalMatters.selectAllButton();
        legalMatters.emptyOnSelectedListonLeftSideVerify();
    })

    it("24.Mandatory with Documents and Select all and Unselect all and verify",()=>{
        cy.wait(5000);
        legalMatters.createTab();
        legalMatters.caseTitleField(matterData.createMatter.caseTitle);
        legalMatters.caseNumberField(matterData.createMatter.caseNumber);
        cy.scrollTo('bottom');
        cy.wait(1000);
        legalMatters.nextButton();
        cy.wait(1000);
        //Departments
        legalMatters.selectAllButton();
        legalMatters.nextButton();
        //Clients
        legalMatters.selectAllButton();
        legalMatters.nextButton();
        //Team Members
        legalMatters.selectAllButton();
        legalMatters.nextButton();
        //Documents
        legalMatters.selectAllButton();
        legalMatters.emptyOnUnSelectListonRightSideVerify();
        legalMatters.selectAllButton();
        legalMatters.emptyOnSelectedListonLeftSideVerify();
    })

})
