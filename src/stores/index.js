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
      ],
      roles: [
        "owner",
      ],
      parameterDescriptions: [
        {
          name: ['WBC', 'White Blood Cells'],
          description: 'White blood cells are the cells of the immune system that are involved in protecting the body against both infectious disease and foreign invaders.'
        },
        {
          name: ['RBC', 'Red Blood Cells'],
          description: 'Red blood cells are the most common type of blood cell and the principal means of delivering oxygen to the body tissues.'
        },
        {
          name: ['HGB', 'Hemoglobin'],
          description: 'Hemoglobin is a protein in red blood cells that carries oxygen from the lungs to the rest of the body.'
        },
        {
          name: ['HCT', 'Hematocrit'],
          description: 'Hematocrit is the proportion of blood that is occupied by red blood cells.'
        },
        {
          name: ['PLT', 'Platelets'],
          description: 'Platelets are small, colorless cell fragments in the blood whose main function is to interact with clotting proteins to stop or prevent bleeding.'
        },
        {
          name: ['Hookworms'],
          description: 'Hookworms are intestinal parasites that are common in dogs and cats. Often contracted from contaminated soil.'
        },
        {
          name: ['Roundworms'],
          description: 'Roundworms are intestinal parasites that are common in dogs and cats. Often contracted from contaminated soil.'
        },
        {
          name: ['Whipworms'],
          description: 'Whipworms are intestinal parasites that are common in dogs. Often contracted from contaminated soil.'
        },
        {
          name: ['Tapeworms'],
          description: 'Tapeworms are intestinal parasites that are common in dogs and cats. Often contracted from ingesting fleas.'
        },
        {
          name: ['Mean Corpuscular Volume', 'MCV'],
          description: 'Mean corpuscular volume is a measure of the average volume of a red blood cell.'
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
      },
      SET_ROLES(state, roles) {
        state.roles = roles;
      }
    },
    // Strict should not be used in production code. It is used here as a
    // learning aid to warn you if state is modified without using a mutation.
    strict: true
  })
}