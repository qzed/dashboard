import AppCategory from "@/components/AppCategory";

export default function AppDashboard({ cfg }: { cfg: AppConfig }) {
    const categories = cfg.categories.map((c: AppCategoryProps) => {
        return <AppCategory key={c.name} name={c.name} entries={c.items} />
    })

    if (categories.length === 0) {
        return <div></div>
    }

    return <div>
        <div className="my-12">
            <h1 className="font-medium text-slate-300 text-xl">Applications</h1>
            <hr className="h-px my-1 bg-gray-600 border-0" />
            <div>
                {categories}
            </div>
        </div>
    </div>
}