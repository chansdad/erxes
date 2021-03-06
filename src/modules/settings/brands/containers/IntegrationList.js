import React from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { queries } from '../graphql';
import { IntegrationList } from '../components';

const IntegrationListContainer = props => {
  const { integrationsQuery } = props;

  const integrations = integrationsQuery.integrations || [];

  const updatedProps = {
    ...props,
    integrations,
    loading: integrationsQuery.loading,
    refetch: integrationsQuery.refetch
  };

  return <IntegrationList {...updatedProps} />;
};

IntegrationListContainer.propTypes = {
  integrationsQuery: PropTypes.object
};

export default compose(
  graphql(gql(queries.integrations), {
    name: 'integrationsQuery',
    options: ({ queryParams, currentBrand }) => ({
      variables: {
        brandId: currentBrand._id,
        searchValue: queryParams.searchValue,
        page: queryParams.page,
        perPage: queryParams.perPage || 20,
        kind: queryParams.kind
      },
      fetchPolicy: 'network-only'
    })
  })
)(IntegrationListContainer);
