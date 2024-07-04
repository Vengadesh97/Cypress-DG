import createMeeting from "../PageObject/createMeetingPOM";
import loginpage from "../PageObject/loginpagePOM";
import loginData from "../../fixtures/login.json";
import data from "../../fixtures/createMeetingsData.json"
import { viewDaySelect } from '../PageObject/testingDate';
import viewMeetings from '../PageObject/viewMeetingPOM';


describe("Create Legal Matter Scenario", () => {

    before(() => {
        loginpage.visit();
        loginpage.userName(loginData.codeword.email);
        loginpage.passWord(loginData.codeword.password);
        loginpage.loginButton();
    });

    beforeEach(() => {
        cy.wait(1000);
        createMeeting.leftsideMeetingMenu();
   //     createMeeting.createTab();
    //    createMeeting.legalEventTypeSelect();
    });

    // afterEach(() => {
    //     loginpage.loadIssues();
    //     loginpage.homeButton();
    // });    

    it("test", () => {

        createMeeting.scrollTop();
        createMeeting.viewDayTab();
        viewDaySelect("8/22/2024");

    })


    it.only("1.Mandatory Fields only", () => {
    /*    createMeeting.selectMatterName(data.text1.matterName);
        createMeeting.selectSubjectTask(data.text1.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text1.chooseDate);
        createMeeting.selectStartTime(data.text1.StartTime);
        createMeeting.selectEndTime(data.text1.EndTime);
        createMeeting.removeNotifications();
        createMeeting.scrollDown();
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.scrollTop();
       */ createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick("12:00 AM Car Insurance Claim - Case filling");
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName("Car Insurance Claim - Case filling");
        viewMeetings.textVerifyDateandTime("Jul 01 2024 : 12:00 AM - 12:15 AM");
        viewMeetings.textVerifyMeetingAgenda(data.text1.checkMeetingAgenda);
        viewMeetings.textVerifyMeetingLink(data.text1.checkMeetingLink);
        viewMeetings.textVerifyPhoneNumber(data.text1.checkPhoneNumber);
        viewMeetings.textVerifyDocumentName(data.common.checkDocumentName);
        viewMeetings.textverifyNameList(data.common.checkNameAddTM);
        viewMeetings.textverifyNameList(data.common.checkNameAddTM1);
        viewMeetings.textverifyNameList(data.common.checkNameClientFirm);
        viewMeetings.textverifyNameList(data.common.checkNameClientTM);
        viewMeetings.textverifyNameList(data.common.checkNameClientTM1);
    })

    it("2.Mandatory Fields with meeting link", () => {
        createMeeting.selectMatterName(data.text2.matterName);
        createMeeting.selectSubjectTask(data.text2.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text2.chooseDate);
        createMeeting.selectStartTime(data.text2.StartTime);
        createMeeting.selectEndTime(data.text2.EndTime);
        createMeeting.removeNotifications();
        createMeeting.scrollCenter();
        createMeeting.meetingLinkText(data.text2.meetingLink);
        createMeeting.scrollDown();
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text2.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text2.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text2.checkDateAndTime);
        viewMeetings.textVerifyMeetingLink(data.text2.checkMeetingLink);



    })

    it("3.Mandatory Fields with Dial Num", () => {
        createMeeting.selectMatterName(data.text3.matterName);
        createMeeting.selectSubjectTask(data.text3.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text3.chooseDate);
        createMeeting.selectStartTime(data.text3.StartTime);
        createMeeting.selectEndTime(data.text3.EndTime);
        createMeeting.removeNotifications();
        createMeeting.scrollCenter();
        createMeeting.dialinNumText(data.text3.dial);
        createMeeting.scrollDown();
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text3.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text3.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text3.checkDateAndTime);
        viewMeetings.textVerifyPhoneNumber(data.text3.checkPhoneNumber);
    })

    it("4.Mandatory Fields with location", () => {
        createMeeting.selectMatterName(data.text4.matterName);
        createMeeting.selectSubjectTask(data.text4.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text4.chooseDate);
        createMeeting.selectStartTime(data.text4.StartTime);
        createMeeting.selectEndTime(data.text4.EndTime);
        createMeeting.removeNotifications();
        createMeeting.scrollCenter();
        createMeeting.locationText(data.text4.location);
        createMeeting.scrollDown();
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text4.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text4.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text4.checkDateAndTime);
    })

    it("5.Mandatory Fields with meeting agenda", () => {
        createMeeting.selectMatterName(data.text5.matterName);
        createMeeting.selectSubjectTask(data.text5.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text5.chooseDate);
        createMeeting.selectStartTime(data.text5.StartTime);
        createMeeting.selectEndTime(data.text5.EndTime);
        createMeeting.removeNotifications();
        createMeeting.scrollCenter();
        createMeeting.meetingAgendaText(data.text5.meetingAgenda);
        createMeeting.scrollDown();
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text5.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text5.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text5.checkDateAndTime);
        viewMeetings.textVerifyMeetingAgenda(data.text5.checkMeetingAgenda);
    })

    it("6.Mandatory Fields with TM", () => {
        createMeeting.selectMatterName(data.text6.matterName);
        createMeeting.selectSubjectTask(data.text6.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text6.chooseDate);
        createMeeting.selectStartTime(data.text6.StartTime);
        createMeeting.selectEndTime(data.text6.EndTime);
        createMeeting.removeNotifications();
        createMeeting.scrollDown();
        createMeeting.addTeamMember(data.common.addTM);
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text6.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text6.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text6.checkDateAndTime);
        viewMeetings.textverifyNameList(data.common.checkNameAddTM);
    })

    it("7.Mandatory Fields with Clients", () => {
        createMeeting.selectMatterName(data.text7.matterName);
        createMeeting.selectSubjectTask(data.text7.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text7.chooseDate);
        createMeeting.selectStartTime(data.text7.StartTime);
        createMeeting.selectEndTime(data.text7.EndTime);
        createMeeting.removeNotifications();
        createMeeting.scrollDown();
        createMeeting.addExternalCounselSelect(data.common.selectClient);
        createMeeting.addExternalTeamMember(data.common.addClientTM);
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text7.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text7.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text7.checkDateAndTime);
        viewMeetings.textverifyNameList(data.common.checkNameClientFirm);
        viewMeetings.textverifyNameList(data.common.checkNameClientTM);
    })

    it("8.Mandatory Fields with Documents", () => {
        createMeeting.selectMatterName(data.text8.matterName);
        createMeeting.selectSubjectTask(data.text8.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text8.chooseDate);
        createMeeting.selectStartTime(data.text8.StartTime);
        createMeeting.selectEndTime(data.text8.EndTime);
        createMeeting.removeNotifications();
        createMeeting.scrollDown();
        createMeeting.addDocument(data.common.addDocum);
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text8.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text8.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text8.checkDateAndTime);
        viewMeetings.textVerifyDocumentName(data.common.checkDocumentName);
    })

    it("9.Mandatory with Notifications", () => {
        createMeeting.selectMatterName(data.text9.matterName);
        createMeeting.selectSubjectTask(data.text9.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text9.chooseDate);
        createMeeting.selectStartTime(data.text9.StartTime);
        createMeeting.selectEndTime(data.text9.EndTime);
        createMeeting.scrollDown();
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text9.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text9.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text9.checkDateAndTime);
    })

    it("10.Mandatory with Notifications and Meeting Link", () => {
        createMeeting.selectMatterName(data.text10.matterName);
        createMeeting.selectSubjectTask(data.text10.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text10.chooseDate);
        createMeeting.selectStartTime(data.text10.StartTime);
        createMeeting.selectEndTime(data.text10.EndTime);
        createMeeting.scrollCenter();
        createMeeting.meetingLinkText(data.text10.meetingLink);
        createMeeting.scrollDown();
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text10.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text10.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text10.checkDateAndTime);
        viewMeetings.textVerifyMeetingLink(data.text10.checkMeetingLink);
    })

    it("11.Mandatory with Notifications and Dial Num", () => {
        createMeeting.selectMatterName(data.text11.matterName);
        createMeeting.selectSubjectTask(data.text11.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text11.chooseDate);
        createMeeting.selectStartTime(data.text11.StartTime);
        createMeeting.selectEndTime(data.text11.EndTime);
        createMeeting.scrollCenter();
        createMeeting.dialinNumText(data.text11.dial);
        createMeeting.scrollDown();
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text11.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text11.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text11.checkDateAndTime);
        viewMeetings.textVerifyPhoneNumber(data.text11.checkPhoneNumber);
    })

    it("12.Mandatory with Notifications and Loc", () => {
        createMeeting.selectMatterName(data.text12.matterName);
        createMeeting.selectSubjectTask(data.text12.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text12.chooseDate);
        createMeeting.selectStartTime(data.text12.StartTime);
        createMeeting.selectEndTime(data.text12.EndTime);
        createMeeting.scrollCenter();
        createMeeting.locationText(data.text12.location);
        createMeeting.scrollDown();
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text12.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text12.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text12.checkDateAndTime);
    })

    it("13.Mandatory with Notifications and Meeting Agenda", () => {
        createMeeting.selectMatterName(data.text13.matterName);
        createMeeting.selectSubjectTask(data.text13.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text13.chooseDate);
        createMeeting.selectStartTime(data.text13.StartTime);
        createMeeting.selectEndTime(data.text13.EndTime);
        createMeeting.scrollCenter();
        createMeeting.meetingAgendaText(data.text13.meetingAgenda);
        createMeeting.scrollDown();
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text13.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text13.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text13.checkDateAndTime);
        viewMeetings.textVerifyMeetingAgenda(data.text13.checkMeetingAgenda);
    })

    it("14.Mandatory with Notifications and TM", () => {
        createMeeting.selectMatterName(data.text14.matterName);
        createMeeting.selectSubjectTask(data.text14.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text14.chooseDate);
        createMeeting.selectStartTime(data.text14.StartTime);
        createMeeting.selectEndTime(data.text14.EndTime);
        createMeeting.scrollDown();
        createMeeting.addTeamMember(data.common.addTM);
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text14.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text14.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text14.checkDateAndTime);
        viewMeetings.textverifyNameList(data.common.checkNameAddTM);
    })

    it("15.Mandatory with Notifications and Clients", () => {
        createMeeting.selectMatterName(data.text15.matterName);
        createMeeting.selectSubjectTask(data.text15.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text15.chooseDate);
        createMeeting.selectStartTime(data.text15.StartTime);
        createMeeting.selectEndTime(data.text15.EndTime);
        createMeeting.scrollDown();
        createMeeting.addExternalCounselSelect(data.common.selectClient);
        createMeeting.addExternalTeamMember(data.common.addClientTM);
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text15.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text15.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text15.checkDateAndTime);
        viewMeetings.textverifyNameList(data.common.checkNameClientFirm);
        viewMeetings.textverifyNameList(data.common.checkNameClientTM);
    })

    it("16.Mandatory with Notifications and Docum", () => {
        createMeeting.selectMatterName(data.text16.matterName);
        createMeeting.selectSubjectTask(data.text16.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text16.chooseDate);
        createMeeting.selectStartTime(data.text16.StartTime);
        createMeeting.selectEndTime(data.text16.EndTime);
        createMeeting.scrollDown();
        createMeeting.addDocument(data.common.addDocum);
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text16.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text16.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text16.checkDateAndTime);
        viewMeetings.textVerifyDocumentName(data.common.checkDocumentName);
    })

    it("17.Mandatory with Meeting and Dial Num", () => {
        createMeeting.selectMatterName(data.text17.matterName);
        createMeeting.selectSubjectTask(data.text17.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text17.chooseDate);
        createMeeting.selectStartTime(data.text17.StartTime);
        createMeeting.selectEndTime(data.text17.EndTime);
        createMeeting.scrollCenter();
        createMeeting.meetingLinkText(data.text17.meetingLink);
        createMeeting.dialinNumText(data.text17.dial);
        createMeeting.scrollDown();
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text17.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text17.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text17.checkDateAndTime);
        viewMeetings.textVerifyMeetingLink(data.text17.checkMeetingLink);
        viewMeetings.textVerifyPhoneNumber(data.text17.checkPhoneNumber);
    })

    it("18.Mandatory with Meeting and Loc", () => {
        createMeeting.selectMatterName(data.text18.matterName);
        createMeeting.selectSubjectTask(data.text18.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text18.chooseDate);
        createMeeting.selectStartTime(data.text18.StartTime);
        createMeeting.selectEndTime(data.text18.EndTime);
        createMeeting.scrollCenter();
        createMeeting.meetingLinkText(data.text18.meetingLink);
        createMeeting.locationText(data.text18.location);
        createMeeting.scrollDown();
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text18.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text18.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text18.checkDateAndTime);
        viewMeetings.textVerifyMeetingLink(data.text18.checkMeetingLink);
    })

    it("19.Mandatory with Meeting and Meeting agenda", () => {
        createMeeting.selectMatterName(data.text19.matterName);
        createMeeting.selectSubjectTask(data.text19.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text19.chooseDate);
        createMeeting.selectStartTime(data.text19.StartTime);
        createMeeting.selectEndTime(data.text19.EndTime);
        createMeeting.scrollCenter();
        createMeeting.meetingLinkText(data.text19.meetingLink);
        createMeeting.meetingAgendaText(data.text19.meetingAgenda);
        createMeeting.scrollDown();
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text19.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text19.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text19.checkDateAndTime);
        viewMeetings.textVerifyMeetingLink(data.text19.checkMeetingLink);
        viewMeetings.textVerifyMeetingAgenda(data.text19.checkMeetingAgenda);
    })

    it("20.Mandatory with Meeting and TM", () => {
        createMeeting.selectMatterName(data.text20.matterName);
        createMeeting.selectSubjectTask(data.text20.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text20.chooseDate);
        createMeeting.selectStartTime(data.text20.StartTime);
        createMeeting.selectEndTime(data.text20.EndTime);
        createMeeting.scrollCenter();
        createMeeting.meetingLinkText(data.text20.meetingLink);
        createMeeting.scrollDown();
        createMeeting.addTeamMember(data.common.addTM);
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text20.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text20.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text20.checkDateAndTime);
        viewMeetings.textVerifyMeetingLink(data.text20.checkMeetingLink);
        viewMeetings.textverifyNameList(data.common.checkNameAddTM);
    })

    it("21.Mandatory with Meeting and Clients", () => {
        createMeeting.selectMatterName(data.text21.matterName);
        createMeeting.selectSubjectTask(data.text21.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text21.chooseDate);
        createMeeting.selectStartTime(data.text21.StartTime);
        createMeeting.selectEndTime(data.text21.EndTime);
        createMeeting.scrollCenter();
        createMeeting.meetingLinkText(data.text21.meetingLink);
        createMeeting.scrollDown();
        createMeeting.addExternalCounselSelect(data.common.selectClient);
        createMeeting.addExternalTeamMember(data.common.addClientTM);
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text21.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text21.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text21.checkDateAndTime);
        viewMeetings.textVerifyMeetingLink(data.text21.checkMeetingLink);
        viewMeetings.textverifyNameList(data.common.checkNameClientFirm);
        viewMeetings.textverifyNameList(data.common.checkNameClientTM);
    })

    it("22.Mandatory with Meeting and Documents", () => {
        createMeeting.selectMatterName(data.text22.matterName);
        createMeeting.selectSubjectTask(data.text22.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text22.chooseDate);
        createMeeting.selectStartTime(data.text22.StartTime);
        createMeeting.selectEndTime(data.text22.EndTime);
        createMeeting.scrollCenter();
        createMeeting.meetingLinkText(data.text22.meetingLink);
        createMeeting.scrollDown();
        createMeeting.addDocument(data.common.addDocum);
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text22.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text22.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text22.checkDateAndTime);
        viewMeetings.textVerifyMeetingLink(data.text22.checkMeetingLink);
        viewMeetings.textVerifyDocumentName(data.common.checkDocumentName);
    })

    it("23.Mandatory with Dial Num and Loc", () => {
        createMeeting.selectMatterName(data.text23.matterName);
        createMeeting.selectSubjectTask(data.text23.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text23.chooseDate);
        createMeeting.selectStartTime(data.text23.StartTime);
        createMeeting.selectEndTime(data.text23.EndTime);
        createMeeting.scrollCenter();
        createMeeting.dialinNumText(data.text23.dial);
        createMeeting.locationText(data.text23.location);
        createMeeting.scrollDown();
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text23.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text23.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text23.checkDateAndTime);
        viewMeetings.textVerifyPhoneNumber(data.text23.checkPhoneNumber);
    })

    it("24.Mandatory with Dial Num and Meeting agenda", () => {
        createMeeting.selectMatterName(data.text24.matterName);
        createMeeting.selectSubjectTask(data.text24.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text24.chooseDate);
        createMeeting.selectStartTime(data.text24.StartTime);
        createMeeting.selectEndTime(data.text24.EndTime);
        createMeeting.scrollCenter();
        createMeeting.dialinNumText(data.text24.dial);
        createMeeting.meetingAgendaText(data.text24.meetingAgenda);
        createMeeting.scrollDown();
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text24.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text24.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text24.checkDateAndTime);
        viewMeetings.textVerifyMeetingAgenda(data.text24.checkMeetingAgenda);
        viewMeetings.textVerifyPhoneNumber(data.text24.checkPhoneNumber);
    })

    it("25.Mandatory with Dial Num and TM", () => {
        createMeeting.selectMatterName(data.text25.matterName);
        createMeeting.selectSubjectTask(data.text25.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text25.chooseDate);
        createMeeting.selectStartTime(data.text25.StartTime);
        createMeeting.selectEndTime(data.text25.EndTime);
        createMeeting.scrollCenter();
        createMeeting.dialinNumText(data.text25.dial);
        createMeeting.scrollDown();
        createMeeting.addTeamMember(data.common.addTM);
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text25.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text25.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text25.checkDateAndTime);
        viewMeetings.textVerifyPhoneNumber(data.text25.checkPhoneNumber);
        viewMeetings.textverifyNameList(data.common.checkNameAddTM);
    })

    it("26.Mandatory with Dial Num  and Clients", () => {
        createMeeting.selectMatterName(data.text26.matterName);
        createMeeting.selectSubjectTask(data.text26.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text26.chooseDate);
        createMeeting.selectStartTime(data.text26.StartTime);
        createMeeting.selectEndTime(data.text26.EndTime);
        createMeeting.scrollCenter();
        createMeeting.dialinNumText(data.text26.dial);
        createMeeting.scrollDown();
        createMeeting.addExternalCounselSelect(data.common.selectClient);
        createMeeting.addExternalTeamMember(data.common.addClientTM);
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text26.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text26.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text26.checkDateAndTime);
        viewMeetings.textVerifyPhoneNumber(data.text26.checkPhoneNumber);
        viewMeetings.textverifyNameList(data.common.checkNameClientFirm);
        viewMeetings.textverifyNameList(data.common.checkNameClientTM);
    })

    it("27.Mandatory with Dial Num and Documents", () => {
        createMeeting.selectMatterName(data.text27.matterName);
        createMeeting.selectSubjectTask(data.text27.selectTask);
        createMeeting.dateClick();
        createMeeting.selectDate(data.text27.chooseDate);
        createMeeting.selectStartTime(data.text27.StartTime);
        createMeeting.selectEndTime(data.text27.EndTime);
        createMeeting.scrollCenter();
        createMeeting.dialinNumText(data.text27.dial);
        createMeeting.scrollDown();
        createMeeting.addDocument(data.common.addDocum);
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
        createMeeting.viewDayTab();
        cy.wait(1000);
        viewDaySelect(data.common.date);
        viewMeetings.meetingClick(data.text27.checkMeetingName);
        createMeeting.scrollTop();
        viewMeetings.textVerifyMeetingName(data.text27.checkMeetingName1);
        viewMeetings.textVerifyDateandTime(data.text27.checkDateAndTime);
        viewMeetings.textVerifyPhoneNumber(data.text27.checkPhoneNumber);
        viewMeetings.textVerifyDocumentName(data.common.checkDocumentName);
    })

});