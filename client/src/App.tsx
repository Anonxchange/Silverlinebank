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
import CustomerServicePage from "@/pages/CustomerServicePage";
import SavingsPage from "@/pages/SavingsPage";
import CheckingPage from "@/pages/CheckingPage";
import HomeLoanPage from "@/pages/HomeLoanPage";
import PersonalLoanPage from "@/pages/PersonalLoanPage";
import AutoLoanPage from "@/pages/AutoLoanPage";
import PremierPage from "@/pages/PremierPage";
import EducationToolsPage from "@/pages/EducationToolsPage";
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
      <Route path="/customer-service" component={CustomerServicePage} />
      <Route path="/savings" component={SavingsPage} />
      <Route path="/checking" component={CheckingPage} />
      <Route path="/home-loans" component={HomeLoanPage} />
      <Route path="/personal-loans" component={PersonalLoanPage} />
      <Route path="/auto-loans" component={AutoLoanPage} />
      <Route path="/premier" component={PremierPage} />
      <Route path="/education-tools" component={EducationToolsPage} />
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