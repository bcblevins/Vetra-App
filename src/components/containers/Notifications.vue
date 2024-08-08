<template>
    <div :class=" { 'notification-container': true, 'view': fullView } ">
        <ul>
            <li v-for="n in notifications" key="n.id" @click="go(n)">
                <div class="n-icon">
                    <img :src="imgSrc(n)" alt="icon">
                </div>
                <div class="n-details">
                    <h2> {{ title(n) }} </h2>
                    <p> {{ timeSince(n) }} </p>
                </div>

            </li>
            <li v-show="longerThanFive" @click="$router.push( {name: 'notifications'} )">...</li>
            <li v-show="!longerThanZero" class="no-notifications" >No new notifications</li>
        </ul>
    </div>
</template>

<script>
import NotificationService from '@/services/NotificationService'
import MessageService from '@/services/MessageService';

export default {
    props: ['full-view'],
    data() {
        return {
            notifications: [],
            longerThanFive: false,
            longerThanZero: true
        }
    },
    created() {
        NotificationService.getNotifications(this.$store.state.token).then(response => {
            response.data.sort((a, b) => {
                    let dateA = new Date(a.timestamp);
                    let dateB = new Date(b.timestamp);

                    return dateB - dateA;
                });
            if (response.data.length > 4 && !this.fullView) {
                this.longerThanFive = true;
                this.notifications = response.data.slice(0, 4);
            } else if (response.data.length > 0) {
                this.notifications = response.data;
            } else {
                this.longerThanZero = false;
            }

        }).catch(error => {
            console.log(error);
        });


    },
    methods: {
        title(n) {
            if (n.messageId > 0) {
                n.type = 'message';
                return 'New message received';
            } else if (n.testId > 0) {
                n.type = 'test';
                return 'New test posted';
            } else if (n.requestId > 0) {
                n.type = 'request';
                return 'Update to refill request';
            }
        },
        timeSince(n) {
            let date = new Date(n.timestamp);
            let now = new Date();

            let secondsSince = Math.floor((now - date) / 1000);
            let minutesSince = Math.floor(secondsSince / 60);
            let hoursSince = Math.floor(minutesSince / 60);
            let daysSince = Math.floor(hoursSince / 24);

            if (secondsSince < 60) {
                return "less than a minute ago";
            } else if (secondsSince < (60 * 60)) {
                return minutesSince + " minutes ago";
            } else if (secondsSince < (60 * 60 * 24)) {
                return hoursSince + " hours ago";
            } else {
                return daysSince + " days ago";
            }

        },
        imgSrc(n) {
            if (n.messageId > 0) {
                return '/img/message.svg';
            } else if (n.testId > 0) {
                return '/img/results.svg';
            } else if (n.requestId > 0) {
                return '/img/pill.svg';
            }
        },
        go(n) {
            NotificationService.markRead(n.id, this.$store.state.token).then(response => {


                if (n.type === "message") {
                    MessageService.getMessage(n.messageId, this.$store.state.token).then(response => {
                        let message = response.data;

                        if (message.testId > 0) {
                            this.$router.push({ name: 'tests', params: { id: message.patientId, testId: message.testId } });
                        } else {
                            this.$router.push({ name: 'profile', params: { id: message.patientId } })
                        }
                    })
                } else if (n.type === "test") {
                    this.$router.push({ name: 'tests', params: { id: n.patientId, testId: n.testId } });
                } else if (n.type === "request") {
                    this.$router.push({ name: 'rx', params: { id: n.patientId } });
                } else {
                    console.log("Error redirecting to notification source. Notification type not set properly.")
                }


            }).catch(error => {
                console.log(error);
            });


        }
    }
}
</script>

<style lang="scss" scoped>
.notification-container {
    position: absolute;
    top: 55px;
    background-color: white;
    box-shadow: 0 0 0 max(100vh, 100vw) rgba(0, 0, 0, .3);    z-index: 100;

    ul {
        list-style: none;
        padding: 0px;
        margin: 0px;

        li {
            border-bottom: 1px solid var(--dark-blue);
            padding: 10px;

            .n-icon {
                display: inline-block;
                margin-right: 10px;
                width: 1.7em;

                img {
                    height: 1.7em;
                }
            }

            .n-details {
                display: inline-block;

                h2 {
                    display: inline-block;
                    margin: 0px;
                    font-size: var(--header-3);
                }

                p {
                    margin: 0px;
                    font-size: var(--standard-text);
                }
            }
        }

        li:hover {
            cursor: pointer;
            background-color: var(--background-blue);
        }

        .no-notifications:hover {
            cursor: default;
            background-color: white;
        }
    }
}

.notification-container.view {
    width: 300px;
    height: 400px;
    overflow-y: scroll;
    overflow-x: hidden;
    position:static;
}
</style>