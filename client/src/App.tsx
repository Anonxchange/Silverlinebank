import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/HomePage";
import SignOnPage from "@/pages/SignOnPage";
import InvestingPage from "@/pages/InvestingPage";
import SmallBusinessPage from "@/pages/SmallBusinessPage";
import CommercialBankingPage from "@/pages/CommercialBankingPage";
import CorporateInvestmentBankingPage from "@/pages/CorporateInvestmentBankingPage";
import AtmLocationPage from "@/pages/AtmLocationPage";
import AboutPage from "@/pages/AboutPage";
import NotFoundPage from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/sign-on" component={SignOnPage} />
      <Route path="/investing" component={InvestingPage} />
      <Route path="/small-business" component={SmallBusinessPage} />
      <Route path="/commercial-banking" component={CommercialBankingPage} />
      <Route path="/corporate-investment-banking" component={CorporateInvestmentBankingPage} />
      <Route path="/atm-locations" component={AtmLocationPage} />
       <Route path="/about" component={AboutPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;