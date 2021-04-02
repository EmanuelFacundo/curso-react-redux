import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DasboardReducer from '../dashboard/DasboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/BillingCycleReducer'
import AuthReducer from '../auth/AuthReducer'

const rootReducer = combineReducers({
    dashboard: DasboardReducer,
    tab: TabReducer,
    billingCycles: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer,
})

export default rootReducer