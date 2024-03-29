import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import ProductsSection from "../components/ProductsSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <ProductsSection />
            <Newsletter />
            <Footer />
        </div>
    )
}
