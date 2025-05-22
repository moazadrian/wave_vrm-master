import HostawayCalendar from './HostawaySearchBar';

export default function SearchBar() {
  return (
   <div
  style={{ backgroundColor: '#115e72' }}
  className="fixed top-16 left-0 w-full z-40 flex flex-col items-center py-6 space-y-4 shadow-md"
>
      <HostawayCalendar />
    </div>
  );
}
