import { reducer as formReducer } from "redux-form";
import { configureStore } from "@reduxjs/toolkit";

import { contactSlice } from "./pages/contact/contactSlice";
import { firmSlice } from "./pages/firm/firmSlice";
import { servicesSlice } from "./pages/services/servicesSlice";
import { prioritiesSlice } from "./pages/priorities/prioritiesSlice";
import { integrationsSlice } from "./pages/integrations/integrationsSlice";
import { plansSlice } from "./pages/plans/plansSlice";
import { appSlice } from "appSlice.js";

export default configureStore({
  reducer: {
    form: formReducer,
    contact: contactSlice.reducer,
    firm: firmSlice.reducer,
    services: servicesSlice.reducer,
    priorities: prioritiesSlice.reducer,
    integrations: integrationsSlice.reducer,
    plans: plansSlice.reducer,
    app: appSlice.reducer,
  },
});
