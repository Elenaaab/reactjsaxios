/* eslint-disable max-len */
// == Import npm
import React from 'react';
import { Input, Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ReposResults = ({ results }) => (
  <div>
    <Input placeholder={results.lenght} size="large" />
    <Card.Group>
      {results.map((repo) => (
        <Card key={repo.id}>
          <Image src={repo.owner.avatar_url} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{repo.name}</Card.Header>
            <Card.Meta>{repo.owner.url}</Card.Meta>
            <Card.Description>
              {repo.description}
            </Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </div>
);

ReposResults.propTypes = {
  result: PropTypes.number.isRequired,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReposResults;
