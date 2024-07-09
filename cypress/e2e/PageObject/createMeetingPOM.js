const { expect } = require("chai");

class createMeetingPOM {

   // Web Element declartaions 
   elements = {

      locLeftSideMeetingMenu: () => cy.xpath("//span[text()='Meetings']",{ timeout: 10000 }).should('be.visible'),

      locCreateTab: () => cy.xpath("//a[text()='Create']",{ timeout: 10000 }).should('be.visible'),

      locLegalEventRadiobutton: () => cy.xpath("//input[@id='legalMatter']",{ timeout: 10000 }).should('be.visible'),

      locDateOfFilling: () => cy.get("input#drp",{ timeout: 10000 }).should('be.visible'),

      locAllDaysCheckbox: () => Cy.xpath("//input[@type='checkbox']",{ timeout: 10000 }).should('be.visible'),

      locNotifications: () => cy.xpath("//ul //li //div //a [@aria-label='Close']",{ timeout: 10000 }).should('be.visible'),

      locMeetingLink: () => cy.xpath("//input[@id='meeting-link']",{ timeout: 10000 }).should('be.visible'),

      locDialinNumber: () => cy.xpath("//input[@id='number']",{ timeout: 10000 }).should('be.visible'),

      locLocation: () => cy.xpath("//input[@id='location']",{ timeout: 10000 }).should('be.visible'),

      locMeetingAgenda: () => cy.xpath("//textarea[@name='meeting-agenda']",{ timeout: 10000 }).should('be.visible'),

      locAddTeamMember: () => cy.xpath("//input[@list='browsers']",{ timeout: 10000 }).should('be.visible'),

      locButtonAddTM: () => cy.xpath("(//input[@value='ADD'])[1]",{ timeout: 10000 }).should('be.visible'),

      locExternalTeamMember: () => cy.xpath("//input[@placeholder='Search External Counsel']",{ timeout: 10000 }).should('be.visible'),

      locButtonAddExternalTM: () => cy.xpath("(//input[@value='ADD'])[2]",{ timeout: 10000 }).should('be.visible'),

      locdocument: () => cy.xpath("//input[@placeholder='Search Document']",{ timeout: 10000 }).should('be.visible'),

      locButtonAddDoc: () => cy.xpath("//input[@value='Attach']",{ timeout: 10000 }).should('be.visible'),

      locButtonSave: () => cy.xpath("//div //button[text()='Save']",{ timeout: 10000 }).should('be.visible'),

      locButtonCancel: () => cy.xpath("//div //button[text()='Cancel']",{ timeout: 10000 }).should('be.visible'),

      locAlertPopupViewChanges: () => cy.xpath("//div //button[text()='View Changes']",{ timeout: 10000 }).should('be.visible'),

      // View Day 

      locViewDay : () => cy.xpath("//div //a[text()='Day']",{ timeout: 10000 }).should('be.visible'),





   }

   // Left Side Meeting Menu
   leftsideMeetingMenu() {
      this.elements.locLeftSideMeetingMenu().click();
   }

   // Create Tab 

   createTab() {
      this.elements.locCreateTab().click();
   }

   // Event Type

   legalEventTypeSelect() {
      this.elements.locLegalEventRadiobutton().click();
   }

   // Matter Name 

   selectMatterName(name) {
      if (name !== "") {
        cy.wait(2000);
         cy.xpath("//select[@formcontrolname='matter_id']").select(name);
      }
   }

   // Subject Task
   selectSubjectTask(name) {
      if (name !== "") {
         cy.wait(1000);
         cy.xpath("//select[@formcontrolname='title']").select(name);
      }
   }

   // Select Date
   dateClick() {
      cy.wait(500);
      this.elements.locDateOfFilling().click();
   }

   // Choose Date
   selectDate(date) {
     // cy.wait(1500);
      cy.xpath("(//span[text()='" + date + "'])[1]",{ timeout: 10000 }).click();
   }


   // Start Time

   selectStartTime(name) {
      if (name !== "") {
         cy.wait(1000);
         cy.xpath("//select[@formcontrolname='from_ts']").select(name);
      }
   }

   // End Time

   selectEndTime(name) {
      if (name !== "") {
         cy.wait(1000);
         cy.xpath("//select[@formcontrolname='to_ts']").select(name);
      }
   }

   // Time Zone

   selectTimeZone(name) {
      if (name !== "") {
         cy.wait(500);
         cy.xpath("//select[@formcontrolname='timezone_location']").select(name);
      }
   }

   // Repetition 

   selectReptition(name) {
      if (name !== "") {
         cy.wait(500);
         cy.xpath("//select[@formcontrolname='repeat_interval']").select(name);
      }
   }

   // All Day

   checkboxAllDay() {
     // cy.wait(500);
      this.elements.locAllDaysCheckbox().click();
   }

   // Notifications

   removeNotifications() {
    //  cy.wait(500);
      this.elements.locNotifications().click();
   //   cy.wait(500);
   }


   // Meeting link

   meetingLinkText(name) {
      if (name !== "") {
      //   cy.wait(1000);
         this.elements.locMeetingLink().type(name);
      }
   }

   // Dial in Num

   dialinNumText(name) {
      if (name !== "") {
       //  cy.wait(1000);
         this.elements.locDialinNumber().type(name);
      }
   }

   // Location

   locationText(name) {
      if (name !== "") {
       //  cy.wait(1000);
         this.elements.locLocation().type(name);
      }
   }

   // Meeting Agenda

   meetingAgendaText(name) {
      if (name !== "") {
       //  cy.wait(1000);
         this.elements.locMeetingAgenda().type(name);
      }

   }

   // Add Team Member 

   addTeamMember(name) {
      if (name !== "") {
        cy.wait(1000);
         this.elements.locAddTeamMember().type(name);
      //   cy.wait(100);
         this.elements.locButtonAddTM().click();
      }
   }

   // Add External Counsels

   addExternalCounselSelect(name) {
      if (name !== "") {
         cy.wait(1000);
         cy.xpath("//select[@id='select']").select(name);
      }
   }

   // Add External Team member

   addExternalTeamMember(name) {
      if (name !== "") {
         cy.wait(1000);
         this.elements.locExternalTeamMember().type(name);
       //  cy.wait(100);
         this.elements.locButtonAddExternalTM().click();
      }
   }

   // Add Document

   addDocument(name) {
      if (name !== "") {
         cy.wait(1000);
         this.elements.locdocument().type(name);
     //    cy.wait(100);
         this.elements.locButtonAddDoc().click();
      }
   }

   // Cancel 

   cancelButton() {
      cy.wait(500);
      this.elements.locButtonCancel().click();
   }

   // Save

   saveButton() {
      this.elements.locButtonSave().click();
   }

   // View Changes

   successPopupViewChanges() {
     // cy.wait(2000);
      this.elements.locAlertPopupViewChanges().click();
   }

   scrollCenter() {
      cy.wait(1000);
      cy.scrollTo('center');
      cy.wait(1000);
   }

   scrollDown() {
      cy.wait(1000);
      cy.scrollTo('bottom');
      cy.wait(1000);
   }

   scrollTop()
   {
      cy.wait(1000);
      cy.scrollTo('top');
      cy.wait(1000);
   }

   viewDayTab()
   {
      this.elements.locViewDay().click();
   }

}



module.exports = new createMeetingPOM();

   