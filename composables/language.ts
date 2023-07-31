export function language(languages: any): any {
    const direction = Direction()
    const { dir } = direction

    const selectedLanguage = useState<any>(() => ({
        name: "فارسی",
        code: "fa",
        icon: "/public/assets/images/language/fa_IR.svg"
    }));

    const router = useRouter()
    function setLanguage() {
        if (process.client) {
            router.push({
                path: "/",
                query: {
                    "language": localStorage.getItem("language") || "fa"
                }
            })
        }
    }

    onMounted(() => {
        selectedLanguage.value.code = localStorage.getItem("language")
        languages.forEach((language: any) => {
            if (selectedLanguage.value.code === language.code) {
                selectedLanguage.value.name = language.name
                selectedLanguage.value.icon = language.icon
                dir.value = language.dir
            }
        });
        
        setLanguage()
    })
    
    watch(selectedLanguage.value, () => {
        localStorage.setItem("language", selectedLanguage.value.code)
        languages.forEach((language: any) => {
            if (selectedLanguage.value.name === language.name) {
                selectedLanguage.value.code = language.code
                selectedLanguage.value.icon = language.icon
                dir.value = language.dir
            }
        });
        console.log(dir.value);
        
        setLanguage()
    })

    return {
        selectedLanguage
    }
}