# Todo

## Behavior
- [x] notifications briefly show test data when clicked.
- [ ] When auth fails, a blank page with default header is shown. Should show either completely blank page or loading screen.
    - to reproduce: login, then restart server
- [ ] would be cool if generally showed loading animation if things aren't fully loaded yet.
- [ ] empty containers should show a message saying so.
    - [ ] tests
    - [ ] prescriptions
    - [x] pets
- [x] darken/blur page when notifications are shown?
- [ ] hover messages over buttons
- [ ] fewer fake tests
  
## Elements
- [ ] add a "back" button to all views.
- [x] red bubble over notification bell
- [x] logout button

## Housekeeping
- [ ] TONS of console messages. Bring down to reasonable (helpful) level.

## Bugs to squash
- [ ] tests sometimes show invalid date/undefined in title. Clicking another test and coming back fixes this. Also seemed to prevent using logo to navigate to home.
  - to reproduce:
- [ ] clicking notification for test does not show correct test if already in test view. reloading page fixes this.
- [ ] Arlo's pet card test icon does not lead to tests page. Also happens from profile.
  - console: "Cannot read properties of undefined (reading 'id')
  at PetCard.vue:38:42"
  - potentially due to no tests in file?