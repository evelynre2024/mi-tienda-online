// Indicamos que es un componente del lado del cliente
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  // Tienda Salud

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image
          src="/tienda-salud.png"
          alt="Logo de Tienda Salud"
          width={150}
          height={150}
        />
      </header>

      <main className={styles.main}>
        <h1>Catálogo de libros electrónicos</h1>

        <div className={styles.product}>
          <Image
            src="/portada-ebook.png"
            alt="Portada del libro electrónico"
            width={250}
            height={350}
          />
          <div className={styles.productDetails}>
            <h2>Guía para un Estilo de Vida Saludable</h2>
            <p>Guía nutricional para personas con hipertensión. Descubre cómo mejorar tu salud de manera sencilla.</p>
            <a
              href="https://mpago.la/2wsBvQM"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buyButton}
            >
              Comprar por $15.000 ARS con Mercado Pago
            </a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Aprende</p>
      </footer>
    </div>
  );
}







































