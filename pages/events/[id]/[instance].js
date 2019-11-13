import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';

const Index = () => {
    const router = useRouter();
    const {id, instance} = router.query;

    return (
        <Layout>
            <p>Event {id}</p>
            <p>Instance {instance}</p>
        </Layout>
    );
  };
  
  export default Index