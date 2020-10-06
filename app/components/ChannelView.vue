<template lang="pug">
  .channel(:class="[barType()]")
      .bar(:style="barPercentage()")
      .content
        .current-name {{ channel.currentUsername }}
        .streak {{ channel.currentStreak }}
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";
import {Channel} from "../data/data";

@Component
export default class ChannelView extends Vue {
  @Prop({default: null})
  private channel: Channel;

  @Prop({default: 0})
  private maxStreak: number;

  private barLength(): number {
    return this.channel.currentStreak / this.maxStreak;
  }

  private barPercentage(): number {
    return {
      "--bar": this.barLength() * 100 + "%"
    }
  }

  private barType(): string {
    return this.barLength() < 0.5 ? "extended" : "compact";
  }
}
</script>

<style lang="sass" scoped>
  .channel
    position: relative
    margin: .1em 0

    .content
      padding: 0 .1em
      display: flex
      justify-content: space-between

    .bar
      position: absolute
      width: var(--bar)
      height: 100%
      z-index: -1
      background: red
</style>