import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MissionSection } from './components/MissionSection';
import { ProgramsSection } from './components/ProgramsSection';
import { ResourcesSection } from './components/ResourcesSection';
import { EventsCalendarSection } from './components/EventsCalendarSection';
import { GetInvolvedSection } from './components/GetInvolvedSection';
import { Footer } from './components/Footer';
import { DonationModal } from './components/DonationModal';
import { EventRsvpModal } from './components/EventRsvpModal';
import { BackendIntegrationDrawer } from './components/BackendIntegrationDrawer';
import { CommunityEvent } from './types';

export default function App() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [selectedEventForRsvp, setSelectedEventForRsvp] = useState<CommunityEvent | null>(null);
  const [isRsvpModalOpen, setIsRsvpModalOpen] = useState(false);

  const handleOpenDonateModal = () => {
    setIsDonateModalOpen(true);
  };

  const handleCloseDonateModal = () => {
    setIsDonateModalOpen(false);
  };

  const handleOpenRsvpModal = (event: CommunityEvent) => {
    setSelectedEventForRsvp(event);
    setIsRsvpModalOpen(true);
  };

  const handleCloseRsvpModal = () => {
    setIsRsvpModalOpen(false);
    setSelectedEventForRsvp(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-slate-900 font-sans selection:bg-rose-500 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenDonateModal={handleOpenDonateModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero (Above the Fold) */}
        <Hero onOpenDonateModal={handleOpenDonateModal} />

        {/* Section 2: Mission & Core Beliefs (#about) */}
        <MissionSection />

        {/* Section 3: Core Service Pillars (#programs) */}
        <ProgramsSection onOpenDonateModal={handleOpenDonateModal} />

        {/* Section 4: Need Help? Regional Safety Net & Inquiries (#resources) */}
        <ResourcesSection />

        {/* Community Events & Workshops Calendar (#events) */}
        <EventsCalendarSection onOpenRsvpModal={handleOpenRsvpModal} />

        {/* Section 5: Get Involved — Donate & Volunteer (#get-involved / #donate / #volunteer) */}
        <GetInvolvedSection onOpenDonateModal={handleOpenDonateModal} />
      </main>

      {/* Section 6: Official Registry & Footer (#contact) */}
      <Footer onOpenDonateModal={handleOpenDonateModal} />

      {/* Interactive Modals */}
      <DonationModal
        isOpen={isDonateModalOpen}
        onClose={handleCloseDonateModal}
      />

      <EventRsvpModal
        event={selectedEventForRsvp}
        isOpen={isRsvpModalOpen}
        onClose={handleCloseRsvpModal}
      />

      {/* Developer Backend Architecture & Payload Drawer */}
      <BackendIntegrationDrawer />
    </div>
  );
}
