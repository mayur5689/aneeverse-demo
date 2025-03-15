"use client";

import React from 'react';
import Link from 'next/link';

const Hiring = () => {
  const positions = [
    {
      id: 1,
      title: "Content Writer",
      type: "Full-time",
      location: "Remote",
      description: "Create engaging and SEO-optimized content for various industries and clients.",
      requirements: ["3+ years writing experience", "Strong SEO knowledge", "Excellent grammar"],
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      type: "Full-time",
      location: "Hybrid",
      description: "Develop and implement marketing strategies across digital channels and platforms.",
      requirements: ["2+ years in digital marketing", "Analytics experience", "Campaign management"],
    },
    {
      id: 3,
      title: "Social Media Manager",
      type: "Contract",
      location: "Remote",
      description: "Manage social media accounts, create engaging content, and grow audience engagement.",
      requirements: ["Social media expertise", "Content creation skills", "Analytics experience"],
    },
    {
      id: 4,
      title: "SEO Specialist",
      type: "Full-time",
      location: "Remote",
      description: "Optimize website content and structure to improve search engine rankings and traffic.",
      requirements: ["SEO certification", "Technical SEO skills", "Analytics proficiency"],
    }
  ];

  return (
    <section className="py-24 bg-[#f5fbff] text-[#063642]">
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Join Our <span className="text-blue-500">Team</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            We're looking for talented individuals to help us deliver outstanding creative work to our clients. Check out our open positions below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {positions.map((position) => (
            <div 
              key={position.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl duration-300"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">{position.title}</h3>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      {position.type}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                      {position.location}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {position.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {position.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href={`/careers/${position.id}`}
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg transition-colors hover:bg-blue-700"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg mb-6">Don't see a position that fits your skills?</p>
          <Link 
            href="/careers/general"
            className="inline-block px-8 py-4 bg-[#063642] text-white font-medium rounded-lg transition-colors hover:bg-[#0a4757]"
          >
            Send General Application
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hiring; 