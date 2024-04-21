import UsersTable from "./table";

export const metadata = {
    title: 'List User'
};

export default function Page() {
    return (
        <main className="w-full">
            <header>
                <h1 className="text-2xl">
                    List User
                </h1>
            </header>
            <section>
                <UsersTable />
            </section>
        </main>
    )
}