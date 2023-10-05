import "./admin.scss";
export const metadata = {
    title: "Yasin Content Studio",
    description:
        "This is the administration page of Yasin Walum's Portfolio website",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="admin">{children}</body>
        </html>
    );
}
