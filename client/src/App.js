import React from "react";
import {BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom'
import Header from "./pages/Header";
import EnterPage from "./pages/EnterPage"
import MailPage from "./pages/MailPage"

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<EnterPage />} />
                <Route exact path="/mail" element={<MailPage />} />
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </Router>
    );
}

export default App;
