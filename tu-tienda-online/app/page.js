// Indicamos que es un componente del lado del cliente
"use client";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Banner de Tienda */}
      <header className={styles.header}>
        <Image
          src="/Banner tienda.png" // Asegúrate de que este archivo esté en la carpeta "public"
          alt="Banner de la Tienda Salud"
          width={1200} // Ajusta el tamaño según necesites
          height={400}
          priority
        />
      </header>

      {/* Contenido principal */}
      <main className={styles.main}>
        <h1>Catálogo de libros electrónicos</h1>

        <div className={styles.product}>
          <Image
            src="/portada-ebook.png" // Imagen de portada del eBook
            alt="Portada del libro electrónico"
            width={250}
            height={350}
          />
          <div className={styles.productDetails}>
            <h2>Guía para un Estilo de Vida Saludable</h2>
            <p>Guía nutricional para personas con hipertensión. Descubre cómo mejorar tu salud de manera sencilla.</p>
            <a
              href="https://mpago.la/2wsBvQM" // Link de Mercado Pago
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buyButton}
            >
              Comprar por $15.000 ARS con Mercado Pago
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>Tienda Salud © 2024</p>
      </footer>
    </div>
  );
}























