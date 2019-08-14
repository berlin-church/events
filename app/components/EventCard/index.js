/**
 *
 * EventCard
 *
 */

import PropTypes from 'prop-types';

import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import messages from './messages';

const useStyles = makeStyles({
  card: {
    margin: '0.75rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 'min-content',
  },
  media: {
    position: 'relative',
  },
  link: {
    color: 'orange',
    fontSize: '1.2em',
    borderTop: '1px solid rgba(160,160,160,0.2)',
    width: '100%',
    justifyContent: 'flex-start',
    height: '3em',
  },
  title: {
    position: 'absolute',
    top: '70%',
    left: '10%',
    color: 'white',
    fontSize: '1.5em',
  },
});

function EventCard(props) {
  const { event } = props;

  const formattedMsgObj = messages[event.msgKey];

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          image={event.image}
          title={event.title}
        />
        <div className={classes.title}>
          <FormattedMessage {...formattedMsgObj} />
        </div>
        <CardContent />
      </CardActionArea>
      <CardActions>
        <Button size="small" className={classes.link}>
          {event.url}
        </Button>
      </CardActions>
    </Card>
  );
}

EventCard.propTypes = {
  event: PropTypes.object,
};

export default memo(EventCard);
