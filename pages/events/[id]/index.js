import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';

const Index = () => {
    const router = useRouter();
    return (
        <Layout>
            <p>Event {router.query.id}</p>
        </Layout>
    );
  };
  
  export default Index