<template>
    <div class = "h-56 py-4 my-4" :class = "[this.$route.name === 'about' || this.$route.name === 'speakers' || this.$route.name === 'mailing-list' || this.$route.name === 'apply-speaker' || this.$route.name === 'register'? 'hidden' : '']">
        <div class="m-auto max-w-screen-xl h-48 textW text-xl relative overflow-hidden">
            <div class="inset-0 h-full w-36 absolute -z-10 rotate-12 origin-top prim -skew-y-12">

            </div>
            <div class="h-full flex justify-between items-center px-16 textB">
                <p class = "text-4xl font-bold">Join Our Mailing List Now</p>
                <nuxt-link to="mailing-list">
                    <MainButton name = "Join Now"/>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"MailList",
}
</script>