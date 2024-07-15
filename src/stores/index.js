import { createStore as _createStore} from 'vuex';

export function createStore() {
    return _createStore({
      state: {
        user: {
            username: "bblevins96",
            password: "$2a$10$o5y4WbVoawMUwZiTnQINJOAm6QJyOE3dD2KYIE1kkze7O0m6PzqA.",
            firstName: "Beau",
            lastName: "Blevins",
            email: "beau@test.com"
        }
      },
      mutations: {},
      // Strict should not be used in production code. It is used here as a
      // learning aid to warn you if state is modified without using a mutation.
      strict: true
    })
  }