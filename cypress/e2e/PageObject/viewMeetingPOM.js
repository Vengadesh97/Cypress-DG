class viewMeetings {


  elements = {

    editElements: () => cy.xpath("//div //div[@class='d-inline float-right']//img[1]", { timeout: 10000 }),

    checkMatterName: () => cy.get("select[formcontrolname='matter_id']", { timeout: 10000 }),

    checkTask: () => cy.get("[formcontrolname='title']", { timeout: 10000 }),

    checkDate: () => cy.get("[id='drp']", { timeout: 10000 }),

    checkStartTime: () => cy.get("[formcontrolname='from_ts']", { timeout: 10000 }),

    checkEndTime: () => cy.get("[formcontrolname='to_ts']", { timeout: 10000 }),

    checkTimeZone: () => cy.get("[formcontrolname='timezone_location']", { timeout: 10000 }),

    checkReptition: () => cy.get("[formcontrolname='repeat_interval']", { timeout: 10000 }),

    checkNotificationNumber: () => cy.xpath("//div //input[@type='number']", { timeout: 10000 }),

    checkNotificationMintues: () => cy.xpath("//div[@class='rowItem'] //select //option[1]", { timeout: 10000 }),

    checkMeetingLink: () => cy.get("[id='meeting-link']", { timeout: 10000 }),

    checkDialNumber: () => cy.get("[id='number']", { timeout: 10000 }),

    checkMeetingAgenda: () => cy.get("[name='meeting-agenda']", { timeout: 10000 }),

    checkTeamMember: () => cy.xpath("//div[@id='selectedgroup']", { timeout: 10000 })

  }

  editMeetings() {
    this.elements.editElements().click();
  }

  verifyMatterNames(name) {
    this.elements.checkMatterName()
      .find('option:selected')
      .should('have.text', name);
  }
  verifyMatterTask(name) {
    this.elements.checkTask()
      .find('option:selected')
      .should('have.text', name);
  }

  verifyTimeZone(name) {
    this.elements.checkTimeZone()
      .find('option:selected')
      .should('have.text', name);
  }

  verifyStartTime(name) {
    this.elements.checkStartTime()
      .find('option:selected')
      .should('have.text', name);
  }

  verifyEndTime(name) {
    this.elements.checkEndTime()
      .find('option:selected')
      .should('have.text', name);
  }

  veirfyDate(name) {
    this.elements.checkDate().should('have.value', name);
  }

  verifyMeetingLink(name) {
    if (name !== "") {
      this.elements.checkMeetingLink().should('have.value', name);
    }
  }

  verifyDialNumber(name) {
    if (name !== "") {
      this.elements.checkDialNumber()
        .should('have.value', name);
    }
  }

  verifyMeetingAgenda(name) {
    if (name !== "") {
      this.elements.checkMeetingAgenda()
        .should('have.value', name);
    }
  }

  verifyTeamMember(name) {
    if (name !== "") {
      cy.xpath("//div[@id='selectedgroup'] //div[text()='" + name + "']", { timeout: 20000 }).should('be.visible');
    }
  }

  verifyDocumentName(name) {
    if (name !== "") {
      cy.xpath("//div[@id='selectedgroup'] //div[text()='" + name + "']", { timeout: 20000 }).should('be.visible');
    }
  }

  meetingClick(name) {

    cy.xpath("//div[@class='cal-day-columns']//*[text()='" + name + "']", { timeout: 20000 }).click();

  }


  textVerifyMeetingName(name) {

    cy.xpath("//div //p[@class='casestudy1']", { timeout: 10000 }).should('have.text', name);
  }

  textVerifyDateandTime(name) {

    cy.xpath("//div //p[@class='monthtitle']", { timeout: 10000 }).then(($value) => {
      const getText = $value.text();
      cy.log(getText);
      let index = getText.indexOf(' '); // Find the index of the first space
      if (index !== -1) {
        let result = getText.substring(index + 1); // Extract substring starting from after the first space
        //   console.log(result); // Outputs: "Jul 01 2024 : 12:00 AM - 12:15 AM"
        cy.log(result);
        //    expect(result).to.include(name);
      }
    });
  }

  textVerifyMeetingAgenda(name) {
    if (name !== "") {
      cy.xpath("(//div[@class='col-xs-12 col-sm-12 col-md-7']//div[@class='col-sm-7'])[1]//p[1]", { timeout: 10000 }).should('have.text', name);
    }
  }

  textVerifyMeetingLink(name) {
    if (name !== "") {
      cy.xpath("(//div[@class='col-xs-12 col-sm-12 col-md-7']//div[@class='col-sm-5'])//p[@class='meetingitem itemFlex'][1]", { timeout: 10000 }).should('have.text', name);
    }
  }

  textVerifyPhoneNumber(name) {
    if (name !== "") {
      cy.xpath("//div[@class='col-xs-12 col-sm-12 col-md-7']//div[@class='col-sm-5']//p[4]", { timeout: 10000 }).should('have.text', name);
    }
  }


  textVerifyDocumentName(namesToSelect) {
    if (namesToSelect !== "") {
      for (let i = 0; i < 2; i++) {
        cy.xpath("//div[@class='col-xs-12 col-sm-12 col-md-7']//div[@class='documentbox']//*[text()='" + namesToSelect + "']", { timeout: 10000 }).should('be.visible');
      }
    }
  }


  textverifyNameList(namesToSelect) {
    if (namesToSelect !== "") {
      for (let i = 0; i < 10; i++) {
        cy.xpath("//div[@class='col-xs-12 col-sm-12 col-md-5']//*[text()='" + namesToSelect + "']", { timeout: 10000 }).should('be.visible');
      }
    }
  }

}





module.exports = new viewMeetings();










