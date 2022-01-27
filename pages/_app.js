function GlobalStyle() {
    return (
        <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: 'Open Sans', sans-serif;
      }
      /* App fit Height */ 
      html, body, #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      ::-webkit-scrollbar {
        width: 12px;
        background-color: transparent;
    }
    
    ::-webkit-scrollbar-button {
        display: none;
        width: 0;
        height: 0;
    }
    
    ::-webkit-scrollbar-corner {
        background-color: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #4a4d52;
        border: 2px solid #282a2d;
        border-radius: 10px;
    }
      /* ./App fit Height */ 
    `}</style>
    );
  }

export default function MyApp({ Component, pageProps }) {
    console.log('Aplicando Global Style CSS!');
    return (
    <>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
    );
}