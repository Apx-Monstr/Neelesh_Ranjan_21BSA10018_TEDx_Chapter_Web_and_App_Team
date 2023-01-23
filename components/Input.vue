<template>
    <div class = "flex-1">
        <p class = "py-2 textB">
            {{text}}
        </p>
        <input :id="id" class = "w-full border-2 text-xl p-4 caret-black textB hover:none focus:none active:none rounded" type="text" :placeholder ="placeholder">
    </div>
</template>

<script>
export default {
    props:{
        text:{
            type:String,
            default:"Name"
        },
        placeholder:{
            type:String,
            default:"Full Name"
        },
        id:{
            default:"name"
        }
    }
}
</script>