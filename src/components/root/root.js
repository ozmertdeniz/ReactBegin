import React, { Suspense } from 'react';
import Header from '../header/header';
import './root.css';
import { Route, Switch } from 'react-router-dom'
import LoadingIndicator from '../loading/loading'

const Dashboard = React.lazy(() => import('../../pages/dashboard/dashboard'));
const UnitManagement = React.lazy(() => import('../../pages/unit-mgmt'));
const CategoryManagement=React.lazy(()=>import('../../pages/cat-mgmt'))


// Functional Component

//PROPS
function Root() {
    return (
        <div className='ui container'>
            <Header />
            <Suspense fallback={<LoadingIndicator/>}>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/category" component={CategoryManagement} />
                    <Route path="/unit" component={UnitManagement} />
                </Switch>
            </Suspense>
        </div>
    );
}
// Nesting
// Resuability
// Configuration
export default Root;
