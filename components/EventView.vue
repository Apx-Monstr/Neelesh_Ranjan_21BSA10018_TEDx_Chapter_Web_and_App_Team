<template>
    <div class="h-screen white textW w-full sticky top-0 bg-cover brightness-50 contrast-125">
        <div class="absolute bottom-0 right-0 text-6xl m-4">
            {{title}}
            <div class=" text-base absolute right-0 -top-8">
                <div class="textPrim text-right">
                    {{tag}}
                </div>
                {{date}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"EventView",
    props:{
        title:{
            default:"Event",
            type:String,
        },
        date:{
            default:"22ND JAN 2023",
            type:String,
        },
        tag:{
            default:"",
            type:String,
        },
    },
}
</script>