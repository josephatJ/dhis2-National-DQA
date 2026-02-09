import { Menu, MenuItem } from '@dhis2/ui'
import * as React from 'react'
import { useNavigate, useLocation } from 'react-router'
const AppMenu = () => {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div>
            <Menu>
                <MenuItem
                    active={location.pathname === '/'}
                    onClick={() => {
                        navigate(`/`)
                    }}
                    label="Dashboard"
                />
                <MenuItem
                    active={location.pathname === '/dqa-implementations'}
                    onClick={() => {
                        navigate(`/dqa-implementations`)
                    }}
                    label="DQA Implementations"
                />
                <MenuItem
                    active={location.pathname == '/settings'}
                    onClick={() => {
                        navigate(`/settings`)
                    }}
                    label="Settings"
                />
            </Menu>
        </div>
    )
}
export default AppMenu
