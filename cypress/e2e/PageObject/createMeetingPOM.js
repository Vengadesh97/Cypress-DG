const { expect } = require("chai");

class createMeetingPOM {

   // Web Element declartaions 
   elements = {

      locLeftSideMeetingMenu: () => cy.xpath("//span[text()='Meetings']"),

      locCreateTab: () => cy.xpath("//a[text()='Create']"),

      locLegalEventRadiobutton: () => cy.xpath("//input[@id='legalMatter']"),

      locDateOfFilling: () => cy.get("input#drp"),

      locAllDaysCheckbox: () => Cy.xpath("//input[@type='checkbox']"),

      locNotifications: () => cy.xpath("//ul //li //div //a [@aria-label='Close']"),

      locMeetingLink: () => cy.xpath("//input[@id='meeting-link']"),

      locDialinNumber: () => cy.xpath("//input[@id='number']"),

      locLocation: () => cy.xpath("//input[@id='location']"),

      locMeetingAgenda: () => cy.xpath("//textarea[@name='meeting-agenda']"),

      locAddTeamMember: () => cy.xpath("//input[@list='browsers']"),

      locButtonAddTM: () => cy.xpath("(//input[@value='ADD'])[1]"),

      locExternalTeamMember: () => cy.xpath("//input[@placeholder='Search External Counsel']"),

      locButtonAddExternalTM: () => cy.xpath("(//input[@value='ADD'])[2]"),

      locdocument: () => cy.xpath("//input[@placeholder='Search Document']"),

      locButtonAddDoc: () => cy.xpath("//input[@value='Attach']"),

      locButtonSave: () => cy.xpath("//div //button[text()='Save']"),

      locButtonCancel: () => cy.xpath("//div //button[text()='Cancel']"),

      locAlertPopupViewChanges: () => cy.xpath("//div //button[text()='View Changes']")

   }

   // Left Side Meeting Menu
   leftsideMeetingMenu() {
      cy.wait(1000);
      this.elements.locLeftSideMeetingMenu().click();
   }

   // Create Tab 

   createTab() {
      cy.wait(1000);
      this.elements.locCreateTab().click();
   }

   // Event Type

   legalEventTypeSelect() {
      cy.wait(1000);
      this.elements.locLegalEventRadiobutton().click();
   }

   // Matter Name 

   selectMatterName(name) {
      if (name !== "") {
         cy.wait(1000);
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

      cy.wait(500);
      cy.xpath("//span[text()='" + date + "']").click({ multiple: true });
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
         cy.wait(1000);
         cy.xpath("//select[@formcontrolname='timezone_location']").select(name);
      }
   }

   // Repetition 

   selectReptition(name) {
      if (name !== "") {
         cy.wait(1000);
         cy.xpath("//select[@formcontrolname='repeat_interval']").select(name);
      }
   }

   // All Day

   checkboxAllDay() {
      cy.wait(1000);
      this.elements.locAllDaysCheckbox().click();
   }

   // Notifications

   removeNotifications() {
      cy.wait(1000);
      this.elements.locNotifications().click();
      cy.wait(500);
   }


   // Meeting link

   meetingLinkText(name) {
      if (name !== "") {
         cy.wait(1000);
         this.elements.locMeetingLink().type(name);
      }
   }

   // Dial in Num

   dialinNumText(name) {
      if (name !== "") {
         cy.wait(1000);
         this.elements.locDialinNumber().type(name);
      }
   }

   // Location

   locationText(name) {
      if (name !== "") {
         cy.wait(1000);
         this.elements.locLocation().type(name);
      }
   }

   // Meeting Agenda

   meetingAgendaText(name) {
      if (name !== "") {
         cy.wait(1000);
         this.elements.locMeetingAgenda().type(name);
      }

   }

   // Add Team Member 

   addTeamMember(name) {
      if (name !== "") {
         cy.wait(1000);
         this.elements.locAddTeamMember().type(name);
         cy.wait(100);
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
         cy.wait(100);
         this.elements.locButtonAddExternalTM().click();
      }
   }

   // Add Document

   addDocument(name) {
      if (name !== "") {
         cy.wait(1000);
         this.elements.locdocument().type(name);
         cy.wait(100);
         this.elements.locButtonAddDoc().click();
      }
   }

   // Cancel 

   cancelButton() {
      this.elements.locButtonCancel().click();
   }

   // Save

   saveButton() {
      this.elements.locButtonSave().click();
   }

   // View Changes

   successPopupViewChanges() {
      cy.wait(2000);
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


   viewDay(string) {

      cy.wait(1000);
      let text = cy.xpath("//label[@class='tdate']").invoke('text');
      let date = dateParse(dateTrim(text));
      let date1 = dateParse(string);

      let diff = (date1 - date) / (1000 * 60 * 60 * 24);
      let flag = 1;
      let dd = Math.round(diff);
      if (dd < 0) {
         flag = 0;
         dd = -1 * dd;
      }
      for (let i = 0; i < dd; i++) {

         if (flag === 0) {
            cy.wait(500);
            leftArrow.click();
         } else {
            cy.wait(500);
            rightArrow.click();
         }
      }
   }




}

function dateTrim(text) {

   const string = text.split(",")[1].substring(1) + "," + text.split(",")[2];
   return dateTrim;
}

// View Meetings 

function dateParse(text) {
   const formatter = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
   const date = new Date(text);
   return formatter.format(date);
}


module.exports = new createMeetingPOM();