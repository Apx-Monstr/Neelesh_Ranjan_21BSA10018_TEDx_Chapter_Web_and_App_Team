<template>
    <div class = "h-[100px] sticky top-0 white z-50 w-full border-b-2">
        <div class="m-auto max-w-screen-xl h-full w-full flex">
           <div class = "flex flex-1 items-center justify-between">
                <nuxt-link to="/">
                    <Logo/>
                </nuxt-link>
                <div class="flex gap-4 items-center ">
                    <div class="gap-4 hidden lg:flex">
                        <nuxt-link to="/events">
                            <SecButton text = "Events"/>
                        </nuxt-link>
                        <nuxt-link to="/speakers">
                            <SecButton text = "Speakers"/>
                        </nuxt-link>
                        <nuxt-link to="/about">
                            <SecButton text = "VITB Coalition"/>
                        </nuxt-link>
                    </div>
                    <nuxt-link to="/register">
                        <MainButton class = "motion-safe:animate-pulse hidden sm:block"/>
                    </nuxt-link>
                </div>
           </div>
        </div>
    </div>
</template>