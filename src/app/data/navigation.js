import ContactPage from "app/pages/contact/contactPage";
import FirmPage from "app/pages/firm/firmPage";
import ServicesPage from "app/pages/services/servicesPage";
import FeaturesPage from "app/pages/features/featuresPage";
import IntegrationsPage from "app/pages/integrations/integrationsPage";
import DemoPage from "app/pages/demo/demoPage";
import FinalPage from "app/pages/final/finalPage";
import PlansPage from "app/pages/plans/plansPage";
import PrioritiesPage from "../pages/priorities/prioritiesPage";

export const contactPage = {
  index: 0,
  label: "Contact",
  path: "/",
  component: ContactPage,
};

export const firmPage = {
  index: 1,
  label: "Details",
  path: "/firm",
  component: FirmPage,
};

export const planPage = {
  index: 8,
  label: "Plans",
  path: "/plan",
  component: PlansPage,
};

export const servicesPage = {
  index: 2,
  label: "Services",
  path: "/services",
  component: ServicesPage,
};

export const featuresPage = {
  index: 6,
  label: "Features",
  path: "/features",
  component: FeaturesPage,
};

export const prioritiesPage = {
  index: 3,
  label: "Priorities",
  path: "/priorities",
  component: PrioritiesPage,
};

export const integrationsPage = {
  index: 4,
  label: "Integrations",
  path: "/integrations",
  component: IntegrationsPage,
};

export const demoPage = {
  index: 5,
  label: "Demo",
  path: "/demo",
  component: DemoPage,
};

export const finalPage = {
  index: 99,
  label: "Submit",
  path: "/final",
  component: FinalPage,
};

export default [
  contactPage,
  firmPage,
  servicesPage,
  prioritiesPage,
  integrationsPage,
  demoPage,
  featuresPage,
  planPage,
  finalPage
];
