class viewMeetings {

  
  meetingClick(name) {
    cy.xpath("//div[@class='cal-day-columns']//*[contains(text(),'" + name + "')]",{ timeout: 20000 }).click();

  }

  textVerifyMeetingName(name) {

    cy.xpath("//div //p[@class='casestudy1']",{ timeout: 10000 }).should('have.text', name);
  }

  textVerifyDateandTime(name) {
    
    cy.xpath("//div //p[@class='monthtitle']",{ timeout: 10000 }).then(($value) => {
      const  getText = $value.text();
        cy.log(getText);
       let index = getText.indexOf(' '); // Find the index of the first space
        if (index !== -1) {
            let result = getText.substring(index + 1); // Extract substring starting from after the first space
            console.log(result); // Outputs: "Jul 01 2024 : 12:00 AM - 12:15 AM"
            cy.log(result);
            expect(result).to.include(name);
       }
    });
  }

  textVerifyMeetingAgenda(name) 
  {
    cy.xpath("(//div[@class='col-xs-12 col-sm-12 col-md-7']//div[@class='col-sm-7'])[1]//p",{ timeout: 10000 }).should('have.text', name);
  }

  textVerifyMeetingLink(name) 
  {
    cy.xpath("(//div[@class='col-xs-12 col-sm-12 col-md-7']//div[@class='col-sm-5'])//p[@class='meetingitem itemFlex'][1]",{ timeout: 10000 }).should('have.text', name);
  }

  textVerifyPhoneNumber(name) 
  {
    cy.xpath("//div[@class='col-xs-12 col-sm-12 col-md-7']//div[@class='col-sm-5']//p[4]",{ timeout: 10000 }).should('have.text', name);
  }


  textVerifyDocumentName(namesToSelect) {
    for (let i = 0; i <2; i++) {
        cy.xpath("//div[@class='col-xs-12 col-sm-12 col-md-7']//div[@class='documentbox']//*[text()='" + namesToSelect + "']",{ timeout: 10000 }).should('be.visible');
    }
}


textverifyNameList(namesToSelect) {
  for (let i = 0; i <10; i++) {
      cy.xpath("//div[@class='col-xs-12 col-sm-12 col-md-5']//*[text()='" + namesToSelect + "']",{ timeout: 10000 }).should('be.visible');
  }
}
  
}





module.exports = new viewMeetings();










