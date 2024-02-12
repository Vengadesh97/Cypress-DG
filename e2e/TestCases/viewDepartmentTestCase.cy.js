import loginPages from "../PageObject/loginpagePOM";
import group from "../PageObject/groupsPOM";


describe("View Department Scenario", () => {

    let data1;
    before(() => {
        loginPages.visit();
        cy.fixture('login').then((value) => {
            data1 = value;
            loginPages.userName(data1.codeword.email);
            loginPages.passWord(data1.codeword.password);
            loginPages.loginButton();
        })
    });

    afterEach(() => {
        loginPages.loadIssues();
        loginPages.homeButton();
        group.leftSideGroup();
    })

    // Create Departments
    it("1.Create Sample Departments", () => {
        group.leftSideGroup();
        group.createGroupsTab();
        group.groupName(data1.editGroup.name);
        group.descrptions(data1.editGroup.desc);
        group.saveButton();
        cy.wait(1000);
        group.alertPopupViewChanges();
    })

    // View departments 
    it("2.Edit Departments Info : Change the Departments Name and Cancel ", () => {

        group.ViewGroupSearchBar(data1.editGroup.name);
        cy.wait(5000);
        group.actionButtonClick(data1.editGroup.name);
        group.editGroupInfo();
        group.groupName(data1.editGroup.name1);
        group.cancelButton();
        cy.wait(2000);
        group.viewGroupVerifyGroupName(data1.editGroup.name);
        group.viewGroupVerifyDescription(data1.editGroup.desc);

    })

    it("3.Edit Departments Info : Change the Descrptions and Cancel  ", () => {

        group.ViewGroupSearchBar(data1.editGroup.name);
        cy.wait(5000);
        group.actionButtonClick(data1.editGroup.name);
        group.editGroupInfo();
        group.descrptions(data1.editGroup.desc1);
        group.cancelButton();
        cy.wait(2000);
        group.viewGroupVerifyGroupName(data1.editGroup.name);
        group.viewGroupVerifyDescription(data1.editGroup.desc);
    })


    it("4.Edit Departments Info : Change the Both and cancel ", () => {
        group.ViewGroupSearchBar(data1.editGroup.name);
        cy.wait(5000);
        group.actionButtonClick(data1.editGroup.name);
        group.editGroupInfo();
        group.groupName(data1.editGroup.name1);
        group.descrptions(data1.editGroup.desc1);
        group.cancelButton();
        cy.wait(2000);
        group.viewGroupVerifyGroupName(data1.editGroup.name);
        group.viewGroupVerifyDescription(data1.editGroup.desc);
    })

    it("5.Edit Departments Info : Change Departments Name and Save ", () => {
        group.ViewGroupSearchBar(data1.editGroup.name);
        cy.wait(5000);
        group.actionButtonClick(data1.editGroup.name);
        group.editGroupInfo();
        group.groupName(data1.editGroup.name1);
        group.saveButton();
        cy.wait(1000);
        group.okButtonEditGroupInfosuccessPopup();
        cy.wait(2000);
        group.ViewGroupSearchBar(data1.editGroup.name1);
        group.viewGroupVerifyGroupName(data1.editGroup.name1);
        group.viewGroupVerifyDescription(data1.editGroup.desc);
    })

    it("6.Edit Departments Info : Change Description and Save ", () => {
        group.ViewGroupSearchBar(data1.editGroup.name1);
        cy.wait(5000);
        group.actionButtonClick(data1.editGroup.name1);
        group.editGroupInfo();
        group.descrptions(data1.editGroup.desc1);
        group.saveButton();
        cy.wait(1000);
        group.okButtonEditGroupInfosuccessPopup();
        cy.wait(2000);
        group.ViewGroupSearchBar(data1.editGroup.name1);
        group.viewGroupVerifyGroupName(data1.editGroup.name1);
        group.viewGroupVerifyDescription(data1.editGroup.desc1);
    })

    it("7.Edit Departments Info : Change both details and Save", () => {
        group.ViewGroupSearchBar(data1.editGroup.name1);
        cy.wait(5000);
        group.actionButtonClick(data1.editGroup.name1);
        group.editGroupInfo();
        group.groupName(data1.editGroup.name2);
        group.descrptions(data1.editGroup.desc2);
        group.saveButton();
        cy.wait(1000);
        group.okButtonEditGroupInfosuccessPopup();
        cy.wait(2000);
        group.ViewGroupSearchBar(data1.editGroup.name2);
        group.viewGroupVerifyGroupName(data1.editGroup.name2);
        group.viewGroupVerifyDescription(data1.editGroup.desc2);
    })
    // Update Team Members list

    it('8.Create department', () => {
        group.createGroupsTab();
        group.groupName(data1.depart.name);
        group.descrptions(data1.depart.desc);
        group.addButtons();
        cy.wait(2000);
        var namesToSelect = [data1.depart.Member1, data1.depart.Member2, data1.depart.Member3];
        group.selectMultipleMember(namesToSelect);
        group.nextButton();
        group.nextButton();
        group.oneTeamMemberSelect(data1.depart.Member1);
        group.saveButton();
        cy.wait(1000);
        group.alertPopupViewChanges();
    })

    it("9.Update Team Members list : Click on Remove all button and Alertpopup on No and cancel button", () => {
        group.ViewGroupSearchBar(data1.departmentMember.name);
        cy.wait(5000);
        group.actionButtonClick(data1.departmentMember.name);
        group.updateGroupMembersButton();
        group.removeButtonUpdateDepartmentMember();
        group.noAlertPopupRemoveButtonUpdateDepartmentMembers();
        group.cancelButton();
    })

    it("10.Update Team member list : Click on Remove all button and Alertpopup on yes and cancel button", () => {
        group.ViewGroupSearchBar(data1.departmentMember.name);
        cy.wait(5000);
        group.actionButtonClick(data1.departmentMember.name);
        group.updateGroupMembersButton();
        group.removeButtonUpdateDepartmentMember();
        group.yesAlertPopupRemoveButtonUpdateDepartmentMembers();
        group.cancelButton();
    })

    it("11.Update Team Members list : Click on Remove all button and Alertpopup on No and Save button ", () => {
        group.ViewGroupSearchBar(data1.departmentMember.name);
        cy.wait(5000);
        group.actionButtonClick(data1.departmentMember.name);
        group.updateGroupMembersButton();
        group.removeButtonUpdateDepartmentMember();
        group.noAlertPopupRemoveButtonUpdateDepartmentMembers();
        group.saveButton();
        cy.wait(1000);
        group.okSuccessPopupDeparmentMember();
    })

    it("12.Update Team member list : Click on Remove all button and Alertpopup on yes and save button", () => {
        group.ViewGroupSearchBar(data1.departmentMember.name);
        cy.wait(5000);
        group.actionButtonClick(data1.departmentMember.name);
        group.updateGroupMembersButton();
        group.removeButtonUpdateDepartmentMember();
        group.yesAlertPopupRemoveButtonUpdateDepartmentMembers();
        group.saveButton();
        cy.wait(1000);
        group.okSuccessPopupDeparmentMember();
    })

    it("13.Update Team member list : Add and cancel", () => {
        group.ViewGroupSearchBar(data1.departmentMember.name);
        cy.wait(5000);
        group.actionButtonClick(data1.departmentMember.name);
        group.updateGroupMembersButton();
        var namesToRemove = [data1.departmentMember.Member1, data1.departmentMember.Member2];
        cy.wait(1000);
        group.selectOrRemoveMember1(namesToRemove);
        group.cancelButton();
        group.actionButtonClick(data1.departmentMember.name);
        group.updateGroupMembersButton();
        group.unSelectedTeamMemberNameVerify(namesToRemove);
    })

    it("14.Update Team member list : Add and save", () => {
        group.ViewGroupSearchBar(data1.departmentMember.name);
        cy.wait(5000);
        group.actionButtonClick(data1.departmentMember.name);
        group.updateGroupMembersButton();
        var namesToRemove = [data1.departmentMember.Member1, data1.departmentMember.Member2];
        group.selectOrRemoveMember1(namesToRemove);
        group.saveButton();
        group.okSuccessPopupDeparmentMember();
        group.actionButtonClick(data1.departmentMember.name);
        group.updateGroupMembersButton();
        group.selectedTeamMemberNameVerify(namesToRemove);
    })


    it("15.Update Team member list : Remove and cancel", () => {
        group.ViewGroupSearchBar(data1.departmentMember.name);
        cy.wait(5000);
        group.actionButtonClick(data1.departmentMember.name);
        group.updateGroupMembersButton();
        var namesToRemove = [data1.departmentMember.Member1, data1.departmentMember.Member2];
        group.selectOrRemoveMember1(namesToRemove);
        group.cancelButton();
        group.actionButtonClick(data1.departmentMember.name);
        group.updateGroupMembersButton();
        group.selectedTeamMemberNameVerify(namesToRemove);
    })

    it("16.Update Team member list : Remove and save", () => {
        group.ViewGroupSearchBar(data1.departmentMember.name);
        cy.wait(5000);
        group.actionButtonClick(data1.departmentMember.name);
        group.updateGroupMembersButton();
        var namesToRemove = [data1.departmentMember.Member1, data1.departmentMember.Member2];
        group.selectOrRemoveMember1(namesToRemove);
        group.saveButton();
        group.okSuccessPopupDeparmentMember();
        group.actionButtonClick(data1.departmentMember.name);
        group.updateGroupMembersButton();
        group.unSelectedTeamMemberNameVerify(namesToRemove);
    })

    it("17.Update Team member list : Add and save", () => {
        group.ViewGroupSearchBar(data1.departmentMember.name);
        cy.wait(5000);
        group.actionButtonClick(data1.departmentMember.name);
        group.updateGroupMembersButton();
        var namesToRemove = [data1.departmentMember.Member1, data1.departmentMember.Member2];
        group.selectOrRemoveMember1(namesToRemove);
        group.saveButton();
        group.okSuccessPopupDeparmentMember();
        group.actionButtonClick(data1.departmentMember.name);
        group.updateGroupMembersButton();
        group.selectedTeamMemberNameVerify(namesToRemove);
    })


    // Update Department Head

    it("18.Update Department Head : Select Member and cancel and Alert No", () => {
        group.ViewGroupSearchBar(data1.departmentHead.name);
        cy.wait(5000);
        group.actionButtonClick(data1.departmentHead.name);
        group.upadateDepartmentHeadButtonMenu();
        cy.wait(1000);
        group.selectNewDepartmentHead(data1.departmentHead.member1);
        group.cancelButton();
        cy.wait(1000);
        group.cancelNoAlertPopup();
    })


    it("19.Update Department Head : Select Member and cancel and Alert Yes", () => {
        group.ViewGroupSearchBar(data1.departmentHead.name);
        cy.wait(5000);
        group.actionButtonClick(data1.departmentHead.name);
        group.upadateDepartmentHeadButtonMenu();
        cy.wait(1000);
        group.selectNewDepartmentHead(data1.departmentHead.member1);
        group.cancelButton();
        cy.wait(1000);
        group.cancelYesAlertPopup();
        group.viewgroupVerifyGroupHeadName(data1.departmentHead.AddedMember);
    })

    it("20.Update Department Head : Select Member and Save and Alert No", () => {
        group.ViewGroupSearchBar(data1.departmentHead.name);
        cy.wait(5000);
        group.actionButtonClick(data1.departmentHead.name);
        group.upadateDepartmentHeadButtonMenu();
        cy.wait(1000);
        group.selectNewDepartmentHead(data1.departmentHead.member1);
        group.saveButton();
        cy.wait(1000);
        group.saveNoAlertPopup();
    })


    it("21.Update Department Head : Select Member and Save and Alert Yes", () => {
        group.ViewGroupSearchBar(data1.departmentHead.name);
        cy.wait(5000);
        group.actionButtonClick(data1.departmentHead.name);
        group.upadateDepartmentHeadButtonMenu();
        cy.wait(1000);
        group.selectNewDepartmentHead(data1.departmentHead.member1);
        group.saveButton();
        cy.wait(1000);
        group.saveYesAlertPopup();
        cy.wait(1000);
        group.okSuccessPopupDepartmentHead();
        cy.wait(2000);
        group.viewgroupVerifyGroupHeadName(data1.departmentHead.member1);
    })

    // Create Departments for delete departments
    it("22.Create Sample Departments", () => {
        group.createGroupsTab();
        group.groupName(data1.editGroup1.name);
        group.descrptions(data1.editGroup1.desc);
        group.saveButton();
        cy.wait(1000);
        group.alertPopupAddDepartment();
        cy.wait(2000);
        group.groupName(data1.editGroup1.name1);
        group.descrptions(data1.editGroup1.desc1);
        group.saveButton();
        cy.wait(1000);
        group.alertPopupViewChanges();
    })

    it("23.Delete Department : Assign Another Department and Cancel button", () => {
        group.ViewGroupSearchBar(data1.deleteDepartment.name);
        cy.wait(5000);
        group.actionButtonClick(data1.deleteDepartment.name);
        group.actionDeleteButton();
        cy.wait(1000);
        group.assignDeleteDepartments(data1.deleteDepartment.selectDepartment);
        cy.scrollTo('bottom');
        cy.wait(1000);
        group.cancelButton();
    })
    it("24.Delete Department : Assign another Department and Delete and No button", () => {
        group.ViewGroupSearchBar(data1.deleteDepartment.name);
        cy.wait(5000);
        group.actionButtonClick(data1.deleteDepartment.name);
        group.actionDeleteButton();
        cy.wait(1000);
        group.assignDeleteDepartments(data1.deleteDepartment.selectDepartment);
        cy.wait(1000);
        cy.scrollTo('bottom');
        cy.wait(1000);
        group.deleteButton();
        cy.wait(1000);
        group.alertNoButton();
    })

    it("25.Delete Department : Assign another Department and Delete and Yes Button", () => {
        group.ViewGroupSearchBar(data1.deleteDepartment.name);
        cy.wait(5000);
        group.actionButtonClick(data1.deleteDepartment.name);
        group.actionDeleteButton();
        cy.wait(1000);
        group.assignDeleteDepartments(data1.deleteDepartment.selectDepartment);
        cy.scrollTo('bottom');
        cy.wait(1000);
        group.deleteButton();
        cy.wait(1000);
        group.alertYesButton();
        cy.wait(1000);
        group.okDeleteButton();
    })

    it("26.Delete All Departments", () => {

        data1.testData.forEach((Credentials) => {
            group.leftSideGroup();
        group.ViewGroupSearchBar(Credentials.name);
        cy.wait(5000);
        group.actionButtonClick(Credentials.name);
        group.actionDeleteButton();
        cy.wait(1000);
        group.assignDeleteDepartments(Credentials.selectDepartment);
        cy.scrollTo('bottom');
        cy.wait(1000);
        group.deleteButton();
        cy.wait(1000);
        group.alertYesButton();
        cy.wait(1000);
        group.okDeleteButton();
    })
    })
    after(() => {

        cy.window().then(win => {
            win.close();
        });

    })
})