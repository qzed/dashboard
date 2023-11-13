type AppCategoryProps = {
    name: string,
    items: AppEntryProps[],
}

type AppEntryProps = {
    name: string,
    text: string,
    url: string,
    icon: string,
}

type AppConfig = {
    categories: AppCategoryProps[],
}