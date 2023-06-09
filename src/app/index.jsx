import {createBrowserRouter} from "react-router-dom";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import About from "../components/footer/about.jsx";
import Oferta from "../components/footer/oferta.jsx";
import Cart from "../components/cart/Cart.jsx";
import Main from '../pages/Main.jsx'
import Catalogue from "../components/header/Catalogue.jsx";
import NotFound from "../pages/NotFound.jsx";
import Registration from "../components/auth/Registration.jsx";
import Authorization from '../components/auth/Authorization.jsx'
import Password_recovery from "../components/auth/Password-recovery.jsx";
import MainMian from '../pages/MainMian.jsx'
import Category from "../components/header/Category.jsx";
import Products from "../pages/Products.jsx";
// import Catalog from '../pages/Catalog'
// import ProductPage from '../pages/ProductPage'

const path = (import.meta.env.PROD)? '/shop-template' : ''
  
const router = createBrowserRouter([
  {
    path: `${path}/main`,
    element: (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  },
  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // ---------------------------------------------------------
  {
    path: `${path}/catalogue`,
    element: (
      <div>
        <Header />
        <Catalogue />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/category`,
    element: (
      <div>
        <Category />
      </div>
    )
  },
  {
    path: `${path}/category/:id`,
    element: (
      <div>
        <Header />
        <Category />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/cart`,
    element: (
      <div>
        <Header />
        <Cart />
        <Footer />
      </div>
    )
  },
  // {
  //   path: `${path}/card`,
  //   element: (
  //     <div>
  //       <Header />
  //       <Card />
  //       <Footer />
  //     </div>
  //   )
  // },
  {
    path: `${path}/products/:id`,
    element: (
      <div>
        <Header />
        <Products />
        <Footer />
      </div>
    )
  },
  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // ---------------------------------------------------------
  {
    path: `${path}/registration`,
    element: (
      <div>
        <Header />
        <Registration />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/authorization`,
    element: (
      <div>
        <Header />
        <Authorization />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/recoverypasswoed`,
    element: (
      <div>
        <Header />
        <Password_recovery />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}//`,
    element: (
      <div>
        <Header />
        <MainMian />
        <Footer />

      </div>
    )
  },
  {
    path: `${path}/about`,
    element: (
      <div>
        <Header />
        <About/>
        <Footer />

      </div>
    )
  },
  {
    path: `${path}/Oferta`,
    element: (
      <div>
        <Header />
        <Oferta/>
        <Footer />

      </div>
    )
  },
  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // ---------------------------------------------------------

  // {
  //   path: `${path}/pagenofound`,
  //   element: (
  //     <div>
  //       <Header />
  //       <NotFound />
  //       <Footer />
  //     </div>
  //   )
  // },
  {
    path: `/category/:category`,
    element: <Category />
  },
  // {
  //   path: `${path}/products`,
  //   element: <ProductPage />
  // },
  // {
  //   path: `/cart`,
  //   element: <Cart />
  // }
  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // ---------------------------------------------------------
]);

export default router;