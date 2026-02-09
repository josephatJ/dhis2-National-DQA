import React from 'react'
import { HashRouter, Route, Routes } from 'react-router'
import App from '@/App'
import classes from '@/App.module.css'
import AboutPage from '@/components/About'
import AppMenu from '@/components/AppMenu'
import DashboardPage from './pages/dashboard/Dashboard'
import DQAImplementationsPage from './pages/dqa-implementations/DQA-Implementations'
import SettingsPage from './pages/settings/Settings'
import DQAPlanningAndReportingPage from './pages/dqa-implementations/DQA-Planning-and-Reporting'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'

const AppWrapper = () => {
    return (
        <div className={classes.appWrapper}>
            {/*
    For the client-side routing to work on a DHIS2 server, it needs to use HashRouter
    otherwise it will interfer with the server-side routing
    */}
            <HashRouter>
                <div className={classes.sidebar}>
                    <AppMenu />
                </div>
                <div className={classes.main}>
                    <Routes>
                        {/* <Route path="/" element={<App />} /> */}
                        <Route path="/" element={<DashboardPage />} />
                        <Route
                            path="/dqa-implementations"
                            element={<DQAImplementationsPage />}
                        />
                        <Route
                            path="/dqa-implementations/:id"
                            element={<DQAPlanningAndReportingPage />}
                        />
                        <Route path="/settings" element={<SettingsPage />} />
                    </Routes>
                </div>
            </HashRouter>
        </div>
    )
}
export default AppWrapper
