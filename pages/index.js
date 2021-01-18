import Button from '../components/Button';


function page() {
  return (
    <>
      <h1> { "Hello" } </h1>
      <Button />
    </>
  )
}


// Объявляем, что страница статическая и js не нужен
page.getInitialProps = async (ctx) => {
  return {
    doc: 'static'
  }
}

export default page;