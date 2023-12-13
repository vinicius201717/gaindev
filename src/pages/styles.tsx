import { styled } from '@/styles'
import TextField from '@mui/material/TextField'
import { motion } from 'framer-motion'

export const Container = styled('main', {
  overflow: 'hidden',
})

export const Title = styled('h1', {
  width: '800px',
  fontSize: '4rem',
  fontWeight: 'bold',
  textAlign: 'left',
  color: 'white',
  margin: '100px 100px 0 100px',
})

export const Text = styled('p', {
  textAlign: 'left',
  fontSize: '1.5rem',
  width: '800px',
  margin: '20px 100px 0 100px',
  color: '#848D97',
})

export const Header = styled('header', {
  maxWidth: '100vw',
  height: '100px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 3rem',
})

export const Menu = styled('div', {
  gap: '2rem',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
})

export const Degre = styled('div', {
  width: '900px',
  height: '400px',
  position: 'fixed',
  top: '60px',
  right: '0',
  opacity: '0.2',
  background:
    'radial-gradient(circle, hsla(286, 43%, 46%, 1) 0%, hsla(0, 0%, 11%, 1) 39%)',

  filter:
    'progid: DXImageTransform.Microsoft.gradient( startColorstr="#9243A9", endColorstr="#1D1D1D", GradientType=1 )',
  zIndex: '-1',
})

export const Degre2 = styled('div', {
  width: '400px',
  height: '400px',
  position: 'fixed',
  top: '300px',
  left: '0',
  opacity: '0.2',
  background:
    'radial-gradient(circle, hsla(181, 36%, 47%, 1) 0%, hsla(0, 0%, 11%, 1) 61%)',

  filter:
    'progid: DXImageTransform.Microsoft.gradient( startColorstr="#4DA2A3", endColorstr="#1D1D1D", GradientType=1 )',
  zIndex: '-1',
})

export const Contact = styled('form', {
  height: '60px',
  margin: '20px 100px 40px 100px',
  padding: 0,
})

export const Input = styled(TextField, {
  width: '400px',
  padding: '10px',
  fontSize: '1rem',
  color: '#848D97',
  border: 'none',

  label: { color: '#848D97' },

  input: {
    color: 'white',
    border: 'none',
    boxShadow: '0px 0px 9px 0px rgba(0,0,0,0.75)',
  },
})

export const Button = styled('button', {
  width: '100px',
  padding: '18px',
  fontSize: '1rem',
  color: 'white',
  backgroundColor: '#34349c',
  border: 'none',
  marginTop: '10px',
  boxShadow: '0px 0px 9px 0px rgba(0,0,0,0.75)',
  borderRadius: '5px',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '#343f99',
  },
})

export const SectionTecnology = styled('section', {
  width: '100vw',
  height: '300px',
  backgroundColor: 'white',
  transform: 'translateY(-15px)',
  position: 'relarive',
  zIndex: '-1',
  marginBottom: '200px',
})

export const SectionTecnologyModalRight = styled(motion.div, {
  width: '700px',
  height: '450px',
  borderRadius: '20px',
  boxShadow: '0px 0px 9px 0px rgba(0,0,0,0.75)',
  position: 'absolute',
  right: '80px',
  top: '60px',
  backgroundColor: '#1D1D1D',
})

export const SectionTecnologyModalLeft = styled(motion.div, {
  width: '700px',
  height: '450px',
  borderRadius: '20px',
  boxShadow: '0px 0px 9px 0px rgba(0,0,0,0.75)',
  position: 'absolute',
  left: '80px',
  top: '200px',
  backgroundColor: '#1D1D1D',
})

export const SectionInfo = styled('section', {
  width: '100vw',
})
