'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Car,
  Bus,
  ArrowRight,
  ShieldCheck,
  Star,
  MapPin,
  CheckCircle2,
  Phone,
  MessageCircle,
  Clock,
  Award,
  Users,
  Fuel,
  Gauge,
  Sparkles,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CompanyLocationSection from '@/components/home/CompanyLocationSection';
import { FLEET_VEHICLES, CarVehicle } from '@/constants/carsData';
import {
  LOCAL_AC_RATES,
  URBANIA_PER_DAY_RATES,
  OUTSTATION_AC_RATES,
  PUNE_MUMBAI_CAB_PACKAGES,
  SHARED_BUS_CONTACT,
} from '@/constants/busData';
import { fetchLiveFleetVehicles } from '@/services/fleet.service';
import { fetchLiveBusRates, formatBusDataFromApi } from '@/services/bus.service';

export default function BusAndCarRentalsLandingPage() {
  const [activeTab, setActiveTab] = useState<'urbania' | 'buses' | 'cabs' | 'cars'>('urbania');
  const [carsList, setCarsList] = useState<CarVehicle[]>(FLEET_VEHICLES);
  const [busRates, setBusRates] = useState({
    localAcRates: LOCAL_AC_RATES,
    urbaniaPerDayRates: URBANIA_PER_DAY_RATES,
    outstationAcRates: OUTSTATION_AC_RATES,
    puneMumbaiCabs: PUNE_MUMBAI_CAB_PACKAGES,
  });

  // Contact Quote Form State
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    serviceType: 'Force Urbania (17S)',
    date: '',
    passengers: '15',
    notes: '',
  });
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  useEffect(() => {
    fetchLiveFleetVehicles().then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        setCarsList(data);
      }
    });

    fetchLiveBusRates().then((data) => {
      if (data) {
        setBusRates(formatBusDataFromApi(data));
      }
    });
  }, []);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteForm.phone) return;
    const msg = `*New Fleet Enquiry from Website*%0A*Name:* ${encodeURIComponent(quoteForm.name || 'Customer')}%0A*Phone:* ${encodeURIComponent(quoteForm.phone)}%0A*Service:* ${encodeURIComponent(quoteForm.serviceType)}%0A*Travel Date:* ${encodeURIComponent(quoteForm.date || 'TBD')}%0A*Passengers:* ${quoteForm.passengers}%0A*Notes:* ${encodeURIComponent(quoteForm.notes || 'N/A')}`;
    window.open(`https://wa.me/91${SHARED_BUS_CONTACT.whatsappPhone}?text=${msg}`, '_blank');
    setQuoteSubmitted(true);
  };

  const fleetReviews = [
    {
      name: 'Vikram Patil',
      role: 'Wedding Host',
      location: 'Katraj, Pune',
      vehicle: '45-Seater Luxury AC Coach',
      rating: 5,
      review:
        'Hired two 45-seater buses for a family wedding in Pune. Extremely clean pushback seats, polite and punctual drivers, and completely transparent billing.',
    },
    {
      name: 'Ananya Kulkarni',
      role: 'Corporate Travel Manager',
      location: 'Kharadi IT Park',
      vehicle: '17-Seater Force Urbania Luxury',
      rating: 5,
      review:
        'We booked the Force Urbania for an executive team retreat to Lonavala. Top-tier comfort, powerful AC, and reclining luxury captain chairs. Highly recommended!',
    },
    {
      name: 'Rohan Deshmukh',
      role: 'Outstation Group Lead',
      location: 'Viman Nagar, Pune',
      vehicle: '32-Seater AC Pushback Coach',
      rating: 5,
      review:
        'Booked for our annual family Ashtavinayak Yatra. Clean bus, punctual captain, and zero hassle throughout the 3-day trip.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FCFAF6] text-[#493B34] flex flex-col font-sans select-none">
      {/* Top Navbar */}
      <Navbar vertical="fleet" />

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: LUXURY BUSES & URBANIA BANNER
          ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#FCFAF6] border-b border-[#EDE2D0] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/images/luxury_fleet_vehicles.jpg"
            alt="Luxury Bus Fleet Background"
            className="w-full h-full object-cover opacity-60 filter brightness-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FCFAF6] via-[#FCFAF6]/50 to-[#FCFAF6]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FCFAF6]/80 via-[#FCFAF6]/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-[#EDE2D0] shadow-2xs text-[#493B34] text-xs font-semibold uppercase tracking-wider">
            <Bus className="w-3.5 h-3.5 text-[#C65A2E]" />
            <span>आरंभ Luxury Coach &amp; Group Mobility</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-[#493B34]">
              Luxury Bus &amp; <br />
              <span className="text-[#C65A2E] font-serif italic">Force Urbania Rentals</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#756B63] max-w-2xl leading-relaxed font-normal">
              Hire 13–17 Seater Force Urbania VIP vans, 20–50 Seater Luxury AC coaches, and executive cabs for outstation tours, weddings, corporate events, and pilgrimage yatras across Maharashtra.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl pt-2">
            <div className="bg-white/90 p-3.5 rounded-2xl border border-[#EDE2D0] shadow-2xs">
              <span className="text-xl font-bold text-[#493B34] block">13 to 50 Seats</span>
              <span className="text-[11px] text-[#756B63]">Fleet Capacities</span>
            </div>
            <div className="bg-white/90 p-3.5 rounded-2xl border border-[#EDE2D0] shadow-2xs">
              <span className="text-xl font-bold text-[#C65A2E] block">₹500 Deposit</span>
              <span className="text-[11px] text-[#756B63]">Instant Slot Lock</span>
            </div>
            <div className="bg-white/90 p-3.5 rounded-2xl border border-[#EDE2D0] shadow-2xs">
              <span className="text-xl font-bold text-[#493B34] block">Verified Captains</span>
              <span className="text-[11px] text-[#756B63]">Experienced Drivers</span>
            </div>
            <div className="bg-white/90 p-3.5 rounded-2xl border border-[#EDE2D0] shadow-2xs">
              <span className="text-xl font-bold text-[#493B34] block">24/7 Support</span>
              <span className="text-[11px] text-[#756B63]">Pune Dispatch</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. OUR SERVICES (URBANIA, BUSES, CABS, CARS)
          ───────────────────────────────────────────────────────────── */}
      <section id="our-services" className="py-14 bg-[#FCFAF6] border-b border-[#EDE2D0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#EDE2D0] pb-4">
            <div>
              <span className="text-xs font-bold text-[#C65A2E] uppercase tracking-wider block mb-0.5">
                Bus &amp; Coach Inventory
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#493B34] tracking-tight">
                Luxury Passenger Fleet
              </h2>
              <p className="text-xs text-[#756B63] mt-0.5 font-normal">
                Explore executive vans, luxury passenger coaches, and intercity cabs.
              </p>
            </div>

            {/* Service Category Switcher */}
            <div className="flex flex-wrap items-center bg-[#EDE2D0]/40 p-1 rounded-xl border border-[#EDE2D0] shadow-2xs text-xs font-semibold gap-1">
              <button
                onClick={() => setActiveTab('urbania')}
                className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'urbania'
                    ? 'bg-[#C65A2E] text-white shadow-xs'
                    : 'text-[#756B63] hover:text-[#493B34]'
                }`}
              >
                Force Urbania
              </button>
              <button
                onClick={() => setActiveTab('buses')}
                className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'buses'
                    ? 'bg-[#C65A2E] text-white shadow-xs'
                    : 'text-[#756B63] hover:text-[#493B34]'
                }`}
              >
                Luxury Buses (13–50S)
              </button>
              <button
                onClick={() => setActiveTab('cabs')}
                className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'cabs'
                    ? 'bg-[#C65A2E] text-white shadow-xs'
                    : 'text-[#756B63] hover:text-[#493B34]'
                }`}
              >
                Pune-Mumbai Cabs
              </button>
              <Link
                href="/car-rentals"
                className="px-4 py-2 rounded-lg text-[#756B63] hover:text-[#C65A2E] transition-all cursor-pointer inline-flex items-center gap-1"
              >
                <span>Self-Drive Cars</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* TAB 1: SELF-DRIVE CARS GRID */}
          {activeTab === 'cars' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {carsList.map((car) => (
                <div
                  key={car.id}
                  className="bg-white rounded-2xl overflow-hidden border border-[#EDE2D0] shadow-sm hover:shadow-md hover:border-[#E8B9A5] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-52 w-full overflow-hidden bg-[#FDFBF7] flex items-center justify-center p-4">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-lg bg-[#493B34] text-white text-xs font-semibold shadow-xs">
                          {car.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <h3 className="font-serif text-lg font-bold text-[#493B34] group-hover:text-[#C65A2E] transition-colors">
                        {car.name}
                      </h3>

                      <div className="grid grid-cols-3 gap-2 py-2 border-y border-[#EDE2D0] text-center text-xs text-[#756B63]">
                        <div className="flex flex-col items-center">
                          <Users className="w-3.5 h-3.5 text-[#C65A2E] mb-0.5" />
                          <span>{car.specs.passengers} Seats</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Gauge className="w-3.5 h-3.5 text-[#C65A2E] mb-0.5" />
                          <span>{car.specs.transmission}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Fuel className="w-3.5 h-3.5 text-[#C65A2E] mb-0.5" />
                          <span>{car.specs.fuelType}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-[#756B63] pt-1">
                        <span className="flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#C65A2E]" /> Zero Deposit
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#C65A2E]" /> Pune Delivery
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-[#EDE2D0] mt-4 space-y-3">
                    <div className="flex items-center justify-between pt-3">
                      <div>
                        <span className="text-[11px] text-[#756B63] block font-medium">Daily Rate</span>
                        <span className="text-lg sm:text-xl font-bold text-[#493B34]">
                          ₹{car.pricePerDay.toLocaleString('en-IN')}{' '}
                          <span className="text-xs text-[#756B63]">/day</span>
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-[#C65A2E] bg-[#F8EFEA] border border-[#E8B9A5]/50 px-2.5 py-1 rounded-lg">
                        ₹500 Deposit
                      </span>
                    </div>

                    <Link
                      href={`/car-rentals`}
                      className="w-full h-10 rounded-xl bg-[#C65A2E] hover:bg-[#B24E25] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-xs"
                    >
                      <span>Book Self-Drive Car</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: FORCE URBANIA SHOWCASE */}
          {activeTab === 'urbania' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EDE2D0] shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6 space-y-4">
                    <span className="px-3 py-1 rounded-full bg-[#F8EFEA] border border-[#E8B9A5]/50 text-[#C65A2E] text-xs font-bold uppercase tracking-wider inline-block">
                      VIP Van of the Year
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#493B34]">
                      Force Urbania Luxury Van (13 / 17 Seater)
                    </h3>
                    <p className="text-xs sm:text-sm text-[#756B63] leading-relaxed">
                      Experience the gold standard of group mobility. Featuring individual airplane-style reading lights, individual AC louvres, sliding panoramic windows, and reclining captain seats.
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-[#493B34] font-medium">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C65A2E]" />
                        <span>Individual USB Fast Chargers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C65A2E]" />
                        <span>Massive Boot for 15+ Bags</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C65A2E]" />
                        <span>Whisper-Quiet Cabin</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C65A2E]" />
                        <span>Experienced Chauffeur</span>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-3">
                      <a
                        href={`https://wa.me/91${SHARED_BUS_CONTACT.whatsappPhone}?text=Hello,%20I%20want%20to%20book%20the%20Force%20Urbania%20for%20a%20trip`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-[#C65A2E] hover:bg-[#B24E25] text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 shadow-xs transition-all"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Instant WhatsApp Booking</span>
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="rounded-2xl overflow-hidden border border-[#EDE2D0] shadow-md">
                      <img
                        src="/images/urbania_fleet.jpg"
                        alt="Force Urbania Luxury Fleet"
                        className="w-full h-80 object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/luxury_fleet_vehicles.jpg';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: LUXURY BUSES (13-50S) */}
          {activeTab === 'buses' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {busRates.outstationAcRates.map((bus, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden border border-[#EDE2D0] shadow-sm hover:shadow-md hover:border-[#E8B9A5] transition-all p-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-[#F8EFEA] border border-[#E8B9A5]/50 text-[#C65A2E] text-xs font-bold">
                        {bus.seats} Seater
                      </span>
                      <span className="text-xs font-medium text-[#756B63]">Outstation AC</span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#493B34]">
                      {bus.busType}
                    </h3>

                    <div className="bg-[#FCFAF6] p-3.5 rounded-xl border border-[#EDE2D0] space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-[#756B63]">Mumbai Package (350 KM):</span>
                        <span className="font-bold text-[#493B34]">₹{bus.mumbaiRate.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#756B63]">Mahabaleshwar (300 KM):</span>
                        <span className="font-bold text-[#493B34]">₹{bus.mahabaleshwarRate.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#756B63]">Extra KM Rate:</span>
                        <span className="font-bold text-[#493B34]">₹{bus.extraKmRate} / KM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#756B63]">Special Permit:</span>
                        <span className="font-bold text-[#493B34]">₹{bus.specialPermit}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-[#EDE2D0] mt-4">
                    <a
                      href={`https://wa.me/91${SHARED_BUS_CONTACT.whatsappPhone}?text=Hello,%20I%20want%20to%20get%20a%20quote%20for%20${encodeURIComponent(bus.busType)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-10 rounded-xl bg-[#C65A2E] hover:bg-[#B24E25] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Get Instant Fare Quote</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: PUNE MUMBAI CABS */}
          {activeTab === 'cabs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {busRates.puneMumbaiCabs.map((cab, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden border border-[#EDE2D0] shadow-sm hover:shadow-md hover:border-[#E8B9A5] transition-all p-6 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="px-3 py-1 rounded-full bg-[#F8EFEA] border border-[#E8B9A5]/50 text-[#C65A2E] text-xs font-bold inline-block">
                      {cab.seats} Seater AC
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#493B34]">
                      {cab.busType}
                    </h3>
                    <p className="text-xs text-[#756B63]">
                      {cab.description}
                    </p>
                    <div className="bg-[#FCFAF6] p-3.5 rounded-xl border border-[#EDE2D0] space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-[#756B63]">Package Rate:</span>
                        <span className="font-bold text-[#493B34]">₹{cab.packageRate.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#756B63]">KM Included:</span>
                        <span className="font-bold text-[#493B34]">{cab.kmIncluded} KM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#756B63]">Extra KM:</span>
                        <span className="font-bold text-[#493B34]">₹{cab.extraKmRate} / KM</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#EDE2D0] mt-4">
                    <a
                      href={`https://wa.me/91${SHARED_BUS_CONTACT.whatsappPhone}?text=Hello,%20I%20want%20to%20book%20Pune-Mumbai%20cab%20${encodeURIComponent(cab.busType)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-10 rounded-xl bg-[#C65A2E] hover:bg-[#B24E25] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Book Cab on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. DIRECT QUOTE ESTIMATOR FORM
          ───────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-white border-b border-[#EDE2D0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-[#C65A2E] uppercase tracking-wider block">
                Instant Fare Estimation
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#493B34] tracking-tight">
                Request a Custom Fleet Quote
              </h2>
              <p className="text-xs sm:text-sm text-[#756B63] leading-relaxed">
                Fill in your trip requirements to receive a customized all-inclusive quote with toll, driver, and state tax breakdown within 10 minutes.
              </p>

              <div className="pt-2 space-y-2.5 text-xs text-[#493B34] font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C65A2E]" />
                  <span>100% Verified commercial vehicles with all-India permits</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C65A2E]" />
                  <span>Transparent per-kilometer billing with GPS tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C65A2E]" />
                  <span>Direct phone coordination with fleet dispatcher</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#FCFAF6] p-6 sm:p-8 rounded-2xl border border-[#EDE2D0] shadow-sm">
              <form onSubmit={handleQuoteSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#756B63] font-semibold mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={quoteForm.name}
                      onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EDE2D0] text-[#493B34] placeholder:text-[#756B63] focus:outline-none focus:border-[#C65A2E]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#756B63] font-semibold mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter 10-digit mobile number"
                      value={quoteForm.phone}
                      onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EDE2D0] text-[#493B34] placeholder:text-[#756B63] focus:outline-none focus:border-[#C65A2E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#756B63] font-semibold mb-1">Vehicle / Service Type</label>
                    <select
                      value={quoteForm.serviceType}
                      onChange={(e) => setQuoteForm({ ...quoteForm, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EDE2D0] text-[#493B34] focus:outline-none focus:border-[#C65A2E] cursor-pointer"
                    >
                      <option value="Self-Drive Car">Self-Drive Car (SUV / Sedan)</option>
                      <option value="Force Urbania (17S)">Force Urbania Luxury (17S)</option>
                      <option value="Mini Bus (26S)">Mini Bus Pushback (26S)</option>
                      <option value="Luxury Coach (35-45S)">Luxury Coach (35–45S)</option>
                      <option value="Pune-Mumbai Cab">Pune-Mumbai One Way Cab</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#756B63] font-semibold mb-1">Tentative Travel Date</label>
                    <input
                      type="date"
                      value={quoteForm.date}
                      onChange={(e) => setQuoteForm({ ...quoteForm, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EDE2D0] text-[#493B34] focus:outline-none focus:border-[#C65A2E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#756B63] font-semibold mb-1">Trip Details / Destination</label>
                  <textarea
                    rows={2}
                    placeholder="E.g. Pune to Mahabaleshwar 3 days, 12 passengers..."
                    value={quoteForm.notes}
                    onChange={(e) => setQuoteForm({ ...quoteForm, notes: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#EDE2D0] text-[#493B34] placeholder:text-[#756B63] focus:outline-none focus:border-[#C65A2E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#C65A2E] hover:bg-[#B24E25] text-white font-semibold flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Fleet Inquiry via WhatsApp</span>
                </button>

                {quoteSubmitted && (
                  <p className="text-center text-xs text-emerald-700 font-semibold pt-1">
                    ✓ WhatsApp opened with your quote parameters! Our fleet manager will respond promptly.
                  </p>
                )}

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 4. REVIEWS SECTION */}
      <section className="py-14 bg-[#FCFAF6] border-b border-[#EDE2D0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#C65A2E] uppercase tracking-wider block">
              Customer Feedback
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#493B34] tracking-tight">
              What Our Fleet Passengers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fleetReviews.map((rev, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-[#EDE2D0] shadow-2xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, r) => (
                      <Star key={r} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#756B63] leading-relaxed italic">
                    &ldquo;{rev.review}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EDE2D0]">
                  <p className="text-xs font-bold text-[#493B34]">{rev.name}</p>
                  <p className="text-[11px] text-[#756B63]">{rev.role} • {rev.vehicle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LOCATION */}
      <CompanyLocationSection />

      {/* 6. FOOTER */}
      <Footer />
    </div>
  );
}
