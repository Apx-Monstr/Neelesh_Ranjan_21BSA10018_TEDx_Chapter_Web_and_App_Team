<template>
    <div class = "">
        <Hero/>
        <div class="sec h-32 w-full">

        </div>
        <div class="m-auto max-w-screen-lg textW -translate-y-32 text-xl border-2">
            <div class="white p-12 flex flex-col gap-4">
                <div class="flex gap-4">
                    <Input/>
                    <Input text = "Email" placeholder = "abc@vitbhopal.ac.in"/>
                </div>
                <div class="flex gap-4">
                    <Input text = "Phone Number" placeholder = "+91 994 935 93"/>
                    <Input text = "You Are" placeholder = "Student,Faculty,Staff,etc"/>
                </div>
                <Input text = "You Are" placeholder = "Student,Faculty,Staff,etc"/>
                <MainButton class = "mt-6" name = "Register"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head(){
        return {
            title: "Register | TedxVitBhopal",
        }
    },
}
</script>