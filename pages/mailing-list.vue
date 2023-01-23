<template>
    <div>
        <div class="sec textW py-24">
            <div class="m-auto max-w-screen-xl flex flex-col justify-center items-center -z-10">
                <div class="absolute contrst-200 brightness-50 prim h-96 w-96 z-0 origin-center rotate-6 bg-cover bg-center bg-[url('https://images.pexels.com/photos/12817721/pexels-photo-12817721.jpeg')]">
                    
                </div>
                <div class = "flex flex-col justify-center items-center z-10 ">
                    Join Our
                    <div class="textPrim text-5xl">
                        MAILING LIST
                    </div>
                    and get updates right in your malibox
                </div>
            </div>
        </div>
        <div class="sec h-32 w-full"></div>
        <div class="m-auto max-w-screen-lg textW -translate-y-32 text-xl border-2">
            <div class="white p-12 flex flex-col gap-4">
                <Input id = "name"/>
                <Input id = "email" text = "Email" placeholder = "abc@vitbhopal.ac.in"/>
                <MainButton @on-click="validateData" class = "mt-6 hover:scale-100" name = "Register"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head(){
        return {
            title: "Join Our Mailing List | TedxVitBhopal",
        }
    },
    methods:{
        async uploadData(data){
            const db = this.$fire.database.ref("/mailing-list");
            await db.push(data)
        },
        validateData(){
            let name = document.getElementById("name");
            let email = document.getElementById("email");
            if(name.value !== "" && email.value !== ""){
                this.uploadData([name.value,email.value])
                name.value = ""
                email.value = ""
            }
        }
    },
}
</script>