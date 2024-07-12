import loginData from "../../fixtures/login.json"
import loginPage from "../PageObject/loginpagePOM"
import createMeeting from "../PageObject/createMeetingPOM"
import viewMeetings from "../PageObject/viewMeetingPOM"
import meetings from "../../fixtures/createMeetingsData1.json"



describe("Create Meeting for Legal", () => {

      before("One time Login", () => {
            loginPage.visit();
            loginPage.userName(loginData.codeword.email);
            loginPage.passWord(loginData.codeword.password);
            loginPage.loginButton();
      })

      beforeEach("Before Each Test cases It block will run", () => {
            cy.wait(1000);
            createMeeting.leftsideMeetingMenu();
            createMeeting.createTab();
            createMeeting.legalEventTypeSelect();
      })

      it("1.Mandatory with Loc and Meeting agenda (28)", () => {
            //Create Meeting on Legal
            createMeeting.leftsideMeetingMenu();
            createMeeting.createTab();
            createMeeting.legalEventTypeSelect();
            createMeeting.selectMatterName(meetings.data.matterName);
            createMeeting.selectSubjectTask(meetings.data.selectTask);
            createMeeting.dateClick();
            createMeeting.selectDate(meetings.data.chooseDate);
            createMeeting.selectStartTime(meetings.data.startTime);
            createMeeting.selectEndTime(meetings.data.endTime);
            createMeeting.scrollCenter();
            createMeeting.meetingAgendaText(meetings.data.meetingAgenda);
            createMeeting.locationText(meetings.data.location);
            createMeeting.scrollDown();
            createMeeting.saveButton();
            createMeeting.successPopupViewChanges();
            //View Tab
            createMeeting.viewDayTab();
            cy.wait(1000);
            //Select Date
            viewDaySelect(meetings.common.viewDate);
            // After Clicking on the Meeting to verify the text
            viewMeetings.meetingClick(meetings.data.checkMeetingName);
            createMeeting.scrollTop();
            viewMeetings.textVerifyMeetingName(meetings.data.checkMeetingName1);
            // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
            viewMeetings.textVerifyMeetingAgenda(meetings.data.checkMeetingAgenda);
            // Click on Edit Button Meetings and Verify the text
            viewMeetings.editMeetings();
            cy.wait(1000);
            viewMeetings.verifyMatterNames(meetings.data.nameMatter);
            viewMeetings.verifyMatterTask(meetings.data.nameTask);
            viewMeetings.veirfyDate(meetings.common.nameDate);
            viewMeetings.verifyStartTime(meetings.data.nameStartTime);
            viewMeetings.verifyEndTime(meetings.data.nameEndTime);
            viewMeetings.verifyTimeZone(meetings.common.nameTimezone);
            viewMeetings.verifyMeetingAgenda(meetings.data.meetingAgenda);
            createMeeting.scrollDown();
            createMeeting.cancelButton();
      })


      it("2.Mandatory with Loc and TM", () => {
            //Create Meeting on Legal
            createMeeting.leftsideMeetingMenu();
            createMeeting.createTab();
            createMeeting.legalEventTypeSelect();
            createMeeting.selectMatterName(meetings.data.matterName);
            createMeeting.selectSubjectTask(meetings.data.selectTask);
            createMeeting.dateClick();
            createMeeting.selectDate(meetings.data.chooseDate);
            createMeeting.selectStartTime(meetings.data.startTime);
            createMeeting.selectEndTime(meetings.data.endTime);
            createMeeting.scrollCenter();
            createMeeting.locationText(meetings.data.location);
            createMeeting.scrollDown();
            createMeeting.addTeamMember(meetings.common.addTM);
            createMeeting.saveButton();
            createMeeting.successPopupViewChanges();
            //View Tab
            createMeeting.viewDayTab();
            cy.wait(1000);
            //Select Date
            viewDaySelect(meetings.common.viewDate);
            // After Clicking on the Meeting to verify the text
            viewMeetings.meetingClick(meetings.data.checkMeetingName);
            createMeeting.scrollTop();
            viewMeetings.textVerifyMeetingName(meetings.data.checkMeetingName1);
            // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
            viewMeetings.textverifyNameList(meetings.common.checkNameAddTM);
            // Click on Edit Button Meetings and Verify the text
            viewMeetings.editMeetings();
            cy.wait(1000);
            viewMeetings.verifyMatterNames(meetings.data.nameMatter);
            viewMeetings.verifyMatterTask(meetings.data.nameTask);
            viewMeetings.veirfyDate(meetings.common.nameDate);
            viewMeetings.verifyStartTime(meetings.data.nameStartTime);
            viewMeetings.verifyEndTime(meetings.data.nameEndTime);
            viewMeetings.verifyTimeZone(meetings.common.nameTimezone);
            createMeeting.scrollDown();
            viewMeetings.verifyTeamMember(meetings.common.addTM);
            createMeeting.cancelButton();

      })

      it("3.Mandatory with Loc and Clients", () => {
            //Create Meeting on Legal
            createMeeting.leftsideMeetingMenu();
            createMeeting.createTab();
            createMeeting.legalEventTypeSelect();
            createMeeting.selectMatterName(meetings.data.matterName);
            createMeeting.selectSubjectTask(meetings.data.selectTask);
            createMeeting.dateClick();
            createMeeting.selectDate(meetings.data.chooseDate);
            createMeeting.selectStartTime(meetings.data.startTime);
            createMeeting.selectEndTime(meetings.data.endTime);
            createMeeting.scrollCenter();
            createMeeting.locationText(meetings.data.location);
            createMeeting.scrollDown();
            createMeeting.addExternalCounselSelect(meetings.common.selectClient);
            createMeeting.addExternalTeamMember(meetings.common.addClientTM);
            createMeeting.saveButton();
            createMeeting.successPopupViewChanges();
            //View Tab
            createMeeting.viewDayTab();
            cy.wait(1000);
            //Select Date
            viewDaySelect(meetings.common.viewDate);
            // After Clicking on the Meeting to verify the text
            viewMeetings.meetingClick(meetings.data.checkMeetingName);
            createMeeting.scrollTop();
            viewMeetings.textVerifyMeetingName(meetings.data.checkMeetingName1);
            // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
            viewMeetings.textverifyNameList(meetings.common.checkNameClientFirm);
            viewMeetings.textverifyNameList(meetings.common.checkNameClientTM);
            // Click on Edit Button Meetings and Verify the text
            viewMeetings.editMeetings();
            cy.wait(1000);
            viewMeetings.verifyMatterNames(meetings.data.nameMatter);
            viewMeetings.verifyMatterTask(meetings.data.nameTask);
            viewMeetings.veirfyDate(meetings.common.nameDate);
            viewMeetings.verifyStartTime(meetings.data.nameStartTime);
            viewMeetings.verifyEndTime(meetings.data.nameEndTime);
            viewMeetings.verifyTimeZone(meetings.common.nameTimezone);
            createMeeting.scrollDown();
            viewMeetings.verifyTeamMember(meetings.common.addClientTM);
            createMeeting.cancelButton();

      })

      it("4.Mandatory with Loc and Documents", () => {
            //Create Meeting on Legal
            createMeeting.leftsideMeetingMenu();
            createMeeting.createTab();
            createMeeting.legalEventTypeSelect();
            createMeeting.selectMatterName(meetings.data.matterName);
            createMeeting.selectSubjectTask(meetings.data.selectTask);
            createMeeting.dateClick();
            createMeeting.selectDate(meetings.data.chooseDate);
            createMeeting.selectStartTime(meetings.data.startTime);
            createMeeting.selectEndTime(meetings.data.endTime);
            createMeeting.scrollCenter();
            createMeeting.locationText(meetings.data.location);
            createMeeting.scrollDown();
            createMeeting.addDocument(meetings.common.addDocum);
            createMeeting.saveButton();
            createMeeting.successPopupViewChanges();
            //View Tab
            createMeeting.viewDayTab();
            cy.wait(1000);
            //Select Date
            viewDaySelect(meetings.common.viewDate);
            // After Clicking on the Meeting to verify the text
            viewMeetings.meetingClick(meetings.data.checkMeetingName);
            createMeeting.scrollTop();
            viewMeetings.textVerifyMeetingName(meetings.data.checkMeetingName1);
            // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
            viewMeetings.textVerifyDocumentName(meetings.common.checkDocumentName);
            // Click on Edit Button Meetings and Verify the text
            viewMeetings.editMeetings();
            cy.wait(1000);
            viewMeetings.verifyMatterNames(meetings.data.nameMatter);
            viewMeetings.verifyMatterTask(meetings.data.nameTask);
            viewMeetings.veirfyDate(meetings.common.nameDate);
            viewMeetings.verifyStartTime(meetings.data.nameStartTime);
            viewMeetings.verifyEndTime(meetings.data.nameEndTime);
            viewMeetings.verifyTimeZone(meetings.common.nameTimezone);
            createMeeting.scrollDown();
            viewMeetings.verifyDocumentName(meetings.common.addDocum);
            createMeeting.cancelButton();

      })

      it("5.Mandatory with Meeting agenda and TM", () => {
            //Create Meeting on Legal
            createMeeting.leftsideMeetingMenu();
            createMeeting.createTab();
            createMeeting.legalEventTypeSelect();
            createMeeting.selectMatterName(meetings.data.matterName);
            createMeeting.selectSubjectTask(meetings.data.selectTask);
            createMeeting.dateClick();
            createMeeting.selectDate(meetings.data.chooseDate);
            createMeeting.selectStartTime(meetings.data.startTime);
            createMeeting.selectEndTime(meetings.data.endTime);
            createMeeting.scrollCenter();
            createMeeting.meetingAgendaText(meetings.data.meetingAgenda);
            createMeeting.scrollDown();
            createMeeting.addTeamMember(meetings.common.addTM);
            createMeeting.saveButton();
            createMeeting.successPopupViewChanges();
            //View Tab
            createMeeting.viewDayTab();
            cy.wait(1000);
            //Select Date
            viewDaySelect(meetings.common.viewDate);
            // After Clicking on the Meeting to verify the text
            viewMeetings.meetingClick(meetings.data.checkMeetingName);
            createMeeting.scrollTop();
            viewMeetings.textVerifyMeetingName(meetings.data.checkMeetingName1);
            // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
            viewMeetings.textVerifyMeetingAgenda(meetings.data.checkMeetingAgenda);
            viewMeetings.textverifyNameList(meetings.common.checkNameAddTM);
            // Click on Edit Button Meetings and Verify the text
            viewMeetings.editMeetings();
            cy.wait(1000);
            viewMeetings.verifyMatterNames(meetings.data.nameMatter);
            viewMeetings.verifyMatterTask(meetings.data.nameTask);
            viewMeetings.veirfyDate(meetings.common.nameDate);
            viewMeetings.verifyStartTime(meetings.data.nameStartTime);
            viewMeetings.verifyEndTime(meetings.data.nameEndTime);
            viewMeetings.verifyTimeZone(meetings.common.nameTimezone);
            viewMeetings.verifyMeetingAgenda(meetings.data.meetingAgenda);
            createMeeting.scrollDown();
            viewMeetings.verifyTeamMember(meetings.common.addTM);
            createMeeting.cancelButton();
      })

      it("6.Mandatory with Meeting agenda and Clients", () => {
            //Create Meeting on Legal
            createMeeting.leftsideMeetingMenu();
            createMeeting.createTab();
            createMeeting.legalEventTypeSelect();
            createMeeting.selectMatterName(meetings.data.matterName);
            createMeeting.selectSubjectTask(meetings.data.selectTask);
            createMeeting.dateClick();
            createMeeting.selectDate(meetings.data.chooseDate);
            createMeeting.selectStartTime(meetings.data.startTime);
            createMeeting.selectEndTime(meetings.data.endTime);
            createMeeting.scrollCenter();
            createMeeting.meetingAgendaText(meetings.data.meetingAgenda);
            createMeeting.scrollDown();
            createMeeting.addExternalCounselSelect(meetings.common.selectClient);
            createMeeting.addExternalTeamMember(meetings.common.addClientTM);
            createMeeting.saveButton();
            createMeeting.successPopupViewChanges();
            //View Tab
            createMeeting.viewDayTab();
            cy.wait(1000);
            //Select Date
            viewDaySelect(meetings.common.viewDate);
            // After Clicking on the Meeting to verify the text
            viewMeetings.meetingClick(meetings.data.checkMeetingName);
            createMeeting.scrollTop();
            viewMeetings.textVerifyMeetingName(meetings.data.checkMeetingName1);
            // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
            viewMeetings.textVerifyMeetingAgenda(meetings.data.checkMeetingAgenda);
            viewMeetings.textverifyNameList(meetings.common.checkNameClientFirm);
            viewMeetings.textverifyNameList(meetings.common.checkNameClientTM);
            // Click on Edit Button Meetings and Verify the text
            viewMeetings.editMeetings();
            cy.wait(1000);
            viewMeetings.verifyMatterNames(meetings.data.nameMatter);
            viewMeetings.verifyMatterTask(meetings.data.nameTask);
            viewMeetings.veirfyDate(meetings.common.nameDate);
            viewMeetings.verifyStartTime(meetings.data.nameStartTime);
            viewMeetings.verifyEndTime(meetings.data.nameEndTime);
            viewMeetings.verifyTimeZone(meetings.common.nameTimezone);
            viewMeetings.verifyMeetingAgenda(meetings.data.meetingAgenda);
            createMeeting.scrollDown();
            viewMeetings.verifyTeamMember(meetings.common.addClientTM);
            createMeeting.cancelButton();

      })

      it("7.Mandatory with Meeting agenda and Documents", () => {
            //Create Meeting on Legal
            createMeeting.leftsideMeetingMenu();
            createMeeting.createTab();
            createMeeting.legalEventTypeSelect();
            createMeeting.selectMatterName(meetings.data.matterName);
            createMeeting.selectSubjectTask(meetings.data.selectTask);
            createMeeting.dateClick();
            createMeeting.selectDate(meetings.data.chooseDate);
            createMeeting.selectStartTime(meetings.data.startTime);
            createMeeting.selectEndTime(meetings.data.endTime);
            createMeeting.scrollCenter();
            createMeeting.meetingAgendaText(meetings.data.meetingAgenda);
            createMeeting.scrollDown();
            createMeeting.addDocument(meetings.common.addDocum);
            createMeeting.saveButton();
            createMeeting.successPopupViewChanges();
            //View Tab
            createMeeting.viewDayTab();
            cy.wait(1000);
            //Select Date
            viewDaySelect(meetings.common.viewDate);
            // After Clicking on the Meeting to verify the text
            viewMeetings.meetingClick(meetings.data.checkMeetingName);
            createMeeting.scrollTop();
            viewMeetings.textVerifyMeetingName(meetings.data.checkMeetingName1);
            // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
            viewMeetings.textVerifyMeetingAgenda(meetings.data.checkMeetingAgenda);
            viewMeetings.textVerifyDocumentName(meetings.common.checkDocumentName);
            // Click on Edit Button Meetings and Verify the text
            viewMeetings.editMeetings();
            cy.wait(1000);
            viewMeetings.verifyMatterNames(meetings.data.nameMatter);
            viewMeetings.verifyMatterTask(meetings.data.nameTask);
            viewMeetings.veirfyDate(meetings.common.nameDate);
            viewMeetings.verifyStartTime(meetings.data.nameStartTime);
            viewMeetings.verifyEndTime(meetings.data.nameEndTime);
            viewMeetings.verifyTimeZone(meetings.common.nameTimezone);
            viewMeetings.verifyMeetingAgenda(meetings.data.meetingAgenda);
            createMeeting.scrollDown();
            viewMeetings.verifyDocumentName(meetings.common.addDocum);
            createMeeting.cancelButton();

      })

      it("8.Mandatory with TM and Clients", () => {
            //Create Meeting on Legal
            createMeeting.leftsideMeetingMenu();
            createMeeting.createTab();
            createMeeting.legalEventTypeSelect();
            createMeeting.selectMatterName(meetings.data.matterName);
            createMeeting.selectSubjectTask(meetings.data.selectTask);
            createMeeting.dateClick();
            createMeeting.selectDate(meetings.data.chooseDate);
            createMeeting.selectStartTime(meetings.data.startTime);
            createMeeting.selectEndTime(meetings.data.endTime);
            createMeeting.scrollDown();
            createMeeting.addTeamMember(meetings.common.addTM);
            createMeeting.addExternalCounselSelect(meetings.common.selectClient);
            createMeeting.addExternalTeamMember(meetings.common.addClientTM);
            createMeeting.saveButton();
            createMeeting.successPopupViewChanges();
            //View Tab
            createMeeting.viewDayTab();
            cy.wait(1000);
            //Select Date
            viewDaySelect(meetings.common.viewDate);
            // After Clicking on the Meeting to verify the text
            viewMeetings.meetingClick(meetings.data.checkMeetingName);
            createMeeting.scrollTop();
            viewMeetings.textVerifyMeetingName(meetings.data.checkMeetingName1);
            // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
            viewMeetings.textverifyNameList(meetings.common.checkNameAddTM);
            viewMeetings.textverifyNameList(meetings.common.checkNameClientFirm);
            viewMeetings.textverifyNameList(meetings.common.checkNameClientTM);
            // Click on Edit Button Meetings and Verify the text
            viewMeetings.editMeetings();
            cy.wait(1000);
            viewMeetings.verifyMatterNames(meetings.data.nameMatter);
            viewMeetings.verifyMatterTask(meetings.data.nameTask);
            viewMeetings.veirfyDate(meetings.common.nameDate);
            viewMeetings.verifyStartTime(meetings.data.nameStartTime);
            viewMeetings.verifyEndTime(meetings.data.nameEndTime);
            viewMeetings.verifyTimeZone(meetings.common.nameTimezone);
            createMeeting.scrollDown();
            viewMeetings.verifyTeamMember(meetings.common.addTM);
            viewMeetings.verifyTeamMember(meetings.common.addClientTM);
            createMeeting.cancelButton();

      })

      it("9.Mandatory with TM and Documents", () => {
            //Create Meeting on Legal
            createMeeting.leftsideMeetingMenu();
            createMeeting.createTab();
            createMeeting.legalEventTypeSelect();
            createMeeting.selectMatterName(meetings.data.matterName);
            createMeeting.selectSubjectTask(meetings.data.selectTask);
            createMeeting.dateClick();
            createMeeting.selectDate(meetings.data.chooseDate);
            createMeeting.selectStartTime(meetings.data.startTime);
            createMeeting.selectEndTime(meetings.data.endTime);
            createMeeting.scrollDown();
            createMeeting.addTeamMember(meetings.common.addTM);
            createMeeting.addDocument(meetings.common.addDocum);
            createMeeting.saveButton();
            createMeeting.successPopupViewChanges();
            //View Tab
            createMeeting.viewDayTab();
            cy.wait(1000);
            //Select Date
            viewDaySelect(meetings.common.viewDate);
            // After Clicking on the Meeting to verify the text
            viewMeetings.meetingClick(meetings.data.checkMeetingName);
            createMeeting.scrollTop();
            viewMeetings.textVerifyMeetingName(meetings.data.checkMeetingName1);
            // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
            viewMeetings.textverifyNameList(meetings.common.checkNameAddTM);
            viewMeetings.textVerifyDocumentName(meetings.common.checkDocumentName);
            // Click on Edit Button Meetings and Verify the text
            viewMeetings.editMeetings();
            cy.wait(1000);
            viewMeetings.verifyMatterNames(meetings.data.nameMatter);
            viewMeetings.verifyMatterTask(meetings.data.nameTask);
            viewMeetings.veirfyDate(meetings.common.nameDate);
            viewMeetings.verifyStartTime(meetings.data.nameStartTime);
            viewMeetings.verifyEndTime(meetings.data.nameEndTime);
            viewMeetings.verifyTimeZone(meetings.common.nameTimezone);
            createMeeting.scrollDown();
            viewMeetings.verifyTeamMember(meetings.common.addTM);
            viewMeetings.verifyDocumentName(meetings.common.addDocum);
            createMeeting.cancelButton();

      })

      it("10.Mandatory with Clients and Documents", () => {
            //Create Meeting on Legal
            createMeeting.leftsideMeetingMenu();
            createMeeting.createTab();
            createMeeting.legalEventTypeSelect();
            createMeeting.selectMatterName(meetings.data.matterName);
            createMeeting.selectSubjectTask(meetings.data.selectTask);
            createMeeting.dateClick();
            createMeeting.selectDate(meetings.data.chooseDate);
            createMeeting.selectStartTime(meetings.data.startTime);
            createMeeting.selectEndTime(meetings.data.endTime);
            createMeeting.scrollDown();
            createMeeting.addExternalCounselSelect(meetings.common.selectClient);
            createMeeting.addExternalTeamMember(meetings.common.addClientTM);
            createMeeting.addDocument(meetings.common.addDocum);
            createMeeting.saveButton();
            createMeeting.successPopupViewChanges();
            //View Tab
            createMeeting.viewDayTab();
            cy.wait(1000);
            //Select Date
            viewDaySelect(meetings.common.viewDate);
            // After Clicking on the Meeting to verify the text
            viewMeetings.meetingClick(meetings.data.checkMeetingName);
            createMeeting.scrollTop();
            viewMeetings.textVerifyMeetingName(meetings.data.checkMeetingName1);
            // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
            viewMeetings.textverifyNameList(meetings.common.checkNameClientFirm);
            viewMeetings.textverifyNameList(meetings.common.checkNameClientTM);
            viewMeetings.textVerifyDocumentName(meetings.common.checkDocumentName);
            // Click on Edit Button Meetings and Verify the text
            viewMeetings.editMeetings();
            cy.wait(1000);
            viewMeetings.verifyMatterNames(meetings.data.nameMatter);
            viewMeetings.verifyMatterTask(meetings.data.nameTask);
            viewMeetings.veirfyDate(meetings.common.nameDate);
            viewMeetings.verifyStartTime(meetings.data.nameStartTime);
            viewMeetings.verifyEndTime(meetings.data.nameEndTime);
            viewMeetings.verifyTimeZone(meetings.common.nameTimezone);
            createMeeting.scrollDown();
            viewMeetings.verifyTeamMember(meetings.common.addClientTM);
            viewMeetings.verifyDocumentName(meetings.common.addDocum);
            createMeeting.cancelButton();

      })
})


