import PropTypes from 'prop-types';

import './Message.scss';

const Message = ({ count }) => {
  let message = '';
  if (count > 0) {
    message = `La recherche a donnée ${count} résultats`;
  } else {
    message = 'Bienvenue, effectuez une recherche';
  }
  return (
    <div className="container">
      <p className="message">{message}</p>
    </div>
  );
};

Message.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Message;
