<template>
    <button @click="onClick(name)" class = "p-3 px-[32px] textW hover:scale-110 hover:ease-in-out hover:duration-700" :class = "mode">
        {{name}}
    </button>
</template>

<script>
export default {
    name:"MainButton",
    props:{
        name:{
            type:String,
            default:"Free Registration"
        },
        mode:{
            default:"prim",
            type:String
        }
    },
    methods:{
        onClick(name){
            this.$emit("on-click", name)
        }
    }
}
</script>