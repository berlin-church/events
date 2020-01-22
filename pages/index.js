import Layout from '../components/Layout';
import EventList from '../components/EventList';
import { withApollo } from '../lib/apollo';

const Index = () => (
    <Layout>
      <EventList />
    </Layout>
  );
  
  export default withApollo(Index);