import createMeeting from "../PageObject/createMeetingPOM";
import loginpage from "../PageObject/loginpagePOM";
import loginData from "../../fixtures/login.json";



describe("Create Legal Matter Scenario", () => {

    before(() => {
        loginpage.visit();
        loginpage.userName(loginData.codeword.email);
        loginpage.passWord(loginData.codeword.password);
        loginpage.loginButton();
    });

    // afterEach(() => {
    //     loginpage.loadIssues();
    //     loginpage.homeButton();
    // });

    
    it("1.Mandatory Fields with Cancel", () => {
      createMeeting.leftsideMeetingMenu();
      createMeeting.createTab();
      createMeeting.legalEventTypeSelect();
     createMeeting.selectMatterName("Car Insurance Claim");
     createMeeting.selectSubjectTask("Consultation");
     createMeeting.selectStartTime("03:00");
     createMeeting.selectEndTime("");
     createMeeting.selectTimeZone("");
     createMeeting.selectReptition("Bi-Weekly");
    createMeeting.scrollCenter();
     createMeeting.meetingLinkText("Hello");
     createMeeting.locationText("Welocme");
     createMeeting.dialinNumText("2838384");
     createMeeting.meetingAgendaText("check the stories");
     createMeeting.scrollDown();
     createMeeting.addTeamMember("Anderson");
     createMeeting.addExternalCounselSelect("Test 1");
     createMeeting.addExternalTeamMember("Vengadesh");
     createMeeting.addDocument("Files DG2");


    })

});