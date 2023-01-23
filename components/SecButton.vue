<template>
    <button class = "white p-2 px-4 hover:scale-110">
        {{text}}
    </button>
</template>

<script>
export default {
    name:"SecButton",
    props:{
        text:{
            type:String,
            default: "TedxVitB"
        }
    }
}
</script>