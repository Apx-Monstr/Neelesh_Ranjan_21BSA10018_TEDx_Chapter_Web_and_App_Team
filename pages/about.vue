<template>
    <div>
        <div class = "relative h-[calc(100vh-100px)]">
            <div class="-z-10 absolute sec h-full w-[460px] right-0 top-0">
            </div>
            <div class = "m-auto max-w-screen-xl h-full w-full flex">
                <div class=" flex flex-1 my-auto items-center">
                    <div class="flex-1">
                        <p class = "textPrim font-bold text-base">FEB 10, 2023</p>
                        <div class="text-4xl py-6">
                            Meet The Organizers
                        </div>
                        <p class = "pb-8">Meet the Tedx VITBhopal Organizers that make the things possible</p>
                        <nuxt-link to="/register">
                            <MainButton/>
                        </nuxt-link>
                    </div>
                    <div class=" flex-1">
                        <div class="aspect-video rounded-lg bg-[url('https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600')]">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-12">
            <div class = "m-auto max-w-screen-xl h-auto w-full grid grid-cols-3 gap-y-24 place-items-center py-16">
                <template v-for="member in members">
                    <Profile :name="member[0]" :position="member[1]" :url="member[3]"/>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
export default {
    head(){
        return {
            title: "VITB Coalition | TedxVitBhopal",
        }
    },
    methods:{
        async getData(){
            const msgref = this.$fire.database.ref("/members")
            Axios.get(msgref.toString()+".json").then(response=>{
                this.members = response.data
                console.log(this.members)
            })
        }
    },
    data(){
        return {
            members:[]
        }
    },
    created(){
        this.getData()
    }
}
</script>