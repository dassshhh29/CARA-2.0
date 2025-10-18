import React from "react";
import Header from "./header";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <Header />

      <section id="hero">
        <h4>Ofertas de intercambio</h4>
        <h2>Promociones increíbles</h2>
        <h1>En todos nuestros productos</h1>
        <p>Ahorra más con cupones y descuentos de hasta 70%</p>
        <button>Comprar ahora</button>
      </section>

      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src="../src/assets/img/features/f1.png" alt="Envío gratuito" />
          <h6>Envío gratuito</h6>
        </div>
        <div className="fe-box">
          <img src="../src/assets/img/features/f2.png" alt="Pedido en línea" />
          <h6>Pedido en línea</h6>
        </div>
        <div className="fe-box">
          <img src="../src/assets/img/features/f3.png" alt="Ahorra dinero" />
          <h6>Ahorra dinero</h6>
        </div>
        <div className="fe-box">
          <img src="../src/assets/img/features/f4.png" alt="Promociones" />
          <h6>Promociones</h6>
        </div>
        <div className="fe-box">
          <img src="../src/assets/img/features/f5.png" alt="Ventas felices" />
          <h6>Ventas felices</h6>
        </div>
        <div className="fe-box">
          <img src="../src/assets/img/features/f6.png" alt="Soporte" />
          <h6>Soporte al cliente</h6>
        </div>
      </section>

      <section id="product1" className="section-p1">
        <h2>Productos destacados</h2>
        <p>Los más vendidos del minimarket</p>
        <div className="pro-container">
          <div className="pro">
            <img src="../src/assets/img/products/f1.jpg" alt="Aceite Vegetal" />
            <div className="des">
              <span>Primor</span>
              <h5>Aceite vegetal 1L</h5>
              <div className="star">
                <i className="fas fa-star"></i><i className="fas fa-star"></i>
                <i className="fas fa-star"></i><i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>S/. 12.50</h4>
            </div>
            <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
          </div>

          <div className="pro">
            <img src="../src/assets/img/products/f2.jpg" alt="Arroz Costeño" />
            <div className="des">
              <span>Costeño</span>
              <h5>Arroz superior 5kg</h5>
              <div className="star">
                <i className="fas fa-star"></i><i className="fas fa-star"></i>
                <i className="fas fa-star"></i><i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>S/. 25.90</h4>
            </div>
            <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
          </div>

          <div className="pro">
            <img src="../src/assets/img/products/f3.jpg" alt="Leche Gloria" />
            <div className="des">
              <span>Gloria</span>
              <h5>Leche evaporada 400ml</h5>
              <div className="star">
                <i className="fas fa-star"></i><i className="fas fa-star"></i>
                <i className="fas fa-star"></i><i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>S/. 4.20</h4>
            </div>
            <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
          </div>

          <div className="pro">
            <img src="../src/assets/img/products/f4.jpg" alt="Pan de molde" />
            <div className="des">
              <span>Bimbo</span>
              <h5>Pan de molde integral</h5>
              <div className="star">
                <i className="fas fa-star"></i><i className="fas fa-star"></i>
                <i className="fas fa-star"></i><i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>S/. 8.90</h4>
            </div>
            <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
          </div>
        </div>
      </section>

      <section id="banner" className="section-m1">
        <h4>Servicio al cliente</h4>
        <h2>Hasta <span>70% de descuento</span> en productos seleccionados</h2>
        <button className="normal">Ver más</button>
      </section>

      <section id="sm-banner" className="section-p1">
        <div className="banner-box">
          <h4>Ofertas locas</h4>
          <h2>Lleva 2 y paga 1</h2>
          <span>Los mejores precios del mercado</span>
          <button className="white">Ver detalles</button>
        </div>
        <div className="banner-box banner-box2">
          <h4>Temporada de verano</h4>
          <h2>Promociones especiales</h2>
          <span>Productos frescos y naturales</span>
          <button className="white">Explorar</button>
        </div>
      </section>

      <section id="banner3">
        <div className="banner-box">
          <h2>OFERTAS DE TEMPORADA</h2>
          <h3>Hasta 50% en bebidas</h3>
        </div>
        <div className="banner-box">
          <h2>OFERTAS DE TEMPORADA</h2>
          <h3>Snacks y dulces -40%</h3>
        </div>
        <div className="banner-box">
          <h2>OFERTAS DE TEMPORADA</h2>
          <h3>Descuentos en productos del hogar</h3>
        </div>
      </section>

      <section id="newsletters" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Suscríbete a nuestro boletín</h4>
          <p>Recibe novedades sobre productos y <span>ofertas exclusivas</span></p>
        </div>
        <div className="form">
          <input type="text" placeholder="Tu correo electrónico" />
          <button className="normal">Suscribirse</button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
