<template>
    <div class = "sec h-[100vh] w-[100vw] flex justify-center items-center fixed top-0 left-0 z-50">
        <div class="h-2/5 w-2/5 white flex flex-col justify-center items-center gap-2 border">
            <p class = "textPrim text-3xl font-bold">
                {{title}}
            </p>
            <p class = "text-xl">
                {{msg}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name:"Modal",
    props:{
        title:{
            type:String,
            default:"I Am Title"
        },
        msg:{
            type:String,
            default:"Lorem Ipsum Dolor Sit Amet "
        }
    }
}
</script>