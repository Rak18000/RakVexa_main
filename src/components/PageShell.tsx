import SiteHeader from './SiteHeader'; import SiteFooter from './SiteFooter';
export default function PageShell({children}:{children:React.ReactNode}){return <><SiteHeader/><main className="min-h-screen pt-24">{children}</main><SiteFooter/></>}
