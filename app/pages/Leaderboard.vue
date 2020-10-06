<template lang="pug">
    .page
        h1 Leaderboard
        .board
          ChannelView(v-for="channel in channels" :key="channel.channelId" :channel="channel" :max-streak="topStreak")
</template>

<script lang="ts">
    import {sortBy} from "lodash";
    import Vue from "vue";
    import Component from 'vue-class-component';
    import {Channel, getTopChannels} from "../data/data";
    import ChannelView from "../components/ChannelView.vue";

    @Component({components: {ChannelView}})
    export default class Leaderboard extends Vue {
      private channels: Channel[] = [];
      private topStreak: number;

      private mounted() {
        getTopChannels().then((result) => {
          const channels = Object.entries(result.data);
          const sortedChannels = sortBy(channels, channel => channel[0]).reverse() as Channel[];
          this.channels = sortedChannels.map(channel => channel[1]);
          this.topStreak = this.channels[0].currentStreak;
        });
      }
    }
</script>

<style lang="sass" scoped>
  h1
    text-align: center
</style>
