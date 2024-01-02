import React from 'react';
import { Header } from './Components/Header'
import { Main } from './Components/Main'
import { Footer } from './Components/Footer'

export function App() {
    return ( 
        <div className="card">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}