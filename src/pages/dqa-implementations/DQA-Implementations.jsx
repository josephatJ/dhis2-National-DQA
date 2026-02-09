import { useState } from 'react'
import { SegmentedControl, Button } from '@dhis2/ui'
import { useNavigate } from 'react-router'
import DQAPlansList from './components/dqa-plans-list'
import DQAReportsList from './components/dqa-reports-list'
import { CONTROL_TYPES } from '../../types/dqa'

const options = [
    { label: 'DQA Plans', value: CONTROL_TYPES.PLANS },
    { label: 'DQA Reports', value: CONTROL_TYPES.REPORTS },
]

const DQAImplementationsPage = () => {
    const navigate = useNavigate()

    const [selectedControl, setSelectedControl] = useState(CONTROL_TYPES.PLANS)

    return (
        <div>
            <h3>DQA Implementations</h3>

            <div className="p-2 mb-2 d-flex justify-content-end">
                <Button
                    small
                    primary
                    onClick={() => navigate('/dqa-implementations/new')}
                >
                    + New DQA Plan
                </Button>
            </div>

            <SegmentedControl
                options={options}
                selected={selectedControl}
                onChange={({ value }) => setSelectedControl(value)}
            />

            {selectedControl === CONTROL_TYPES.PLANS && <DQAPlansList />}
            {selectedControl === CONTROL_TYPES.REPORTS && <DQAReportsList />}
        </div>
    )
}

export default DQAImplementationsPage
