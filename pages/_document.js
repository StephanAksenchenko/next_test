import Document from 'next/document'
import DefaultDocument from '../documentTypes/default';
import Static from '../documentTypes/static';


// Используем фабричный метод
class DocumentFactory extends Document {

  render() {
    // получаем информацию о типе страницы
    const pageProps = this.props.__NEXT_DATA__.props.pageProps;
    if (pageProps.doc === 'static') {
      return <Static />
    }
    else {
      return  <DefaultDocument />
    }
    
  }
    
}

export default DocumentFactory