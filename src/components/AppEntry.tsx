export default function AppEntry({ name, text, url, icon }: { name: string, text: string, url: string, icon: string }) {
    return <div>
        <a className="p-4 w-64 mx-auto bg-slate-900 text-slate-300 hover:text-slate-100 rounded-lg shadow-lg flex items-center space-x-4 border-solid border border-cyan-900 hover:border-cyan-500 overflow-hidden transition-all" href={url}>
            <span className="text-3xl material-symbols-rounded">{icon}</span>
            <div>
                <p className="text-base font-medium">{name}</p>
                <p className="text-xs text-slate-500">{text}</p>
            </div>
        </a>
    </div>
}