<template>
    <div class = "inter text-[1.1rem] duration-700">
        <Header/>
        <Nuxt/>
        <RegisterEve/>
        <Footer/>
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
            ]
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