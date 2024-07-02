class viewMeetings {

    // Web Element declartaions 
    elements = {
    }


    createdMeetingSelect(meetingNames) {
      //  const meetingNames = "YourMeetingName";
      
        cy.xpath("//div //div[@role='application']",{ timeout: 10000 }).should('be.visible')  // Replace with the actual selector for the calendar elements
            .each(($el, index, $list) => {
                let allCalendarTextName = $el.text();

                cy.wait(20000);  // Wait for 1 second

                // Uncomment the next line if you want to print the text
             //    cy.log("All Group Name Text " + allCalendarTextName);
            //     cy.log("All Group Name Text " + allCalendarTextName);
                if (meetingNames === allCalendarTextName) {
                    cy.wait(2000);  // Wait for 2 seconds
                    cy.wrap($el).click();
                }
            });
    }
}



module.exports = new viewMeetings();










