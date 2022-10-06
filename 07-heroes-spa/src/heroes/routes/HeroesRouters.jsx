import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DCPage, HeroPage, MarvelPage, SearchPage } from '../pages'
import { Navbar } from '../../ui'

export const HeroesRouters = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DCPage />} />
                    <Route path='search' element={<SearchPage/>}/>
                    <Route path='hero' element={<HeroPage/>}/>
                
                    {/* Search, Hero by id */ }

                    <Route path="/" element={<Navigate to="marvel" />} />
                </Routes>
            </div>
        </>
    )
}
