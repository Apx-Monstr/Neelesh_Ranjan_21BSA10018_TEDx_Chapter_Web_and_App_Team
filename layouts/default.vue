<template>
    <div class = "inter text-[1.1rem] duration-700">
        <Header/>
        <Nuxt/>
        <RegisterEve/>
        <Footer/>
        <!-- <Modal/> -->
    </div>
</template>

<script>
import Axios from 'axios';
export default {
    head(){
        return {
            script:[
                {
                    src:"https://cdn.tailwindcss.com"
                },
            ]
        }
    },
    methods:{
        async getData(){
            const msgref = this.$fire.database.ref("/")
            Axios.get(msgref.toString()+".json").then(response=>{
                console.log(response.data)
            })
        },
        async uploadData(){
            const db = this.$fire.database.ref("/speakers")
            let msg = [
                [
                    "Dr. Martha Wolfard",
                    "Team Lead",
                    "Lorem Ipsum Dolor Sit Amet",
                    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format"
                ],
                [
                    "Dr. Nancy Christ",
                    "Content Lead",
                    "Lorem Ipsum Dolor Sit Amet",
                    "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress"
                ],
                [
                    "Dr. Chris King",
                    "",
                    "Lorem Ipsum Dolor Sit Amet",
                    "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format"
                ],
                [
                    "Dr. Albert Dalton",
                    "Prof ",
                    "Lorem Ipsum Dolor Sit Amet",
                    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format"
                ],
            ]
            await db.set(msg)
        }
    },
}
</script>
<style >
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
    body::-webkit-scrollbar {
  width: 0.75em;
}
 
body::-webkit-scrollbar-track {
  background-color:#ffffff;
}
 
body::-webkit-scrollbar-thumb {
  background-color: #000000;
}
    .inter{
        font-family: 'Inter', sans-serif;
    }
    .prim{
        background-color: #eb0028;
    }
    .sec{
        background-color:#000000;
    }
    .white{
        background-color:#ffffff;
    }
    .textW{
        color:#ffffff;
    }
    .textPrim{
        color:#eb0028;
    }
    .textB{
        color:#000000;
    }

</style>