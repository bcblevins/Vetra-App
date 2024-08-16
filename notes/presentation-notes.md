# VetRA Graduation Presentation:

## Introduction

### What is VetRA?

 - Tool designed to 
   - improve communication between veterinarians and their clients
   - make it easier for pet owners to manage their pets' health.

### Why I created VetRA

To solve 2 main problems:
 1. Veterinary Technician Perspective
    - Large amount of time spent on the phone with clients
    - National shortage of veterinary staff
    - VetRA allows vet staff to spend less time on the phone with clients, easing burden of staff shortage WITHOUT compromising client education
 2. Pet Owner Perspective
    - Human patients can easily access *their* medical records online, but most rely on paper documents for their pets. 
    - VetRA provides a hospital-independent platform to keep track of your pets' medical information and to allow streamlined communication with your pets' doctors.

There are 2 main interfaces to the site: the **pet owner interface** and the **veterinary staff interface.** Today I will be showing the **pet owner interface.**

## Website Walkthrough

### Homepage

 - After logging in, the user is shown a list of cards representing their pets. 
 - Pet Cards:
   - Icons
     - **Envelope**: Patient Messages
     - **Results**: Lab Results
     - **Pill**: Medications
   - The portrait can be clicked to view the pet's profile.
 - Header:
   - User Icon (top right): User settings
   - VetRA Logo (top center): Return to Homepage
   - Bell Icon (top left): Notifications
     - Notifications are created for new messages, new lab results, and updates to refill requests.
     - Each notification is clickable and will take the user to the relevant page.

*(Click Portrait)*

### Pet Profile

 - Overview of the pet's information
   - list of medications and recent tests
 - Home of messaging about the specific pet
  
*(Open notifications, click)*

### Tests Screen

 - List of all lab results for the pet on left
 - List on the left is clickable and will display the test details on the right as well as conversation about the test
 - Hover over test parameters to see easy-to-understand explanations

*(Home --> Medications)*

### Medications Screen

 - List of all medications for the pet and their details
 - Refill requests can be made by clicking the **Refill** button
 - Status will update and display on the button

## Technologies Used

 - **Frontend**: Vue.js
 - **Backend**: Spring Boot (Java), PostgreSQL

## Design philosophy (3 main principles)

### Modularity

 - Built from small components that can be adjusted for different use cases and easily reused, for scalability and maintainability.

### Interactivity

 - As many things as possible are: clickable, hoverable, or otherwise interactive. If it's on the screen, it should do something.

### Clarity

 - Minimalistic design to keep the focus on the information
 - As more features are added, a clear design will be more scalable

## Code Highlights

### Tooltips

*(items/TestItem.vue line 134 css)*
 - Tooltips are a <span> element that is hidden by default. They are shown when the user hovers over the cell containing the tooltip.
 - Relative positioning on the cell, absolute positioning on the tooltip allows the tooltip to be offset from the cell.
 - Z-index is set to 1 to ensure the tooltip is on top of other elements.

### Notifications

*(containers/Notifications.vue)*
 - Notifications are created on the server level on the DAO when a there is a creation or update to a message, test, or refill request.
 - The header checks for unread notifications every 5 seconds to add the bubble/notification count and the notification container updates the list of notifications when opened.

### Loading Helix Animation

*(items/Login.vue line 113)*
 - 4 divs rounded to 50% to create a circle
 - Translate Y down
 - Translate Y back up and set opacity to 0.3 to give the illusion of depth

