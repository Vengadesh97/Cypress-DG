import loginData from "../../fixtures/login.json"
import loginPage from "../PageObject/loginpagePOM"
import createMeeting from "../PageObject/createMeetingPOM"
import viewMeetings from "../PageObject/viewMeetingPOM"
import meetings from "../../fixtures/createMeetingsData1.json"
import { viewDaySelect } from '../PageObject/testingDate';



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
            createMeeting.selectMatterName(meetings.data1.matterName);
            createMeeting.selectSubjectTask(meetings.data1.selectTask);
            createMeeting.dateClick();
            createMeeting.selectDate(meetings.data1.chooseDate);
            createMeeting.selectStartTime(meetings.data1.startTime);
            createMeeting.selectEndTime(meetings.data1.endTime);
            createMeeting.scrollCenter();
            createMeeting.locationText(meetings.data1.location);
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
            viewMeetings.meetingClick(meetings.data1.checkMeetingName);
            createMeeting.scrollTop();
            viewMeetings.textVerifyMeetingName(meetings.data1.checkMeetingName1);
            // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
            viewMeetings.textverifyNameList(meetings.common.checkNameAddTM);
            // Click on Edit Button Meetings and Verify the text
            viewMeetings.editMeetings();
            cy.wait(1000);
            viewMeetings.verifyMatterNames(meetings.data1.nameMatter);
            viewMeetings.verifyMatterTask(meetings.data1.nameTask);
            viewMeetings.veirfyDate(meetings.common.nameDate);
            viewMeetings.verifyStartTime(meetings.data1.nameStartTime);
            viewMeetings.verifyEndTime(meetings.data1.nameEndTime);
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
            createMeeting.selectMatterName(meetings.data2.matterName);
            createMeeting.selectSubjectTask(meetings.data2.selectTask);
            createMeeting.dateClick();
            createMeeting.selectDate(meetings.data2.chooseDate);
            createMeeting.selectStartTime(meetings.data2.startTime);
            createMeeting.selectEndTime(meetings.data2.endTime);
            createMeeting.scrollCenter();
            createMeeting.locationText(meetings.data2.location);
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
            viewMeetings.meetingClick(meetings.data2.checkMeetingName);
            createMeeting.scrollTop();
            viewMeetings.textVerifyMeetingName(meetings.data2.checkMeetingName1);
            // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
            viewMeetings.textverifyNameList(meetings.common.checkNameClientFirm);
            viewMeetings.textverifyNameList(meetings.common.checkNameClientTM);
            // Click on Edit Button Meetings and Verify the text
            viewMeetings.editMeetings();
            cy.wait(1000);
            viewMeetings.verifyMatterNames(meetings.data2.nameMatter);
            viewMeetings.verifyMatterTask(meetings.data2.nameTask);
            viewMeetings.veirfyDate(meetings.common.nameDate);
            viewMeetings.verifyStartTime(meetings.data2.nameStartTime);
            viewMeetings.verifyEndTime(meetings.data2.nameEndTime);
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
            createMeeting.selectMatterName(meetings.data3.matterName);
            createMeeting.selectSubjectTask(meetings.data3.selectTask);
            createMeeting.dateClick();
            createMeeting.selectDate(meetings.data3.chooseDate);
            createMeeting.selectStartTime(meetings.data3.startTime);
            createMeeting.selectEndTime(meetings.data3.endTime);
            createMeeting.scrollCenter();
            createMeeting.locationText(meetings.data3.location);
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
            viewMeetings.meetingClick(meetings.data3.checkMeetingName);
            createMeeting.scrollTop();
            viewMeetings.textVerifyMeetingName(meetings.data3.checkMeetingName1);
            // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
            viewMeetings.textVerifyDocumentName(meetings.common.checkDocumentName);
            // Click on Edit Button Meetings and Verify the text
            viewMeetings.editMeetings();
            cy.wait(1000);
            viewMeetings.verifyMatterNames(meetings.data3.nameMatter);
            viewMeetings.verifyMatterTask(meetings.data3.nameTask);
            viewMeetings.veirfyDate(meetings.common.nameDate);
            viewMeetings.verifyStartTime(meetings.data3.nameStartTime);
            viewMeetings.verifyEndTime(meetings.data3.nameEndTime);
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
            createMeeting.selectMatterName(meetings.data4.matterName);
            createMeeting.selectSubjectTask(meetings.data4.selectTask);
            createMeeting.dateClick();
            createMeeting.selectDate(meetings.data4.chooseDate);
            createMeeting.selectStartTime(meetings.data4.startTime);
            createMeeting.selectEndTime(meetings.data4.endTime);
            createMeeting.scrollCenter();
            createMeeting.meetingAgendaText(meetings.data4.meetingAgenda);
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
            viewMeetings.meetingClick(meetings.data4.checkMeetingName);
            createMeeting.scrollTop();
            viewMeetings.textVerifyMeetingName(meetings.data4.checkMeetingName1);
            // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
            viewMeetings.textVerifyMeetingAgenda(meetings.data4.checkMeetingAgenda);
            viewMeetings.textverifyNameList(meetings.common.checkNameAddTM);
            // Click on Edit Button Meetings and Verify the text
            viewMeetings.editMeetings();
            cy.wait(1000);
            viewMeetings.verifyMatterNames(meetings.data4.nameMatter);
            viewMeetings.verifyMatterTask(meetings.data4.nameTask);
            viewMeetings.veirfyDate(meetings.common.nameDate);
            viewMeetings.verifyStartTime(meetings.data4.nameStartTime);
            viewMeetings.verifyEndTime(meetings.data4.nameEndTime);
            viewMeetings.verifyTimeZone(meetings.common.nameTimezone);
            viewMeetings.verifyMeetingAgenda(meetings.data4.meetingAgenda);
            createMeeting.scrollDown();
            viewMeetings.verifyTeamMember(meetings.common.addTM);
            createMeeting.cancelButton();
      })

      it("6.Mandatory with Meeting agenda and Clients", () => {
            //Create Meeting on Legal
            createMeeting.leftsideMeetingMenu();
            createMeeting.createTab();
            createMeeting.legalEventTypeSelect();
            createMeeting.selectMatterName(meetings.data5.matterName);
            createMeeting.selectSubjectTask(meetings.data5.selectTask);
            createMeeting.dateClick();
            createMeeting.selectDate(meetings.data5.chooseDate);
            createMeeting.selectStartTime(meetings.data5.startTime);
            createMeeting.selectEndTime(meetings.data5.endTime);
            createMeeting.scrollCenter();
            createMeeting.meetingAgendaText(meetings.data5.meetingAgenda);
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
            viewMeetings.meetingClick(meetings.data5.checkMeetingName);
            createMeeting.scrollTop();
            viewMeetings.textVerifyMeetingName(meetings.data5.checkMeetingName1);
            // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
            viewMeetings.textVerifyMeetingAgenda(meetings.data5.checkMeetingAgenda);
            viewMeetings.textverifyNameList(meetings.common.checkNameClientFirm);
            viewMeetings.textverifyNameList(meetings.common.checkNameClientTM);
            // Click on Edit Button Meetings and Verify the text
            viewMeetings.editMeetings();
            cy.wait(1000);
            viewMeetings.verifyMatterNames(meetings.data5.nameMatter);
            viewMeetings.verifyMatterTask(meetings.data5.nameTask);
            viewMeetings.veirfyDate(meetings.common.nameDate);
            viewMeetings.verifyStartTime(meetings.data5.nameStartTime);
            viewMeetings.verifyEndTime(meetings.data5.nameEndTime);
            viewMeetings.verifyTimeZone(meetings.common.nameTimezone);
            viewMeetings.verifyMeetingAgenda(meetings.data5.meetingAgenda);
            createMeeting.scrollDown();
            viewMeetings.verifyTeamMember(meetings.common.addClientTM);
            createMeeting.cancelButton();

      })

      it("7.Mandatory with Meeting agenda and Documents", () => {
            //Create Meeting on Legal
            createMeeting.leftsideMeetingMenu();
            createMeeting.createTab();
            createMeeting.legalEventTypeSelect();
            createMeeting.selectMatterName(meetings.data6.matterName);
            createMeeting.selectSubjectTask(meetings.data6.selectTask);
            createMeeting.dateClick();
            createMeeting.selectDate(meetings.data6.chooseDate);
            createMeeting.selectStartTime(meetings.data6.startTime);
            createMeeting.selectEndTime(meetings.data6.endTime);
            createMeeting.scrollCenter();
            createMeeting.meetingAgendaText(meetings.data6.meetingAgenda);
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
            viewMeetings.meetingClick(meetings.data6.checkMeetingName);
            createMeeting.scrollTop();
            viewMeetings.textVerifyMeetingName(meetings.data6.checkMeetingName1);
            // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
            viewMeetings.textVerifyMeetingAgenda(meetings.data6.checkMeetingAgenda);
            viewMeetings.textVerifyDocumentName(meetings.common.checkDocumentName);
            // Click on Edit Button Meetings and Verify the text
            viewMeetings.editMeetings();
            cy.wait(1000);
            viewMeetings.verifyMatterNames(meetings.data6.nameMatter);
            viewMeetings.verifyMatterTask(meetings.data6.nameTask);
            viewMeetings.veirfyDate(meetings.common.nameDate);
            viewMeetings.verifyStartTime(meetings.data6.nameStartTime);
            viewMeetings.verifyEndTime(meetings.data6.nameEndTime);
            viewMeetings.verifyTimeZone(meetings.common.nameTimezone);
            viewMeetings.verifyMeetingAgenda(meetings.data6.meetingAgenda);
            createMeeting.scrollDown();
            viewMeetings.verifyDocumentName(meetings.common.addDocum);
            createMeeting.cancelButton();

      })

      it("8.Mandatory with TM and Clients", () => {
            //Create Meeting on Legal
            createMeeting.leftsideMeetingMenu();
            createMeeting.createTab();
            createMeeting.legalEventTypeSelect();
            createMeeting.selectMatterName(meetings.data7.matterName);
            createMeeting.selectSubjectTask(meetings.data7.selectTask);
            createMeeting.dateClick();
            createMeeting.selectDate(meetings.data7.chooseDate);
            createMeeting.selectStartTime(meetings.data7.startTime);
            createMeeting.selectEndTime(meetings.data7.endTime);
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
            viewMeetings.meetingClick(meetings.data7.checkMeetingName);
            createMeeting.scrollTop();
            viewMeetings.textVerifyMeetingName(meetings.data7.checkMeetingName1);
            // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
            viewMeetings.textverifyNameList(meetings.common.checkNameAddTM);
            viewMeetings.textverifyNameList(meetings.common.checkNameClientFirm);
            viewMeetings.textverifyNameList(meetings.common.checkNameClientTM);
            // Click on Edit Button Meetings and Verify the text
            viewMeetings.editMeetings();
            cy.wait(1000);
            viewMeetings.verifyMatterNames(meetings.data7.nameMatter);
            viewMeetings.verifyMatterTask(meetings.data7.nameTask);
            viewMeetings.veirfyDate(meetings.common.nameDate);
            viewMeetings.verifyStartTime(meetings.data7.nameStartTime);
            viewMeetings.verifyEndTime(meetings.data7.nameEndTime);
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
            createMeeting.selectMatterName(meetings.data8.matterName);
            createMeeting.selectSubjectTask(meetings.data8.selectTask);
            createMeeting.dateClick();
            createMeeting.selectDate(meetings.data8.chooseDate);
            createMeeting.selectStartTime(meetings.data8.startTime);
            createMeeting.selectEndTime(meetings.data8.endTime);
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
            viewMeetings.meetingClick(meetings.data8.checkMeetingName);
            createMeeting.scrollTop();
            viewMeetings.textVerifyMeetingName(meetings.data8.checkMeetingName1);
            // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
            viewMeetings.textverifyNameList(meetings.common.checkNameAddTM);
            viewMeetings.textVerifyDocumentName(meetings.common.checkDocumentName);
            // Click on Edit Button Meetings and Verify the text
            viewMeetings.editMeetings();
            cy.wait(1000);
            viewMeetings.verifyMatterNames(meetings.data8.nameMatter);
            viewMeetings.verifyMatterTask(meetings.data8.nameTask);
            viewMeetings.veirfyDate(meetings.common.nameDate);
            viewMeetings.verifyStartTime(meetings.data8.nameStartTime);
            viewMeetings.verifyEndTime(meetings.data8.nameEndTime);
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
            createMeeting.selectMatterName(meetings.data9.matterName);
            createMeeting.selectSubjectTask(meetings.data9.selectTask);
            createMeeting.dateClick();
            createMeeting.selectDate(meetings.data9.chooseDate);
            createMeeting.selectStartTime(meetings.data9.startTime);
            createMeeting.selectEndTime(meetings.data9.endTime);
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
            viewMeetings.meetingClick(meetings.data9.checkMeetingName);
            createMeeting.scrollTop();
            viewMeetings.textVerifyMeetingName(meetings.data9.checkMeetingName1);
            // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
            viewMeetings.textverifyNameList(meetings.common.checkNameClientFirm);
            viewMeetings.textverifyNameList(meetings.common.checkNameClientTM);
            viewMeetings.textVerifyDocumentName(meetings.common.checkDocumentName);
            // Click on Edit Button Meetings and Verify the text
            viewMeetings.editMeetings();
            cy.wait(1000);
            viewMeetings.verifyMatterNames(meetings.data9.nameMatter);
            viewMeetings.verifyMatterTask(meetings.data9.nameTask);
            viewMeetings.veirfyDate(meetings.common.nameDate);
            viewMeetings.verifyStartTime(meetings.data9.nameStartTime);
            viewMeetings.verifyEndTime(meetings.data9.nameEndTime);
            viewMeetings.verifyTimeZone(meetings.common.nameTimezone);
            createMeeting.scrollDown();
            viewMeetings.verifyTeamMember(meetings.common.addClientTM);
            viewMeetings.verifyDocumentName(meetings.common.addDocum);
            createMeeting.cancelButton();

      })

      ///  TC No : 38 Mandatory with Meeting , Dial and Loc


      it("38.Mandatory with Meeting , Dial and Loc", () => {
            createMeeting.leftsideMeetingMenu();
            createMeeting.createTab();
            createMeeting.legalEventTypeSelect();
            createMeeting.selectMatterName(meetings.data10.matterName);
            createMeeting.selectSubjectTask(meetings.data10.selectTask);
            createMeeting.dateClick();
            createMeeting.selectDate(meetings.data10.chooseDate);
            createMeeting.selectStartTime(meetings.data10.startTime);
            createMeeting.selectEndTime(meetings.data10.endTime);
            createMeeting.scrollCenter();
            createMeeting.meetingLinkText(meetings.data10.meetingLink);
            createMeeting.dialinNumText(meetings.data10.dial);
            createMeeting.locationText(meetings.data10.location);
            createMeeting.scrollDown();
            createMeeting.saveButton();
            createMeeting.successPopupViewChanges();
            //View Tab
            createMeeting.viewDayTab();
            cy.wait(1000);
            //Select Date
            viewDaySelect(meetings.common.viewDate);
            // After Clicking on the Meeting to verify the text
            viewMeetings.meetingClick(meetings.data10.checkMeetingName);
            createMeeting.scrollTop();
            viewMeetings.textVerifyMeetingName(meetings.data10.checkMeetingName1);
            // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
            viewMeetings.textVerifyMeetingLink(meetings.data10.checkMeetingLink);
            viewMeetings.textVerifyPhoneNumber(meetings.data10.checkPhoneNumber);
            // Click on Edit Button Meetings and Verify the text
            viewMeetings.editMeetings();
            cy.wait(1000);
            viewMeetings.verifyMatterNames(meetings.data10.nameMatter);
            viewMeetings.verifyMatterTask(meetings.data10.nameTask);
            viewMeetings.veirfyDate(meetings.common.nameDate);
            viewMeetings.verifyStartTime(meetings.data10.nameStartTime);
            viewMeetings.verifyEndTime(meetings.data10.nameEndTime);
            viewMeetings.verifyTimeZone(meetings.common.nameTimezone);
            viewMeetings.verifyMeetingLink(meetings.data10.meetingLink);
            viewMeetings.verifyDialNumber(meetings.data10.dial);
            createMeeting.scrollDown();
            createMeeting.cancelButton();
  
      })


      it("39.Mandatory with Meeting , Dial and Meeting agenda", () => {
            //Create Meeting on Legal
            createMeeting.leftsideMeetingMenu();
            createMeeting.createTab();
            createMeeting.legalEventTypeSelect();
            createMeeting.selectMatterName(meetings.data11.matterName);
            createMeeting.selectSubjectTask(meetings.data11.selectTask);
            createMeeting.dateClick();
            createMeeting.selectDate(meetings.data11.chooseDate);
            createMeeting.selectStartTime(meetings.data11.startTime);
            createMeeting.selectEndTime(meetings.data11.endTime);
            createMeeting.scrollCenter();
            createMeeting.meetingAgendaText(meetings.data11.meetingAgenda);
            createMeeting.meetingLinkText(meetings.data11.meetingLink);
            createMeeting.dialinNumText(meetings.data11.dial);
            createMeeting.scrollDown();
            createMeeting.saveButton();
            createMeeting.successPopupViewChanges();
            //View Tab
            createMeeting.viewDayTab();
            cy.wait(1000);
            //Select Date
            viewDaySelect(meetings.common.viewDate);
            // After Clicking on the Meeting to verify the text
            viewMeetings.meetingClick(meetings.data11.checkMeetingName);
            createMeeting.scrollTop();
            viewMeetings.textVerifyMeetingName(meetings.data11.checkMeetingName1);
            // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
            viewMeetings.textVerifyMeetingLink(meetings.data11.checkMeetingLink);
            viewMeetings.textVerifyPhoneNumber(meetings.data11.checkPhoneNumber);
            viewMeetings.textVerifyMeetingAgenda(meetings.data11.checkMeetingAgenda);
            // Click on Edit Button Meetings and Verify the text
            viewMeetings.editMeetings();
            cy.wait(1000);
            viewMeetings.verifyMatterNames(meetings.data11.nameMatter);
            viewMeetings.verifyMatterTask(meetings.data11.nameTask);
            viewMeetings.veirfyDate(meetings.common.nameDate);
            viewMeetings.verifyStartTime(meetings.data11.nameStartTime);
            viewMeetings.verifyEndTime(meetings.data11.nameEndTime);
            viewMeetings.verifyTimeZone(meetings.common.nameTimezone);
            viewMeetings.verifyMeetingAgenda(meetings.data11.meetingAgenda);
            viewMeetings.verifyMeetingLink(meetings.data11.meetingLink);
            viewMeetings.verifyDialNumber(meetings.data11.dial);
            createMeeting.scrollDown();
            createMeeting.cancelButton();
  
      })
  
      it("40.Mandatory with Meeting , Dial and TM", () => {
            //Create Meeting on Legal
            createMeeting.leftsideMeetingMenu();
            createMeeting.createTab();
            createMeeting.legalEventTypeSelect();
            createMeeting.selectMatterName(meetings.data12.matterName);
            createMeeting.selectSubjectTask(meetings.data12.selectTask);
            createMeeting.dateClick();
            createMeeting.selectDate(meetings.data12.chooseDate);
            createMeeting.selectStartTime(meetings.data12.startTime);
            createMeeting.selectEndTime(meetings.data12.endTime);
            createMeeting.scrollCenter();
            createMeeting.meetingLinkText(meetings.data12.meetingLink);
            createMeeting.dialinNumText(meetings.data12.dial);
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
            viewMeetings.meetingClick(meetings.data12.checkMeetingName);
            createMeeting.scrollTop();
            viewMeetings.textVerifyMeetingName(meetings.data12.checkMeetingName1);
            // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
            viewMeetings.textVerifyMeetingLink(meetings.data12.checkMeetingLink);
            viewMeetings.textVerifyPhoneNumber(meetings.data12.checkPhoneNumber);
            viewMeetings.textverifyNameList(meetings.common.checkNameAddTM);
            // Click on Edit Button Meetings and Verify the text
            viewMeetings.editMeetings();
            cy.wait(1000);
            viewMeetings.verifyMatterNames(meetings.data12.nameMatter);
            viewMeetings.verifyMatterTask(meetings.data12.nameTask);
            viewMeetings.veirfyDate(meetings.common.nameDate);
            viewMeetings.verifyStartTime(meetings.data12.nameStartTime);
            viewMeetings.verifyEndTime(meetings.data12.nameEndTime);
            viewMeetings.verifyTimeZone(meetings.common.nameTimezone);
            viewMeetings.verifyMeetingLink(meetings.data12.meetingLink);
            viewMeetings.verifyDialNumber(meetings.data12.dial);
            createMeeting.scrollDown();
            viewMeetings.verifyTeamMember(meetings.common.addTM);
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