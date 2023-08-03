import React from 'react';
import {
    createBrowserRouter, createRoutesFromElements, Route,
    RouterProvider,
} from "react-router-dom";

import Guest from "../pages/Guest/Guest";
import MainWrapper from "../pages/mainWrapper/MainWrapper";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Models from "../pages/Models/Models";
import Team from "../pages/Team/Team";
import Testimonials from "../pages/Testimonials/Testimonials";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" elemt={<MainWrapper />}>
        <Route index element={<Guest />} />
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="models" element={<Models />}/>
        <Route path="team" element={<Team />}/>
        <Route path="testimonials" element={<Testimonials />}/>
    </Route>
));

const AppRouter = () => {
    return (
        <RouterProvider router={router}/>
    );
};

export default AppRouter;