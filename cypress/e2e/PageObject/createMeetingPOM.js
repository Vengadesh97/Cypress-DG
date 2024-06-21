const { expect } = require("chai");

class createMeetingPOM {

 // Web Element declartaions 
   elements = {

    locLeftSideMeetingMenu: () => cy.xpath("//span[text()='Meetings']"),

    locCreateTab: () => cy.xpath("//a[text()='Create']"),

    locLegalEventRadiobutton : () => cy.xpath("//input[@id='legalMatter']"),

    locAllDaysCheckbox : () =>Cy.xpath("//input[@type='checkbox']"),

    locMeetingLink : () => cy.xpath("//input[@id='meeting-link']"),

    locDialinNumber : () => cy.xpath("//input[@id='number']"),

    locLocation : () => cy.xpath("//input[@id='location']"),

    locMeetingAgenda : () => cy.xpath("//textarea[@name='meeting-agenda']"),

    locAddTeamMember : () => cy.xpath("//input[@list='browsers']"),

    locButtonAddTM : () => cy.xpath("(//input[@value='ADD'])[1]"),

    locExternalTeamMember : () => cy.xpath("//input[@placeholder='Search External Counsel']"),

    locButtonAddExternalTM : () => cy.xpath("(//input[@value='ADD'])[2]"),

    locdocument : () => cy.xpath("//input[@placeholder='Search Document']"),

    locButtonAddDoc : () => cy.xpath("//input[@value='Attach']")

    }
   
    // Left Side Meeting Menu
    leftsideMeetingMenu()
    {
        cy.wait(1000);
        this.elements.locLeftSideMeetingMenu().click();
    }

    // Create Tab 

    createTab()
    {
        cy.wait(1000);
        this.elements.locCreateTab().click();
    }

    // Event Type

    legalEventTypeSelect()
    {
        cy.wait(1000);
        this.elements.locLegalEventRadiobutton().click();
    }

    // Matter Name 

    selectMatterName(name)
    {
      if (name!=="")
     {
        cy.wait(1000);
        cy.xpath("//select[@formcontrolname='matter_id']").select(name);
     }
    }

    // Subject Task
    selectSubjectTask(name)
    {
    if (name!=="")
     {
        cy.wait(2000);
        cy.xpath("//select[@formcontrolname='title']").select(name);
     }
    }

    // Start Time
    
    selectStartTime(name)
    {
    if (name!=="")
     {
        cy.wait(1000);
        cy.xpath("//select[@formcontrolname='from_ts']").select(name);
     }
    }

    // End Time

    selectEndTime(name)
    {
    if (name!=="")
     {
        cy.wait(1000);
        cy.xpath("//select[@formcontrolname='to_ts']").select(name);
     }
    }

    // Time Zone

    selectTimeZone(name)
    {
    if (name!=="")
     {
        cy.wait(1000);
        cy.xpath("//select[@formcontrolname='timezone_location']").select(name);
     }
    }    

    // Repetition 

    selectReptition(name)
    {
    if (name!=="")
     {
        cy.wait(1000);
        cy.xpath("//select[@formcontrolname='repeat_interval']").select(name);
     }
    }   

    // All Day

    checkboxAllDay()
    {
        cy.wait(1000);
        this.elements.locAllDaysCheckbox().click();
    }

    // Meeting link

    meetingLinkText(name)
    {
        if (name!=="")
        {
        cy.wait(1000);
        this.elements.locMeetingLink().type(name);
        }
    }

    // Dial in Num

    dialinNumText(name)
    {
        if (name!=="")
        {
        cy.wait(1000);
        this.elements.locDialinNumber().type(name);
        }
    }

    // Location

    locationText(name)
    {
        if (name!=="")
        {
        cy.wait(1000);
        this.elements.locLocation().type(name);
        }
    }

    // Meeting Agenda

    meetingAgendaText(name)
    {
        if (name!=="")
        {
        cy.wait(1000);
        this.elements.locMeetingAgenda().type(name);
        }
        
    }

     // Add Team Member 

     addTeamMember(name)
     {
        if (name!=="")
        {
         cy.wait(1000);
         this.elements.locAddTeamMember().type(name);
         cy.wait(100);
         this.elements.locButtonAddTM().click();
        }
     }

     // Add External Counsels

     addExternalCounselSelect(name)
     {
     if (name!=="")
      {
         cy.wait(1000);
         cy.xpath("//select[@id='select']").select(name);
      }
     } 

     // Add External Team member

     addExternalTeamMember(name)
     {
        if (name!=="")
        {
         cy.wait(1000);
         this.elements.locExternalTeamMember().type(name);
         cy.wait(100);
         this.elements.locButtonAddExternalTM().click();
        }
     }

     // Add Document

     addDocument(name)
     {
        if (name!=="")
        {
         cy.wait(1000);
         this.elements.locdocument().type(name);
         cy.wait(100);
         this.elements.locButtonAddDoc().click();
        }
     }

    scrollCenter()
    {
      cy.wait(1000);
      cy.scrollTo('center');
      cy.wait(1000);
    }

    scrollDown()
    {
      cy.wait(1000);
      cy.scrollTo('bottom');
      cy.wait(1000);
    }

}

module.exports = new createMeetingPOM();