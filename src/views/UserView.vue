<template>
    <div class="user-view">
        <main v-show="!editing">
            <h1> {{ user.firstName + " " + user.lastName }} </h1>
            <p> {{ "Username: " + user.username }} </p>
            <p> {{ "Email: " + user.email }} </p>
            <p class="pet-list-header">Pets:</p>
            <ul>
                <li v-for="pet in pets" key="pet.patientId"> {{ pet.name }} </li>
            </ul>
            <button @click="editing = !editing">Edit</button>
        </main>

        <form action="" v-show="editing" @click.prevent="">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" v-model="editedUser.firstName" required>
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" v-model="editedUser.lastName" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" v-model="editedUser.email" required>
            <button @click="editing = !editing">Cancel</button>
            <button @click="saveChanges">Save</button>
        </form>

        <button @click="logout" class="logout">Logout</button>
    </div>
</template>

<script>
import PetService from '@/services/PetService';
import UserService from '@/services/UserService';
export default {
    data() {
        return {
            pets: [],
            editing: false,
            editedUser: {
                username: this.$store.state.user.username,
                firstName: this.$store.state.user.firstName,
                lastName: this.$store.state.user.lastName,
                email: this.$store.state.user.email,
                password: '0000'
            }
        }
    },
    created() {
        PetService.getPets(this.$store.state.token).then(response => {
            this.pets = response.data;
        }).catch(error => {
            console.log(error);
        });
    },
    methods: {
        saveChanges() {
            UserService.updateSelf(this.editedUser, this.$store.state.token).then(response => {
                this.$store.commit('SET_USER', response.data);
                this.editing = !this.editing;
            }).catch(error => {
                console.log(error);
            });
        },
        logout() {
            console.log("Logging out");
            localStorage.removeItem('token');
            this.$store.commit('SET_TOKEN', null);
            this.$router.push('/login');
        }
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    },

}
</script>

<style lang="scss" scoped>
.user-view {
    height: 100%;
    background-color: white;
    margin: 20px;
    margin-inline: 100px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    main {
        display: flex;
        flex-direction: column;
        width: 30em;
        margin: 20px;
        padding: 20px;
        border: 1px solid black;
        border-radius: 10px;
        background-color: #f0f0f0;

        h1 {
            border-bottom: 2px solid black;
        }

        p {
            margin-block: 5px;
        }

        .pet-list-header {
            margin-bottom: 0px;
        }

        ul {
            margin-top: 0px;
            list-style-type: none;
        }

        button {
            margin-inline: auto;
            padding: 10px;
            padding-inline: 20px;
            background-color: white;
            border: 1px solid black;
            border-radius: 5px;
        }

        button:hover {
            background-color: #f0f0f0;
            cursor: pointer;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        width: 30em;
        margin: 20px;
        padding: 20px;
        border: 1px solid black;
        border-radius: 10px;
        background-color: #f0f0f0;

        label {
            margin-top: 10px;
        }

        input {
            margin-bottom: 10px;
            padding: 5px;
            border: 1px solid black;
            border-radius: 5px;
        }

        button {
            margin-inline: auto;
            margin-top: 10px;
            padding: 10px;
            padding-inline: 20px;
            background-color: white;
            border: 1px solid black;
            border-radius: 5px;
            width: 8em;
        }

        button:hover {
            background-color: #f0f0f0;
            cursor: pointer;
        }
    }

    .logout {
        background: linear-gradient(#0c5e8d, #094567 70%);
        color: white;
        border: none;
        cursor: pointer;
        padding: 10px;
        padding-inline: 20px;
        border-radius: 5px;
    }

    .logout:hover {
        background: none;
        background-color: #2f7197;
    }
}

@media screen and (max-width: 1024px) {
    .user-view {
        margin: 0px;
        main {
            width: 90%;
            background: none;
            border: none;
        }

        form {
            width: 90%;
        }

    }


}
</style>