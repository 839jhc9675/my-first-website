import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/**
 * App 컴포넌트
 *
 * 전체 페이지 중앙정렬 레이아웃을 제공하는 최상위 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <App />
 */
function App() {
  return (
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      py: { xs: 2, md: 4 },
    }}>
      <Container maxWidth="md" sx={{ py: 4, px: { xs: 2, md: 3 } }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            lineHeight: 1.2,
            textAlign: 'center',
          }}
        >
          Hello, MUI
        </Typography>
      </Container>
    </Box>
  );
}

export default App;
