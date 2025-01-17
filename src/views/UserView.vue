<template>
    <div class="user-view">
        <main v-show="!editing">
            <h1> {{ user.first_name + " " + user.last_name }} </h1>
            <!-- <p> {{ "Username: " + user.username }} </p> -->
            <!-- <p> {{ "Email: " + user.email }} </p> -->
            <p class="pet-list-header">Pets:</p>
            <ul>
                <li v-for="pet in pets" key="pet.patient_id"> {{ pet.name }} </li>
            </ul>
            <button @click="editing = !editing">Edit</button>
        </main>

        <form action="" v-show="editing" @click.prevent="">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" v-model="editedUser.firstName" required>
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" v-model="editedUser.lastName" required>
           <!-- <label for="email">Email:</label>
            <input type="email" id="email" name="email" v-model="editedUser.email" required> -->
            <button @click="editing = !editing">Cancel</button>
            <button @click="saveChanges">Save</button>
        </form>

        <button @click="logout" class="logout">Logout</button>
    </div>
</template>

<script>
import { logout } from '@/services/supabase/loginServiceSP';
import { getPets } from '@/services/supabase/petServiceSP';
import { updateUser } from '@/services/supabase/userServiceSP';
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
        getPets().then(data => {
            this.pets = data;0
        }).catch(error => {
            console.log(error);
        });
    },
    methods: {
        saveChanges() {
            updateUser(this.editedUser).then(data => {
                this.$store.commit('SET_USER', data);
                this.editing = !this.editing;
            }).catch(error => {
                console.log(error);
            });
        },
        logout() {
            console.log("Logging out");
            logout()
            this.$router.push('/login');
        }
    },
    computed: {
        user() {
            console.log(this.$store.state.user)
            return this.$store.state.user;
        }
    },

}
</script>

<style lang="scss" scoped>
.user-view {
    height: 100%;
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

@media screen and (max-width: 600px) {
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