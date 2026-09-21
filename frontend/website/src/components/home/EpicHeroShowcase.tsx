'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Compass,
  Bus,
  Car,
  ArrowRight,
  ShieldCheck,
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react';

export default function EpicHeroShowcase() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'tours' | 'bus' | 'cars'>('tours');

  // Search states
  const [tourDestination, setTourDestination] = useState('');
  const [tourPeriod, setTourPeriod] = useState('');
  const [groupType, setGroupType] = useState('family');

  const [busTripType, setBusTripType] = useState('outstation');
  const [busSeater, setBusSeater] = useState('17');
  const [busPickup, setBusPickup] = useState('pune');

  const [carType, setCarType] = useState('all');
  const [carDuration, setCarDuration] = useState('1');
  const [carDeposit, setCarDeposit] = useState('zero');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'tours') {
      const params = new URLSearchParams();
      if (tourDestination) params.set('dest', tourDestination);
      router.push(`/tours-travels${params.toString() ? `?${params.toString()}` : ''}`);
    } else if (activeTab === 'bus') {
      router.push('/bus-rentals');
    } else {
      router.push('/car-rentals');
    }
  };

  return (
    <section className="relative w-full bg-[#FCFAF6] pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden flex items-center justify-center font-sans border-b border-[#EDE2D0]/60">
      
      {/* ─── 1. BACKGROUND IMAGE & SOPHISTICATED IVORY GRADIENTS ─── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <img
          src="/images/himalayan_hero_bg.jpg"
          alt="Aarambha Himalayan Sacred Temple Landscape"
          className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.02]"
        />
        {/* Responsive mist overlay allowing background details to be more visible while preserving text clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FCFAF6]/30 via-[#FCFAF6]/60 to-[#FCFAF6]/30 sm:from-[#FCFAF6]/20 sm:via-[#FCFAF6]/50 sm:to-[#FCFAF6]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FCFAF6]/30 via-transparent to-[#FCFAF6]/80" />
      </div>

      {/* ─── 2. MAIN HERO CONTAINER ─── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        
        {/* Top Trust Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#EDE2D0] shadow-xs text-xs font-medium text-[#493B34] mb-3 sm:mb-4">
          <span className="text-sm text-[#C65A2E]">🪷</span>
          <span>Maharashtra&apos;s Leading Spiritual &amp; Luxury Fleet Portal</span>
        </div>

        {/* Main Editorial Serif Heading */}
        <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-[#493B34] tracking-tight leading-[1.15] max-w-3xl mx-auto mb-3 sm:mb-4">
          Sacred <span className="text-[#C65A2E] italic">Pilgrimages</span>, Luxury Buses &amp; Self-Drive Fleet
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-base text-[#756B63] max-w-2xl mx-auto leading-relaxed font-normal mb-6 sm:mb-8">
          Handpicked spiritual yatras with satvik meals &amp; verified stays, 17–45 seater Force Urbania bus rentals, and zero-deposit self-drive cars in Pune.
        </p>

        {/* ─── 3. MINIMAL & RESPONSIVE FLOATING SEARCH CARD ─── */}
        <div className="w-full max-w-4xl bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#EDE2D0] shadow-xl p-4 sm:p-6 text-left transition-all">
          
          {/* Segmented Category Pill Tabs */}
          <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 border-b border-[#EDE2D0]/70 pb-3 mb-4 overflow-x-auto no-scrollbar">
            <button
              type="button"
              onClick={() => setActiveTab('tours')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'tours'
                  ? 'bg-[#C65A2E] text-white shadow-sm shadow-[#C65A2E]/20'
                  : 'bg-[#FCFAF6] text-[#493B34] hover:bg-[#F8EFEA] hover:text-[#C65A2E] border border-[#EDE2D0]'
              }`}
            >
              <Compass className={`w-4 h-4 ${activeTab === 'tours' ? 'text-white' : 'text-[#C65A2E]'}`} />
              <span>Spiritual Tours</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('bus')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'bus'
                  ? 'bg-[#C65A2E] text-white shadow-sm shadow-[#C65A2E]/20'
                  : 'bg-[#FCFAF6] text-[#493B34] hover:bg-[#F8EFEA] hover:text-[#C65A2E] border border-[#EDE2D0]'
              }`}
            >
              <Bus className={`w-4 h-4 ${activeTab === 'bus' ? 'text-white' : 'text-[#C65A2E]'}`} />
              <span>Bus Rentals</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('cars')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'cars'
                  ? 'bg-[#C65A2E] text-white shadow-sm shadow-[#C65A2E]/20'
                  : 'bg-[#FCFAF6] text-[#493B34] hover:bg-[#F8EFEA] hover:text-[#C65A2E] border border-[#EDE2D0]'
              }`}
            >
              <Car className={`w-4 h-4 ${activeTab === 'cars' ? 'text-white' : 'text-[#C65A2E]'}`} />
              <span>Self-Drive Cars</span>
            </button>
          </div>

          {/* Form Fields & Search Button */}
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-end">
            
            {/* ─── TOURS TAB ─── */}
            {activeTab === 'tours' && (
              <>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#756B63] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C65A2E]" />
                    <span>Destination Yatra</span>
                  </label>
                  <div className="relative">
                    <select
                      value={tourDestination}
                      onChange={(e) => setTourDestination(e.target.value)}
                      className="w-full h-11 pl-3 pr-8 bg-[#FCFAF6] border border-[#EDE2D0] rounded-xl text-xs sm:text-sm font-medium text-[#493B34] focus:outline-none focus:border-[#C65A2E] focus:ring-2 focus:ring-[#C65A2E]/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">All Sacred Yatras</option>
                      <option value="jyotirlinga">3 Jyotirlinga (Trimbak, Grishneshwar, Bhimashankar)</option>
                      <option value="ashtavinayak">Ashtavinayak Darshan (8 Temples)</option>
                      <option value="mathura">Vrindavan - Mathura - Agra</option>
                      <option value="shirdi">Shirdi &amp; Shani Shingnapur</option>
                      <option value="chardham">Char Dham Yatra</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#756B63] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#756B63] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C65A2E]" />
                    <span>Travel Period</span>
                  </label>
                  <div className="relative">
                    <select
                      value={tourPeriod}
                      onChange={(e) => setTourPeriod(e.target.value)}
                      className="w-full h-11 pl-3 pr-8 bg-[#FCFAF6] border border-[#EDE2D0] rounded-xl text-xs sm:text-sm font-medium text-[#493B34] focus:outline-none focus:border-[#C65A2E] focus:ring-2 focus:ring-[#C65A2E]/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Any Upcoming Week</option>
                      <option value="this-weekend">This Weekend Departure</option>
                      <option value="this-month">This Month Batches</option>
                      <option value="next-month">Next Month Batches</option>
                      <option value="festive">Festive / Holiday Special</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#756B63] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#756B63] flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#C65A2E]" />
                    <span>Group Type</span>
                  </label>
                  <div className="relative">
                    <select
                      value={groupType}
                      onChange={(e) => setGroupType(e.target.value)}
                      className="w-full h-11 pl-3 pr-8 bg-[#FCFAF6] border border-[#EDE2D0] rounded-xl text-xs sm:text-sm font-medium text-[#493B34] focus:outline-none focus:border-[#C65A2E] focus:ring-2 focus:ring-[#C65A2E]/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="family">Family / Group Yatra</option>
                      <option value="solo">Solo Pilgrim</option>
                      <option value="seniors">Senior Citizens Special</option>
                      <option value="corporate">Corporate / Custom Group</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#756B63] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </>
            )}

            {/* ─── BUS RENTALS TAB ─── */}
            {activeTab === 'bus' && (
              <>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#756B63] flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#C65A2E]" />
                    <span>Rental Scope</span>
                  </label>
                  <div className="relative">
                    <select
                      value={busTripType}
                      onChange={(e) => setBusTripType(e.target.value)}
                      className="w-full h-11 pl-3 pr-8 bg-[#FCFAF6] border border-[#EDE2D0] rounded-xl text-xs sm:text-sm font-medium text-[#493B34] focus:outline-none focus:border-[#C65A2E] focus:ring-2 focus:ring-[#C65A2E]/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="outstation">Outstation Pilgrimage / Tour</option>
                      <option value="local">Pune Local Sightseeing (8Hr/80Km)</option>
                      <option value="mumbai">Pune ↔ Mumbai Fixed Package</option>
                      <option value="corporate">Wedding / Corporate Event</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#756B63] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#756B63] flex items-center gap-1.5">
                    <Bus className="w-3.5 h-3.5 text-[#C65A2E]" />
                    <span>Seating Capacity</span>
                  </label>
                  <div className="relative">
                    <select
                      value={busSeater}
                      onChange={(e) => setBusSeater(e.target.value)}
                      className="w-full h-11 pl-3 pr-8 bg-[#FCFAF6] border border-[#EDE2D0] rounded-xl text-xs sm:text-sm font-medium text-[#493B34] focus:outline-none focus:border-[#C65A2E] focus:ring-2 focus:ring-[#C65A2E]/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="17">17-Seater Force Urbania (Luxury AC)</option>
                      <option value="26">26-Seater Force Traveller (Executive)</option>
                      <option value="35">35-Seater Executive Coach</option>
                      <option value="45">45-Seater BharatBenz Luxury Sleeper</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#756B63] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#756B63] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C65A2E]" />
                    <span>Pickup Hub</span>
                  </label>
                  <div className="relative">
                    <select
                      value={busPickup}
                      onChange={(e) => setBusPickup(e.target.value)}
                      className="w-full h-11 pl-3 pr-8 bg-[#FCFAF6] border border-[#EDE2D0] rounded-xl text-xs sm:text-sm font-medium text-[#493B34] focus:outline-none focus:border-[#C65A2E] focus:ring-2 focus:ring-[#C65A2E]/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="pune">Pune (Swargate / Wakad / Airport)</option>
                      <option value="mumbai">Mumbai / Navi Mumbai</option>
                      <option value="nashik">Nashik / Shirdi</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#756B63] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </>
            )}

            {/* ─── SELF-DRIVE CARS TAB ─── */}
            {activeTab === 'cars' && (
              <>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#756B63] flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[#C65A2E]" />
                    <span>Vehicle Segment</span>
                  </label>
                  <div className="relative">
                    <select
                      value={carType}
                      onChange={(e) => setCarType(e.target.value)}
                      className="w-full h-11 pl-3 pr-8 bg-[#FCFAF6] border border-[#EDE2D0] rounded-xl text-xs sm:text-sm font-medium text-[#493B34] focus:outline-none focus:border-[#C65A2E] focus:ring-2 focus:ring-[#C65A2E]/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="all">All Fleet Segments</option>
                      <option value="suv">Premium SUV (Fortuner, Thar, Innova)</option>
                      <option value="sedan">Executive Sedan (Dzire, Verna)</option>
                      <option value="hatchback">Compact Hatchback (Swift)</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#756B63] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#756B63] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C65A2E]" />
                    <span>Trip Duration</span>
                  </label>
                  <div className="relative">
                    <select
                      value={carDuration}
                      onChange={(e) => setCarDuration(e.target.value)}
                      className="w-full h-11 pl-3 pr-8 bg-[#FCFAF6] border border-[#EDE2D0] rounded-xl text-xs sm:text-sm font-medium text-[#493B34] focus:outline-none focus:border-[#C65A2E] focus:ring-2 focus:ring-[#C65A2E]/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="1">1 Day (24 Hours)</option>
                      <option value="2">2 to 3 Days Weekend</option>
                      <option value="5">4 to 7 Days Vacation</option>
                      <option value="monthly">Monthly Subscription</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#756B63] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#756B63] flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C65A2E]" />
                    <span>Deposit Option</span>
                  </label>
                  <div className="relative">
                    <select
                      value={carDeposit}
                      onChange={(e) => setCarDeposit(e.target.value)}
                      className="w-full h-11 pl-3 pr-8 bg-[#FCFAF6] border border-[#EDE2D0] rounded-xl text-xs sm:text-sm font-medium text-[#493B34] focus:outline-none focus:border-[#C65A2E] focus:ring-2 focus:ring-[#C65A2E]/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="zero">₹0 Zero Security Deposit</option>
                      <option value="standard">Standard Security Deposit</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#756B63] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </>
            )}

            {/* Submit CTA Button */}
            <div>
              <button
                type="submit"
                className="w-full h-11 px-5 rounded-xl bg-[#C65A2E] hover:bg-[#B24E25] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>Search Options</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>

        </div>

        {/* ─── 4. REFINED MINIMAL TRUST BADGES ROW ─── */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-5 sm:mt-6 text-xs text-[#493B34] font-medium select-none">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-[#EDE2D0] shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C65A2E]" />
            <span>Verified AC Stays</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-[#EDE2D0] shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C65A2E]" />
            <span>Pure Satvik Meals</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-[#EDE2D0] shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C65A2E]" />
            <span>Custom Group Yatras</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-[#EDE2D0] shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C65A2E]" />
            <span>17–45 Seater Urbania</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-[#EDE2D0] shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C65A2E]" />
            <span>Zero-Deposit Cars</span>
          </div>
        </div>

      </div>

    </section>
  );
}
