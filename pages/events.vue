<template>
    <div class = "w-full prim h-[100vh] scroll-smooth">
        <div class="flex fixed w-full top-0 text-6xl p-4 textW justify-between z-10">
            Events
            <nuxt-link to="/">
                <Logo color = "white"/>
            </nuxt-link>
        </div>
        <div class="relative">
            <EventView title="FUTURE OF WORK" date="20TH DECEMBER 2022" class = "bg-[url('https://images.unsplash.com/photo-1560523159-4a9692d222ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRlZCUyMHRhbGt8ZW58MHx8MHx8&auto=format')]"/>
            <EventView title="MIND AND MACHINE" date="10TH OCTOBER 2022" class = "bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress')]"/>
            <EventView title="METAVERSE FOR EVERYBODY" date="10TH AUGUST 2022" class = "bg-[url('https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1ldGF2ZXJzZXxlbnwwfHwwfHw%3D&auto=format')] bg-cover bg-center"/>
        </div>
        
    </div>
</template>

<script>
export default {
    layout:"full",
    head(){
        return {
            title: "Events | TedxVitBhopal",
        }
    },
}
</script>