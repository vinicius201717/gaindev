import React from 'react'
import {
  Header,
  Menu,
  Title,
  Text,
  Degre,
  Container,
  Degre2,
  Contact,
  Input,
  Button,
  SectionTecnology,
  SectionTecnologyModalLeft,
  SectionTecnologyModalRight,
} from './styles'
import Image from 'next/image'

import logo from '../../public/logo.png'
import instagram from '../../public/instagram.png'
import github from '../../public/github.png'
import whatsapp from '../../public/whatsapp.png'
export default function Home() {
  return (
    <Container>
      <Degre />
      <Degre2 />
      <Header>
        <Image src={logo} alt="" width={50} height={50} />
        <Menu>
          <Image src={instagram} alt="" width={24} height={24} />
          <Image src={github} alt="" width={24} height={24} />
          <Image src={whatsapp} alt="" width={24} height={24} />
        </Menu>
      </Header>
      <Title>Gain Development</Title>
      <Text>
        Transformando visões em realidade: somos a vanguarda do desenvolvimento,
        oferecendo soluções inovadoras e personalizadas. Escolha a excelência,
        escolha a liderança. Seu sucesso começa aqui.
      </Text>
      <Contact>
        <Input id="outlined-basic" label="Whatsapp" variant="outlined" />
        <Button>Enviar</Button>
      </Contact>
      <SectionTecnology>
        <SectionTecnologyModalRight
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        ></SectionTecnologyModalRight>
        <SectionTecnologyModalLeft
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          whileInView={{ opacity: 1, x: 50 }}
        ></SectionTecnologyModalLeft>
      </SectionTecnology>
    </Container>
  )
}
