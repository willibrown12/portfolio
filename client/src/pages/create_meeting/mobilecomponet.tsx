import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from '@mui/material/styles'; // Use MUI's useTheme
import { dataType } from '.'; // Adjust the import based on your project structure

export function MobileComponent({ data }: { data: dataType }) {
  const theme = useTheme(); // Access the MUI theme

  return (
    <Card
      sx={{
        maxWidth: 345,
        maxHeight: 550,
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: theme.palette.background.paper, // Use theme background color
      }}
    >
      <CardHeader
        sx={{
          bgcolor: theme.palette.primary.main, // Use theme primary color
          color: theme.palette.primary.contrastText, // Use contrast text color
          padding: "8px 16px",
        }}
        title={data.title}
        subheaderTypographyProps={{ color: 'white', fontSize: "0.875rem" }}
      />
      <CardMedia
        component="img"
        height="194"
        image={data.image}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent
        sx={{
          padding: "16px",
          height: "200px",
          overflowY: "auto", // Corrected syntax for vertical scroll
        }}
      >
        <Typography
          variant="subtitle1"
          color="text.primary"
          gutterBottom
          sx={{ color: theme.palette.text.primary }} // Use theme text color
        >
          {data.description}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          padding: "8px 16px",
          borderTop: `1px solid ${theme.palette.divider}`, // Use theme divider color
        }}
      >
        <a
          className="scale"
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
        > website
          <OpenInNewIcon fontSize="large" color="primary" />
        </a>
        <a
          className="scale"
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
        > github
          <GitHubIcon fontSize="large" color="primary" />
        </a>
      </CardActions>
    </Card>
  );
}