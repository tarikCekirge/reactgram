import AuthLayout from './_auth/AuthLayout';
import SinginForm from './_auth/forms/SinginForm';
import SingupForm from './_auth/forms/SingupForm';
import Home from './_root/pages/Home';
import RootLayout from './_root/pages/RootLayout';
import { Routes, Route } from 'react-router-dom';
import './globals.css';
import { Toaster } from "@/components/ui/sonner"


const App = () => {
    return (
        <>
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
            <Toaster position="top-center" expand={false} />
        </>
    )
}

export default App
