import { Card, CardContent, Typography,  Container } from '@mui/material';

const AboutCard = () => {
  return (
    <Container sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <Card
        sx={{
          
          boxShadow: 3,
          borderRadius: 2,
       
          textAlign: 'center',
        }}
      >
        <CardContent>
          <Typography variant="h3" color="secondary" gutterBottom>
            About myself
          </Typography>

          <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
            I love building things that are both functional and user-friendly. I'm always learning and improving, whether it's front end, back end, or everything in between. I enjoy solving problems and taking on new challenges that push me to grow.
          </Typography>

          <Typography variant="h4" color="secondary" sx={{ mt: 4, fontWeight: 'bold' }}>
            Feel free to check out my projects—this portfolio is one of them!
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AboutCard;
