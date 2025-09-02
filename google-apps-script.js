// Google Apps Script for Email Collection
// Deploy this as a web app to collect emails from your popup

function doGet(e) {
  try {
    // Get email from URL parameter
    const email = e.parameter.email;
    const timestamp = new Date().toISOString();
    
    if (!email) {
      return ContentService
        .createTextOutput('Email parameter is required')
        .setMimeType(ContentService.MimeType.TEXT);
    }
    
    // Get the active spreadsheet (you'll need to create this)
    const spreadsheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID_HERE');
    const sheet = spreadsheet.getSheetByName('Email Collection');
    
    // Add the email and timestamp to the sheet
    sheet.appendRow([email, timestamp, 'Popup Form']);
    
    // Return success response
    return ContentService
      .createTextOutput('Email collected successfully')
      .setMimeType(ContentService.MimeType.TEXT);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput('Error: ' + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

function doPost(e) {
  // Keep POST method for backward compatibility
  return doGet(e);
}

// Setup function to create the sheet if it doesn't exist
function setupSheet() {
  const spreadsheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID_HERE');
  let sheet = spreadsheet.getSheetByName('Email Collection');
  
  // Create sheet if it doesn't exist
  if (!sheet) {
    sheet = spreadsheet.insertSheet('Email Collection');
    // Add headers
    sheet.getRange(1, 1, 1, 3).setValues([['Email', 'Timestamp', 'Source']]);
    // Format headers
    sheet.getRange(1, 1, 1, 3).setFontWeight('bold').setBackground('#4285f4').setFontColor('white');
  }
} 