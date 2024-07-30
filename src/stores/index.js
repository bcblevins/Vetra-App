import { createStore as _createStore } from 'vuex';

export function createStore() {
  return _createStore({
    state: {
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
          name: "Arlo",
          birthday: "01/01/2019",
          species: "Feline",
          sex: "CM",
          ownerUsername: "bblevins96",
        },
        {
          patientId: "1",
          name: "Charlie",
          birthday: "03/03/2015",
          species: "Canine",
          sex: "SF",
          ownerUsername: "bblevins96",
        },
        {
          patientId: "2",
          name: "Sunny",
          birthday: "01/01/2017",
          species: "Feline",
          sex: "CM",
          ownerUsername: "bblevins96",
        }
      ]
    },
    mutations: {
      SET_USER(user) {
        this.state.user = user;
      },
      SET_PETS(pets) {
        this.state.pets = pets;
      }
    },
    // Strict should not be used in production code. It is used here as a
    // learning aid to warn you if state is modified without using a mutation.
    strict: true
  })
}