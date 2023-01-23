<template>
    <div>
        <SpeakerHero/>
        <div class="sec h-32 w-full"></div>
        <div class="m-auto max-w-screen-lg textW -translate-y-32 text-xl border-2">
            <div class="white p-12 flex flex-col gap-4">
                <div class="flex gap-4">
                    <Input/>
                    <Input text = "Email" placeholder = "abc@email.com"/>
                </div>
                <div class="flex gap-4">
                    <Input text = "Phone Number" placeholder = " 994 935 936"/>
                    <Input text = "You Are" placeholder = "Position or Designation"/>
                </div>
                <Input text = "Linked URL" placeholder = ""/>
                <MainButton class = "mt-6 hover:scale-100" name = "Register"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head(){
        return {
            title: "Speaker Application | TedxVitBhopal",
        }
    },
}
</script>