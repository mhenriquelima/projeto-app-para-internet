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
                Endereço: Rua Exemplo, 123 - Centro, São Paulo/SP<br>
                Telefone: (11) 1234-5678<br>
                E-mail: <a class="email-link" href="mailto:contato@onocontabil.com.br">contato@onocontabil.com.br</a>
            </p>
            <a class="btn" href="mailto:contato@onocontabil.com.br">Solicitar Orçamento</a>
        `
    };
    document.getElementById("container").innerHTML = content[section];
}