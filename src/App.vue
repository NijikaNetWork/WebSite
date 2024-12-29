<script setup>

</script>

<template>
  <main>
    <div class="mdui-appbar-with-toolbar mdui-container">
      <router-view></router-view>
    </div>
    <Sidebar />
    <button class="mdui-fab mdui-fab-fixed mdui-ripple mdui-color-theme-200" onclick="window.open('https://space.bilibili.com/435502585', '_blank');">
      <img src="/images/bilibili.svg" class="mdui-icon material-icons svg-icon"/>
    </button>
  </main>
</template>
