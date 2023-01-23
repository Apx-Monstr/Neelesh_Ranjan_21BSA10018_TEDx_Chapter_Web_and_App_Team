<template>
    <div class = "h-auto relative pt-8" :class = "[this.$route.name === 'register'? 'hidden' : '']">
        <div class="sec absolute bottom-0 left-0 w-full h-24 -z-10">

        </div>
        <div class="m-auto max-w-screen-xl h-48 textW text-xl">
            <div class="prim h-full flex justify-between items-center px-16">
                <p class = "font-bold text-3xl">
                    Register now to watch one of the most<br> anticipated events of the year. <span class = "textB">ADVITYA 2023</span>
                </p>
                <nuxt-link to="advitya2023">
                    <MainButton mode = "sec"/>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>