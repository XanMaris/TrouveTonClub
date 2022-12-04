<template>
    <div id="main-wrapper">
        <button id="close" @click="$emit('switchDisplay')">X</button>
        <div id="information-wrapper">
           {{club}}
        </div>
    </div>
</template>

<script lang="ts">

export default {
    props: {
      club: {
        required: true
      }
    }
  };

</script>
<style scoped>
#main-wrapper {
    position: absolute;
    top: 10%;
    left: 5%;
    z-index: 1000;
    background: rgba(141, 134, 134, 0.925);
    width: 90%;
    height: 85%;
    border-radius: 20px;
}

#information-wrapper {
    padding-left: 5%;
    padding-top: 2.5%;
    color: black;
    font-size: 150%;
}

#close {
    position: absolute;
    right: 1.5%;
    top: 2.5%
}
</style>
