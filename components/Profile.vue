<template>
    <div class ="w-[300px] flex flex-col items-center">
        <div class="aspect-square bg-cover bg-center rounded w-full "
        :class="['bg-[url('+url+')]']"></div>
        <p class = "text-2xl bold pt-4">
            {{name}}
        </p>
        <p class ="text-base pt-2">
            {{position}}
        </p>
    </div>
</template>

<script>
export default {
    name:"Profile",
    props:{
        name:{
            type:String,
            default:"Alan Rickman"
        },
        position:{
            type:String,
            default:"Event Head"
        },
        url:{
            default:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8&auto=format&'
        }
    }
}
</script>