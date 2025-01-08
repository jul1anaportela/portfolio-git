import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={16}>Juliana Portela</Titulo>
      <Paragrafo tipo="secundario" fontSize={14}>
        jul1anaportela
      </Paragrafo>
      <Descricao tipo="principal" fontSize={10}>
        Engenheira FrontEnd
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
