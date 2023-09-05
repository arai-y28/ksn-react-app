import React from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'

const Login = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: 800,
          background: "white",
          textAlign: "center"
        }}
      >
        <Container maxWidth="md">
          <Box sx={{
          '& .MuiTextField-root': { m: 1, width: '90%' },
          }}>
            {/* ユーザ名入力ボックス */}
            <InputBasicTextField/>

            {/* パスワード入力ボックス */}
            <InputAdornments/>

            {/* ログインボタン */}
            <CustomButton/>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export function InputBasicTextField() {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="outlined-required"
        label="username"
        autoComplete="username"
      />
    </Box>
  );
}

export function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <div>
      <FormControl sx={{ m: 1, width: '90%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        </div>
    </Box>
  );
}

export function CustomButton() {
  return (
    <Button variant="contained" size="large" href="/main">
      ログインする
    </Button>
  );
}


export default Login;