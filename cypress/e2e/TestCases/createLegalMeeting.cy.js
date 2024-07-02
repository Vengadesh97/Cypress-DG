import createMeeting from "../PageObject/createMeetingPOM";
import loginpage from "../PageObject/loginpagePOM";
import loginData from "../../fixtures/login.json";
import data from "../../fixtures/createMeetingsData.json"
import { viewDaySelect } from '../PageObject/testingDate';
import  viewMeetings from '../PageObject/viewMeetingPOM';


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
     //   createMeeting.legalEventTypeSelect();
    });

    // afterEach(() => {
    //     loginpage.loadIssues();
    //     loginpage.homeButton();
    // });    

    it("test",()=>{
      
       createMeeting.scrollTop();
       createMeeting.viewDayTab(); 
       viewDaySelect("8/22/2024");
        
    })


    it.only("1.Mandatory Fields only", () => {
   /*     createMeeting.selectMatterName(data.text1.matterName);
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
       */ 
        createMeeting.viewDayTab(); 
        cy.wait(1000);
        viewDaySelect("7/1/2024");
        cy.wait(3000);
        viewMeetings.createdMeetingSelect("12:00 AM Car Insurance Claim - Creating legal briefs");
       // createMeeting.viewDay("June 1, 2024");

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
    })

});