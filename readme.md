## Overview

**Project Title**: Local Landmarks Map

**Project Description**:  
This project is a web-based application that uses the Google Maps API to display local landmarks in the Rexburg, Idaho area. Users can interact with the map by clicking on markers to view information about each landmark. The project emphasizes handling and securely managing the Google Maps API key while meeting various user interaction requirements.

**Project Goals**:  
- Display a Google Maps basemap centered on Rexburg, Idaho.
- Add at least 20 markers representing local landmarks.
- Store and display information about each marker when clicked.
- Automatically close the previously opened info window when a new marker is clicked.
- Ensure the API key is not publicly exposed in version control.

## Instructions for Build and Use

### Steps to build and/or run the software:

1. Clone or download the project files to your local machine.
2. Ensure you have the `config.js` file created locally with the Google Maps API key (as described in the **Development Environment** section).
3. Open the `index.html` file in a browser to view and interact with the map.

### Instructions for using the software:

1. Open the webpage.
2. Explore the map by zooming and panning around Rexburg, Idaho.
3. Click on any of the markers to see details about the corresponding landmark. The previously opened info window will close automatically when a new marker is clicked.

## Development Environment

To recreate the development environment, you need the following software and/or libraries with the specified versions:

* **Google Maps JavaScript API** (included via script tag in the `index.html` file)
* **HTML5, CSS3, and JavaScript (ES6)**: Standard web development tools
* **Browser**: Any modern browser (Chrome, Firefox, Safari)

### API Key Setup:
1. Create a `config.js` file in the project root:
   ```javascript
   const API_KEY = "your-google-maps-api-key-here";
