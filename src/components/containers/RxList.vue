<template>
    <div class="rx-list">
        <RxItem v-for="med in meds" :key="med.id" :med="med" />
    </div>
</template>

<script>
import RxItem from '../items/RxItem.vue';

    export default {
        props: ['meds'],
        components: {
            RxItem
        }
    }
</script>

<style lang="scss" scoped>
    .rx-list {
        border: 1px solid #094567;
        border-radius: 2em;
        overflow: hidden;
    }
</style>