import PropTypes from 'prop-types';
import RepoCard from './RepoCard/RepoCard';

import './ReposResults.scss';

const ReposResults = ({ data }) => {
  return (
    <div className="main-container">
      <div className="main">
        {data.map((currentItem) => {
          return <RepoCard key={currentItem.id} {...currentItem} />;
        })}
      </div>
    </div>
  );
};

ReposResults.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ReposResults;
