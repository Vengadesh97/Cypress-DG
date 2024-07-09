import logInPage from "../PageObject/loginpagePOM";
import logInData from "../../fixtures/login.json";
import createMeeting from "../PageObject/createMeetingPOM";
import viewMeetings from "../PageObject/viewMeetingPOM";
import { viewDaySelect } from '../PageObject/testingDate';



describe("Create with Meeting on Test Case 2", () => {

    before("Login Page", () => {
        logInPage.visit();
        logInPage.userName(logInData.codeword.email);
        logInPage.passWord(logInData.codeword.password);
        logInPage.loginButton();
    })

    beforeEach("Each Test case this block will run", () => {

        //  cy.wait(1000);
        // createMeeting.leftsideMeetingMenu();
        //  createMeeting.createTab();
        //  createMeeting.legalEventTypeSelect();

    })

    it("Normal checking", () => {
        cy.fixture("createMeetingsData1").then((inputs) => {
            inputs.forEach((input) => {
                createMeeting.leftsideMeetingMenu();
                createMeeting.createTab();
                createMeeting.legalEventTypeSelect();
                createMeeting.selectMatterName(input.matterName);
                createMeeting.selectSubjectTask(input.selectTask);
                createMeeting.dateClick();
                createMeeting.selectDate(input.chooseDate);
                createMeeting.selectStartTime(input.startTime);
                createMeeting.selectEndTime(input.endTime);
                createMeeting.scrollCenter();
                createMeeting.meetingAgendaText(input.meetingAgenda);
                createMeeting.meetingLinkText(input.meetingLink);
                createMeeting.dialinNumText(input.dial);
                createMeeting.locationText(input.location);
                createMeeting.scrollDown();
                createMeeting.addTeamMember(input.addTM);
                createMeeting.addExternalCounselSelect(input.selectClient);
                createMeeting.addExternalTeamMember(input.addClientTM);
                createMeeting.addDocument(input.addDocum);
                createMeeting.saveButton();
                createMeeting.successPopupViewChanges();
                createMeeting.viewDayTab();
                cy.wait(1000);
                viewDaySelect(input.viewDate);
                viewMeetings.meetingClick(input.checkMeetingName);
                createMeeting.scrollTop();
                viewMeetings.textVerifyMeetingName(input.checkMeetingName1);
                // viewMeetings.textVerifyDateandTime(input.checkDateAndTime);
                viewMeetings.textVerifyMeetingLink(input.checkMeetingLink);
                viewMeetings.textVerifyPhoneNumber(input.checkPhoneNumber);
                viewMeetings.textVerifyMeetingAgenda(input.checkMeetingAgenda);
                viewMeetings.textverifyNameList(input.checkNameAddTM);
                viewMeetings.textverifyNameList(input.checkNameClientFirm);
                viewMeetings.textverifyNameList(input.checkNameClientTM);
                viewMeetings.textVerifyDocumentName(input.checkDocumentName);
                viewMeetings.editMeetings();
                cy.wait(1000);
                viewMeetings.verifyMatterNames(input.nameMatter);
                viewMeetings.verifyMatterTask(input.nameTask);
                viewMeetings.veirfyDate(input.nameDate);
                viewMeetings.verifyStartTime(input.nameStartTime);
                viewMeetings.verifyEndTime(input.nameEndTime);
                viewMeetings.verifyTimeZone(input.nameTimezone);
                viewMeetings.verifyMeetingAgenda(input.nameMeetingAgenda);
                viewMeetings.verifyMeetingLink(input.nameMeetingLink);
                viewMeetings.verifyDialNumber(input.nameDialNum);
                createMeeting.scrollDown();
                viewMeetings.verifyTeamMember(input.nameTM);
                viewMeetings.verifyTeamMember(input.nameClientTM);
                viewMeetings.verifyDocumentName(input.nameDoc);
                createMeeting.cancelButton();

            })

        })

    })
})
