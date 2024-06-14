import React from 'react';
import {useLocation} from 'react-router-dom';
import Header from '@/components/layouts/Header.tsx';
import Sidebar from '@/components/layouts/sidebar/Sidebar.tsx';

function MainLayout({children}: { children: React.ReactNode }) {
    const location = useLocation();
    const hideSidebarPaths = ['/auth/login', '/auth/register'];
    const shouldShowSidebar = !hideSidebarPaths.includes(location.pathname);

    return (
        <div>
            <Header/>
            {shouldShowSidebar && <Sidebar/>}

            {shouldShowSidebar ? (
                <>
                    <div className="ml-[calc(100%-80%)]">
                        <div className="mt-[calc(100vh-91.5vh)] p-11">
                            {children}
                        </div>
                    </div>
                </>
            ) : (
                <>{children}</>
            )}
        </div>
    );
}

export default MainLayout;
