import "./App.css";
import Companies from "./sections/Companies";
import Hero from "./sections/Hero";
import HowWork from "./sections/HowWork";
import Navbar from "./components/Navbar";
import InfoCards from "./sections/InfoCards";
import Products from "./sections/Products";
import ContactUs from "./sections/ContactUs";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Products />
      <InfoCards />
      <HowWork />
      <ContactUs />
    </>
  );
}
