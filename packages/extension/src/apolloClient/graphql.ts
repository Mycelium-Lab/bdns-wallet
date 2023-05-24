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

export const BDNS_NAME_QUERY = gql`
  query MyQuery($resolvedAddress: String!) {
    domains(where: { resolvedAddress: $resolvedAddress }) {
      name
      resolvedAddress {
        id
      }
    }
  }
`;
