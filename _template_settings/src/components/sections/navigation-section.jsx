import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

const MENUS = ['홈', '소개', '서비스', '연락처'];

/**
 * NavigationSection 컴포넌트
 *
 * MUI AppBar / Toolbar 로 만든 네비게이션 바.
 * 데스크톱(md 이상)에서는 메뉴 버튼, 모바일에서는 햄버거 메뉴로 표시하며
 * 메뉴 클릭 시 알림창으로 메뉴명을 표시한다.
 *
 * Props: 없음
 *
 * Example usage:
 * <NavigationSection />
 */
function NavigationSection() {
  const [anchorEl, setAnchorEl] = useState(null);

  /** 메뉴명을 알림창으로 표시하고 모바일 메뉴를 닫음 */
  const handleMenuClick = (menu) => {
    setAnchorEl(null);
    window.alert(`${ menu } 메뉴를 클릭했습니다.`);
  };

  return (
    <Paper component="section" sx={{ p: { xs: 2, md: 3 } }}>
      <Typography variant="h2" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, lineHeight: 1.3, mb: 2 }}>
        Navigation
      </Typography>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            { MENUS.map((menu) => (
              <Button key={ menu } color="inherit" onClick={ () => handleMenuClick(menu) }>
                { menu }
              </Button>
            )) }
          </Box>
          <IconButton
            color="inherit"
            aria-label="메뉴 열기"
            onClick={ (event) => setAnchorEl(event.currentTarget) }
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={ anchorEl }
            open={ Boolean(anchorEl) }
            onClose={ () => setAnchorEl(null) }
          >
            { MENUS.map((menu) => (
              <MenuItem key={ menu } onClick={ () => handleMenuClick(menu) }>
                { menu }
              </MenuItem>
            )) }
          </Menu>
        </Toolbar>
      </AppBar>
    </Paper>
  );
}

export default NavigationSection;
