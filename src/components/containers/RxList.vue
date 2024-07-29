<template>
    <div class="rx-list" >
        <RxItem v-for="med in meds" :key="med.id" :med="med" :class="{ 'shrink': shrink}"/>
    </div>
</template>

<script>
import RxItem from '../items/RxItem.vue';

    export default {
        props: {
            meds: Object,
            shrink: {
                type: Boolean,
                default: false
            }
        },
        components: {
            RxItem
        },
        data() {
            return {
            }
        },
        
    }
</script>

<style lang="scss" scoped>
    .rx-list {
        border: 3px solid #094567;
        border-block: 1px solid;
        overflow: scroll;
        font-size: var(--standard-text);

    }


</style>