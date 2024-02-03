import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Layout } from 'antd';
import "./globals.css";
import { Header, Content } from "antd/es/layout/layout";
import NavMenu from "./layout/Menu";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Kumpau",
  description: "Mari cari port baik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <Layout>
            <Header
              style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{color: '#fff', fontWeight: 'bold', marginRight: '50px' }}
              >
                PROJECT KUMPAU
              </div>
              <NavMenu />
            </Header>
            <Content>
              <div
                style={{
                  padding: '24px 48px',
                  minHeight: 'calc(100vh - 64px)',
                  background: '#D4E4FE'
                }}
              >
                {children}
              </div>
            </Content>
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}
