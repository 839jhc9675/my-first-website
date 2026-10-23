import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const VARIANTS = ['standard', 'outlined', 'filled'];

/**
 * InputSection 컴포넌트
 *
 * MUI TextField 의 variant 3가지를 label / placeholder 와 함께 보여주고,
 * 각 입력값을 아래에 실시간으로 표시한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <InputSection />
 */
function InputSection() {
  const [values, setValues] = useState({ standard: '', outlined: '', filled: '' });

  /** variant 별 입력값 갱신 */
  const handleChange = (variant) => (event) => {
    setValues((prev) => ({ ...prev, [variant]: event.target.value }));
  };

  return (
    <Paper component="section" sx={{ p: { xs: 2, md: 3 } }}>
      <Typography variant="h2" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, mb: 2 }}>
        Input
      </Typography>
      <Stack spacing={ 3 }>
        { VARIANTS.map((variant) => (
          <Box key={ variant }>
            <TextField
              fullWidth
              variant={ variant }
              label={ `${ variant } 입력` }
              placeholder="내용을 입력하세요"
              value={ values[variant] }
              onChange={ handleChange(variant) }
            />
            <Box sx={{ mt: 1, fontSize: '0.875rem', color: 'text.secondary' }}>
              입력값: { values[variant] || '(없음)' }
            </Box>
          </Box>
        )) }
      </Stack>
    </Paper>
  );
}

export default InputSection;
