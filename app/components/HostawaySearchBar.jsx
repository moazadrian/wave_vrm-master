'use client';

import { useEffect } from 'react';

export default function HostawaySearchBar() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://d2q3n06xhbi0am.cloudfront.net/widget.js?1640277196';
    script.async = true;

    script.onload = () => {
      if (window.searchBar) {
        window.searchBar({
          baseUrl: 'https://wavetest.holidayfuture.com/all-listings',
          showLocation: false,
          color: '#115e72',
          rounded: true,
          openInNewTab: true,
          font: 'Open Sans',
        });

        // Observe and apply restrictions to past dates
        const observer = new MutationObserver(() => {
          const today = new Date();
          today.setHours(0, 0, 0, 0); // remove time portion

          document.querySelectorAll('#hostaway-booking-widget td').forEach((td) => {
            const dateText = td.getAttribute('data-date'); // Hostaway may use this attribute
            if (dateText) {
              const cellDate = new Date(dateText);
              if (cellDate < today) {
                td.classList.add('past');
              }
            }
          });
        });

        const widget = document.getElementById('hostaway-booking-widget');
        if (widget) {
          observer.observe(widget, { childList: true, subtree: true });
        }

        return () => observer.disconnect();
      }
    };

    document.body.appendChild(script);

    return () => {
      const widget = document.getElementById('hostaway-booking-widget');
      if (widget) widget.innerHTML = '';
    };
  }, []);

  return (
    <div className="w-full flex justify-center bg-[#115e72] py-6">
      <div id="hostaway-booking-widget" className="w-full max-w-4xl" />
    </div>
  );
}
