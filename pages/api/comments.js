import {gql, GraphQLClient} from "graphql-request";

const graphAPI = 'https://api-eu-west-2.hygraph.com/v2/cldc4e6l90xb901ug51wnazz8/master';
const graphcms_token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NzUwOTc5MDMsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2xkYzRlNmw5MHhiOTAxdWc1MXduYXp6OC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYTY3YWRkMWEtMzI3NS00MTFlLTgyMDctNGNlOTZhODkzYWIzIiwianRpIjoiY2xkajIxaWJhMGEwajAxdWowdWsxaDdoMiJ9.sT2jXqDnMl6igcwtwQhSkQP20g6fBHlI6ed-g15eF5t7gLiGSAGbkxCOwFJ4e9GA3HdZ2A3oS-OUpXIVTkPLzOkhIE3h_y9zAM-esQuUMy9AGY7GcTBwnjXE342zXQ_Lwng_9FQgAetvk6kV5HhfjIDliGVzzUJXHgGkFrCWM1sD_UoNRGmIJUIpnE_2YMSlgFahlhBIgb-KMZ70s86QiZ01GN1V-6_dly871ksyQhso5ET3yQfgprg-tE8TgQXmOA91Qts9aUMqtGhlQNICRPw-1aKsg-YRLjWE5tDIfR5NJI73gpXaSS339nm6AfjWh-MqeI1hkgVhF1-HhfOP2mm7xK9uPdoQs6k7IbT3J01PjStl7RTQN6SSvi95sKYNNc0IVewmM5J4u-s1QQbay2J1EkpKPXYOP9J0qKMFMwyp7P_TimTk20By1g0YhjelszWTd2QP155Q15lzzecWRuVQLv2rOx2ZHeLsY9ShRMpD-u6VXIsOOZnLA7ux4_rljEuuLV-y9lUagYHYEo4zTSal1RJ1tEMfefnGkbu-flUQubGXHLXF5FACwdVO8xU4ytJBkNq1SUG2-xK7nGOdbl7Ckdbc95rlpUGwqPLsEgL8JKc3kDsa7FhIEPMjGM5t_9_IqPMpUFCS9Jd_O0uXDnsNSwKP_YxCBcE1LPR9T7k';

export default async function comments(req, res) {
  const graphQLClient = new GraphQLClient(graphAPI, {
    headers: {
      authorization: `Bearer ${graphcms_token}`
    }
  })

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug:String!){
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}){id}
    }
  `

  try {
    const result = await graphQLClient.request(query, req.body)
    return res.status(200).send(result);
  } catch(e){
    console.log(e);
  }
}