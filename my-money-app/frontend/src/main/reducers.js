import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import DasboardReducer from '../dashboard/DasboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/BillingCycleReducer'

const rootReducer = combineReducers({
    dashboard: DasboardReducer,
    tab: TabReducer,
    billingCycles: BillingCycleReducer,
    form: formReducer
})

export default rootReducer