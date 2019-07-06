<template>
    <div class="home">
        <img alt="Page logo" src="../assets/logo.png">
        <h1> {{ tittel }} </h1>
    </div>
</template>

<script lang="ts">
export default {
    data: () => ({
        tittel: 'Bands in my town',
    }),
};
</script>