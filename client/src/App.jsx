import { lazy, Suspense, useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import { RootLayout } from "./layouts";
import LoadingScreen from "./components/LoadingScreen";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const CarDetails = lazy(() => import("./pages/CarDetails"));
const Contact = lazy(() => import("./pages/Contact"));
const AllCars = lazy(() => import("./pages/AllCars"));
const TermsAndConditions = lazy(() => import("./pages//TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route element={<RootLayout />}>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="car-details/:cid" element={<CarDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cars" element={<AllCars />} />
            <Route
              path="terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="privacy-policy" element={<PrivacyPolicy />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </>
  )
);
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Suspense>
          <RouterProvider router={router} />
        </Suspense>
      )}
      <a
        href="https://wa.me/916380442901?text=Hi%20there!%20I%20need%20help."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition"
      >
        <img
          src="https://img.icons8.com/ios-filled/30/ffffff/whatsapp.png"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
};

export default App;
