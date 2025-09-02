// Google Apps Script for Email Collection - Updated for Email-test Sheet
// Deploy this as a web app to collect emails from your popup

function doGet(e) {
  try {
    // Check if e parameter exists (for manual testing)
    if (!e || !e.parameter) {
      return ContentService
        .createTextOutput('Error: Invalid request. This script should be called as a web app with email parameter.')
        .setMimeType(ContentService.MimeType.TEXT);
    }
    
    // Get email from URL parameter
    const email = e.parameter.email;
    const timestamp = new Date().toISOString();
    
    // Debug: Log the parameters
    console.log('Received parameters:', e.parameter);
    console.log('Email:', email);
    
    if (!email) {
      return ContentService
        .createTextOutput('Email parameter is required')
        .setMimeType(ContentService.MimeType.TEXT);
    }
    
    // Get the active spreadsheet
    console.log('Attempting to open spreadsheet...');
    const spreadsheet = SpreadsheetApp.openById('1z5kzdIiGelCxCDHgcR4M7oftMrs9oKqTtkZ_uN7ioUc');
    console.log('Spreadsheet opened successfully');
    
    // Get the sheet - Updated to use "Email-test"
    console.log('Attempting to get sheet...');
    const sheet = spreadsheet.getSheetByName('Email-test');
    console.log('Sheet retrieved:', sheet ? 'Success' : 'Failed');
    
    if (!sheet) {
      return ContentService
        .createTextOutput('Error: Email-test sheet not found. Please create a sheet named "Email-test"')
        .setMimeType(ContentService.MimeType.TEXT);
    }
    
    // Add the email and timestamp to the sheet
    console.log('Attempting to append row...');
    sheet.appendRow([email, timestamp, 'Popup Form']);
    console.log('Row appended successfully');
    
    // Return success response
    return ContentService
      .createTextOutput('Email collected successfully: ' + email)
      .setMimeType(ContentService.MimeType.TEXT);
      
  } catch (error) {
    console.error('Error in doGet:', error);
    // Return detailed error response
    return ContentService
      .createTextOutput('Error: ' + error.toString() + '\nStack: ' + error.stack)
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

function doPost(e) {
  // Keep POST method for backward compatibility
  return doGet(e);
}

// Setup function to create the sheet if it doesn't exist - Updated for Email-test
function setupSheet() {
  try {
    console.log('Setting up sheet...');
    const spreadsheet = SpreadsheetApp.openById('1z5kzdIiGelCxCDHgcR4M7oftMrs9oKqTtkZ_uN7ioUc');
    let sheet = spreadsheet.getSheetByName('Email-test');
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      console.log('Creating Email-test sheet...');
      sheet = spreadsheet.insertSheet('Email-test');
      // Add headers
      sheet.getRange(1, 1, 1, 3).setValues([['Email', 'Timestamp', 'Source']]);
      // Format headers
      sheet.getRange(1, 1, 1, 3).setFontWeight('bold').setBackground('#4285f4').setFontColor('white');
      console.log('Sheet created successfully');
    } else {
      console.log('Email-test sheet already exists');
    }
  } catch (error) {
    console.error('Error in setupSheet:', error);
  }
}

// Test function to verify spreadsheet access - Updated for Email-test
function testSpreadsheetAccess() {
  try {
    const spreadsheet = SpreadsheetApp.openById('1z5kzdIiGelCxCDHgcR4M7oftMrs9oKqTtkZ_uN7ioUc');
    const sheet = spreadsheet.getSheetByName('Email-test');
    
    if (sheet) {
      console.log('Spreadsheet access successful');
      console.log('Sheet name:', sheet.getName());
      console.log('Sheet ID:', sheet.getSheetId());
      return 'Success: Can access spreadsheet and Email-test sheet';
    } else {
      return 'Error: Email-test sheet not found';
    }
  } catch (error) {
    return 'Error: ' + error.toString();
  }
} 