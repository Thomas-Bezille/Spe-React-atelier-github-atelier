import PropTypes from 'prop-types';
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Image,
} from 'semantic-ui-react';

import './RepoCard.scss';

const RepoCard = ({ full_name, owner, description }) => {
  return (
    <Card>
      <Image src={owner.avatar_url} wrapped ui={false} />
      <CardContent>
        <CardHeader>{full_name}</CardHeader>
        <CardMeta>{owner.login}</CardMeta>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

RepoCard.propTypes = {
  full_name: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
};

export default RepoCard;
