<template lang="pug">
    #app
        Leaderboard(ref="board")
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import Leaderboard from "./pages/Leaderboard.vue";

    @Component({components: {Leaderboard}})
    export default class App extends Vue {

        $refs!: {
            board: Leaderboard
        }

        public mounted() {

        }
    }
</script>

<style lang="sass">
    // Global styles
    html
        font-size: 16px

    body
        margin: 0
        padding: 0

        font-size: 62.5%
</style>

<style lang="sass" scoped>
  #app
    width: 40%
    margin: 0 auto
    font-size: 2em
</style>
