<template>
    <button class = "text-base py-2 text-left">
        {{ text }}
    </button>
</template>

<script>
export default {
    name:"FootButton",
    props:{
        text : {
            type : String,
            default : "Footer Button"
        }
    }
}
</script>