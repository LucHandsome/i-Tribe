"use client";
import React from "react";
import { Suspense } from "react";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import Hero from "@/components/common/hero";
import HighLights from "@/components/common/highlights";
import Model from "@/components/common/model";
import Features from "@/components/common/features";
import Camera from "@/components/common/camera";
import Chip from "@/components/common/chip";
import Loader from "@/components/common/loader";

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <Hero />
      <HighLights />
      <Model />
      <Features />
      <Camera />
      <Chip />
      <Footer />
    </Suspense>
  );
}
