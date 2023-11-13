import AppEntry from "@/components/AppEntry";

export default function AppCategory({ name, entries }: { name: string, entries: AppEntryProps[] }) {
    const components = entries.map((app) => {
        return <AppEntry key={app.name} name={app.name} text={app.text} url={app.url} icon={app.icon} />
    });

    return <div className="max-w-screen-lg my-6">
        <h2 className="font-medium text-slate-400 text-lg">{name}</h2>
        <hr className="h-px my-1 bg-gray-800 border-0" />
        <div className="flex basis-auto flex-row flex-wrap gap-4 justify-center my-4" >
            {components}
        </div>
    </div>
}