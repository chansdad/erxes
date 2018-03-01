import React from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { ProductItemForm } from '../components';
import { queries } from '../graphql';
import { Spinner } from 'modules/common/components';

class ProductItemFormContainer extends React.Component {
  render() {
    const { getUomQuery, getCurrenciesQuery } = this.props;

    if (getUomQuery.loading || getCurrenciesQuery.loading) {
      return <Spinner />;
    }

    const uom = getUomQuery.getConfig.value || [];
    const currencies = getCurrenciesQuery.getConfig.value || [];

    const extendedProps = {
      ...this.props,
      uom,
      currencies
    };

    return <ProductItemForm {...extendedProps} />;
  }
}

const propTypes = {
  getUomQuery: PropTypes.object,
  getCurrenciesQuery: PropTypes.object
};

ProductItemFormContainer.propTypes = propTypes;

export default compose(
  graphql(gql(queries.getConfig), {
    name: 'getUomQuery',
    options: {
      variables: {
        code: 'dealUOM'
      }
    }
  }),
  graphql(gql(queries.getConfig), {
    name: 'getCurrenciesQuery',
    options: {
      variables: {
        code: 'dealCurrency'
      }
    }
  })
)(ProductItemFormContainer);