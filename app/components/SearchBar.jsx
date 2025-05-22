import HostawayCalendar from './HostawaySearchBar';

export default function SearchBar() {
  return (
    <div style={{ backgroundColor: '#115e72' }} className="flex flex-col items-center py-6 space-y-4">

      {/* Hostaway Calendar below or inline as needed */}
      <HostawayCalendar />
    </div>
  );
}
