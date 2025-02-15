import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.tsx';
import ClientsPage from './pages/clients.tsx';
import ExercisesPage from './pages/exercises.tsx';
import Navbar from './components/Navbar';


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/clients" element={<ClientsPage />} />
                <Route path="/exercises" element={<ExercisesPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App
