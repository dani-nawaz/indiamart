import React, { useContext, useEffect, useState } from 'react'
import { AccountContext } from './accountContext'
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from './common'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

import { Marginer } from './marginer'
import { login } from '../../actions/UserActions'
import { Alert, LinearProgress, Stack } from '@mui/material'
import { Box } from '@mui/system'

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  const history = useHistory()

  useEffect(() => {
    if (userInfo) {
      history.push('/')
    }
  }, [history, userInfo])
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  const { switchToSignUp } = useContext(AccountContext)
  return (
    <BoxContainer>
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
      <FormContainer>
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
      </FormContainer>
      <Marginer direction='vertical' margin={10} />
      <MutedLink href='#'>Forget your Password?</MutedLink>
      <Marginer direction='vertical' margin='1.6em' />
      <SubmitButton type='submit' onClick={submitHandler}>
        SignIn
      </SubmitButton>
      <Marginer direction='vertical' margin='1em' />
      <MutedLink href='#'>
        {' '}
        Don't have and account?{' '}
        <BoldLink href='#' onClick={switchToSignUp}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  )
}
