import "./admin.scss";
export const metadata = {
    title: "Yasin Content Studio",
    description:
        "This is the administration page of Yasin Walum's Portfolio website",
    icons: {
        icon: "/assets/logo-white-monkey.svg",
        apple: "/assets/logo-white-monkey.svg",
    },
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
