import { createStore as _createStore } from 'vuex';

export function createStore() {
  return _createStore({
    state: {
      token: null,
      user: {
        username: "bblevins96",
        password: "$2a$10$o5y4WbVoawMUwZiTnQINJOAm6QJyOE3dD2KYIE1kkze7O0m6PzqA.",
        firstName: "Beau",
        lastName: "Blevins",
        email: "beau@test.com"
      },
      pets: [
        {
          patientId: "3",
          firstName: "Arlo",
          birthday: "01/01/2019",
          species: "Feline",
          sex: "CM",
          ownerUsername: "bblevins96",
        },
        {
          patientId: "1",
          firstName: "Charlie",
          birthday: "03/03/2015",
          species: "Canine",
          sex: "SF",
          ownerUsername: "bblevins96",
        },
        {
          patientId: "2",
          firstName: "Sunny",
          birthday: "01/01/2017",
          species: "Feline",
          sex: "CM",
          ownerUsername: "bblevins96",
        }
      ]
    },
    mutations: {
      SET_USER(state, user) {
        state.user = user;
      },
      SET_PETS(state, pets) {
        state.pets = pets;
      },
      SET_TOKEN(state, token) {
        state.token = token;
      }
    },
    // Strict should not be used in production code. It is used here as a
    // learning aid to warn you if state is modified without using a mutation.
    strict: true
  })
}