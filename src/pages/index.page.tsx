import {
  Header,
  Menu,
  Title,
  Text,
  Degre,
  Container,
  Degre2,
  SectionTecnology,
  SectionTecnologyModalLeft,
  SectionTecnologyModalRight,
  FooterContainer,
  BigModal,
  ImageContainer,
  BoxLineWhite,
  SecondInfo,
  SecondInfoMoveDiv,
  SecondInfoMoveCircle,
  ThirdInfo,
  ThirdInfoMoveDiv,
  FourthInfo,
  PriceContainer,
  NewContactContainer,
  SubFooter,
  ItemList,
  ItemListPrice,
  CircleDesing,
} from './styles'

import logo from '../../public/logo.png'
import instagram from '../../public/instagram.png'
import github from '../../public/github.png'
import whatsapp from '../../public/whatsapp.png'
import dashboard from '../../public/dashboard.png'
import security from '../../public/security.svg'
import qualitycode from '../../public/qualitycode.png'
import qualitycodecell from '../../public/qualitycodecell.png'
import confirme from '../../public/confirme.png'
import visto from '../../public/visto.png'
import nextLogo from '../../public/nextLogo.png'
import nodejs from '../../public/nodejs.svg'
import reactLogo from '../../public/reactLogo.png'
import versellogo from '../../public/versellogo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <CircleDesing />
      <Degre />
      <Degre2 />
      <Header>
        <Image src={logo} alt="" width={50} height={50} />
        <Menu>
          <Link href="https://www.instagram.com/gainagencia/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==">
            <Image src={instagram} alt="" width={24} height={24} />
          </Link>
          <Link href="https://github.com/vinicius201717">
            <Image src={github} alt="" width={24} height={24} />
          </Link>
          <Link href="https://wa.me/5562984250875">
            <Image src={whatsapp} alt="" width={24} height={24} />
          </Link>
        </Menu>
      </Header>
      <Title size="lg">Gain Development</Title>
      <Text>
        Transformando visões em realidade: somos a vanguarda do desenvolvimento,
        oferecendo soluções inovadoras e personalizadas. Escolha a excelência,
        escolha a liderança. Seu sucesso começa aqui.
      </Text>
      <SectionTecnology>
        <BoxLineWhite rotateA={'transform'} />

        <SectionTecnologyModalLeft
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h1>Versão mobile</h1>
          <p>
            Experiência móvel com design agradável e intuitivo, pensado para
            proporcionar praticidade e conforto ao usuário. A interface foi
            desenvolvida com foco na simplicidade e eficiência, garantindo uma
            experiência fluida em dispositivos móveis.
          </p>
          <Image src={qualitycodecell} alt="" width={700} />
        </SectionTecnologyModalLeft>
        <SectionTecnologyModalRight
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <h1>Codigo organizado</h1>
          <p>
            Desenvolvemos de forma organizada para melhor desempenho e
            manutenção fácil. A estrutura cuidadosa do código torna as
            atualizações ágeis e compreensíveis. Isso não só melhora a
            eficiência como também fortalece a robustez do software. Padrões
            consistentes e boas práticas são a base da nossa abordagem de
            desenvolvimento.
          </p>
          <Image src={qualitycode} alt="" width={700} />
        </SectionTecnologyModalRight>
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
      <SecondInfo>
        <Image src={security} alt="" />
        <SecondInfoMoveDiv
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Title>Linguagens</Title>
          <Text>
            Desenvolvendo com as melhores tecnologias do mercado atualmente.
          </Text>
        </SecondInfoMoveDiv>
        <SecondInfoMoveCircle
          initial={{ borderRadius: '50%' }}
          transition={{ duration: 3, ease: 'easeInOut' }}
          whileInView={{ borderRadius: '10px' }}
        >
          <Image src={versellogo} alt="logo do reactjs" width={200} />
          <Image src={nextLogo} alt="logo do nextjs" width={100} />
          <Image src={nodejs} alt="logo do nodejs" />
          <Image src={reactLogo} alt="logo do reactjs" width={100} />
        </SecondInfoMoveCircle>
      </SecondInfo>
      <ThirdInfo>
        <ThirdInfoMoveDiv
          initial={{ opacity: 0, height: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          whileInView={{ opacity: 1, height: 'auto' }}
        >
          <Title size="md">Seviços</Title>
          <ul>
            <ItemList>
              <Image src={confirme} alt="" width={40} />
              <Text>Desenvolvimento de sistemas</Text>
            </ItemList>
            <ItemList>
              <Image src={confirme} alt="" width={40} />
              <Text>Landing pages</Text>
            </ItemList>
            <ItemList>
              <Image src={confirme} alt="" width={40} />
              <Text>Dashboards</Text>
            </ItemList>
            <ItemList>
              <Image src={confirme} alt="" width={40} />
              <Text>Social Media</Text>
            </ItemList>
            <ItemList>
              <Image src={confirme} alt="" width={40} />
              <Text>Marketing</Text>
            </ItemList>
            <ItemList>
              <Image src={confirme} alt="" width={40} />
              <Text>Logotipos</Text>
            </ItemList>
          </ul>
        </ThirdInfoMoveDiv>
        <SecondInfoMoveDiv
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Title>Cuidamos de tudo</Title>
          <Text>Todo serviço de midia fica por nossa conta!</Text>
        </SecondInfoMoveDiv>
        <Image src={security} alt="" />
      </ThirdInfo>
      <FourthInfo>
        <BoxLineWhite rotateB={'transform'} />
        <PriceContainer
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Title size="md">Social Media</Title>
          <ul>
            <ItemListPrice>
              <Image src={visto} alt="" width={30} />
              Criação de imagens
            </ItemListPrice>
            <ItemListPrice>
              <Image src={visto} alt="" width={30} />
              Logotipos
            </ItemListPrice>
            <ItemListPrice>
              <Image src={visto} alt="" width={30} />
              Rede social
            </ItemListPrice>
            <ItemListPrice>
              <Image src={visto} alt="" width={30} />
              Edição de videos
            </ItemListPrice>
            <ItemListPrice>
              <Image src={visto} alt="" width={30} />
              Logo Animada
            </ItemListPrice>
          </ul>
        </PriceContainer>
        <PriceContainer
          center={'bg'}
          h1Color={true}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.1, ease: 'easeInOut' }}
          whileInView={{ opacity: 1 }}
        >
          <Title size="md">Desenvolvimento</Title>
          <ul>
            <ItemListPrice center={true}>
              <Image src={visto} alt="" width={30} />
              Landing pages
            </ItemListPrice>
            <ItemListPrice center={true}>
              <Image src={visto} alt="" width={30} />
              Dashboards
            </ItemListPrice>
            <ItemListPrice center={true}>
              <Image src={visto} alt="" width={30} />
              Desenvolvimento de sistemas
            </ItemListPrice>
            <ItemListPrice center={true}>
              <Image src={visto} alt="" width={30} />
              Web Desing
            </ItemListPrice>
            <ItemListPrice center={true}>
              <Image src={visto} alt="" width={30} />
              Aplicativos
            </ItemListPrice>
          </ul>
        </PriceContainer>
        <PriceContainer
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Title size="md">Marketing</Title>
          <ul>
            <ItemListPrice>
              <Image src={visto} alt="" width={30} />
              Digital
            </ItemListPrice>
            <ItemListPrice>
              <Image src={visto} alt="" width={30} />
              Conteúdo
            </ItemListPrice>
            <ItemListPrice>
              <Image src={visto} alt="" width={30} />
              SEO
            </ItemListPrice>
            <ItemListPrice>
              <Image src={visto} alt="" width={30} />
              Trafégo pago
            </ItemListPrice>
            <ItemListPrice>
              <Image src={visto} alt="" width={30} />
              Funil de vendas
            </ItemListPrice>
          </ul>
        </PriceContainer>
      </FourthInfo>
      <NewContactContainer>
        <Title
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          Empresas modernas terceirizam o gerenciamento de mídias, priorizando
          suas atividades principais.
        </Title>
        <Text
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          A tendência de empresas terceirizando o gerenciamento de suas mídias
          está se tornando cada vez mais comum. Ao optarem por não assumir essa
          responsabilidade internamente, as organizações podem aproveitar os
          serviços especializados de agências de marketing digital, consultorias
          de mídia social ou profissionais independentes.
        </Text>
      </NewContactContainer>
      <FooterContainer>
        <Image src={logo} alt="Logo" width={90} height={90} />
        <SubFooter>
          <span>© 2023 GainDevelopment, Inc.</span>
          <Menu>
            <Link href="https://www.instagram.com/gainagencia/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==">
              <Image src={instagram} alt="" width={24} height={24} />
            </Link>
            <Link href="https://github.com/vinicius201717">
              <Image src={github} alt="" width={24} height={24} />
            </Link>
            <Link href="https://wa.me/5562984250875">
              <Image src={whatsapp} alt="" width={24} height={24} />
            </Link>
          </Menu>
        </SubFooter>
      </FooterContainer>
    </Container>
  )
}
