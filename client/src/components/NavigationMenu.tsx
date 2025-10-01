import { useState } from "react";
import { X, ChevronRight, ChevronLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  title: string;
  icon?: string;
  description?: string;
  link?: string;
}

interface SubMenuItem {
  title: string;
  primaryAction?: string;
  secondaryAction?: string;
  products: MenuItem[];
  sections?: {
    title: string;
    items: string[];
  }[];
}

interface MenuCategory {
  title: string;
  isHighlighted?: boolean;
  submenu?: {
    [key: string]: SubMenuItem;
  };
}

const menuData: { [key: string]: MenuCategory } = {
  personal: {
    title: "Personal",
    isHighlighted: true,
    submenu: {
      checking: {
        title: "Checking",
        primaryAction: "View all checking accounts",
        secondaryAction: "Compare checking accounts",
        products: [
          {
            title: "Clear Access Banking",
            icon: "🐷",
            description: "An account that helps you spend only what you have in it"
          },
          {
            title: "Prime Checking",
            icon: "%",
            description: "Many discounts and benefits are included with this interest-bearing account"
          },
          {
            title: "Everyday Checking",
            icon: "⭐",
            description: "Our most popular account for managing day-to-day financial needs"
          },
          {
            title: "Premier Checking",
            icon: "◯",
            description: "An interest-bearing account with our premier level of relationship banking benefits"
          },
          {
            title: "Student/teen banking",
            icon: "🍎",
            description: "Account options ideal for teens and students"
          }
        ],
        sections: [
          {
            title: "BANKING SERVICES",
            items: [
              "Routing and account numbers",
              "Overdraft services",
              "Security and fraud",
              "Checking FAQs",
              "Global remittance",
              "Make an appointment",
              "Foreign exchange",
              "Activate debit card"
            ]
          },
          {
            title: "DIGITAL BANKING",
            items: [
              "Silverline Bank Online®",
              "Silverline Bank Mobile® app",
              "Transfer and pay",
              "Report fraud"
            ]
          }
        ]
      },
      savings: {
        title: "Savings & CDs",
        primaryAction: "View all savings accounts",
        secondaryAction: "Check all rates",
        products: [
          {
            title: "Way2Save® Savings",
            icon: "$",
            description: "Build your savings automatically"
          },
          {
            title: "Platinum Savings",
            icon: "💰",
            description: "Grow your savings with more ways to access your money"
          },
          {
            title: "Silverline Bank CDs",
            icon: "🌱",
            description: "Provide a guaranteed rate of return, even during uncertain times"
          },
          {
            title: "Kids Savings",
            icon: "🐷",
            description: "A good way to start your children on the road to financial success"
          }
        ],
        sections: [
          {
            title: "BANKING SERVICES",
            items: [
              "Routing and account numbers",
              "Tax center",
              "Security and fraud",
              "Savings FAQs",
              "Global remittance",
              "Make an appointment",
              "Foreign exchange"
            ]
          },
          {
            title: "DIGITAL BANKING",
            items: [
              "Silverline Bank Online®",
              "Silverline Bank Mobile® app",
              "Transfer and pay"
            ]
          }
        ]
      },
      homeLoans: {
        title: "Home Loans",
        primaryAction: "View home loans",
        secondaryAction: "Get a personalized rate quote",
        products: [
          {
            title: "Buy a home",
            icon: "🏠",
            description: "Get started on your homeownership journey"
          },
          {
            title: "Refinance your mortgage",
            icon: "%",
            description: "Do home repairs, reduce payments, or more"
          },
          {
            title: "Check mortgage rates",
            icon: "%",
            description: "See rate and APR information for popular loan types"
          },
          {
            title: "First-time homebuyers",
            icon: "🐷",
            description: "Make your dream of homeownership a reality with first-time homebuyer resources"
          },
          {
            title: "Shop for homes",
            icon: "🔍",
            description: "Access our exclusive tool for customers"
          },
          {
            title: "Low down payment options",
            icon: "%",
            description: "Learn about our low down payment and closing cost programs"
          }
        ],
        sections: [
          {
            title: "MORTGAGE TOOLS",
            items: [
              "Mortgage and refinance calculators",
              "Mortgage Learning Center",
              "Start your application"
            ]
          },
          {
            title: "MORTGAGE SERVICES",
            items: [
              "Manage your account",
              "Get help with payment challenges"
            ]
          }
        ]
      },
      personalLoans: {
        title: "Personal Loans",
        primaryAction: "See my loan options",
        secondaryAction: "",
        products: [
          {
            title: "Personal loans",
            icon: "%",
            description: "Learn how a personal loan can help you with funds for life events like graduations and weddings, adoption and fertility, or other needs"
          },
          {
            title: "Loans for home improvement",
            icon: "🏠",
            description: "Use a personal loan to pay for home renovations and repairs"
          },
          {
            title: "Finance a large expense",
            icon: "◯",
            description: "Pay for new appliances, car repairs, medical expenses, and more"
          },
          {
            title: "Consolidate debt",
            icon: "🎯",
            description: "Combine your higher-interest debt into one manageable payment"
          }
        ],
        sections: [
          {
            title: "PERSONAL LOAN SERVICES",
            items: [
              "How to apply for a loan",
              "How to make a payment"
            ]
          },
          {
            title: "EDUCATION & TOOLS",
            items: [
              "Check your rate and loan options",
              "Debt consolidation calculator",
              "Understanding credit and debt"
            ]
          }
        ]
      },
      autoLoans: {
        title: "Auto Loans",
        primaryAction: "Explore auto loans",
        secondaryAction: "",
        products: [
          {
            title: "Current auto loan customers",
            icon: "🚗",
            description: "Sign in to make payments, view statements, set up alerts, and more"
          },
          {
            title: "Vehicle financing",
            icon: "%",
            description: "New and used vehicle financing through your dealer"
          },
          {
            title: "Enroll in Silverline Bank Online®",
            icon: "📱",
            description: "Use online banking to manage your auto loan"
          }
        ],
        sections: [
          {
            title: "AUTO LOAN SERVICES",
            items: [
              "Other ways to make a payment",
              "Silverline Bank Mobile® app"
            ]
          },
          {
            title: "EDUCATION & TOOLS",
            items: [
              "Auto loan FAQs",
              "Learn about electric vehicles"
            ]
          }
        ]
      },
      premier: {
        title: "Premier",
        primaryAction: "Premier services overview",
        secondaryAction: "",
        products: [
          {
            title: "Introducing Silverline Bank Premier",
            icon: "◯",
            description: "Elevate your financial expectations"
          },
          {
            title: "Premier Checking",
            icon: "💳",
            description: "An interest-bearing account with our premier level of relationship banking benefits"
          }
        ],
        sections: [
          {
            title: "BANKING SERVICES",
            items: [
              "Routing and account numbers",
              "Overdraft services",
              "Security and fraud",
              "Checking FAQs",
              "Global remittance",
              "Make an appointment",
              "Foreign exchange",
              "Activate debit card"
            ]
          },
          {
            title: "DIGITAL BANKING",
            items: [
              "Silverline Bank Online®",
              "Silverline Bank Mobile® app",
              "Transfer and pay",
              "Report fraud"
            ]
          }
        ]
      }
    }
  },
  investing: {
    title: "Investing & Wealth Management",
    isHighlighted: false
  },
  smallBusiness: {
    title: "Small Business",
    isHighlighted: false
  },
  commercial: {
    title: "Commercial Banking",
    isHighlighted: false
  },
  corporate: {
    title: "Corporate & Investment Banking",
    isHighlighted: false
  },
  about: {
    title: "About Silverline Bank",
    isHighlighted: false
  },
  atms: {
    title: "ATMs/Locations",
    isHighlighted: false
  },
  customerService: {
    title: "Customer service and FAQs",
    isHighlighted: false
  },
  espanol: {
    title: "Español",
    isHighlighted: false
  }
};

