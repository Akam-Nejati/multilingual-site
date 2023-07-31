<script setup lang="ts">
import { MenuItem } from "primevue/menuitem/MenuItem"

const { data, erorr }: any = await useFetch("https://root.vlix.ir/api/language/list", {
    method: "post",
})
const selectLanguage = language([...Object.values(data.value.result)])
const { selectedLanguage } = selectLanguage
const languages = useState<any>(() => [...Object.values(data.value.result)])
const dircion = Direction()
const { dir } = dircion

const items: MenuItem[] = [
    {
        label: 'Quit',
        icon: 'pi pi-home'
    },
    {
        label: 'home',
        icon: 'pi pi-home',
        to: `/?language=${selectedLanguage.value.code}`,
    },
]
</script>

<template>
    <Menubar :model="items">
        <template #start>
            <div class="text-xl font-bold mr-8 !w-full sm:!w-fit">
                logo
            </div>
        </template>
        <template #end>
            <div class="flex justify-between flex-row-reverse items-center gap-4">
                <div>
                    <Dropdown v-if="languages" v-model="selectedLanguage.name" :options="languages" optionLabel="name"
                        option-value="name" class="w-full md:w-[14rem] bg-transparent">
                        <template #value="slotProps">
                            <div v-if="slotProps.value" class="flex items-center" :dir="dir === 'rtl' ? 'rtl' : 'ltr'">
                                <img :alt="slotProps.value.label"
                                    :src="`https://root.vlix.ir${selectedLanguage.icon}`"
                                    :class="{'mr-4': dir === 'ltr', 'ml-4': dir === 'rtl'}" style="width: 18px" />
                                <div >{{ selectedLanguage.name }}</div>
                            </div>
                        </template>
                        <template #option="slotProps">
                            <div class="flex items-center" :dir="dir === 'rtl' ? 'rtl' : 'ltr'">
                                <img :alt="slotProps.option.label" :src="`https://root.vlix.ir${slotProps.option.icon}`"
                                    :class="{'mr-4': dir === 'ltr', 'ml-4': dir === 'rtl'}" style="width: 18px" />
                                <div >{{ slotProps.option.name }}</div>
                            </div>
                        </template>
                    </Dropdown>
                </div>
            </div>
        </template>
    </Menubar>
</template>

<style>
.p-menubar {
    @apply w-full max-w-7xl border-none justify-between sm:justify-between !bg-transparent p-4 md:p-2
}

.p-menubar-start {
    @apply w-full lg:w-fit;
}

.p-menubar-end {
    @apply !m-0;
}

.p-menubar-root-list {
    @apply !w-[-webkit-fill-available] sm:!w-fit !mx-4 !px-2 rounded-xl gap-2 !shadow-md sm:!shadow-none
}

.p-menuitem-content {
    @apply !rounded-xl sm:!rounded-full
}

.p-dropdown,
.p-dropdown-panel {
    @apply bg-transparent
}

.p-dropdown-panel {
    @apply mt-4
}

.p-menubar-button {
    @apply mx-8
}

.p-menuitem-text,
.p-menuitem-icon{
    @apply !px-2
}

.p-menuitem-link{
    @apply !py-6
}
</style>