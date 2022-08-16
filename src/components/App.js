import React from 'react'
import { createRoot } from 'react-dom/client'
import Layout from "./Layout"
import Filters from './Layout/Filters'
import Jobs from './Layout/Jobs'
import { FiltersProvider } from '../context/FiltersContext'

import "./App.sass"

const App = () =>(
    <Layout>
        <FiltersProvider>
            <Filters />
            <Jobs />
        </FiltersProvider>
    </Layout>
)

const root = createRoot(document.getElementById('app'))
root.render(<App />)