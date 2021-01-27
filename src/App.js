import './index.css';
import Header from './components/header.jsx';
import Layout from './components/layout.jsx';
import Footer from './components/footer.jsx';
function App() {

  return (
    <div>
      <Header title="Pupa" descr="dupa"/>
      <Layout id="0" title="Будем сидеть" descr="и КЕКАТЬ" url='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3e62948f-bef9-4af8-b2f6-c0a97abc27a7/bg3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210127T162954Z&X-Amz-Expires=86400&X-Amz-Signature=ea3411c333227c0086ab6e1fad45cfc016663ca15aba84f34501905bb8b2ba4d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D"bg3.jpg"'/>
      <Layout id="1" title="Будем сидеть" descr="и КЕКАТЬ"/>
      <Layout id="2" title="Будем сидеть" descr="и КЕКАТЬ"/>

      <Footer />
    </div>
  );
}

export default App;
