<template lang="pug">
    .page
        h1 Leaderboard
        .board
          ChannelView(v-for="channel in channels" :key="channel.channelId" :channel="channel" max-streak="420")
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from 'vue-class-component';
    import {Prop} from 'vue-property-decorator';
    import {Channel, testData} from "../data/data";
    import ChannelView from "../components/ChannelView.vue";

    @Component({components: {ChannelView}})
    export default class Leaderboard extends Vue {

      @Prop({default: []})
      private channels: Channel[];

      private mounted() {
        this.channels = testData;
      }
    }
</script>

<style lang="sass" scoped>
  h1
    text-align: center
</style>
