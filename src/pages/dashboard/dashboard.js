import React, { Suspense } from 'react'
import LoadingIndicator from '../../components/loading/loading'

const PplCards = React.lazy(() => import('../../components/pplCards/pplCards'));

const Dashboard = () => (<Suspense fallback={<LoadingIndicator />}><PplCards /></Suspense>)

export default Dashboard;