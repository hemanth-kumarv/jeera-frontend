import React from "react";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RootComponent from "./RootComponent";
import { persistor, store } from "./store/reducers/store";

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Helmet>
                    <title>Jeera - A Jira clone</title>
                </Helmet>
                <RootComponent />
            </PersistGate>
        </Provider>
    );
};

export default App;
