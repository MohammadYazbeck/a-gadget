import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Suspense, lazy } from 'react'

import ProtectedRoute from './ui/ProtectedRoute'
import AppLayout from './ui/layout/AppLayout'
import ScrollToTop from './ui/ScrollToTop'
import Loader from './ui/Loader'

const HomePage = lazy(() => import('./pages/HomePage'))
const Categories = lazy(() => import('./pages/Categories'))
const ItemDetailsPage = lazy(() => import('./pages/ItemDetailsPage'))
const Orders = lazy(() => import('./pages/OrdersList'))
const NewOrder = lazy(() => import('./pages/NewOrder'))

function App() {
    const queryClient = new QueryClient({
        deafultOptions: {
            queries: {
                staleTime: 60 * 1000,
            },
        },
    })

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <Router>
                <ScrollToTop />
                <Suspense fallback={<Loader className="h-full" />}>
                    <Routes>
                        <Route path="/" element={<AppLayout />}>
                            <Route
                                index
                                element={<Navigate replace to="home" />}
                            />
                            <Route path="home" element={<HomePage />} />
                            <Route path="categories" element={<Categories />} />
                            <Route
                                path="item/:nameDescriptionId"
                                element={<ItemDetailsPage />}
                            />
                            <Route
                                path="orders"
                                element={
                                    <ProtectedRoute>
                                        <Orders />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="order/new"
                                element={
                                    <ProtectedRoute>
                                        <NewOrder />
                                    </ProtectedRoute>
                                }
                            />
                        </Route>
                    </Routes>
                </Suspense>
            </Router>
        </QueryClientProvider>
    )
}

export default App
