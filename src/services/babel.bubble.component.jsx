import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    paddingTop: 50,
  },
};

export const BabelBubbleComponent = () => {

    return (
      <Card className={styles.card}>
        <img
          style={{ position: 'relative', width: '100%', height: 'auto' }}
          src="/images/services/babelbubble.png"
          alt={'babelbubble'}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2" style={{ fontSize: '18px' }}>
            <Button
              style={{ fontSize: '15px' }}
              size="small"
              color="primary"
              href="https://babel-bubble.com"
              target="_blank"
            >
              babel bubble
            </Button>
          </Typography>
          <Typography component="p" style={{ fontSize: '11px', color: 'gray' }}>
            React Redux Rxjs MaterialUi
                </Typography>
          <Typography component="p" style={{ fontSize: '11px', color: 'gray' }}>
            Django Python Nginx Mysql
                </Typography>
          <br />
          <Typography component="p" style={{ fontSize: '12px' }}>
            バベルバブルは無料で遊べる投資シミュレーションゲームです。ゲーム内で流通するアイテムをゲーム内通貨で売買して遊びます。アイテムを安い時に買って高い時に売ることで架空の市場取引を体験できます。
                </Typography>
        </CardContent>
      </Card>
    );
  }
