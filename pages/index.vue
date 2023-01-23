<template>
	<div class="">
		<Hero para = "Register Now for the most anticipated event of the year"/>
		<div class="py-4 pt-8">
			<div class="m-auto max-w-screen-xl textW flex gap-6">
				<div class="flex-1 p-8">
					<div class="w-full aspect-[9/10] p-4 flex bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1574593749297-cb33a69cd8d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVkJTIwdGFsa3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')]">
					</div>
				</div>
				<div class="flex-1 flex justify-center px-2 flex-col">
					<p class = "textPrim text-sm font-bold">
						— TEDx
					</p>
					<p class = "textB text-4xl font-bold pb-3">
						What is it?
					</p>
					<p class="textB pb-4 pr-8">
						A TEDx event is a local gathering where live TED-like talks and performances are shared with the community. TEDx events are fully planned and coordinated independently, on a community-by-community basis. The content and design of each TEDx event is unique and developed independently, but all of them have features in common.
					</p>
					<div class="text-xl pt-8">
						<nuxt-link to="/register">
							<MainButton name = "Register Now"/>
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
		<div class="py-4">
			<div class="m-auto max-w-screen-xl textW flex gap-6">
				<div class="flex-1 flex justify-center px-2 flex-col">
					<p class = "textPrim text-sm font-bold px-4">
						— TEDxVitBhopal
					</p>
					<p class = "textB text-4xl font-bold pb-3 px-4">
						Who we are
					</p>
					<p class="textB pb-4 px-4">
						We at TEDxVITBhopal believe that dreams can become reality when everyone works together. We are an amalgamation of ideas - intertwined by the bonds we share. Through Infinite Affinities, we celebrate unity and the spirit of togetherness. We are human only through the humanity of others. If we are to accomplish anything- it will, in equal measure, be due to the work and achievements of the entire community. We all have a role to play and its vital that our actions inspire others to want to be a part of a better and brighter future.
					</p>
					<div class="text-xl pt-8 px-4">
						<nuxt-link to="/register">
							<MainButton name = "Register Now"/>
						</nuxt-link>
					</div>
				</div>
				<div class="flex-1 p-8">
					<div class="w-full aspect-[9/10] p-4 flex brightness-75 contrast-125 bg-cover bg-center bg-[url('https://images.pexels.com/photos/401107/pexels-photo-401107.jpeg?auto=compress')]">
					</div>
				</div>
			</div>
		</div>
		<Highlights/>
		<div class="py-6 pt-10">
			<div class="m-auto max-w-screen-xl flex flex-col gap-6 h-96 justify-center items-center relative overflow-hidden sec">
				<div class="h-[110%] w-56 absolute top-0 left-0 rotate-12 origin-top-left white -skew-y-12"></div>
				<p class="text-4xl font-bold text-center textW">
					Interested In Becoming<br> a Speaker
				</p>
				<nuxt-link to="/apply-speaker">
					<MainButton name = "Apply Now"/>
				</nuxt-link>
				<div class="h-[110%] w-56 absolute bottom-0 right-0 rotate-12 origin-bottom-right white -skew-y-12"></div>
			</div>
		</div>
		
		<div class="py-4">
			<div class="m-auto max-w-screen-xl textW flex gap-6">
				<div class="flex-1 p-8">
					<div class="w-full bg-green-500 aspect-square flex">
						<img class = "aspect-square brightness-50 contrast-200" src="../assets/Auditorium.jpeg" alt="" srcset="">
					</div>
				</div>
				<div class="flex-1 flex justify-center px-2 flex-col">
					<p class = "textPrim text-sm font-bold">
						— CONFERENCE VENUE
					</p>
					<p class = "textB text-4xl font-bold pb-3">
						Hosted in VIT Bhopal's Heart
					</p>
					<p class="textB pb-4">
						Most of the TEDxVITBhopal Talks and Events are hosted in the heart of VIT Bhopal Academic Block-our very own Auditorium
					</p>
					<div class="text-xl pt-8">
						<nuxt-link to="/register">
							<MainButton name = "Register Now"/>
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
        <MailList/>
	</div>
</template>

<script>
export default {
  name: 'IndexPage',
  head(){
        return {
            title: "Home | TedxVitBhopal",
        }
    },
}
</script>
