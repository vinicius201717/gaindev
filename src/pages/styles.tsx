import { styled } from '@/styles'
import { motion } from 'framer-motion'

export const Container = styled('main', {
  overflow: 'hidden',
  position: 'relative',
})

export const CircleDesing = styled(motion.div, {
  width: '1000px',
  height: '200px',
  borderRadius: '50%',
  position: 'absolute',
  top: '-100px',
  right: '-150px',
  zIndex: '-1',
  backgroundColor: '#FFF',
  transform: 'rotate(10deg) scale(1)',
  boxShadow: '0px 0px 10px 0px rgba(255,255,255,1)',
})

export const Title = styled(motion.h1, {
  width: '800px',
  fontSize: '4rem',
  fontWeight: 'bold',
  textAlign: 'left',
  color: 'white',
  margin: '100px 100px 0 100px',

  variants: {
    size: {
      lg: {
        fontSize: '4rem',
      },
      md: {
        fontSize: '2rem',
      },
      sm: {
        fontSize: '0.5rem',
      },
    },
  },

  '@media(max-width: 963px)': {
    margin: '50px 50px 0 50px',
  },

  '@media(max-width: 797px)': {
    marginLeft: '20px',
    width: '90%',
    fontSize: '2rem!important',
  },
})

export const Text = styled(motion.p, {
  textAlign: 'left',
  fontSize: '1.5rem',
  width: '800px',
  margin: '20px 100px 0 100px',
  color: '#848D97!important',

  '@media(max-width: 963px)': {
    margin: '0 50px 0 50px',
  },

  '@media(max-width: 797px)': {
    marginLeft: '20px',
    width: '90%',
    fontSize: '1rem',
  },
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
  zIndex: '-2',

  '@media(max-width: 1000px)': {
    width: '400px',
  },
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
  zIndex: '-2',
})

export const SectionTecnology = styled('section', {
  width: '100vw',
  transform: 'translateY(-15px)',
  display: 'flex',
  justifyContent: 'space-around',
  position: 'relative',
  zIndex: '-1',

  '@media(max-width: 1105px)': {
    flexDirection: 'column',
    marginTop: '100px',
  },
})

export const BoxLineWhite = styled('div', {
  width: '150%',
  height: '300px',
  backgroundColor: '#FFF',
  position: 'absolute',
  top: '0',
  left: '-100px',
  zIndex: -1,
  boxShadow: '0px 0px 10px 0px rgba(255,255,255,1)',

  variants: {
    rotateA: {
      transform: {
        rotate: '169deg',
        scale: 1,
      },
    },
    rotateB: {
      transform: {
        rotate: '10deg',
        scale: 1,
      },
    },
  },
})

export const SectionTecnologyModalRight = styled(motion.div, {
  width: '40rem',
  height: 'auto',
  borderRadius: '20px',
  boxShadow: '0px 0px 9px 0px rgba(0,0,0,0.75)',
  backgroundColor: '#1D1D1D',
  marginTop: '50px',
  boxSizing: 'border-box',
  overflow: 'hidden',
  padding: '30px 30px 0 30px',

  img: {
    marginBottom: '-20px',
  },

  h1: {
    fontSize: '2.5rem',
    color: '#3bf2ff',
    fontWeight: 'bold',
    marginBottom: '0',
  },

  p: {
    fontSize: '1.4rem',
    color: '#838383',
  },

  '@media(max-width: 1570px)': {
    width: '34rem',
    height: '34rem',
  },
  '@media(max-width: 1105px)': {
    width: '97%',
    minHeight: '300px',
    margin: '10px',
    position: 'relative',

    img: {
      position: 'absolute',
      right: '0',
    },
  },
})

export const SectionTecnologyModalLeft = styled(motion.div, {
  width: '40rem',
  borderRadius: '20px',
  boxShadow: '0px 0px 9px 0px rgba(0,0,0,0.75)',
  backgroundColor: '#1D1D1D',
  marginTop: '100px',
  overflow: 'hidden',
  boxSizing: 'border-box',
  padding: '30px 30px 0 30px',

  img: {
    marginBottom: '-500px',
  },

  h1: {
    fontSize: '2.5rem',
    color: '#f778ba',
    fontWeight: 'bold',
    marginBottom: '0',
  },

  p: {
    fontSize: '1.4rem',
    color: '#838383',
  },

  '@media(max-width: 1570px)': {
    width: '34rem',
    height: '34rem',
  },
  '@media(max-width: 1105px)': {
    width: '97%',
    minHeight: '300px',
    margin: '10px',
    position: 'relative',

    img: {
      position: 'absolute',
      right: '-100px',
    },
  },
})

export const BigModal = styled(motion.article, {
  width: '90%',
  borderRadius: '10px',
  margin: '20px auto',
  border: '1px solid #1f1f1f',
  backgroundColor: '#1D1D1D',
  boxShadow: '0px 0px 9px 0px rgba(0,0,0,0.75)',
  marginBottom: '100px',
  position: 'relative',

  h2: {
    width: '500px',
    margin: '100px',

    span: {
      color: '#3fb950',
    },
  },

  '@media(max-width: 1148px)': {
    h2: {
      width: '320px',
    },
  },
  '@media(max-width: 961px)': {
    padding: '20px',
    h2: {
      width: '100%',
      margin: '20px auto',
    },
  },

  '@media(max-width: 800px)': {
    h2: {
      fontSize: '1.4rem',
      color: '#838383',
    },
  },
  '@media(max-width: 580px)': {
    height: 'auto',

    h2: {
      fontSize: '1rem',
    },
  },
})

