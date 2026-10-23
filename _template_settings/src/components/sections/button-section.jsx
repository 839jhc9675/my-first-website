import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const VARIANTS = ['contained', 'outlined', 'text'];
const COLORS = ['primary', 'secondary', 'error'];

/**
 * ButtonSection 컴포넌트
 *
 * MUI Button 의 variant 3가지 x color 3가지 조합을 보여주고,
 * 클릭 시 알림창으로 어떤 버튼인지 표시한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <ButtonSection />
 */
function ButtonSection() {
  /** 클릭한 버튼의 variant / color 를 알림창으로 표시 */
  const handleClick = (variant, color) => {
    window.alert(`${ variant } / ${ color } 버튼을 클릭했습니다.`);
  };

  return (
    <Paper component="section" sx={{ p: { xs: 2, md: 3 } }}>
      <Typography variant="h2" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, lineHeight: 1.3, mb: 2 }}>
        Button
      </Typography>
      <Stack spacing={ 2 }>
        { VARIANTS.map((variant) => (
          <Box key={ variant }>
            <Box sx={{ fontSize: '0.875rem', color: 'text.secondary', mb: 1 }}>
              { variant }
            </Box>
            <Stack direction="row" spacing={ 1 } useFlexGap sx={{ flexWrap: 'wrap' }}>
              { COLORS.map((color) => (
                <Button
                  key={ color }
                  variant={ variant }
                  color={ color }
                  onClick={ () => handleClick(variant, color) }
                >
                  { color }
                </Button>
              )) }
            </Stack>
          </Box>
        )) }
      </Stack>
    </Paper>
  );
}

export default ButtonSection;
