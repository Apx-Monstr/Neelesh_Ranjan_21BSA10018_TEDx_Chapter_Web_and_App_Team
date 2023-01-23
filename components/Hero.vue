<template>
    <div class="  sec textW  py-24 text-2xl">
        <div class="m-auto max-w-screen-xl flex justify-center items-center">
            <div class="flex flex-col items-center content-center flex-1">
                <p>
                    Register Now
                </p>
                <p class = "text-5xl font-bold textPrim pt-2">
                    ADVITYA 2023
                </p>
                <p v-if="para" class = "text-base pb-8 pt-2 text-center" >
                    {{para}}
                </p>
                <p v-else class = "text-base pb-8 pt-2 text-center">
                    Please fill out your info below to register for the <br> TEDxVITB ADVITYA event on April 23, 2022.
                </p>
                <nuxt-link to="/advitya2023">
                    <MainButton name = "More Info"/>
                </nuxt-link>
            </div>
            <div class=" flex gap-6 items-center justify-center origin-center rotate-12  flex-1">
                <div class="w-32 h-56">
                    <div class="h-full w-full rounded-md bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&')]">
                        
                    </div>
                </div>
                <div class="w-32 h-80">
                    <div class="h-full w-full rounded-md bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&')]">
                        
                    </div>

                </div>
                <div class="w-32 h-56">
                    <div class="h-full w-full rounded-md bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&')]">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        para:{
            default:false
        }
    }
}
</script>