import Layout from '../../components/Layout';

const Index = () => {
    return (
        <Layout>
            <p>Events</p>
        </Layout>
    );
  };
  
  Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
  
    console.log(`Show data fetched. Count: ${data.length}`);
  
    return {
      shows: data.map(entry => entry.show)
    };
  };

  export default Index