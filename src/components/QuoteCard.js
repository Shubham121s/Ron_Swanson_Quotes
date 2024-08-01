import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

const QuoteCard = ({ quote, onSave }) => {
  return (
    <Card
      sx={{
        margin: '20px',
        padding: '20px',
        maxWidth: '400px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        borderRadius: '15px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: 'black' }}
        >
          "{quote}"
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onSave(quote)}
          sx={{ marginTop: '10px' }}
          startIcon={<SaveIcon />}
        >
          Save to List
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuoteCard;
