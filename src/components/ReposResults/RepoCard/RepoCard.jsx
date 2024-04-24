import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react';

import './RepoCard.scss';

const RepoCard = () => {
  return (
    <Card>
      <Image src="/images/avatar/large/daniel.jpg" wrapped ui={false} />
      <CardContent>
        <CardHeader>freeCodeCamp</CardHeader>
        <CardMeta>freeCodeCamp</CardMeta>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A deserunt
          minima soluta.
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default RepoCard;
