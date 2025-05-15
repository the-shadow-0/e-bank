export const cardStyles = {
  card: {
    height: '100%',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
    }
  },
  cardContent: {
    padding: 4,
    '&:last-child': { paddingBottom: 4 }
  },
  cardTitle: {
    color: 'primary.main',
    fontWeight: 600,
    mb: 2
  },
  cardValue: {
    color: 'secondary.main',
    fontWeight: 500,
    fontSize: '1.5rem',
    mb: 3
  }
};
