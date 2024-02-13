import loginPage from "../PageObject/loginpagePOM";
import groups from "../PageObject/groupsPOM";
import 'cypress-file-upload';


describe("Create Department Scenario", () => {
    let data;
    before(() => {
        loginPage.visit();
        cy.fixture('login').then((value) => {
            data = value;
            loginPage.userName(data.codeword.email);
            loginPage.passWord(data.codeword.password);
            loginPage.loginButton();
        })
    });

    afterEach(() => {
        loginPage.loadIssues();
        loginPage.homeButton();
        groups.leftSideGroup();
    })


    it('1.Create Department with cancel and Alert No button', () => {

        groups.leftSideGroup();
        groups.createGroupsTab();
        groups.groupName(data.group.groupName);
        groups.descrptions(data.group.descrp);
        groups.cancelButton();
        cy.wait(1000);
        groups.alertNoButton();
        groups.assertionDepartmentInfo();
    })

    it('2.Create Department with cancel and Alert Yes button', () => {
        groups.createGroupsTab();
        groups.groupName(data.group.groupName);
        groups.descrptions(data.group.descrp);
        groups.cancelButton();
        groups.alertYesButton();
        groups.assertionViewDepartmentScreen();

    });

    it('3.Create Department and without select member and back', () => {
        groups.createGroupsTab();
        groups.groupName(data.group.groupName);
        groups.descrptions(data.group.descrp);
        groups.addButtons();
        groups.backButton();
        groups.assertionDepartmentInfo();
    });

    it('4.Create Department and select member and back', () => {
        groups.createGroupsTab();
        groups.groupName(data.group.groupName);
        groups.descrptions(data.group.descrp);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3, data.group.Member4, data.group.Member5];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.backButton();
        groups.assertionDepartmentInfo();
    })

    it('5.Selected Team Member and Cancel and Alert No', () => {
        groups.createGroupsTab();
        groups.groupName(data.group.groupName);
        groups.descrptions(data.group.descrp);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3, data.group.Member4, data.group.Member5];
        groups.selectMultipleMember(namesToSelect);
        groups.cancelButton();
        groups.alertNoButton();
        groups.assertionAddDepartmentMembers();
        groups.MultipleSelectedNameVerification(namesToSelect);
    })

    it('6.Selected Team Member and Cancel and Alert Yes', () => {
        groups.createGroupsTab();
        groups.groupName(data.group.groupName);
        groups.descrptions(data.group.descrp);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3, data.group.Member4, data.group.Member5];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.cancelButton();
        groups.alertYesButton();
        groups.assertionViewDepartmentScreen();
    })

    it('7.Selected Team Member and Move to Next Page', () => {
        groups.createGroupsTab();
        groups.groupName(data.group.groupName);
        groups.descrptions(data.group.descrp);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3, data.group.Member4, data.group.Member5];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.nextButton();
        groups.assertionSelectedDepartmentMembers();
        groups.MultipleRemoveNamePlaceVerification(namesToSelect);
    })

    it('8.Selected Team Member and Navigate to Next Page then click back button ', () => {
        groups.createGroupsTab();
        groups.groupName(data.group.groupName);
        groups.descrptions(data.group.descrp);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3, data.group.Member4, data.group.Member5];
        groups.selectMultipleMember(namesToSelect);
        groups.nextButton();
        groups.MultipleRemoveNamePlaceVerification(namesToSelect);
        groups.backButton();
        groups.assertionAddDepartmentMembers();
        groups.MultipleSelectedNameVerification(namesToSelect);
    })

    it('9.Remove team member pages and Cancel and Alert No', () => {
        groups.createGroupsTab();
        groups.groupName(data.group.groupName);
        groups.descrptions(data.group.descrp);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3, data.group.Member4, data.group.Member5];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.nextButton();
        groups.cancelButton();
        groups.alertNoButton();
        groups.assertionSelectedDepartmentMembers();
        groups.MultipleRemoveNamePlaceVerification(namesToSelect);
    })

    it('10.Remove team member pages and Cancel and Alert Yes', () => {
        groups.createGroupsTab();
        groups.groupName(data.group.groupName);
        groups.descrptions(data.group.descrp);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3, data.group.Member4, data.group.Member5];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.nextButton();
        groups.MultipleRemoveNamePlaceVerification(namesToSelect);
        groups.cancelButton();
        groups.alertYesButton();
        groups.assertionViewDepartmentScreen();
    })
    it('11.Remove team Member page and Move to Next Page', () => {
        groups.createGroupsTab();
        groups.groupName(data.group.groupName);
        groups.descrptions(data.group.descrp);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3, data.group.Member4, data.group.Member5];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.nextButton();
        groups.MultipleRemoveNamePlaceVerification(namesToSelect);
        groups.nextButton();
        groups.assertionAssignDepartmentHead();
        groups.MultipleDepartmentHeadNameplaceVerifications(namesToSelect);
    })

    it('12.Removed Team Member and Navigate to Next Page then click Back', () => {
        groups.createGroupsTab();
        groups.groupName(data.group.groupName);
        groups.descrptions(data.group.descrp);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3, data.group.Member4, data.group.Member5];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.nextButton();
        var namesToRemove = [data.group.Member1, data.group.Member2];
        groups.removeMultipleMember(namesToRemove);
        var presentSelectedName = [data.group.Member3, data.group.Member4, data.group.Member5];
        groups.MultipleRemoveNamePlaceVerification(presentSelectedName);
        groups.backButton();
        groups.assertionAddDepartmentMembers();
        groups.MultipleSelectedNameVerification(presentSelectedName);
    })

    it('13.Removed Team member and Cancel and Alert No', () => {
        groups.createGroupsTab();
        groups.groupName(data.group.groupName);
        groups.descrptions(data.group.descrp);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3, data.group.Member4, data.group.Member5];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.nextButton();
        var namesToRemove = [data.group.Member1, data.group.Member2];
        groups.removeMultipleMember(namesToRemove);
        groups.cancelButton();
        groups.alertNoButton();
        groups.assertionSelectedDepartmentMembers();
        var presentSelectedName = [data.group.Member3, data.group.Member4, data.group.Member5];
        groups.MultipleRemoveNamePlaceVerification(presentSelectedName);
    })

    it('14.Removed Team member and Cancel and Alert Yes', () => {
        groups.createGroupsTab();
        groups.groupName(data.group.groupName);
        groups.descrptions(data.group.descrp);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3, data.group.Member4, data.group.Member5];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.nextButton();
        var namesToRemove = [data.group.Member1, data.group.Member2];
        groups.removeMultipleMember(namesToRemove);
        var presentSelectedName = [data.group.Member3, data.group.Member4, data.group.Member5];
        groups.MultipleRemoveNamePlaceVerification(presentSelectedName);
        groups.cancelButton();
        groups.alertYesButton();
        groups.assertionViewDepartmentScreen();
    })

    it('15.Removed team Member and Navigate to Next page and Verify', () => {
        groups.createGroupsTab();
        groups.groupName(data.group.groupName);
        groups.descrptions(data.group.descrp);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3, data.group.Member4, data.group.Member5];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.nextButton();
        var namesToRemove = [data.group.Member1, data.group.Member2];
        groups.removeMultipleMember(namesToRemove);
        var presentSelectedName = [data.group.Member3, data.group.Member4, data.group.Member5];
        groups.MultipleRemoveNamePlaceVerification(presentSelectedName);
        groups.nextButton();
        groups.assertionAssignDepartmentHead();
        groups.MultipleDepartmentHeadNameplaceVerifications(presentSelectedName);
    })
    it('16.Department Head Page and Navigate to Back page and verify', () => {
        groups.createGroupsTab();
        groups.groupName(data.group.groupName);
        groups.descrptions(data.group.descrp);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3, data.group.Member4, data.group.Member5];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.nextButton();
        groups.MultipleRemoveNamePlaceVerification(namesToSelect);
        groups.nextButton();
        groups.MultipleDepartmentHeadNameplaceVerifications(namesToSelect);
        groups.backButton();
        groups.assertionSelectedDepartmentMembers();
        groups.MultipleRemoveNamePlaceVerification(namesToSelect);
    })

    it('17.Department head pages and Cancel and Alert No', () => {
        groups.createGroupsTab();
        groups.groupName(data.group.groupName);
        groups.descrptions(data.group.descrp);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3, data.group.Member4, data.group.Member5];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.nextButton();
        groups.MultipleRemoveNamePlaceVerification(namesToSelect);
        groups.nextButton();
        groups.MultipleDepartmentHeadNameplaceVerifications(namesToSelect);
        groups.cancelButton();
        groups.alertNoButton();
        groups.assertionAssignDepartmentHead();
    })

    it('18.Department head pages and Cancel and Alert Yes', () => {
        groups.createGroupsTab();
        groups.groupName(data.group.groupName);
        groups.descrptions(data.group.descrp);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3, data.group.Member4, data.group.Member5];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.nextButton();
        groups.MultipleRemoveNamePlaceVerification(namesToSelect);
        groups.nextButton();
        groups.MultipleDepartmentHeadNameplaceVerifications(namesToSelect);
        groups.cancelButton();
        groups.alertYesButton();
        groups.assertionViewDepartmentScreen();
    })
    it('19.Select Department Head and Navigate to Back button', () => {
        groups.createGroupsTab();
        groups.groupName(data.group.groupName);
        groups.descrptions(data.group.descrp);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3, data.group.Member4, data.group.Member5];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.nextButton();
        var namesToRemove = [data.group.Member1, data.group.Member2];
        groups.removeMultipleMember(namesToRemove);
        groups.nextButton();
        groups.oneTeamMemberSelect(data.group.Member3);
        groups.createSelectedGroupHeadNameVerifications(data.group.Member3);
        groups.backButton();
        groups.assertionSelectedDepartmentMembers();
        var presentSelectedName = [data.group.Member3, data.group.Member4, data.group.Member5];
        groups.MultipleRemoveNamePlaceVerification(presentSelectedName);
    })

    it('20.Select Department head and Cancel and Alert No', () => {
        groups.createGroupsTab();
        groups.groupName(data.group.groupName);
        groups.descrptions(data.group.descrp);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3, data.group.Member4, data.group.Member5];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.nextButton();
        var namesToRemove = [data.group.Member1, data.group.Member2];
        groups.removeMultipleMember(namesToRemove);
        var presentSelectedName = [data.group.Member3, data.group.Member4, data.group.Member5];
        groups.MultipleRemoveNamePlaceVerification(presentSelectedName);
        groups.nextButton();
        groups.MultipleDepartmentHeadNameplaceVerifications(presentSelectedName);
        groups.oneTeamMemberSelect(data.group.Member3);
        groups.cancelButton();
        groups.alertNoButton();
        groups.assertionAssignDepartmentHead();
        groups.createSelectedGroupHeadNameVerifications(data.group.Member3);
    })

    it('21.Select Department head and Cancel and Alert Yes', () => {
        groups.createGroupsTab();
        groups.groupName(data.group.groupName);
        groups.descrptions(data.group.descrp);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3, data.group.Member4, data.group.Member5];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.nextButton();
        var namesToRemove = [data.group.Member1, data.group.Member2];
        groups.removeMultipleMember(namesToRemove);
        var presentSelectedName = [data.group.Member3, data.group.Member4, data.group.Member5];
        groups.MultipleRemoveNamePlaceVerification(presentSelectedName);
        groups.nextButton();
        groups.MultipleDepartmentHeadNameplaceVerifications(presentSelectedName);
        groups.oneTeamMemberSelect(data.group.Member3);
        groups.createSelectedGroupHeadNameVerifications(data.group.Member3);
        groups.cancelButton();
        groups.alertYesButton();
        groups.assertionViewDepartmentScreen();
    })

    it('22.Create department with add department and View changes', () => {
        groups.createGroupsTab();
        groups.groupName(data.group1.name);
        groups.descrptions(data.group1.desc);
        groups.saveButton();
        cy.wait(1000);
        groups.alertPopupAddDepartment();
        cy.wait(1000);
        groups.groupName(data.groups2.name);
        groups.descrptions(data.groups2.desc);
        groups.saveButton();
        cy.wait(2000);
        groups.alertPopupViewChanges();
        cy.wait(1000);
        groups.ViewGroupSearchBar(data.group1.name);
        groups.actionButtonClick(data.group1.name);
        groups.editGroupInfo();
        groups.assertGroupName(data.group1.name);
        groups.assertDescription(data.group1.desc);
        groups.groupCancelButton();
    })
    it('23.Create Department with Single Team Member', () => {
        groups.createGroupsTab();
        groups.groupName(data.group2.name);
        groups.descrptions(data.group2.desc);
        groups.addButtons();
        cy.wait(2000);
        groups.oneTeamMemberSelect(data.group.Member1);
        groups.oneTeamMemberVerifications(data.group.Member1);
        groups.nextButton();
        groups.removeplaceOneTeamMemberVerifications(data.group.Member1);
        groups.nextButton();
        groups.oneTeamMemberSelect(data.group.Member1);
        groups.createSelectedGroupHeadNameVerifications(data.group.Member1);
        groups.saveButton();
        cy.wait(1000);
        groups.alertPopupAddDepartment();
        //verifications assertions
        cy.wait(1000);
        groups.viewGroupTab();
        groups.ViewGroupSearchBar(data.group2.name);
        groups.actionButtonClick(data.group2.name);
        groups.editGroupInfo();
        groups.assertGroupName(data.group2.name);
        groups.assertDescription(data.group2.desc);
        groups.groupCancelButton();
        // View Groups page verifications
        groups.actionButtonClick(data.group2.name);
        groups.viewGroupVerifyGroupName(data.group2.name);
        groups.viewGroupVerifyDescription(data.group2.desc);
        groups.viewgroupVerifyGroupHeadName(data.group.Member1);
    })


    it('24.Create department With Two Team Members', () => {
        groups.createGroupsTab();
        groups.groupName(data.group3.name);
        groups.descrptions(data.group3.desc);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.nextButton();
        groups.MultipleRemoveNamePlaceVerification(namesToSelect);
        groups.nextButton();
        groups.oneTeamMemberSelect(data.group.Member1);
        groups.createSelectedGroupHeadNameVerifications(data.group.Member1);
        groups.saveButton();
        cy.wait(1000);
        groups.alertPopupAddDepartment();
        cy.wait(1000);
        groups.viewGroupTab();
        //verifications assertions
        groups.ViewGroupSearchBar(data.group3.name);
        groups.actionButtonClick(data.group3.name);
        groups.editGroupInfo();
        groups.assertGroupName(data.group3.name);
        groups.assertDescription(data.group3.desc);
        groups.groupCancelButton();
        // View Groups page verifications
        groups.actionButtonClick(data.group6.name);
        groups.viewGroupVerifyGroupName(data.group3.name);
        groups.viewGroupVerifyDescription(data.group3.desc);
        groups.viewgroupVerifyGroupHeadName(data.group.Member1);
    })

    it('25.Create department With Three Team Members', () => {
        groups.createGroupsTab();
        groups.groupName(data.group4.name);
        groups.descrptions(data.group4.desc);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.nextButton();
        groups.MultipleRemoveNamePlaceVerification(namesToSelect);
        groups.nextButton();
        groups.oneTeamMemberSelect(data.group.Member1);
        groups.createSelectedGroupHeadNameVerifications(data.group.Member1);
        groups.saveButton();
        cy.wait(1000);
        groups.alertPopupAddDepartment();
        cy.wait(1000);
        groups.viewGroupTab();
        //verifications assertions
        groups.ViewGroupSearchBar(data.group4.name);
        groups.actionButtonClick(data.group4.name);
        groups.editGroupInfo();
        groups.assertGroupName(data.group4.name);
        groups.assertDescription(data.group4.desc);
        groups.groupCancelButton();
        // Update Groups team Members
        // cy.wait(1000);
        groups.actionButtonClick(data.group4.name);
        groups.updateGroupMembersButton();
        var namesToSelect1 = [data.group.Member2, data.group.Member3];
        groups.selectedTeamMemberNameVerify(namesToSelect1);
        groups.groupCancelButton();
        // View Groups page verifications
        groups.actionButtonClick(data.group4.name);
        groups.viewGroupVerifyGroupName(data.group4.name);
        groups.viewGroupVerifyDescription(data.group4.desc);
        groups.viewgroupVerifyGroupHeadName(data.group.Member1);
    })

    it('26.Create department With Four Team Members', () => {
        groups.createGroupsTab();
        groups.groupName(data.group5.name);
        groups.descrptions(data.group5.desc);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3, data.group.Member4];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.nextButton();
        groups.MultipleRemoveNamePlaceVerification(namesToSelect);
        groups.nextButton();
        groups.oneTeamMemberSelect(data.group.Member1);
        groups.createSelectedGroupHeadNameVerifications(data.group.Member1);
        groups.saveButton();
        cy.wait(1000);
        groups.alertPopupAddDepartment();
        cy.wait(1000);
        groups.viewGroupTab();
        //verifications assertions
        groups.ViewGroupSearchBar(data.group5.name);
        groups.actionButtonClick(data.group5.name);
        groups.editGroupInfo();
        groups.assertGroupName(data.group5.name);
        groups.assertDescription(data.group5.desc);
        groups.groupCancelButton();
        // Update Groups team Members
        // cy.wait(1000);
        groups.actionButtonClick(data.group5.name);
        groups.updateGroupMembersButton();
        var namesToSelect1 = [data.group.Member2, data.group.Member3, data.group.Member4];
        groups.selectedTeamMemberNameVerify(namesToSelect1);
        groups.groupCancelButton();
        // View Groups page verifications
        groups.actionButtonClick(data.group5.name);
        groups.viewGroupVerifyGroupName(data.group5.name);
        groups.viewGroupVerifyDescription(data.group5.desc);
        groups.viewgroupVerifyGroupHeadName(data.group.Member1);
    })

    it('27.Create department With Five Team Members', () => {
        groups.createGroupsTab();
        groups.groupName(data.group6.name);
        groups.descrptions(data.group6.desc);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3, data.group.Member4, data.group.Member5];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.nextButton();
        groups.MultipleRemoveNamePlaceVerification(namesToSelect);
        groups.nextButton();
        groups.oneTeamMemberSelect(data.group.Member1);
        groups.createSelectedGroupHeadNameVerifications(data.group.Member1);
        groups.saveButton();
        cy.wait(1000);
        groups.alertPopupAddDepartment();
        cy.wait(1000);
        groups.viewGroupTab();
        //verifications assertions
        groups.ViewGroupSearchBar(data.group6.name);
        groups.actionButtonClick(data.group6.name);
        groups.editGroupInfo();
        groups.assertGroupName(data.group6.name);
        groups.assertDescription(data.group6.desc);
        groups.groupCancelButton();
        // Update Groups team Members
        // cy.wait(1000);
        groups.actionButtonClick(data.group6.name);
        groups.updateGroupMembersButton();
        var namesToSelect1 = [data.group.Member2, data.group.Member3, data.group.Member4, data.group.Member5];
        groups.selectedTeamMemberNameVerify(namesToSelect1);
        groups.groupCancelButton();
        // View Groups page verifications
        groups.actionButtonClick(data.group6.name);
        groups.viewGroupVerifyGroupName(data.group6.name);
        groups.viewGroupVerifyDescription(data.group6.desc);
        groups.viewgroupVerifyGroupHeadName(data.group.Member1);
    })

    it('28.Create department with Two team members and Remove one Member', () => {
        groups.createGroupsTab();
        groups.groupName(data.group7.name);
        groups.descrptions(data.group7.desc);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.nextButton();
        var namesToRemove = [data.group.Member2];
        groups.removeMultipleMember(namesToRemove);
        groups.removeplaceOneTeamMemberVerifications(data.group.Member1);
        groups.nextButton();
        groups.oneTeamMemberSelect(data.group.Member1);
        groups.createSelectedGroupHeadNameVerifications(data.group.Member1);
        groups.saveButton();
        cy.wait(1000);
        groups.alertPopupViewChanges();
        cy.wait(1000);
        groups.viewGroupTab();
        //verifications assertions
        groups.ViewGroupSearchBar(data.group7.name);
        groups.actionButtonClick(data.group7.name);
        groups.editGroupInfo();
        groups.assertGroupName(data.group7.name);
        groups.assertDescription(data.group7.desc);
        groups.groupCancelButton();
        // View Groups page verifications
        groups.actionButtonClick(data.group7.name);
        groups.viewGroupVerifyGroupName(data.group7.name);
        groups.viewGroupVerifyDescription(data.group7.desc);
        groups.viewgroupVerifyGroupHeadName(data.group.Member1);
    })

    it('29.Create department with Three team members and Remove two team members', () => {
        groups.createGroupsTab();
        groups.groupName(data.group8.name);
        groups.descrptions(data.group8.desc);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.nextButton();
        var namesToRemove = [data.group.Member2, data.group.Member3];
        groups.removeMultipleMember(namesToRemove);
        groups.removeplaceOneTeamMemberVerifications(data.group.Member1);
        groups.nextButton();
        groups.oneTeamMemberSelect(data.group.Member1);
        groups.createSelectedGroupHeadNameVerifications(data.group.Member1);
        groups.saveButton();
        cy.wait(1000);
        groups.alertPopupViewChanges();
        cy.wait(1000);
        groups.viewGroupTab();
        //verifications assertions
        groups.ViewGroupSearchBar(data.group8.name);
        groups.actionButtonClick(data.group8.name);
        groups.editGroupInfo();
        groups.assertGroupName(data.group8.name);
        groups.assertDescription(data.group8.desc);
        groups.groupCancelButton();
        // View Groups page verifications
        groups.actionButtonClick(data.group8.name);
        groups.viewGroupVerifyGroupName(data.group8.name);
        groups.viewGroupVerifyDescription(data.group8.desc);
        groups.viewgroupVerifyGroupHeadName(data.group.Member1);
    })

    it('30.Create department with Four team members and remove three team member', () => {
        groups.createGroupsTab();
        groups.groupName(data.group9.name);
        groups.descrptions(data.group9.desc);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3, data.group.Member4];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.nextButton();
        var namesToRemove = [data.group.Member2, data.group.Member3, data.group.Member4];
        groups.removeMultipleMember(namesToRemove);
        groups.removeplaceOneTeamMemberVerifications(data.group.Member1);
        groups.nextButton();
        groups.oneTeamMemberSelect(data.group.Member1);
        groups.createSelectedGroupHeadNameVerifications(data.group.Member1);
        groups.saveButton();
        cy.wait(1000);
        groups.alertPopupViewChanges();
        cy.wait(1000);
        groups.viewGroupTab();
        //verifications assertions
        groups.ViewGroupSearchBar(data.group9.name);
        groups.actionButtonClick(data.group9.name);
        groups.editGroupInfo();
        groups.assertGroupName(data.group9.name);
        groups.assertDescription(data.group9.desc);
        groups.groupCancelButton();
        // View Groups page verifications
        groups.actionButtonClick(data.group9.name);
        groups.viewGroupVerifyGroupName(data.group9.name);
        groups.viewGroupVerifyDescription(data.group9.desc);
        groups.viewgroupVerifyGroupHeadName(data.group.Member1);
    })

    it.skip('1.Create group with team Member and Verify all details', () => {
        groups.leftSideGroup();
        groups.createGroupsTab();
        groups.groupName(data.group.groupName);
        groups.descrptions(data.group.descrp);
        groups.addButtons();
        cy.wait(2000);
        var namesToSelect = [data.group.Member1, data.group.Member2, data.group.Member3, data.group.Member4, data.group.Member5];
        groups.selectMultipleMember(namesToSelect);
        groups.MultipleSelectedNameVerification(namesToSelect);
        groups.nextButton();
        var namesToRemove = [data.group.Member1, data.group.Member2];
        groups.removeMultipleMember(namesToRemove);
        groups.nextButton();
        groups.oneTeamMemberSelect(data.group.Member3);
        groups.saveButton();
        groups.alertPopupViewChanges();
        // cy.wait(1000);
        //View Groups - Edit GroupInfo
        groups.ViewGroupSearchBar(data.group.groupName);
        groups.actionButtonClick(data.group.groupName);
        groups.editGroupInfo();
        groups.assertGroupName(data.group.groupName);
        groups.assertDescription(data.group.descrp);
        groups.groupCancelButton();
        // Update Groups team Members
        // cy.wait(1000);
        groups.actionButtonClick(data.group.groupName);
        groups.updateGroupMembersButton();
        var namesToSelect = [data.group.Member4, data.group.Member5];
        groups.selectedTeamMemberNameVerify(namesToSelect);
        groups.groupCancelButton();
        // View Groups page verifications
        groups.actionButtonClick(data.group.groupName);
        groups.viewGroupVerifyGroupName(data.group.groupName);
        groups.viewGroupVerifyDescription(data.group.descrp);
        groups.viewgroupVerifyGroupHeadName(data.group.Member3);
    })

    after(() => {

        cy.window().then(win => {
            win.close();
        });

    })



});
