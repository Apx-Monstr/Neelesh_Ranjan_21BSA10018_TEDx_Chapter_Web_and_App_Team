<template>
    <div class="py-4 sec my-8">
			<div class="m-auto max-w-screen-xl flex flex-col gap-6 justify-center items-center pb-10 pt-2">
				<div class="textPrim text-sm text-center pt-10">
					PREVIOUS TALKS
					<p class = "text-5xl textW text-center p-4">
						Highlights
					</p>
				</div>
				<div class="w-full max-w-screen-lg pb-10 text-base">
					<div class="border-b border-gray-700 mb-4">
						<ul class="flex flex-wrap -mb-px justify-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
							<li class="mr-2" role="presentation">
								<button class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 font-medium text-center border-transparent border-b-2 text-gray-400 hover:text-gray-300 active" id="eve1-tab" data-tabs-target="#eve1" type="button" role="tab" aria-controls="eve1" aria-selected="false">Future of Work</button>
							</li>
							<li class="mr-2" role="presentation">
								<button class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 font-medium text-center border-transparent border-b-2 text-gray-400 hover:text-gray-300" id="eve2-tab" data-tabs-target="#eve2" type="button" role="tab" aria-controls="eve2" aria-selected="true">Mind and Machine</button>
							</li>
							<li class="mr-2" role="presentation">
								<button class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 font-medium text-center border-transparent border-b-2 text-gray-400 hover:text-gray-300" id="eve3-tab" data-tabs-target="#eve3" type="button" role="tab" aria-controls="eve3" aria-selected="false">Metaverse for Everybody</button>
							</li>
						</ul>
					</div>
					<div id="myTabContent" class = "w-full">
						<div class="relative contrast-125 aspect-video p-4 rounded-lg bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1560523159-4a9692d222ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRlZCUyMHRhbGt8ZW58MHx8MHx8&auto=format')]" id="eve1" role="tabpanel" aria-labelledby="eve1-tab">
							<div class="absolute textW text-4xl font-bold">
								<p class = "text-sm textPrim">
									20TH DECEMBER 2022
								</p>
                                FUTURE OF WORK
							</div>
						</div>
						<div class="relative contrast-125 aspect-video p-4 rounded-lg bg-gray-800 bg-cover bg-center hidden bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress')]" id="eve2" role="tabpanel" aria-labelledby="eve2-tab">
							<div class="absolute textW text-4xl font-bold">
								<p class = "text-sm textPrim">
									10TH OCTOBER 2022
								</p>
								MIND AND MACHINE
							</div>
						</div>
						<div class="relative contrast-125 aspect-video p-4 rounded-lg bg-gray-800 bg-cover bg-center hidden bg-[url('https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1ldGF2ZXJzZXxlbnwwfHwwfHw%3D&auto=format')]" id="eve3" role="tabpanel" aria-labelledby="eve3-tab">
							<div class="absolute textW text-4xl font-bold">
								<p class = "text-sm textPrim">
									10TH AUGUST 2022 
								</p>
								METAVERSE FOR EVERYBODY
							</div>
						</div>
					</div>
				</div>
				<script src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"></script>
			</div>
		</div>
</template>