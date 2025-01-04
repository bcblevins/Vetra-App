# Supabase Refit

- **store** has user stored inside, but needs to be handled differently
- new service files will be camelCase"SP"
  - rxService was split from refill request operations for consistency
- Files that use services:
  - **Cards:**
    - [x] PetCard
  - **Containers:**
    - [ ] Conversation
    - [ ] Notification
  - **Items:**
    - [ ] Header
    - [ ] Login
    - [ ] MessageBubble
    - [ ] RxItem
  - **Views:**
    - [ ] HomeView
    - [ ] MedsView
    - [ ] ProfileView
    - [ ] RegisterView
    - [ ] TestsView
    - [ ] UserView
  - main.js


TODO:
- write js docs for each service fn with return types
- Notifications need to be figured out
- Figure out user situation
  - Add profiles table to track names, etc about users
  - Figure out what is needed to adjust in components/store/services to account for change.