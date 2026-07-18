/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from "react-router-dom";
import LabProducts from "./components/LabProducts";
import CaseStudy from "./pages/CaseStudy";

export default function App() {
  return (
    <main className="min-h-screen bg-[#05050A] font-sans selection:bg-orange-500/30 selection:text-orange-200">
      <Routes>
        <Route path="/" element={<LabProducts />} />
        <Route path="/case-study/:productId" element={<CaseStudy />} />
      </Routes>
    </main>
  );
}
