import PropTypes from 'prop-types';
import RepoCard from './RepoCard/RepoCard';

import './ReposResults.scss';

const ReposResults = ({ data }) => {
  return (
    <div className="main">
      {data.items.map((currentItem) => {
        return <RepoCard key={currentItem.id} {...currentItem} />;
      })}
    </div>
  );
};

ReposResults.propTypes = {
  data: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ),
  }).isRequired,
};

export default ReposResults;
