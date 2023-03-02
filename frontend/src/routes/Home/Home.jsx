import { /* Navigate */ Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages'
import { Layout } from '../../layout/Layout';
export const HomeRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </Layout>
    )
}