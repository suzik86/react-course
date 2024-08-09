import { json } from "@remix-run/node";
import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import React from "react";
import { Provider } from "react-redux";
import ErrorBoundary from "../src/components/ErrorBoundary";
import MainPage from "../src/pages/main/MainPage";
import { getBooks } from "../src/services/ApiService";
import { setupStore } from "../src/store/store";
import "./app.css";

const store = setupStore();

export const loader = async () => {
  // console.log("searchParams", searchParams);
  const data = await getBooks(0, "");
  if (!data) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ data });
};

export default function App() {
  const { data } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading" ? true : false;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ErrorBoundary
          fallback={<p className="error-msg">Something went wrong</p>}
        >
          <Provider store={store}>
            <MainPage data={data} isLoading={isLoading} />
          </Provider>
        </ErrorBoundary>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
