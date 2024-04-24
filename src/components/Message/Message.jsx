import PropTypes from 'prop-types';

import './Message.scss';

const Message = ({ count }) => {
  return (
    <div className="container">
      <p className="message">La recherche a donnée {count} résultats</p>
    </div>
  );
};

Message.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Message;
