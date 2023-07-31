<template>
    <div class="w-full relative md:h-[calc(100vh-10.125rem)] flex justify-center">
        <!-- <img class="absolute w-[80rem] right-[-20px]" src="./../assets/images/Vector 1.svg" alt=""> -->
        <div class="flex flex-col-reverse md:grid grid-cols-4 gap-12 relative z-10 h-full px-8 md:px-2">
            <div class="h-full col-span-2 flex items-center">
                <div class="flex flex-col justify-between gap-4">
                    <span class="text-5xl md:text-7xl font-extrabold">Lorem ipsum dolor sit amet</span>
                    <small class="text-lg md:text-xl text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dignissimos sit dicta sint doloribus nesciunt est cupiditate, obcaecati harum, incidunt at, velit laboriosam rerum soluta aliquid voluptatem animi accusamus perspiciatis.
                    </small>
                    <Button label="buy VPN" rounded  class="w-fit"/>
                </div>
            </div>
            <div class="col-span-2 flex justify-end ">
                <img class="h-full" src="../assets/images/robot-svgrepo-com.svg" alt="">
            </div>
        </div>
    </div>
</template>