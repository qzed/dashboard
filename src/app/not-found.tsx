import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="text-slate-100 flex flex-col content-center text-center my-32">
            <h2 className="text-3xl font-bold">404 | Page not found!</h2>
            <p className="text-slate-300 m-2">Could not find the requested page</p>

            <div className="mx-auto mt-6">
                <Link href="/">
                    <div className="text-slate-500 flex flex-row hover:text-slate-100 transition">
                        <span className="material-symbols-rounded text-xl">arrow_back_ios_new</span>
                        <span className="material-symbols-rounded text-xl">arrow_back_ios_new</span>
                        <span className="material-symbols-rounded text-xl">arrow_back_ios_new</span>
                    </div>
                </Link>
            </div>
        </div >
    )
}
