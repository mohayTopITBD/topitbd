"use client";

import React from "react";
import TiltCard from "../../components/ui/TiltCard";
import TiltImage from "../../components/ui/TiltImage";

function TiltDemoPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          3D Tilt Effect Demo
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <TiltCard perspective={1000} className="h-64">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-full rounded-xl shadow-2xl flex items-center justify-center">
              <h2 className="text-2xl font-bold">Tilt Card Demo</h2>
            </div>
          </TiltCard>

          <TiltCard perspective={1000} className="h-64">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 h-full rounded-xl shadow-2xl flex items-center justify-center">
              <h2 className="text-2xl font-bold">Another Tilt Card</h2>
            </div>
          </TiltCard>
        </div>

        <div className="flex justify-center mb-12">
          <TiltCard perspective={1000} className="w-full max-w-md">
            <div className="bg-gradient-to-br from-yellow-500 to-orange-600 h-64 rounded-xl shadow-2xl flex items-center justify-center">
              <h2 className="text-2xl font-bold">Center Card Demo</h2>
            </div>
          </TiltCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Image Tilt Demo</h3>
            <TiltImage
              src="https://placehold.co/300x200/4F46E5/FFFFFF?text=Image+1"
              alt="Demo Image 1"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Another Image</h3>
            <TiltImage
              src="https://placehold.co/300x200/10B981/FFFFFF?text=Image+2"
              alt="Demo Image 2"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Third Image</h3>
            <TiltImage
              src="https://placehold.co/300x200/F59E0B/FFFFFF?text=Image+3"
              alt="Demo Image 3"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TiltDemoPage;
