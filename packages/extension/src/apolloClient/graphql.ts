import gql from "graphql-tag";
export const DOMAIN_QUERY = gql`
  query MyQuery($name: String!) {
    domains(where: { name: $name }) {
      name
      resolvedAddress {
        id
      }
    }
  }
`;
