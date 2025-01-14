# Supabase Refit

## Pressing Todos
- ~~**store** has user stored inside, but needs to be handled differently~~
- Messages have "to_user". Need to figure out how to implement.
  - Do it based on emails?
- Notifications need to be figured out
  - ~~Looks like "edge functions" with Supabase are the way~~
  - SQL triggers proved more convenient for my purposes. 

  
## Service reworking

- Service files that need to be rewritten:
  - [x] LoginService
  - [x] MessageService
  - [x] NotificationService
  - [x] PetService
  - [x] RxService*
  - [x] TestService
  - [x] UserService*
  
  *: changes were made to how these services work

- Files that use services:
  - **Cards:**
    - [x] PetCard
  - **Containers:**
    - [ ] Conversation*
      - [ ] message service
    - [ ] Notification*
      - [x] notification service
  - **Items:**
    - [x] Header*
      - [x] notification service
    - [x] Login
      - login presumably works, but not redirecting after login.
    - [ ] MessageBubble*
      - [ ] message service
    - [ ] RxItem*
      - [ ] rx service
  - **Views:**
    - [x] HomeView
    - [x] MedsView
    - [x] ProfileView
    - [x] RegisterView
    - [x] TestsView
    - [x] UserView
  - main.js
  
  *: Needs service reworked


TODO:
- write js docs for each service fn with return types
- Figure out user situation
  - Add profiles table to track names, etc about users
  - Figure out what is needed to adjust in components/store/services to account for change.
- Create a "Demo Engine" service to provide simulated user experience on a unique branch.