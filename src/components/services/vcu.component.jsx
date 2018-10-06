import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    background: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

export const VcuComponent = () => {

    return (
      <Card style={styles.card}>
        <img
          style={{ position: 'relative', width: '100%', height: 'auto' }}
          src="/images/services/vcu.png"
          alt={'vcu'}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2" style={{ fontSize: '18px' }}>
            <Button
              style={{ fontSize: '15px', color: 'white' }}
              size="small"
              color="primary"
              href="https://v-cu.com"
              target="_blank"
            >
              vcu
            </Button>
          </Typography>
          <Typography component="p" style={{ fontSize: '11px', color: 'gray' }}>
            Django Bootstrap
                </Typography>
          <Typography component="p" style={{ fontSize: '11px', color: 'gray' }}>
            Django Python Nginx Mysql
                </Typography>
          <br />
          <Typography component="p" style={{ fontSize: '12px', color: 'rgba(143, 143, 143, 1)' }}>
            VCUは、複数の取引所から自動でデータを取得し、 仮想通貨のポートフォリオを簡単にチェックすることができるサービスです。保有残高を取引所とデータ連携を行うことで自動的に取得します。
                </Typography>
        </CardContent>
      </Card>
    );
  }
