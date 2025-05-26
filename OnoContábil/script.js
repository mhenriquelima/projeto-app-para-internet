function updateContent(section) {
    const content = {
        sobre: `
            <h2>Sobre a Ono Contábil</h2>
            <p>
                Com mais de 20 anos de experiência no mercado, a <strong>Ono Contábil</strong> oferece serviços especializados em contabilidade, fiscal, tributário e recursos humanos para empresas de todos os portes. Nosso compromisso é proporcionar tranquilidade, transparência e excelência no atendimento aos nossos clientes.
            </p>
        `,
        servicos: `
            <h2>Nossos Serviços</h2>
            <ul>
                <li>Assessoria Contábil</li>
                <li>Gestão Fiscal e Tributária</li>
                <li>Folha de Pagamento e RH</li>
                <li>Abertura, Alteração e Encerramento de Empresas</li>
                <li>Consultoria Financeira</li>
            </ul>
        `,
        contato: `
            <h2>Fale Conosco</h2>
            <p>
                Endereço: Rua Epitácio Pessoa, 123 - Bairro dos Estados, JoãoPessoa/PB<br>
                Telefone: (83) 99683-1152<br>
                E-mail: <a class="email-link" href="mailto:elineono@hotmail.com">elineono@hotmail.com</a>
            </p>
            <a class="btn" href="forms.html">Solicitar Orçamento</a>
        `,
        parcerias: `
            <h2>Lojas Parceiras</h2>
            <p>
                <a href="http://127.0.0.1:5500/projeto-app-para-internet/TemQuaseTudo/html.html" style="text-decoration: none;">
                    <img src="imgs/TQTlogo.jpg" width="200px" alt="Loja tem de tudo" style="border:
            none; cursor: pointer;">
                </a>
            </p>
            <p>
                <img src="imgs/FulanoLogo.jpg" width="200px" alt="Loja Elo7" style="border: none; cursor: pointer;">
            </p>
            `
    };

    if (!window.lastSection) window.lastSection = null;

    if (window.lastSection === section) {
        document.getElementById("container").innerHTML = `
            <h2>Bem-vindo à Ono Contábil</h2>
            <p>
                Soluções contábeis que impulsionam o seu negócio. Na Ono Contábil, unimos conhecimento técnico, tecnologia e atendimento personalizado para oferecer serviços contábeis completos e confiáveis. Atuamos com foco em pequenas e médias empresas, empreendedores e profissionais autônomos que buscam mais do que apenas cumprir obrigações fiscais — querem crescer com segurança e inteligência. Aqui, você encontra suporte em todas as etapas do seu negócio: abertura de empresa, gestão tributária, contabilidade digital, folha de pagamento, planejamento financeiro e muito mais. Nossa missão é simplificar a sua rotina, garantir conformidade com a legislação e ajudar você a tomar decisões estratégicas com base em dados claros e precisos. Conte com uma equipe acessível, experiente e sempre pronta para atender.
            </p>
            <p><strong>Ono Contábil: a parceria que o seu negócio precisa para ir além.</strong></p>
        `;
        window.lastSection = null;
    } else {
        document.getElementById("container").innerHTML = content[section];
        window.lastSection = section;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const secao = this.dataset.section;
            if (!secao) return;

            updateContent(secao);

            if (window.lastSection === null) {
                links.forEach(l => l.classList.remove('active'));
            } else {
                links.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});