type ViewState = 
  | { type: "main" }
  | { type: "category"; category: string }
  | { type: "detail"; category: string; item: string };

export default function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [viewState, setViewState] = useState<ViewState>({ type: "main" });

  if (!isOpen) return null;

  const handleBack = () => {
    if (viewState.type === "detail") {
      setViewState({ type: "category", category: viewState.category });
    } else if (viewState.type === "category") {
      setViewState({ type: "main" });
    }
  };

  const renderMainMenu = () => (
    <>
      {Object.entries(menuData).map(([key, category]) => (
        <button
          key={key}
          className={`w-full px-4 py-4 flex items-center justify-between hover:bg-accent active:bg-accent/80 border-b border-border last:border-b-0 ${
            category.isHighlighted ? 'bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500' : 'bg-background'
          }`}
          onClick={() => {
            if (category.submenu) {
              setViewState({ type: "category", category: key });
            } else if (key === "investing") {
              setLocation('/investing');
              onClose();
            } else if (key === "smallBusiness") {
              setLocation('/small-business');
              onClose();
            } else if (key === "commercial") {
              setLocation('/commercial-banking');
              onClose();
            } else if (key === "corporate") {
              setLocation('/corporate-investment-banking');
              onClose();
            } else if (key === "about") {
              setLocation('/about');
              onClose();
            } else if (key === "atms") {
              setLocation('/atm-locations');
              onClose();
            } else if (key === "customerService") {
              setLocation('/customer-service');
              onClose();
            }
          }}
        >
          <span className={`text-base ${category.isHighlighted ? 'font-semibold' : ''}`}>
            {category.title}
          </span>
          {category.submenu && <ChevronRight className="h-5 w-5 text-muted-foreground" />}
        </button>
      ))}
    </>
  );

  const renderCategoryMenu = (categoryKey: string) => {
    const category = menuData[categoryKey];
    if (!category.submenu) return null;

    return (
      <>
        {Object.entries(category.submenu).map(([key, item]) => (
          <button
            key={key}
            className="w-full px-4 py-4 flex items-center justify-between hover:bg-accent active:bg-accent/80 border-b border-border last:border-b-0 bg-background"
            onClick={() => setViewState({ type: "detail", category: categoryKey, item: key })}
          >
            <span className="text-base">{item.title}</span>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>
        ))}
      </>
    );
  };

  const renderDetailMenu = (categoryKey: string, itemKey: string) => {
    const category = menuData[categoryKey];
    if (!category.submenu) return null;

    const item = category.submenu[itemKey];
    if (!item) return null;

    return (
      <>
        {item.primaryAction && (
          <div className="px-4 py-3">
            <Button 
              className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full py-6 text-base font-semibold"
              onClick={() => console.log(item.primaryAction)}
            >
              {item.primaryAction}
            </Button>
          </div>
        )}

        {item.secondaryAction && (
          <div className="px-4 pb-3">
            <Button 
              variant="outline"
              className="w-full rounded-full py-6 text-base font-semibold"
              onClick={() => console.log(item.secondaryAction)}
            >
              {item.secondaryAction}
            </Button>
          </div>
        )}

        <div className="bg-background">
          {item.products.map((product, index) => (
            <button
              key={index}
              className="w-full px-4 py-4 flex items-start gap-3 hover:bg-accent active:bg-accent/80 border-b border-border"
              onClick={() => {
                if (itemKey === 'savings') {
                  setLocation('/savings');
                  onClose();
                } else if (itemKey === 'checking') {
                  setLocation('/checking');
                  onClose();
                } else {
                  console.log(product.title);
                }
              }}
            >
              <div className="text-2xl mt-1">{product.icon}</div>
              <div className="flex-1 text-left">
                <div className="font-semibold text-base mb-1">{product.title}</div>
                {product.description && (
                  <div className="text-sm text-muted-foreground">{product.description}</div>
                )}
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
            </button>
          ))}
        </div>

        {item.sections?.map((section, sectionIndex) => (
          <div key={sectionIndex} className="border-t border-border bg-background">
            <div className="px-4 py-3 font-bold text-sm">{section.title}</div>
            {section.items.map((sectionItem, itemIndex) => (
              <button
                key={itemIndex}
                className="w-full px-4 py-3 text-left hover:bg-accent active:bg-accent/80 border-b border-border last:border-b-0"
                onClick={() => console.log(sectionItem)}
              >
                <span className="text-base">{sectionItem}</span>
              </button>
            ))}
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-foreground/50 z-40"
        onClick={onClose}
      />
      <div className="fixed top-16 right-0 h-[calc(100vh-4rem)] w-80 bg-background z-50 shadow-xl overflow-y-auto">
        <div className="p-4 bg-background border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-gray-300"
            />
          </div>
        </div>

        {viewState.type !== "main" && (
          <div className="border-b border-border bg-background">
            <button
              className="w-full px-4 py-3 flex items-center gap-2 hover:bg-accent active:bg-accent/80"
              onClick={handleBack}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="text-base font-medium">Back</span>
            </button>
          </div>
        )}

        <div className="border-b border-border">
          {viewState.type === "main" && renderMainMenu()}
          {viewState.type === "category" && renderCategoryMenu(viewState.category)}
          {viewState.type === "detail" && renderDetailMenu(viewState.category, viewState.item)}
        </div>
      </div>
    </>
  );
}