import { createBrowserRouter } from "react-router";
import App from "../../App";
// import HomeOne from "../../pages/home-one/HomeOne";
import HomeTwo from "../../pages/home-two/HomeTwo";
// import HomeThree from "../../pages/home-three/HomeThree";
import About from "../../pages/about/About";
import Team from "../../pages/team/Team";
import TeamCarousel from "../../pages/team-carousel/TeamCarousel";
import TeamDetails from "../../pages/team-details/TeamDetails";
import Portfolio from "../../pages/portfolio/Portfolio";
import PortfolioDetails from "../../pages/portfolio-details/PortfolioDetails";
import Testimonial from "../../pages/testimonial/Testimonial";
import TestimonialCarousel from "../../pages/testimonial-carousel/TestimonialCarousel";
import Pricing from "../../pages/pricing/Pricing";
import Gallery from "../../pages/gallery/Gallery";
import Faq from "../../pages/faq/Faq";
import Error from "../../pages/error/Error";
import Comming from "../../pages/comming-soon/Comming";
import Service from "../../pages/service/Service";
import DigitalMarketing from "../../pages/digital-marketing/DigitalMarketing";
import WebDesign from "../../pages/web-design/WebDesign";
import SearchEngine from "../../pages/search-engine/SearchEngine";
import DesignBranding from "../../pages/design-and-branding/DesignBranding";
import AppDevelopment from "../../pages/app-development/AppDevelopment";
import Contact from "../../pages/contact/Contact";
import Product from "../../pages/product/Product";
import ProductDetails from "../../pages/product-details/ProductDetails";
import Cart from "../../pages/cart/Cart";
import Checkout from "../../pages/checkout/Checkout";
import Wishlist from "../../pages/wishlist/Wishlist";
import SignUp from "../../pages/sign-up/SignUp";
import Login from "../../pages/login/Login";
import Blog from "../../pages/blog/Blog";
import BlogCarousel from "../../pages/blog/BlogCarousel";
import BlogList from "../../pages/blog/BlogList";
import BlogDetails from "../../pages/blog/BlogDetails";
import TermsAndConditions from "../../pages/terms-and-conditions/TermsAndConditions";
import PrivacyPolicy from "../../pages/privacy-policy/PrivacyPolicy";
// import SingleHomeOne from "../../pages/single-home-one/SingleHomeOne";
// import SingleHomeTwo from "../../pages/single-home-two/SingleHomeTwo";
// import SingleHomeThree from "../../pages/single-home-three/SingleHomeThree";

const ROUTER = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
         {
            path: "/",
            element: <HomeTwo />
         },
         // {
         //    path: 'index2',
         //    element: <HomeTwo />
         // },
         // {
         //    path: 'index3',
         //    element: <HomeThree />
         // },
         {
            path: 'about',
            element: <About />
         },
         {
            path: 'team',
            element: <Team />
         },
         {
            path: 'team-carousel',
            element: <TeamCarousel />
         },
         {
            path: 'team-details',
            element: <TeamDetails />
         },
         {
            path: 'portfolio',
            element: <Portfolio />
         },
         {
            path: 'portfolio-details',
            element: <PortfolioDetails />
         },
         {
            path: 'testimonials',
            element: <Testimonial />
         },
         {
            path: 'testimonial-carousel',
            element: <TestimonialCarousel />
         },
         {
            path: 'pricing',
            element: <Pricing />
         },
         {
            path: 'gallery',
            element: <Gallery />
         },
         {
            path: 'faq',
            element: <Faq />
         },
         {
            path: '404',
            element: <Error />
         },
         {
            path: 'coming-soon',
            element: <Comming />
         },
         {
            path: "services",
            element: <Service />
         },
         {
            path: "digital-marketing",
            element: <DigitalMarketing />
         },
         {
            path: "web-design-development",
            element: <WebDesign />
         },
         {
            path: "search-engine-optimization",
            element: <SearchEngine />
         },
         {
            path: "design-and-branding",
            element: <DesignBranding />
         },
         {
            path: "app-development",
            element: <AppDevelopment />
         },
         {
            path: "products",
            element: <Product />
         },
         {
            path: "product-details",
            element: <ProductDetails />
         },
         {
            path: "cart",
            element: <Cart />
         },
         {
            path: "checkout",
            element: <Checkout />
         },
         {
            path: "wishlist",
            element: <Wishlist />
         },
         {
            path: "sign-up",
            element: <SignUp />
         },
         {
            path: "login",
            element: <Login />
         },
         {
            path: "blog",
            element: <Blog />
         },
         {
            path: "blog-carousel",
            element: <BlogCarousel />
         },
         {
            path: "blog-list",
            element: <BlogList />
         },
         {
            path: "blog-details",
            element: <BlogDetails />
         },
         {
            path: "contact",
            element: <Contact />
         },
         {
            path: "terms-and-conditions",
            element: <TermsAndConditions />
         },
         {
            path: "privacy-policy",
            element: <PrivacyPolicy />
         },
         // {
         //    path: "index-one-page",
         //    element: <SingleHomeOne />
         // },
         // {
         //    path: "index2-one-page",
         //    element: <SingleHomeTwo />
         // },
         // {
         //    path: "index3-one-page",
         //    element: <SingleHomeThree />
         // }
      ]
   }
])

export default ROUTER;
