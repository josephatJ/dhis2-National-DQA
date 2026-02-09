import { useState } from 'react'
import { SegmentedControl } from '@dhis2/ui'
import { Button } from '@dhis2/ui'
import { useNavigate, useLocation } from 'react-router'
import DQAPlansList from './components/dqa-plans-list'
import DQAReportsList from './components/dqa-reports-list'
import { ControlType } from '../../types/dqa'

const DQAImplementationsPage = () => {
    const navigate = useNavigate()
    const options = [
        { label: 'DQA Plans', value: 'plans' },
        { label: 'DQA Reports', value: 'reports' },
    ]
    const [selectedControl, setSelectedControl] =
        useState < ControlType > 'plans'
    return (
        <div>
            <h3>[Under construction]</h3>
            <div>
                A placeholder for an DQA Implementations page showing under a
                separate client-side route
            </div>

            <div>
                <Button
                    small
                    primary
                    onClick={() => {
                        navigate(`/dqa-implementations/new`)
                    }}
                >
                    + New DQA Plan
                </Button>
            </div>
            <SegmentedControl
                options={options}
                selected={selectedControl}
                onChange={({ value }) => {
                    console.log(value)
                    setSelectedControl(value)
                }}
            />

            {/* {selectedControl === 'plans' && <DQAPlansList />}
            {selectedControl === 'reports' && <DQAReportsList />} */}
        </div>
    )
}
export default DQAImplementationsPage
