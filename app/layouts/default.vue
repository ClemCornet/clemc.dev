<template>
  <div class="flex h-screen min-h-screen flex-col justify-between">
    <LayoutHeaderDesktop v-if="$device.isDesktop" />
    <LayoutHeaderMobile v-if="$device.isMobile" />
    <slot />
    <LayoutFooterDesktop v-if="$device.isDesktop" />
    <LayoutFooterMobile v-if="$device.isMobile" />
    <LayoutBottomBarMobile v-if="$device.isMobile" />
  </div>
</template>
