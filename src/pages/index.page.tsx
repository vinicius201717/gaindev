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
  FooterContainer,
  BigModal,
  ImageContainer,
} from './styles'
import Image from 'next/image'

import logo from '../../public/logo.png'
import instagram from '../../public/instagram.png'
import github from '../../public/github.png'
import whatsapp from '../../public/whatsapp.png'
import dashboard from '../../public/dashboard.png'

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
      <Title size="lg">Gain Development</Title>
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
        >
          <Title size="md">Nextjs</Title>
        </SectionTecnologyModalRight>
        <SectionTecnologyModalLeft
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Title size="md">Nodejs</Title>
        </SectionTecnologyModalLeft>
      </SectionTecnology>
      <BigModal
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        whileInView={{ opacity: 1, y: 50 }}
      >
        <h2>
          <span>Dashboards</span> Desenvolva um painel de controle intuitivo e
          eficiente para gerenciar suas operações com facilidade. Oferecemos uma
          experiência personalizada, insights poderosos e ferramentas avançadas
          para impulsionar a produtividade e tomada de decisões informadas.
        </h2>
        <ImageContainer>
          <Image src={dashboard} alt="dashboard" />
        </ImageContainer>
      </BigModal>
      <FooterContainer>
        <Image src={logo} alt="Logo" width={90} height={90} />
        <span>Gain Development</span>
        <Menu>
          <Image src={instagram} alt="" width={24} height={24} />
          <Image src={github} alt="" width={24} height={24} />
          <Image src={whatsapp} alt="" width={24} height={24} />
        </Menu>
      </FooterContainer>
    </Container>
  )
}
