<template>
    <div class = "">
        <div class="sec h-[80vh] w-full flex justify-center items-center bg-[url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfHw%3D&auto=format')] bg-cover bg-center brightness-75 contrast-150">
            <Logo color = "white" class = "h-24 -translate-y-10"/>
        </div>
        <div class="white w-full m-auto max-w-screen-xl flex -translate-y-36 p-6 border-2 pt-10">
            <div class="flex-1 flex flex-col gap-4 p-4">
                <div class=" text-4xl p-2 relative">
                    <div class="text-base textPrim absolute -top-5 font-bold">
                        10TH FEBRUARY 2023 | 10 AM ONWARDS
                    </div>
                    ADVITYA 2023 | Work and Life Balance by TedxVitBhopal
                </div>
                <div class="p-2 text-justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam facere et suscipit vel! Laboriosam modi distinctio, molestiae aliquam quidem rerum eveniet sed culpa cupiditate, impedit reprehenderit maxime quia, eligendi expedita.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam facere et suscipit vel! Laboriosam modi distinctio, molestiae aliquam quidem rerum eveniet sed culpa cupiditate, impedit reprehenderit maxime quia, eligendi expedita.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam facere et suscipit vel! Laboriosam modi distinctio, molestiae aliquam quidem rerum eveniet sed culpa cupiditate, impedit reprehenderit maxime quia, eligendi expedita.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam facere et suscipit vel! Laboriosam modi distinctio, molestiae aliquam quidem rerum eveniet sed culpa cupiditate, impedit reprehenderit maxime quia, eligendi expedita.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam facere et suscipit vel! Laboriosam modi distinctio, molestiae aliquam quidem rerum eveniet sed culpa cupiditate, impedit reprehenderit maxime quia, eligendi expedita.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam facere et suscipit vel! Laboriosam modi distinctio, molestiae aliquam quidem rerum eveniet sed culpa cupiditate, impedit reprehenderit maxime quia, eligendi expedita.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam facere et suscipit vel! Laboriosam modi distinctio, molestiae aliquam quidem rerum eveniet sed culpa cupiditate, impedit reprehenderit maxime quia, eligendi expedita.
                </div>
            </div>
            <div class="flex p-4 flex-col gap-4 pt-6">
                <MainButton name = "Register Now" />
                <p class="text-2xl">
                    Speakers
                </p> 
                <div class="bg-red flex flex-col gap-6">
                    <Profile name = "Dr. Martha Wolfard" position = "Prof Human Behavior" url="https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                    <Profile name = "Alfred King" position = "Google Developer Advocate" url = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwcHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head(){
        return {
            title: "Advitya 2023 | TedxVitBhopal",
        }
    },
}
</script>