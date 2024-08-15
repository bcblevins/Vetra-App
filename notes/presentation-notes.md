# VetRA Graduation Presentation:

## Introduction

### What is VetRA?

 - Tool designed to improve communication between veterinarians and their clients, and make it easier for pet owners to manage their pets' health.

### Why I created VetRA

 1. Veterinary Technician Perspective
    - Large amount of time spent on the phone with clients
    - National shortage of veterinary staff
    - VetRA allows vet staff to spend less time on the phone with clients WITHOUT compromising client education
 2. Pet Owner Perspective
    - Human patients can easily access *their* medical records online, but most rely on paper documents for their pets. 
    - VetRA provides a hospital-independent platform to keep track of your pets' medical information and to allow streamlined communication with your pets' doctors.

There are 2 main interfaces to the site: the **client interface** and the **veterinary staff interface.** Today I will be showing the **client interface.**

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
   - User Icon (top right): User Profile
   - VetRA Logo (top center): Return to Homepage
   - Bell Icon (top left): Notifications
     - User sent notifications for new messages, lab results, and updates to refill requests.
     - Each notification is clickable and will take the user to the relevant page.

*(Click Portrait)*

### Pet Profile

 - Overview of the pet's information
 - Home of messaging about the specific pet
  
*(Open notifications, click)*

### Tests Screen

 - List of all lab results for the pet
 - Each test is clickable to view more information
 - Hover over test parameters to see easy-to-understand explanations

*(Home --> Medications)*

### Medications Screen

 - List of all medications for the pet
 - Refill requests can be made by clicking the **Refill** button


## Technologies Used

 - **Frontend**: Vue.js
 - **Backend**: Spring Boot (Java), PostgreSQL

## Design philosophy

### Modular

 - Built from small components that can be styled for different use cases

### Interactive

 - As many things as possible are: clickable, hoverable, or otherwise interactive. If it's on the screen, it should do something.

### Clean

 - Minimalistic design to keep the focus on the information

## Code Highlights

### Tooltips

 - Tooltips are a <span> element that is hidden by default. They are shown when the user hovers over the cell containing the tooltip.
 - Relative positioning on the cell, absolute positioning on the tooltip allows the tooltip to be offset from the cell.
 - Z-index is set to 1 to ensure the tooltip is on top of other elements.

### Notifications

 - Notifications are created on the server level on the DAO when a there is a creation or update to a message, test, or refill request.
 - The notification container checks for unread notifications every 5 seconds and updates the notification count and list of notifications accordingly.

### Loading Animation



