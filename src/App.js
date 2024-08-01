import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';
import { Container, Typography, Box, Grid, CircularProgress } from '@mui/material';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching quote', error);
    } finally {
      setLoading(false);
    }
  };

  const saveQuote = (quote) => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: 'url(https://source.unsplash.com/random/1920x1080?nature)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px',
        color: 'white',
      }}
    >
      <Container>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'Georgia, serif', color: 'black' }}>
          Ron Swanson Quotes
        </Typography>
        <Grid container justifyContent="center">
          {loading ? (
            <CircularProgress color="inherit" />
          ) : (
            quote && <QuoteCard quote={quote} onSave={saveQuote} />
          )}
        </Grid>
        <Typography variant="h5" align="center" gutterBottom sx={{ marginTop: '40px', fontFamily: 'Georgia, serif', color: 'black' }}>
          Saved Quotes
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {savedQuotes.map((savedQuote, index) => (
            <Grid item key={index}>
              <QuoteCard quote={savedQuote} onSave={() => {}} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default App;
