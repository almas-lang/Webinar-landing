// ============================================
// MASTER EVENT CONFIGURATION
// ============================================
// Edit these values to update event details across the entire application
// This includes: Hero, Thank You page, Sticky Banner, and all other components
//
// 📋 QUICK CHECKLIST when updating event:
// ✅ 1. Update displayDate (e.g., "Nov 15-17, 2025")
// ✅ 2. Update displayTime (e.g., "7:00 PM IST")
// ✅ 3. Update platform if needed (e.g., "Google Meet" or "Zoom")
// ✅ 4. Update startDate and endDate (see instructions below)
// ✅ 5. Update location if platform changes
// ✅ 6. Update whatsappGroupLink with new invite link
//
// ============================================

export const eventConfig = {
  // Event Basic Info
  title: "Design Leadership Masterclass",
  description: "Exclusive LIVE Masterclass on Navigating Design Leadership & Strategy with Shaik Murad",

  // Date & Time (Display)
  displayDate: "Nov 15, 2025",
  displayTime: "7:00 PM IST",

  // Platform
  platform: "Google Meet",
  platformNote: "link will be emailed",

  // Calendar Integration (for .ics files and calendar links)
  // IMPORTANT: Update these when changing event date/time
  location: "Online (Google Meet - link will be emailed)",

  // ⏰ How to set startDate and endDate:
  // Format: YYYYMMDDTHHMMSSZ (in UTC timezone)
  // Example: "20251115T133000Z" = Nov 15, 2025, 1:30 PM UTC (7:00 PM IST)
  //
  // 🔧 Easy Date Converter: https://www.timeanddate.com/worldclock/converter.html
  // 1. Enter your local time (e.g., 7:00 PM IST on Nov 15, 2025)
  // 2. Convert to UTC
  // 3. Format as: YYYYMMDDTHHMMSSZ (no spaces, no dashes in time)
  //    - YYYY = Year (2025)
  //    - MM = Month (11 for November)
  //    - DD = Day (15)
  //    - T = Separator (keep as is)
  //    - HH = Hour in 24h format UTC (13 for 1 PM UTC)
  //    - MM = Minutes (30)
  //    - SS = Seconds (00)
  //    - Z = UTC timezone (keep as is)

  startDate: "20251115T133000Z", // Nov 15, 2025 7:00 PM IST (13:30 UTC)
  endDate: "20251115T153000Z", // Nov 15, 2025 9:00 PM IST (15:30 UTC)

  // Pricing
  price: "₹999", // Regular price
  discountedPrice: "₹499", // Discounted price (if applicable)

  // WhatsApp Group
  whatsappGroupLink: "https://chat.whatsapp.com/YOUR_GROUP_INVITE_CODE",

  // paymentLink 
   pgPaymentLink: "https://payments.cashfree.com/forms/design-manager",

  // Support Contact
  supportEmail: "team@xperiencewave.com",
};

// Helper to get full location string
export const getFullLocation = () => {
  return `${eventConfig.platform} (${eventConfig.platformNote})`;
};

// Helper to get formatted date and time
export const getEventDateTime = () => {
  return `${eventConfig.displayDate} at ${eventConfig.displayTime}`;
};

// Helper to get registration end date (one day before event)
export const getRegistrationEndDate = () => {
  // Parse the displayDate (format: "Nov 15, 2025")
  const eventDate = new Date(eventConfig.displayDate);
  // Subtract one day
  eventDate.setDate(eventDate.getDate() - 1);

  // Format as "DD Month 'YY"
  const day = eventDate.getDate();
  const month = eventDate.toLocaleString('en-US', { month: 'short' });
  const year = eventDate.getFullYear().toString().slice(-2);

  return `${day} ${month} '${year}`;
};
