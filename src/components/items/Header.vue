<template>
    <div class="header">
        <Notifications v-if="showNotifications" @click="showNotifications = !showNotifications" />
        <div v-show="unreadNotifications > 0" class="notification-bubble">
            <p>{{ unreadNotifications > 10 ? '10+' : unreadNotifications }}</p>
        </div>
        <img src="../../assets/icons/notification.svg" alt="Notifications" class="notifications"
            @click="showNotifications = !showNotifications">
        <img src="../../assets/VetRA-Logo.svg" alt="Logo" class="logo" @click="goToHome">

        <img src="../../assets/icons/user.svg" alt="User" class="user" @click="goToUser">

    </div>
</template>

<script>
import Notifications from '../containers/Notifications.vue';
import NotificationService from '@/services/NotificationService'


export default {
    data() {
        return {
            showNotifications: false,
            unreadNotifications: 0,
        }
    },
    methods: {
        goToHome() {
            this.$router.push({ name: 'home' });
        },
        goToUser() {
            this.$router.push({ name: 'user', params: { id: this.$store.state.user.username } });
        },
        getNotifications() {
            NotificationService.getNotifications(this.$store.state.token).then(response => {
                this.unreadNotifications = response.data.length
            }).catch((error) => {
                console.error(error);

                if (error.response.status === 401 && this.$route.path !== '/') {
                    this.$router.push({ name: 'login' })
                }
            });
        }
    },
    components: {
        Notifications,
    },
    created() {
        if (!(this.$route.name === 'login' || this.$route.name === 'register')) {
            this.getNotifications();
        }
        setInterval(() => {
            if (!(this.$route.name === 'login' || this.$route.name === 'register')) {
                this.getNotifications();
            }
        }, 5000)
    },
    computed: {
        stop() {
            return this.$route.name === 'login' || this.$route.name === 'register'
        }
    },
}
</script>

<style lang="scss" scoped>
.header {
    background-color: #073b4d;
    background-image: url('../../assets/backgrounds/collageDS.png');
    background-size: cover;
    background-position: center;

    height: var(--header-height);
    padding: var(--header-padding);

    img {
        height: 100%;
        display: inline-block;
        height: 40px;
    }

    .notifications {
        position: absolute;
        left: 10px;
    }

    .notifications:hover {
        cursor: pointer;
        filter: contrast(0.8) brightness(1.8) drop-shadow(0 0 0.75rem #ffffff);
    }

    .notification-bubble {
        position: absolute;
        width: 1em;
        height: 1em;
        background-color: rgb(255, 0, 0);
        border-radius: 50%;
        left: 35px;
        z-index: 99;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px;

        p {
            color: white;

        }
    }

    .logo {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
    }

    .user {
        position: absolute;
        right: 10px;
    }

    .user:hover {
        cursor: pointer;
        filter: contrast(0.8) brightness(1.8) drop-shadow(0 0 0.75rem #ffffff);
    }

    span {
        color: white;
        font-size: var(--standard-text);
        display: inline-block;
        position: absolute;
        right: 60px;
    }

    .div {
        height: 100%;
    }

    .logo:hover {
        cursor: pointer;
        filter: contrast(0.8) brightness(1.8) drop-shadow(0 0 0.75rem #ffffff);
    }
}
</style>