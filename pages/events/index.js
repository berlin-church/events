import Layout from '../../components/Layout';
import EventList from '../../components/EventList';
import { withApollo } from '../../lib/apollo';

const Index = () => {
  return (
      <Layout>
          <EventList />
      </Layout>
  );
};
  
 export default withApollo(Index)