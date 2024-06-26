import createMeeting from "../PageObject/createMeetingPOM";
import loginpage from "../PageObject/loginpagePOM";
import loginData from "../../fixtures/login.json";
import data from "../../fixtures/createMeetingsData.json"



describe("Create Legal Matter Scenario", () => {

    before(() => {
        loginpage.visit();
        loginpage.userName(loginData.codeword.email);
        loginpage.passWord(loginData.codeword.password);
        loginpage.loginButton();
    });

    beforeEach(() => {
        createMeeting.leftsideMeetingMenu();
        createMeeting.createTab();
        createMeeting.legalEventTypeSelect();
    });

    // afterEach(() => {
    //     loginpage.loadIssues();
    //     loginpage.homeButton();
    // });


    it("1.Mandatory Fields only", () => {
        createMeeting.selectMatterName(data.text1.matterName);
        createMeeting.selectSubjectTask(data.text1.selectTask);
        //   createMeeting.dateClick();
        //   createMeeting.selectDate(data.text1.chooseDate);
        createMeeting.selectStartTime(data.text1.StartTime);
        createMeeting.selectEndTime(data.text1.EndTime);
        createMeeting.removeNotifications();
        createMeeting.scrollDown();
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();

    })

    it("2.Mandatory Fields with meeting link", () => {
        createMeeting.selectMatterName(data.text2.matterName);
        createMeeting.selectSubjectTask(data.text2.selectTask);
        //  createMeeting.dateClick();
        //  createMeeting.selectDate(data.text2.chooseDate);
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
        //  createMeeting.dateClick();
        //  createMeeting.selectDate(data.text3.chooseDate);
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
        //   createMeeting.dateClick();
        //  createMeeting.selectDate(data.text4.chooseDate);
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
        //   createMeeting.dateClick();
        //  createMeeting.selectDate(data.text5.chooseDate);
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
        //   createMeeting.dateClick();
        //  createMeeting.selectDate(data.text6.chooseDate);
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
        //  createMeeting.dateClick();
        // createMeeting.selectDate(data.text7.chooseDate);
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
        //   createMeeting.dateClick();
        //  createMeeting.selectDate(data.text8.chooseDate);
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
        //   createMeeting.dateClick();
        //   createMeeting.selectDate(data.text9.chooseDate);
        createMeeting.selectStartTime(data.text9.StartTime);
        createMeeting.selectEndTime(data.text9.EndTime);
        createMeeting.scrollDown();
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
    })

    it("10.Mandatory with Notifications and Meeting Link", () => {
        createMeeting.selectMatterName(data.text10.matterName);
        createMeeting.selectSubjectTask(data.text10.selectTask);
        //   createMeeting.dateClick();
        //  createMeeting.selectDate(data.text10.chooseDate);
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
        //   createMeeting.dateClick();
        //  createMeeting.selectDate(data.text11.chooseDate);
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
        //    createMeeting.dateClick();
        //   createMeeting.selectDate(data.text12.chooseDate);
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
        //    createMeeting.dateClick();
        //   createMeeting.selectDate(data.text13.chooseDate);
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
        //    createMeeting.dateClick();
        //   createMeeting.selectDate(data.text14.chooseDate);
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
        //   createMeeting.dateClick();
        //  createMeeting.selectDate(data.text15.chooseDate);
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
        //   createMeeting.dateClick();
        // createMeeting.selectDate(data.text16.chooseDate);
        createMeeting.selectStartTime(data.text16.StartTime);
        createMeeting.selectEndTime(data.text16.EndTime);
        createMeeting.scrollDown();
        createMeeting.addDocument(data.common.addDocum);
        createMeeting.saveButton();
        createMeeting.successPopupViewChanges();
    })


});