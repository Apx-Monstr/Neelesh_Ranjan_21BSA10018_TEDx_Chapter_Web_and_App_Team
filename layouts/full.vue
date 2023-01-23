<template>
    <div class = "inter text-[1.1rem]">
        <Nuxt/>
    </div>
</template>

<script>
export default {
    head(){
        return {
            script:[
                {
                    src:"https://cdn.tailwindcss.com"
                },
                {
                    src:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
                }
            ]
        }
    },
}
</script>