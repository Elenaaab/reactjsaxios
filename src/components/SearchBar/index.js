// == Import npm
import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SearchBar = ({ request, set, loading }) => (
  <Form
    onSubmit={(event) => {
      loading(event.preventDefault);
    }}
  >
    <Form.Field>
      <Input
        icon="search"
        placeholder="Search ..."
        type="text"
        size="large"
        value={request}
        onChange={(event) => {
          console.log('coucou');
          set(event.currentTarget.value);
        }}
      />
    </Form.Field>
  </Form>
);
SearchBar.propTypes = {
  request: PropTypes.string.isRequired,
  set: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
};

export default SearchBar;
