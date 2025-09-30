import { SiFacebook, SiLinkedin, SiInstagram, SiPinterest, SiYoutube, SiX } from "react-icons/si";

const footerLinks = [
  {
    title: "Legal",
    links: [
      "Privacy, Cookies, Security & Legal",
      "Notice of Data Collection",
      "Online Access Agreement",
      "About Silverline Bank",
      "Inclusion and Accessibility"
    ]
  },
  {
    title: "Important Information",
    links: [
      "Do Not Sell or Share My Personal Information",
      "General Terms of Use",
      "Report Fraud",
      "Careers",
      "Sitemap"
    ]
  }
];

const socialIcons = [
  { Icon: SiFacebook, label: "Facebook" },
  { Icon: SiLinkedin, label: "LinkedIn" },
  { Icon: SiInstagram, label: "Instagram" },
  { Icon: SiPinterest, label: "Pinterest" },
  { Icon: SiYoutube, label: "YouTube" },
  { Icon: SiX, label: "X (Twitter)" }
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      className="text-sm text-foreground hover:text-primary transition-colors"
                      data-testid={`link-footer-${link.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => console.log(`${link} clicked`)}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mb-8">
          {socialIcons.map(({ Icon, label }, index) => (
            <button
              key={index}
              className="text-foreground hover:text-primary transition-colors"
              aria-label={label}
              data-testid={`button-social-${label.toLowerCase()}`}
              onClick={() => console.log(`${label} clicked`)}
            >
              <Icon className="w-6 h-6" />
            </button>
          ))}
        </div>

        <div className="border border-border rounded-md p-6 mb-6">
          <h3 className="text-base font-semibold text-foreground mb-4">
            Investment and Insurance Products are:
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span>•</span>
              <span>Not Insured by the FDIC or Any Federal Government Agency</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Not a Deposit or Other Obligation of, or Guaranteed by, the Bank or Any Bank Affiliate</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Subject to Investment Risks, Including Possible Loss of the Principal Amount Invested</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4 text-xs text-muted-foreground">
          <p>
            Investment products and services are offered through Silverline Bank Advisors. Silverline Bank Advisors is a trade name used by Silverline Bank Clearing Services, LLC (SFCS) and Silverline Bank Advisors Financial Network, LLC, Members SIPC, separate registered broker-dealers and non-bank affiliates of Silverline Bank & Company.
          </p>
          <p>
            1. Availability may be affected by your mobile carrier's coverage area. Your mobile carrier's message and data rates may apply. Fargo is only available on the smartphone versions of the Silverline Bank Mobile® app.
          </p>
          <p>
            Android, Google Play, Chrome, Pixel and other marks are trademarks of Google LLC.
          </p>
          <p>
            Apple, the Apple logo, Apple Pay, Apple Watch, Face ID, iCloud Keychain, iPad, iPad Pro, iPhone, iTunes, Mac, Safari, and Touch ID are trademarks of Apple Inc., registered in the U.S. and other countries. Apple Wallet is a trademark of Apple Inc. App Store is a service mark of Apple Inc.
          </p>
          <p>
            Deposit products offered by Silverline Bank, N.A. Member FDIC.
          </p>
          <div className="flex items-center gap-2 pt-4">
            <div className="text-base">🏠</div>
            <span className="font-medium">Equal Housing Lender</span>
          </div>
          <p className="pt-2">PM-09282026-7798034.1.1</p>
          <p>LRC-0325</p>
          <p className="pt-4">© 1999 - 2025 Silverline Bank. NMLS# ID 399801</p>
        </div>
      </div>
    </footer>
  );
}
