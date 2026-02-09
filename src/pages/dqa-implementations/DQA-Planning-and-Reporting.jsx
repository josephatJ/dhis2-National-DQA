import * as React from 'react'
import { Tab, TabBar, Button } from '@dhis2/ui'
import { useNavigate } from 'react-router'

const tabs = [
    {
        label: 'Identifying DQ Issues',
        id: 'dqa-issues-and-tools',
    },
    {
        label: 'Indicators',
        id: 'indicators',
    },
]

const DQAPlanningAndReportingPage = () => {
    const navigate = useNavigate()

    // ✅ State to track the current selected tab
    const [currentTab, setCurrentTab] = React.useState(tabs[0])

    return (
        <div>
            <div className="p-2 mb-2 d-flex justify-content-left align-items-center">
                <Button
                    small
                    primary
                    onClick={() => navigate('/dqa-implementations')}
                >
                    Back to List
                </Button>
                <span className="ms-2">DQA Implementation Steps</span>
            </div>

            <TabBar>
                {tabs.map((tab) => (
                    <Tab
                        key={tab.id}
                        selected={currentTab.id === tab.id}
                        onClick={() => setCurrentTab(tab)}
                    >
                        {tab.label}
                    </Tab>
                ))}
            </TabBar>

            {/* Optional: render different content per tab */}
            <div className="mt-3">
                {currentTab.id === 'dqa-issues-and-tools' && (
                    <div>Content for Identifying DQ Issues</div>
                )}
                {currentTab.id === 'indicators' && (
                    <div>Content for Indicators</div>
                )}
            </div>
        </div>
    )
}

export default DQAPlanningAndReportingPage
