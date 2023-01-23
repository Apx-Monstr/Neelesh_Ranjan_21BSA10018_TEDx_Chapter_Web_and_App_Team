<template>
    <div class = "h-16 flex">
        <img v-if="color === 'white'" src = "@/assets/logo-white.png">
        <img v-else src= "@/assets/logo-black.png">
    </div>
</template>

<script>
export default {
    props:{
        size:{
            default:"h-16",
            type:String,
        },
        color:{
            default:"black",
            type:String,
        }
    },
}
</script>