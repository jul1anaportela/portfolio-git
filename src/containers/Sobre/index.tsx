import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cum optio
      molestias veritatis maiores, aspernatur asperiores mollitia reprehenderit
      explicabo harum odit animi sint cupiditate quas perspiciatis dignissimos
      illo ea ab.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=jul1anaportela&show_icons=true&theme=dracula&include_all_comits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=jul1anaportela&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
