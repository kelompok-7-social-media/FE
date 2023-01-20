import { PersistGate } from "redux-persist/integration/react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store, persistor } from "utils/redux/store/store";
import Routes from "routes";
import "styles/index.css";
import "animate.css";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <CookiesProvider>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </CookiesProvider>
  </Provider>
);