export const ImageContainer = styled('div', {
  width: '30rem',
  height: '80%',
  position: 'absolute',
  bottom: 0,
  right: 0,
  borderRadius: '10px 0 10px 0',
  boxShadow: '-5px -5px 14px 0px rgba(0,0,0,0.75)',
  marginTop: '20px',

  img: {
    width: '100%',
    height: '100%',
  },

  '@media(max-width: 961px)': {
    height: '70%',
    width: '28rem',
    display: 'none',
  },
  '@media(max-width: 800px)': {
    width: '35rem',
    img: {
      width: '100%',
      height: '100%',
    },
  },
  '@media(max-width: 580px)': {
    display: 'none',
  },
})

export const SecondInfo = styled('section', {
  width: '100vw',
  display: 'flex',
  alignItems: 'center',

  img: {
    marginLeft: '100px',
  },

  '@media(max-width: 1181px)': {
    img: {
      '&:first-child': {
        display: 'none',
      },
    },
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

export const SecondInfoMoveDiv = styled(motion.div, {
  marginBottom: '100px',
  h1: { color: '#c7fdfb', width: 'auto' },
  p: { color: '#ffffff', width: 'auto' },
  '@media(max-width: 1181px)': {
    marginLeft: '0',
    h1: {
      textAlign: 'center',
    },
    p: {
      textAlign: 'center',
    },
  },
})

export const SecondInfoMoveCircle = styled(motion.div, {
  borderRadius: '50%',
  marginLeft: '100px',
  display: 'flex',
  flexWrap: 'wrap',
  overflow: 'hidden',

  '@media(max-width: 1181px)': {
    marginLeft: '0',
  },
})

export const ThirdInfo = styled('section', {
  width: '100vw',
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  marginTop: '100px',
  position: 'relative',

  img: {
    transform: 'rotate(180deg) scale(1)',
    marginRight: '100px',
  },

  '@media(max-width: 1181px)': {
    flexDirection: 'column',

    img: {
      display: 'none',
    },
  },
})

export const ThirdInfoMoveDiv = styled(motion.div, {
  width: '500px',
  borderRadius: '10px',
  marginRight: '100px',
  boxShadow: '0px 0px 9px 0px rgba(0,0,0,0.75)',
  backgroundColor: '#1D1D1D',
  position: 'absolute',
  left: '100px',
  top: '0',
  overflow: 'hidden',
  paddingBottom: '20px',

  h1: {
    margin: '50px',
    color: '#87df76',
  },

  '@media(max-width: 1181px)': {
    width: '97%',
    marginRight: 0,
    marginBottom: '100px',
    position: 'static',
    left: 0,
    order: 2,
  },
})

export const ItemList = styled(motion.li, {
  width: '100%',
  display: 'flex',
  margin: '20px',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '20px',

  img: {
    margin: 0,
  },
  p: {
    margin: 0,
  },
})

export const FourthInfo = styled('section', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',

  '@media(max-width: 1238px)': {
    flexDirection: 'column',
  },
})

export const PriceContainer = styled(motion.div, {
  width: '400px',
  height: '600px',
  marginTop: '550px',
  borderRadius: '10px',
  boxShadow: '0px 0px 9px 0px rgba(0,0,0,0.75)',
  backgroundColor: '#1D1D1D',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',

  h1: {
    width: 'auto',
    margin: '20px',
    color: '#e6e3e3',
    borderBottom: '5px solid #84abff47',
  },

  variants: {
    center: {
      bg: {
        backgroundColor: 'white',
        marginTop: '300px',

        '@media(max-width: 1238px)': {
          marginTop: '20px',
        },
      },
    },
    h1Color: {
      true: {
        h1: {
          color: '#294c97',
        },
      },
    },
  },

  '@media(max-width: 1238px)': {
    width: '97%',
    marginTop: '20px',
    '&:nth-child(3)': {
      marginTop: '10px',
    },
  },
})

export const ItemListPrice = styled(motion.li, {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginLeft: '-150px',
  marginTop: '20px',
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',

  gap: '10px',

  variants: {
    center: {
      true: {
        paddingLeft: '120px',
        color: '#4e4e4e',
      },
    },
  },
})

export const ValuePrice = styled('div', {
  position: 'absolute',
  bottom: 20,
  fontWeight: 'bold',
  color: '#1d1d1d',
  fontSize: '1.5rem',
})

export const NewContactContainer = styled('section', {
  width: '100%',
  height: '500px',
  padding: '10px',
  marginBottom: '200px',

  '@media(max-width: 802px)': {
    marginBottom: '0',
  },
})

export const FooterContainer = styled('footer', {
  width: '100vw',
  height: '200px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  span: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export const SubFooter = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#141518',

  div: {
    marginRight: '100px',
  },

  span: {
    color: '#777777',
    fontSize: '14px',
    fontWeight: 'normal',
    marginLeft: '100px',
  },
})
