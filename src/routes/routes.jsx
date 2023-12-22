import React, { lazy } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const RootLayout = lazy(() => import('@/layout/RootLayout'));
const About = lazy(() => import('@/views/About'));
const Home = lazy(() => import('@/views/Home'));
const History = lazy(() => import('@/views/History'));
const Team = lazy(() => import('@/views/Team'));
const Location = lazy(() => import('@/views/Location'));
const Solutions = lazy(() => import('@/views/Solutions'));
const MachinesDevices = lazy(() => import('@/views/MachinesDevices'));
const Library = lazy(() => import('@/views/Library'));
const Industries = lazy(() => import('@/views/Industries'));
const Contact = lazy(() => import('@/views/Contact'));
const Community = lazy(() => import('@/views/Community'));
const CommunityDetail = lazy(() => import('@/views/CommunityDetail'));
const CommunityForm = lazy(() => import('@/views/CommunityForm'));
const CommunityEdit = lazy(() => import('@/components/Community/CommunityEdit'));
const Admin = lazy(() => import('@/views/Admin'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/history" element={<History />} />
      <Route path="/team" element={<Team />} />
      <Route path="/location" element={<Location />} />
      <Route path="/solutions/:id" element={<Solutions />} />
      <Route path="/machines/:id" element={<MachinesDevices />} />
      <Route path="/devices/:id" element={<MachinesDevices />} />
      <Route path="/industries/:id" element={<Industries />} />
      <Route path="/library" element={<Library />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/community" element={<Community />} />
      <Route path="/community/:id" element={<CommunityDetail />} />
      <Route path="/community/write" element={<CommunityForm />} />
      <Route path="/community/:id/edit" element={<CommunityEdit />} />
      <Route path="/admin" element={<Admin />} />
    </Route>,
  ),
  {
    basename: import.meta.env.PUBLIC_URL,
  },
);

export default router;
