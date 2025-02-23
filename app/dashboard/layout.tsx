export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <h2>dashboard layout</h2>
            {children}
        </div>
    );
}
