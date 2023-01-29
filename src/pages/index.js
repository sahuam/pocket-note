import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header/Header";
import Button from "@/components/Buttons/Button";
import SignInForm from "@/components/forms/SignIn";
import RegisterForm from "@/components/forms/Register";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pocket Note +</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* logo */}
        <img src="/images/pocket_note_logo.png" className={styles.mainLogo} />
        {/* description */}
        <p className={styles.description}>
          Pocket note is a note keeper. You can easily manage your notes here.
        </p>
        {/* buttons */}
        <div className={styles.forms}>
          <SignInForm />
          <RegisterForm />
        </div>
      </main>
    </>
  );
}