/*
 it("8.", () => {
          //Create Meeting on Legal
          createMeeting.leftsideMeetingMenu();
          createMeeting.createTab();
          createMeeting.legalEventTypeSelect();
          createMeeting.selectMatterName(meetings.data.matterName);
          createMeeting.selectSubjectTask(meetings.data.selectTask);
          createMeeting.dateClick();
          createMeeting.selectDate(meetings.data.chooseDate);
          createMeeting.selectStartTime(meetings.data.startTime);
          createMeeting.selectEndTime(meetings.data.endTime);
          createMeeting.scrollCenter();
          createMeeting.meetingAgendaText(meetings.data.meetingAgenda);
          createMeeting.meetingLinkText(meetings.data.meetingLink);
          createMeeting.dialinNumText(meetings.data.dial);
          createMeeting.locationText(meetings.data.location);
          createMeeting.scrollDown();
          createMeeting.addTeamMember(meetings.common.addTM);
          createMeeting.addExternalCounselSelect(meetings.common.selectClient);
          createMeeting.addExternalTeamMember(meetings.common.addClientTM);
          createMeeting.addDocument(meetings.common.addDocum);
          createMeeting.saveButton();
          createMeeting.successPopupViewChanges();
          //View Tab
          createMeeting.viewDayTab();
          cy.wait(1000);
          //Select Date
          viewDaySelect(meetings.common.viewDate);
          // After Clicking on the Meeting to verify the text
          viewMeetings.meetingClick(meetings.data.checkMeetingName);
          createMeeting.scrollTop();
          viewMeetings.textVerifyMeetingName(meetings.data.checkMeetingName1);
          // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
          viewMeetings.textVerifyMeetingLink(meetings.data.checkMeetingLink);
          viewMeetings.textVerifyPhoneNumber(meetings.data.checkPhoneNumber);
          viewMeetings.textVerifyMeetingAgenda(meetings.data.checkMeetingAgenda);
          viewMeetings.textverifyNameList(meetings.common.checkNameAddTM);
          viewMeetings.textverifyNameList(meetings.common.checkNameClientFirm);
          viewMeetings.textverifyNameList(meetings.common.checkNameClientTM);
          viewMeetings.textVerifyDocumentName(meetings.common.checkDocumentName);
          // Click on Edit Button Meetings and Verify the text
          viewMeetings.editMeetings();
          cy.wait(1000);
          viewMeetings.verifyMatterNames(meetings.data.nameMatter);
          viewMeetings.verifyMatterTask(meetings.data.nameTask);
          viewMeetings.veirfyDate(meetings.common.nameDate);
          viewMeetings.verifyStartTime(meetings.data.nameStartTime);
          viewMeetings.verifyEndTime(meetings.data.nameEndTime);
          viewMeetings.verifyTimeZone(meetings.common.nameTimezone);
          viewMeetings.verifyMeetingAgenda(meetings.data.meetingAgenda);
          viewMeetings.verifyMeetingLink(meetings.data.meetingLink);
          viewMeetings.verifyDialNumber(meetings.data.dial);
          createMeeting.scrollDown();
          viewMeetings.verifyTeamMember(meetings.common.addTM);
          viewMeetings.verifyTeamMember(meetings.common.addClientTM);
          viewMeetings.verifyDocumentName(meetings.common.addDocum);
          createMeeting.cancelButton();

    })







*/