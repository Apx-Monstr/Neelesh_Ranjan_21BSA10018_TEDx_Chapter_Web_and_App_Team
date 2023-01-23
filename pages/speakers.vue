<template>
    <div>
        <div class = "relative h-[calc(100vh-100px)]">
            <div class="-z-10 absolute sec h-full w-[460px] right-0 top-0">
            </div>
            <div class = "m-auto max-w-screen-xl h-full w-full flex">
                <div class=" flex flex-1 my-auto items-center">
                    <div class="flex-1">
                        <p class = "textPrim font-bold text-base">THE ONES WHO ENLIGHTEN US</p>
                        <div class="text-4xl py-6">
                            Speakers
                        </div>
                        <p class = "pb-4">Meet the Tedx VITBhopal Speakers who <br>enlighten us with their ideas and knowledge</p>
                        <nuxt-link to="/apply-speaker">
                            <MainButton name = "Apply For Speaker"/>
                        </nuxt-link>
                    </div>
                    <div class=" flex-1">
                        <div class="aspect-video rounded-lg bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1626125345510-4603468eedfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHNwZWFrZXJ8ZW58MHx8MHx8&auto=format')]">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-12">
            <div class = "m-auto max-w-screen-xl h-auto w-full grid grid-cols-3 gap-y-24 place-items-center py-16">
                <template v-for="member in speakers">
                    <Profile :name="member[0]" :position="member[1]" :url="member[3]"/>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head(){
        return {
            title: "Speakers | TedxVitBhopal",
        }
    },
    data(){
        return {
            speakers:[
                [
                    'Dr. Martha Wolfard',
                    'Prof Human Behavior',
                    'Lorem Ipsum Dolor Sit Amet',
                    'https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=600'
                ],
                [
                    'Nancy Christ',
                    'Meta Engineer',
                    'Lorem Ipsum Dolor Sit Amet',
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwcHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                ],
                [
                    'Alfred King',
                    'Google Developer Advocate',
                    'Lorem Ipsum Dolor Sit Amet',
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwcHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                ],
                [
                    'Albert Dalton',
                    'AI Engineer',
                    'Lorem Ipsum Dolor Sit Amet',
                    'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwcHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                ]
            ],
        }
    }
}
</script>