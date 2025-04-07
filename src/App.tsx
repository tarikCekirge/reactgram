import AuthLayout from './_auth/forms/AuthLayout';
import SinginForm from './_auth/forms/SinginForm';
import SingupForm from './_auth/forms/SingupForm';
import Home from './_root/pages/Home';
import RootLayout from './_root/pages/RootLayout';
import './globals.css';
import { Routes, Route } from 'react-router-dom';
const App = () => {
    return (
        <main className='flex h-dvh'>
            <Routes>
                {/* Public Routes */}
                <Route element={<AuthLayout />}>
                    <Route path='/sign-in' element={<SinginForm />} />
                    <Route path='/sign-up' element={<SingupForm />} />
                </Route>

                {/* Private Routes */}
                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </main>
    )
}

export default App
