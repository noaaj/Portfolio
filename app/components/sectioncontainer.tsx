'use client'
import { useSelector, useDispatch } from 'react-redux';
import { home, about, skills, work, contact } from "../features/pageupdaterSlice";
import { Intro } from "./intro";
import { Navbar } from "./navbar";
import { About } from "./about";
import { useState } from 'react';
import { store } from '../features/store';
import { RootState } from '../features/store';


export function SectionContainer() {
    const currentPage = useSelector((state: RootState) => state.page.value)
    return (
        <>
        <Intro/>
        <Navbar/>
        {currentPage}
        </>
    );
}