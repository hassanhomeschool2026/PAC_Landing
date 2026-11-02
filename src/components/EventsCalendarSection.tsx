import React, { useState, useMemo } from 'react';
import { CommunityEvent, EventCategory } from '../types';
import { COMMUNITY_EVENTS, downloadEventIcs, LINKS } from '../data/mockData';
import { 
  Calendar as CalendarIcon, 
  List, 
  Grid, 
  MapPin, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Download, 
  Sparkles,
  ExternalLink,
  Users
} from 'lucide-react';

export const EventsCalendarSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Year and month state (default to November 2026 based on mock data & current date)
  const [currentDate, setCurrentDate] = useState<Date>(new Date(2026, 10, 1)); // Nov 2026
  const [selectedDayString, setSelectedDayString] = useState<string>('2026-11-07');

  const events = COMMUNITY_EVENTS;

  const categories: string[] = [
    'All',
    'Youth Empowerment',
    'Food Assistance',
    'Community Workshop',
    'Volunteer & Community'
  ];

  const filteredEvents = useMemo(() => {
    return events.filter(evt => {
      const matchesCategory = selectedCategory === 'All' || evt.category === selectedCategory;
      const matchesSearch = 
        evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.locationName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [events, selectedCategory, searchQuery]);

  // Calendar math for grid
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay(); // 0 is Sunday

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const eventsOnSelectedDay = useMemo(() => {
    if (!selectedDayString) return [];
    return events.filter(e => e.date === selectedDayString);
  }, [events, selectedDayString]);

  const getCategoryColor = (category: EventCategory) => {
    switch (category) {
      case 'Youth Empowerment':
        return 'text-black bg-[#fdf5f5] border-[#f3c2c3]';
      case 'Food Assistance':
        return 'text-black bg-slate-100 border-slate-300';
      case 'Community Workshop':
        return 'text-black bg-[#fef7f7] border-[#e79a9b]/50';
      case 'Volunteer & Community':
        return 'text-black bg-slate-50 border-slate-200';
      default:
        return 'text-black bg-slate-100 border-slate-200';
    }
  };

  return (
    <section id="events" className="py-20 bg-slate-50/50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#fdf5f5] text-black border border-[#f3c2c3] text-xs font-bold tracking-wider uppercase mb-3">
            Community Calendar
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight leading-tight">
            Upcoming Community Events & Workshops
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Join us for youth financial literacy labs, weekly food distributions, and family stabilization workshops across Collin and Dallas counties.
          </p>
          <div className="w-16 h-1 bg-[#e79a9b] mx-auto mt-4 rounded-full" />
        </div>

        {/* Calendar Control Toolbar */}
        <div className="bg-white rounded-2xl border-2 border-slate-200 p-4 sm:p-6 shadow-xs mb-8">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Category Filter Pills (Interactive Buttons) */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-black text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-[#fdf5f5] hover:text-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input & View Switch */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search workshops, food distribution..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#e79a9b]"
                />
              </div>

              {/* View Toggle */}
              <div className="flex items-center p-1 bg-slate-100 rounded-lg border border-slate-200 shrink-0">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-md text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-white text-black shadow-xs'
                      : 'text-slate-500 hover:text-black'
                  }`}
                  aria-label="Monthly Grid View"
                >
                  <Grid className="w-4 h-4" />
                  <span className="hidden sm:inline">Grid</span>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-md text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer ${
                    viewMode === 'list'
                      ? 'bg-white text-black shadow-xs'
                      : 'text-slate-500 hover:text-black'
                  }`}
                  aria-label="List View"
                >
                  <List className="w-4 h-4" />
                  <span className="hidden sm:inline">List</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* View Mode 1: Interactive Monthly Grid */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns: Month Calendar Grid */}
            <div className="lg:col-span-8 rounded-2xl bg-white border-2 border-slate-200 p-5 sm:p-7 shadow-xs">
              
              {/* Month Header & Controls */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-black" />
                  <h3 className="text-lg font-bold text-black">
                    {monthNames[month]} {year}
                  </h3>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={prevMonth}
                    className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-black transition-colors"
                    aria-label="Previous Month"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextMonth}
                    className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-black transition-colors"
                    aria-label="Next Month"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Day of Week Headers */}
              <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
              </div>

              {/* Calendar Grid Days */}
              <div className="grid grid-cols-7 gap-1 sm:gap-2">
                {Array.from({ length: firstDayIndex }).map((_, i) => (
                  <div key={`empty-${i}`} className="h-16 sm:h-20 rounded-lg bg-slate-50/50 border border-transparent" />
                ))}

                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const dayNum = i + 1;
                  const dayString = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
                  const dayEvents = events.filter(e => e.date === dayString);
                  const isSelected = selectedDayString === dayString;
                  const hasEvents = dayEvents.length > 0;

                  return (
                    <button
                      key={dayString}
                      onClick={() => setSelectedDayString(dayString)}
                      className={`h-16 sm:h-20 p-1.5 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                        isSelected
                          ? 'border-black bg-[#fdf5f5] ring-2 ring-[#e79a9b]'
                          : hasEvents
                          ? 'border-slate-300 bg-white hover:border-black hover:bg-[#fdf5f5]/40'
                          : 'border-slate-100 bg-white hover:bg-slate-50 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-bold font-mono ${isSelected ? 'text-black' : hasEvents ? 'text-black' : 'text-slate-400'}`}>
                          {dayNum}
                        </span>
                        {hasEvents && (
                          <span className="w-2 h-2 rounded-full bg-[#e79a9b]" />
                        )}
                      </div>

                      {hasEvents && (
                        <div className="w-full">
                          <div className="truncate text-[10px] font-bold text-black bg-slate-100 rounded px-1 py-0.5 border border-slate-200">
                            {dayEvents[0].title}
                          </div>
                          {dayEvents.length > 1 && (
                            <div className="text-[9px] text-[#b35759] font-bold mt-0.5">
                              +{dayEvents.length - 1} more
                            </div>
                          )}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#e79a9b]" /> Highlighted dates with community events
                </span>
                <span>Click any day to view scheduled workshops</span>
              </div>

            </div>

            {/* Right 4 Columns: Selected Day Schedule Detail Card */}
            <div className="lg:col-span-4 rounded-2xl bg-white border-2 border-slate-200 p-6 shadow-xs sticky top-28">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase">Selected Date</span>
                  <h4 className="text-base font-bold text-black">
                    {selectedDayString ? new Date(selectedDayString + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' }) : 'Select a date'}
                  </h4>
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-black text-white">
                  {eventsOnSelectedDay.length} {eventsOnSelectedDay.length === 1 ? 'Event' : 'Events'}
                </span>
              </div>

              {eventsOnSelectedDay.length > 0 ? (
                <div className="space-y-4">
                  {eventsOnSelectedDay.map(evt => (
                    <div key={evt.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${getCategoryColor(evt.category)}`}>
                          {evt.category}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">
                          {evt.capacity - evt.registeredCount} spots left
                        </span>
                      </div>

                      <h5 className="text-sm font-bold text-black leading-snug">
                        {evt.title}
                      </h5>

                      <div className="space-y-1.5 text-xs text-slate-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{evt.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="truncate">{evt.locationName}</span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {evt.description}
                      </p>

                      <div className="pt-2 flex items-center gap-2">
                        <a
                          href={LINKS.GOOGLE_FORM_INQUIRY_DIRECT}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 px-3 rounded-lg text-xs font-bold text-black bg-[#e79a9b] hover:bg-[#d98586] transition-colors text-center cursor-pointer border border-[#d98586]/60 inline-flex items-center justify-center gap-1"
                        >
                          <span>RSVP / Register</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <button
                          onClick={() => downloadEventIcs(evt)}
                          title="Download Calendar (.ics) file"
                          className="p-2 rounded-lg border border-slate-300 hover:bg-slate-100 text-black transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center text-slate-500">
                  <CalendarIcon className="w-8 h-8 mx-auto text-slate-300 mb-2" />
                  <p className="text-sm font-medium">No workshops scheduled on this date.</p>
                  <p className="text-xs text-slate-400 mt-1">Select highlighted days with dot indicators or switch to List View.</p>
                </div>
              )}

            </div>

          </div>
        )}

        {/* View Mode 2: Filterable List View */}
        {viewMode === 'list' && (
          <div className="space-y-4">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((evt) => (
                <div
                  key={evt.id}
                  className="rounded-2xl bg-white border-2 border-slate-200 p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 hover:border-black hover:shadow-md transition-all shadow-xs"
                >
                  {/* Left Column: Date Callout Block & Details */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                    
                    {/* Date Block */}
                    <div className="w-20 h-20 rounded-xl bg-black text-white flex flex-col items-center justify-center shrink-0 border border-slate-800">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#e79a9b]">
                        {new Date(evt.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                      <span className="text-2xl font-extrabold font-mono leading-none my-0.5">
                        {new Date(evt.date + 'T00:00:00').getDate()}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase">
                        {new Date(evt.date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short' })}
                      </span>
                    </div>

                    {/* Event Meta */}
                    <div className="space-y-1.5 max-w-2xl">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded border ${getCategoryColor(evt.category)}`}>
                          {evt.category}
                        </span>
                        {evt.featured && (
                          <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#fdf5f5] text-black border border-[#f3c2c3] flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-[#e79a9b]" /> Featured Program
                          </span>
                        )}
                        <span className="text-xs text-slate-500 font-medium">
                          Audience: {evt.audience}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-black leading-snug">
                        {evt.title}
                      </h4>

                      <div className="flex items-center gap-4 text-xs text-slate-600 flex-wrap">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" /> {evt.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" /> {evt.locationName} ({evt.address})
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                        {evt.description}
                      </p>
                    </div>

                  </div>

                  {/* Right Column: Spots & Actions */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center w-full lg:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-100 gap-3 shrink-0">
                    <div className="text-left sm:text-right">
                      <span className="text-xs text-slate-500 block">Registration</span>
                      <span className="text-sm font-bold text-black tabular-nums">
                        {evt.capacity - evt.registeredCount} spots available
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => downloadEventIcs(evt)}
                        title="Download Calendar (.ics) invite"
                        className="p-2.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-black transition-colors"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                      <a
                        href={LINKS.GOOGLE_FORM_INQUIRY_DIRECT}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-black bg-[#e79a9b] hover:bg-[#d98586] transition-all cursor-pointer whitespace-nowrap shadow-xs border border-[#d98586]/60"
                      >
                        <span>RSVP / Register</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>
              ))
            ) : (
              <div className="rounded-2xl bg-white border border-slate-200 p-12 text-center text-slate-500">
                <Search className="w-8 h-8 mx-auto text-slate-300 mb-3" />
                <h4 className="text-base font-bold text-slate-800">No events found matching your criteria</h4>
                <p className="text-xs text-slate-500 mt-1">Try resetting the category filter or clearing your search keywords.</p>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
