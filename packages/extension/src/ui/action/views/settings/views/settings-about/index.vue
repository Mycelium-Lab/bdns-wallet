<template>
  <div>
    <settings-inner-header v-bind="$attrs" :is-about="true" />

    <settings-button
      title="Visit our website"
      :is-link="true"
      @click="siteAction"
    />
    <settings-button
      title="Join us on Telegram"
      :is-link="true"
      @click="telegramAction"
    />
    <settings-button
      title="Follow us on Twitter"
      :is-link="true"
      @click="twitterAction"
    />
    <settings-button
      title="Follow us on Discord"
      :is-link="true"
      @click="discordAction"
    />
  </div>
</template>

<script setup lang="ts">
import SettingsInnerHeader from "@action/views/settings/components/settings-inner-header.vue";
import SettingsButton from "@action/views/settings/components/settings-button.vue";

const siteAction = () => {
  window.open("https://bdns.app/#en", "_blank", "noopener");
};

const telegramAction = () => {
  window.open("http://t.me/bdnsapp", "_blank", "noopener");
};

const twitterAction = () => {
  window.open("https://twitter.com/bdnsapp", "_blank", "noopener");
};

const discordAction = () => {
  window.open("https://discord.gg/r2mvw9GAGE", "_blank", "noopener");
};
</script>

<style lang="less">
@import "~@action/styles/theme.less";
</style>
