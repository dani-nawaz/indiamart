import React, { useContext, useEffect, useState } from 'react'
import { register } from '../../actions/UserActions'
import { useDispatch, useSelector } from 'react-redux'
import { AccountContext } from './accountContext'
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from './common'
import { Marginer } from './marginer'
import { Alert, LinearProgress, Stack } from '@mui/material'
import { Box } from '@mui/system'
export const SignUpForm = ({ history, location }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const { switchToSignIn } = useContext(AccountContext)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  useEffect(() => {
    if (userInfo) {
      history.push('/')
    }
  }, [history, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password))
    }
  }
  return (
    <BoxContainer>
      <FormContainer>
        {message && <Alert severity='error'>{message}</Alert>}
        {loading && (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        )}

        {error && (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity='error'>{error}</Alert>
          </Stack>
        )}
        <Input
          type='text'
          placeholder='Full Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type='password'
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </FormContainer>

      <Marginer direction='vertical' margin='1.6em' />
      <SubmitButton type='submit' onClick={submitHandler}>
        SignUp
      </SubmitButton>
      <Marginer direction='vertical' margin='1em' />
      <MutedLink href='#'>
        {' '}
        Already Have an account?{' '}
        <BoldLink href='#' onClick={switchToSignIn}>
          Sign Un
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  )
}
