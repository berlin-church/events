import { useQuery } from '@apollo/react-hooks'
import { NetworkStatus } from 'apollo-client'
import gql from 'graphql-tag';

const query = gql`
query {
    events {
        id
        name
        imageUrl
        isVisible
    }
}
`
export const allEventsQueryVars = {
    skip: 0,
    first: 10,
}

export default function EventList() {
    const { loading, error, data, fetchMore, networkStatus } = useQuery(
        query,
        {
          variables: allEventsQueryVars,
          // Setting this value to true will make the component rerender when
          // the "networkStatus" changes, so we are able to know if it is fetching
          // more data
          notifyOnNetworkStatusChange: true,
        }
      )

      const loadingMoreEvents = networkStatus === NetworkStatus.fetchMore

      const loadMoreEvents = () => {
        fetchMore({
          variables: {
            skip: allEvents.length,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult
            }
            return Object.assign({}, previousResult, {
              // Append the new events results to the old one
              allEvents: [...previousResult.allEvents, ...fetchMoreResult.allEvents],
            })
          },
        })
      }

      if (error) return <ErrorMessage message="Error loading events." />
      if (loading && !loadingMoreEvents) return <div>Loading</div>

      const { events } = data
      return (
        <section>
          <ul>
            {events.map((event, index) => (
              <li key={event.id}>
                <div>
                    <span className="card-title">{event.name}</span>
                    <img src={event.imageUrl} />
                </div>
              </li>
            ))}
          </ul>
          <style jsx>{`
            section {
              padding-bottom: 20px;
            }
            li {
              display: block;
              margin-bottom: 10px;
            }
            div {
              align-items: center;
              display: flex;
            }
            a {
              font-size: 14px;
              margin-right: 10px;
              text-decoration: none;
              padding-bottom: 0;
              border: 0;
            }
            span {
              font-size: 14px;
              margin-right: 5px;
            }
            ul {
              margin: 0;
              padding: 0;
            }
            button:before {
              align-self: center;
              border-style: solid;
              border-width: 6px 4px 0 4px;
              border-color: #ffffff transparent transparent transparent;
              content: '';
              height: 0;
              margin-right: 5px;
              width: 0;
            }
          `}</style>
        </section>
      )
}