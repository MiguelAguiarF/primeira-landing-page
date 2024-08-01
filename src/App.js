import logo from './logo.svg';
import './App.css';
import comp from './assets/comp.jpg';
import habili from './assets/habili.png';
import opt from './assets/opt.jpg';
import ferr from './assets/ferr.jpg';


function App() {
  return (
   <div id='test'>
     
    <header>
      <div id='texto'>
        <h1>Engenharia da Computação</h1>
      </div>
    </header>

    <div class='container'>
      <div id='introducao'>
        <img src={comp} style={{width:400, height:400}}/>
        <p>Com o avanço constante da tecnologia, a Engenharia da Computação desempenha um papel crucial na criação de novos dispositivos, sistemas e plataformas que impulsionam a inovação em setores diversos, como telecomunicações, saúde, automação industrial, entretenimento e muito mais. Os engenheiros da computação trabalham em uma ampla gama de áreas, incluindo o desenvolvimento de software, design de hardware, redes de computadores, segurança da informação, e inteligência artificial.</p>
      </div>

      <div id='habilidades'>
        <img src={habili} style={{width:400, height:400}}/>
  
          <ul id='lista'> Habilidades necessárias
            <li>Análise</li>
            <li>Clareza e Precisão</li>
            <li>Planejamento e Organização</li>
            <li>Metodologias Ágeis</li>
            <li>Adaptação</li>
            <li>Pensamento Lógico</li>
          </ul>
      </div>

      <div id='oportunidades'>
        <img src={opt} style={{width:400, height:400}}/>
        <p>
        Um engenheiro da computação pode explorar uma ampla gama de oportunidades em diferentes setores e áreas de atuação, como:
        Desenvolvimento de Software, Hardware e Engenharia de Sistemas, Redes e Infraestrutura, Segurança da Informação, Educação e Treinamento, e muito mais!!!
        </p>
      </div>

      <div id='ferramentas'>
        <img src={ferr} style={{width:400, height:400}}/>
        <p>
        Um engenheiro da computação utiliza uma variedade de ferramentas para projetar, desenvolver, testar e gerenciar sistemas e soluções tecnológicas, são elas: Ambientes de Desenvolvimento Integrados (IDEs), Compiladores e Interpretadores, Sistemas de Controle de Versão, Ferramentas de Debugging, Gerenciadores de Pacotes, etc.
        </p>
      </div>
    </div>

    <footer>
      <div>
        <h3>ACABOU</h3>
      </div>
    </footer>
    </div>
  );
}

export default App;
