import loginPage from "../PageObject/loginpagePOM";
import legalMatters from "../PageObject/legalMatterPOM";
import viewMatters from "../PageObject/viewMatterPOM";
import loginPageData from "../../fixtures/login.json";
import data from "../../fixtures/createMatterData1.json";


describe("Create Legal Matter Scenario 2 ",()=>{

    // while Creating matter , select the Department ,Clients,Team Members and Documents.
    var selectDepartments = [data.Common.Department1, data.Common.Department2];
    var selectClients = [data.Common.client1, data.Common.client2];
    var selectTeamMembers = [data.Common.member1, data.Common.member2];
    var selectDocuments = [data.Common.document1, data.Common.document2];

    // Assertions

    before(()=>{
        loginPage.visit();
        loginPage.userName(loginPageData.codeword.email);
        loginPage.passWord(loginPageData.codeword.password);
        loginPage.loginButton();
    })

    after(()=>{
        loginPage.loadIssues();
        loginPage.homeButton();
        legalMatters.leftSideMatterTab();
    })

    it("1.Mandatory and DOF with Departments",()=>{
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
        cy.wait(1000);
        //Clients
        legalMatters.commonNextButton();
        //Team Members
        legalMatters.commonNextButton();
        cy.wait(1000);
        //Documents
        legalMatters.submitButton();
        //Confirmation Popup
        legalMatters.confirmationYesButton();
        //Success popup
        legalMatters.successViewMatterButton();
        viewMatters.viewMatterSearchBox(data.text1.caseTitle);
        viewMatters.actionButtonsClick(data.text1.caseTitle);
        viewMatters.editMatterInfoMenuButton();
        cy.wait(1000);
        viewMatters.verifyEditMatterInfoCaseTitle(data.text1.caseTitle);
        viewMatters.verifyEditMatterInfoCaseNumber(data.text1.caseNumber);
        viewMatters.editMatterInfoCancelButton();
        viewMatters.actionButtonsClick(data.text1.caseTitle);
        viewMatters.updateDepartmentMenuButton();
        viewMatters.updateDepartmentCheckSelectedDepartmentName(selectDepartments);
    })














})