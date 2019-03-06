import React from 'react';
import PropTypes from 'prop-types';

const Facts = ({ facts }) => {
  const listOfFacts = facts.map(fact => {
    return (
      <li key={fact}>
        {fact}
      </li>
    );
  });

  return (
    < >
    <ul style={{ listStyle: 'none' }}>
      {listOfFacts}
    </ul>
    </>
  );
};

Facts.propTypes = {
  facts: PropTypes.array.isRequired
};

export default Facts;
