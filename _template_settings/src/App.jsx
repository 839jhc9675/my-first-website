import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonSection from './components/sections/button-section.jsx';
import InputSection from './components/sections/input-section.jsx';
import NavigationSection from './components/sections/navigation-section.jsx';

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
        <Stack spacing={ 3 } sx={{ mt: 4 }}>
          <ButtonSection />
          <InputSection />
          <NavigationSection />
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
