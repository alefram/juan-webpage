import { Html, Head, Main, NextScript } from "next/document";
import Footer from '../components/Footer';

export default function Document() {
    return (
        <Html lang="es">
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap"
                    rel="stylesheet"
                />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"></link>
                <link rel="icon" type="image/svg" href="/svgs/logo.svg"/>
            </Head>
            <body>
                <Main/>
                <NextScript/>
                <Footer/>
            </body>
        </Html>
    )
}