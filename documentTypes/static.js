import Document, { Html, Head, Main, NextScript } from 'next/document'


// Отключаем прелоады в тэге head переопределив несколько методов
// Декларация типов здесь node_modules/next/dist/pages/_document.d.ts
class HeadTest extends Head {
  getPreloadDynamicChunks() {
    return null;
  }
  getPreloadMainLinks() {
    return null;
  }
}

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <HeadTest />
        {/* Можно будет подправить раскрытия блока body, без подключенных скриптов он скрыт */}
        <body style={{display: 'block'}}>
          <Main />
          {/* Удаляем подключение скриптов */}
          {/* <NextScript /> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument