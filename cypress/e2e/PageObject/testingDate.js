
// Function to compare dates and trigger clicks based on the comparison
export function viewDaySelect(givenDate) {
   
    cy.wait(500);
    cy.xpath("//label[@class='tdate']").invoke('text').then((text1) => {
        cy.wait(500);
        // Split the string to isolate the date part
        let dateParts = text1.split(', '); // ["Tuesday", "July 2", "2024"]

        // Combine the parts excluding the day of the week
        let monthDayYear = dateParts.slice(1).join(', '); // "July 2, 2024"

        // Create a new Date object from the string
        let date = new Date(monthDayYear);

        // Get the numeric month (0-indexed, so add 1)
        let month = date.getMonth() + 1;

        // Get the day and year
        let day = date.getDate();
        let year = date.getFullYear();

        // Format the final string as MM/DD/YYYY
        let formattedDate = `${month}/${day}/${year}`;

        console.log(formattedDate); // Outputs: 7/2/2024

        // Convert the date strings to Date objects
        let date1 = new Date(formattedDate);
        let date2 = new Date(givenDate);

        let diff = (new Date(date1) - new Date(date2)) / (1000 * 60 * 60 * 24);
        let flag = 1;
        let dd = Math.round(diff);

        if (dd < 0) {
            flag = 0;
            dd = -1 * dd;
        }
    
        for (let i = 0; i < dd; i++) {
            if (flag === 0) {
             
               cy.xpath("//div[@class='itemlist']//img[@class='righticon']").click(); // Replace with your right arrow selector

            } else {

              cy.xpath("//div[@class='itemlist']//img[@class='lefticon']").click(); // Replace with your left arrow selector
            }
        }
    });

}

