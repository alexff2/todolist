export default {
    rfs: [
        {
            code: 'RF 001',
            desc: 'O sistema deve permitir o cadastro de empresas (lojas e centros de distribuição), incluindo informações como nome, CNPJ, endereço, telefone e e-mail. E somente por usuários com permissão para tal',
            groupId: 1,
            isDone: false
        },
        {
            code: 'RF 002',
            desc: 'O sistema deve permitir o cadastro de usuários por autenticação Google ou apenas e-mail para autenticação no sistema.',
            groupId: 1,
            isDone: false
        },
        {
            code: 'RF 003',
            desc: 'O sistema deve permitir que o usuário, ao fazer login, selecione qual loja ou centro de distribuição deseja acessar.',
            groupId: 1,
            isDone: false
        },
        {
            code: 'RF 004',
            desc: 'O sistema deve permitir o login único (SSO) e a autenticação de dois fatores (2FA) para aumentar a segurança, especialmente para acessos administrativos.',
            groupId: 1,
            isDone: false
        },
        {
            code: 'RF 005',
            desc: 'O sistema deve permitir a definição de roles (papéis) de usuários, como "Administrador de Loja", "Gerente de CD", "Funcionário de Vendas", com diferentes níveis de acesso aos dados.',
            groupId: 1,
            isDone: false
        },
        {
            code: 'RF 006',
            desc: 'O sistema deve permitir o cadastro de funcionários incluindo informações como código, nome, data de admissão, data de demissão e com opção de selecionar o departamento. Exemplo: Vendedor, Aux. de entrega, Motorista, Caixa, Supervisor de vendas, Supervisor de CD',
            groupId: 1,
            isDone: false
        },
        {
            code: 'RF 007',
            desc: 'O sistema deve permitir o cadastro de cidades e bairros individualmente para uso em outros cadastros',
            groupId: 1,
            isDone: false
        },
        {
            code: 'RF 008',
            desc: 'O sistema deve permitir a atribuição de tags e categorias para produtos, facilitando a pesquisa e organização.',
            groupId: 1,
            isDone: false
        },
        {
            code: 'RF 009',
            desc: 'O sistema deve permitir cadastrar as formas de pagamento, incluindo parcelamento.',
            groupId: 1,
            isDone: false
        },
        {
            code: 'RF 010',
            desc: 'O sistema deve permitir cadastrar administradoras de cartão, para associação das parcelas.',
            groupId: 1,
            isDone: false
        },
        {
            code: 'RF 011',
            desc: 'O sistema deve permitir a configuração de permissões de acesso específicas para cada loja/CD, garantindo que os usuários só possam visualizar e editar dados da loja ou CD ao qual estão associados.',
            groupId: 2,
            isDone: false
        },
        {
            code: 'RF 012',
            desc: 'O sistema deve permitir a configuração de diferentes políticas de vendas e descontos para cada loja ou centro de distribuição, caso necessário.',
            groupId: 2,
            isDone: false
        },
        {
            code: 'RF 013',
            desc: 'O sistema deve permitir a configuração do prazo de entrega individualmente para cada CD para calcular data de previsão de entrega',
            groupId: 2,
            isDone: false
        },
        {
            code: 'RF 014',
            desc: 'O sistema deve permitir o cadastro de fornecedores, com validação de CNPJ e dados como nome, endereço e informações de contato.',
            groupId: 3,
            isDone: false
        },
        {
            code: 'RF 015',
            desc: 'O sistema deve permitir o cadastro de produtos, incluindo informações como código, nome, descrição, preços, categoria, e imagem.',
            groupId: 3,
            isDone: false
        },
        {
            code: 'RF 016',
            desc: 'O sistema deve permitir a inativação e alterações dos cadastros de fornecedores e produtos, com auditoria das modificações.',
            groupId: 3,
            isDone: false
        },
        {
            code: 'RF 017',
            desc: 'O sistema deve permitir o controle de estoque por número de série, ficando cada produto com um número de série específico.',
            groupId: 3,
            isDone: false
        },
        {
            code: 'RF 018',
            desc: 'O sistema deve permitir o cadastro de pedidos de compra, incluindo informações como  funcionário que solicitou o pedido, data, status aguardando ou atendido, tanto para o pedido no geral, quanto para cada produto do pedido, tipo de pedido (normal ou assistência)',
            groupId: 3,
            isDone: false
        },
        {
            code: 'RF 019',
            desc: 'Ao inserir produtos, pedidos do tipo normal, não será permitida a alteração do preço de compra no momento da geração do pedido, porém se for de assistência, iniciará com valor zerado, podendo ser alterado no momento da inserção.',
            groupId: 3,
            isDone: false
        },
        {
            code: 'RF020',
            desc: 'O sistema deve permitir a entrada de produtos no estoque por nota de compra, com a associação de cada movimento a um pedido de compra.',
            groupId: 3,
            isDone: false
        },
        {
            code: 'RF 021',
            desc: 'Cada quantidade de um produto da nota de compra deve conter um número de série, obedecendo assim o RF 017, podendo ser gerado automaticamente pelo sistema com opção de impressão dos mesmos.',
            groupId: 3,
            isDone: false
        },
        {
            code: 'RF 022',
            desc: 'Na entrada por nota de compra, ter opção de frete para cálculo do preço de compra do produto (Validar).',
            groupId: 3,
            isDone: false
        },
        {
            code: 'RF 023',
            desc: 'O sistema deve calcular automaticamente o valor total do estoque, considerando o custo de aquisição e o preço de venda de cada produto.',
            groupId: 3,
            isDone: false
        },
        {
            code: 'RF 024',
            desc: 'O sistema deve gerar relatórios de estoque, pedidos, compras mediante filtros já usados no sistema atual.',
            groupId: 3,
            isDone: false
        },
        {
            code: 'RF 025',
            desc: 'O sistema deve permitir a consulta detalhada do histórico de movimentos de estoque por produto, incluindo entradas, saídas e ajustes manuais.',
            groupId: 3,
            isDone: false
        },
        {
            code: 'RF 026',
            desc: 'O sistema deve permitir a gestão de estoque de forma independente para cada loja e centro de distribuição, com possibilidade de visualizar o estoque de todas as lojas/CDs de forma consolidada.',
            groupId: 3,
            isDone: false
        },
        {
            code: 'RF 027',
            desc: 'O sistema deve permitir a movimentação de estoque entre lojas e centros de distribuição, com controle de inventário em tempo real e registro de transferências.',
            groupId: 3,
            isDone: false
        },
        {
            code: 'RF 028',
            desc: 'O sistema deve permitir bipar ou digitar os números de séries dos produtos para cada movimentação de estoque (entrada por nota, saída por venda, transferências entre lojas/CD, devoluções de vendas e entregas de assistências), só podendo ser concretizado uma movimentação mediante esse processo.',
            groupId: 3,
            isDone: false
        },
        {
            code: 'RF 029',
            desc: 'O sistema deve permitir o cadastro de clientes, com validação de CPF ou CNPJ.',
            groupId: 4,
            isDone: false
        },
        {
            code: 'RF 030',
            desc: 'O sistema deve ter um cadastro de endereços (com as coordenadas geográficas) e ponto de referência, que será vinculado a um cliente, possibilitando o cliente ter mais de 1 endereço vinculado ao seu cadastro.',
            groupId: 4,
            isDone: false
        },
        {
            code: 'RF 031',
            desc: 'O sistema deve permitir a inativação e alterações dos clientes e/ou seus endereços, com auditoria das modificações.',
            groupId: 4,
            isDone: false
        },
        {
            code: 'RF 032',
            desc: 'O sistema deve permitir a criação de pedidos de vendas com associação do vendedor, cliente, endereço de entrega e múltiplos itens e forma de pagamento.',
            groupId: 4,
            isDone: false
        },
        {
            code: 'RF 033',
            desc: 'O sistema deve permitir aplicar desconto no pedido de venda obedecendo as configurações da loja como citado no RF 012 bem como configurações possíveis por forma de pagamento.',
            groupId: 4,
            isDone: false
        },
        {
            code: 'RF 034',
            desc: 'O sistema deve conter solicitação de desconto maior que o configurado de forma remota.',
            groupId: 4,
            isDone: false
        },
        {
            code: 'RF 035',
            desc: 'O sistema deve permitir a edição de pedidos de venda somente antes do faturamento.',
            groupId: 4,
            isDone: false
        },
        {
            code: 'RF 036',
            desc: 'O sistema fará o processo de faturamento da venda, no qual irá gerar o financeiro correspondente a forma de pagamento escolhida, e designar para os seguintes locais: contas a receber, gerenciamento de cartão, caixa, tesouraria e/ou banco. ',
            groupId: 4,
            isDone: false
        },
        {
            code: 'RF 037',
            desc: 'O sistema também terá uma tela de escolha se deve baixar estoque dos produtos na hora ou irá para processo de entrega, e para obedecer o RF 017, os produtos que saíram na hora, deve ser selecionado quais números de série estão saindo e os que não, serão encaminhados ao CD para entrega (Ou na hora da criação da venda - Validar).',
            groupId: 4,
            isDone: false
        },
        {
            code: 'RF 038',
            desc: 'O sistema deve enviar uma mensagem por whatsapp e/ou por email para o cliente ao finalizar o faturamento da venda, informando os dados da compra bem como data prevista de entrega e um link mostrando status de sua compra, com opção de desabilitar para tempos de alto fluxo de venda como o black friday.',
            groupId: 4,
            isDone: false
        },
        {
            code: 'RF 087',
            desc: 'O sistema deve permitir cancelar/excluir uma venda faturada somente por um usuário autorizado, ou solicitar senha de um usuário autorizado de forma remota.',
            groupId: 4,
            isDone: false
        },
        {
            code: 'RF 039',
            desc: 'O sistema deve permitir o cadastro dos assistentes e dos motoristas que serão vinculados às rotas de entrega, com opção de inativação',
            groupId: 5,
            isDone: false
        },
        {
            code: 'RF 040',
            desc: 'O sistema deve permitir o rastreamento em tempo real das entregas, com atualização automática do status.',
            groupId: 5,
            isDone: false
        },
        {
            code: 'RF 041',
            desc: 'O sistema deve permitir que os responsáveis pelo CD, alterem a data da entrega, se desejarem.',
            groupId: 5,
            isDone: false
        },
        {
            code: 'RF 042',
            desc: 'O sistema deve permitir a criação de previsões de entregas diárias, que serão validadas pelas pelo cliente, ao receberem mensagem por whatsapp ou e-mail, pode os vendedores ligarem para o cliente caso o cliente não responda a mensagem a tempo.',
            groupId: 5,
            isDone: false
        },
        {
            code: 'RF 043',
            desc: 'O sistema deve criar rotas de entrega somente com as vendas confirmadas pelo cliente na previsão.',
            groupId: 5,
            isDone: false
        },
        {
            code: 'RF 044',
            desc: 'Essas rotas iram controlar os status: em carregamento, em trânsito, entregue, retornado.',
            groupId: 5,
            isDone: false
        },
        {
            code: 'RF 045',
            desc: 'Ao iniciar as rotas, as vendas ficaram com o status em montagem, até ser colocar todas as vendas daquela rota e bipado os produtos, somente após bipagem de todos os produtos a rota poderá ser colocada como em trânsito.',
            groupId: 5,
            isDone: false
        },
        {
            code: 'RF 046',
            desc: 'Ao colocar os produtos em trânsito, o estoque do produto será baixado.',
            groupId: 5,
            isDone: false
        },
        {
            code: 'RF 047',
            desc: 'Ao chegar a casa do cliente o responsável pela entrega, bipara os produtos, vinculando assim a venda ao produto correspondente.',
            groupId: 5,
            isDone: false
        },
        {
            code: 'RF 048',
            desc: 'Ao retornar da rota, será finalizada a rota e os produtos o qual não foram bipados no cliente, retornaram ao estoque',
            groupId: 5,
            isDone: false
        },
        {
            code: 'RF 049',
            desc: 'O sistema deve permitir a emissão de documentos de entrega, como comprovante de recebimento (via assinatura digital ou física) e comprovantes de devolução.',
            groupId: 5,
            isDone: false
        },
        {
            code: 'RF 050',
            desc: ' O sistema deve permitir vincular devoluções às rotas de entrega, no qual será bipado a entrada do produto ao chegar no CD.',
            groupId: 5,
            isDone: false
        },
        {
            code: 'RF 051',
            desc: 'O sistema deve permitir o registro de devoluções de produtos, com motivo detalhado (produto defeituoso, insatisfação, erro no pedido, etc.).',
            groupId: 6,
            isDone: false
        },
        {
            code: 'RF 052',
            desc: 'O sistema deve calcular automaticamente o valor a ser devolvido ao cliente, considerando o valor pago e as condições do produto devolvido.',
            groupId: 6,
            isDone: false
        },
        {
            code: 'RF 053',
            desc: 'O sistema deve possibilitar o reembolso ao cliente com a forma de pagamento a escolha do lojista, ou gerar crédito na loja.',
            groupId: 6,
            isDone: false
        },
        {
            code: 'RF 054',
            desc: 'O sistema deve permitir o acompanhamento do status da devolução, desde a solicitação até a conclusão.',
            groupId: 6,
            isDone: false
        },
        {
            code: 'RF 055',
            desc: 'O sistema deve enviar automaticamente a devolução para o módulo de entrega para recolhimento do produto.',
            groupId: 6,
            isDone: false
        },
        {
            code: 'RF 056',
            desc: 'O sistema deve permitir que os clientes abram chamados para assistência técnica, com detalhamento do problema.',
            groupId: 7,
            isDone: false
        },
        {
            code: 'RF 057',
            desc: 'O sistema deve permitir que os técnicos abram visitas para atendimento das chamadas, com agendamento prévio confirmado pelo cliente.',
            groupId: 7,
            isDone: false
        },
        {
            code: 'RF 058',
            desc: 'O sistema deve fornecer uma interface de suporte ao cliente, com possibilidade de chat, e-mail ou telefone(futuramente com registro de ligação).',
            groupId: 7,
            isDone: false
        },
        {
            code: 'RF 059',
            desc: 'O sistema deve permitir o registro de histórico de atendimentos e interações com os técnicos de assistência.',
            groupId: 7,
            isDone: false
        },
        {
            code: 'RF 060',
            desc: 'O sistema deve ao finalizar, permitir encaminhamento para o módulo de devolução do produto, caso cliente queira trocar ou desistir do produto (validar etapas).',
            groupId: 7,
            isDone: false
        },
        {
            code: 'RF 061',
            desc: 'O sistema deve ao finalizar, permitir o encaminhamento para o CD, caso seja preciso fazer a troca do produto pelo mesmo modelo.',
            groupId: 7,
            isDone: false
        },
        {
            code: 'RF 062',
            desc: 'O sistema deve gerar um consentimento do cliente que a assistência está encerrada, caso seja finalizada sem nenhum dos procedimentos anteriores.',
            groupId: 7,
            isDone: false
        },
        {
            code: 'RF 063',
            desc: 'O sistema deve conter uma interface dos status dos chamados (pendente, em andamento, resolvido, etc.), para acompanhamento do cliente entre outros.',
            groupId: 7,
            isDone: false
        },
        {
            code: 'RF 064',
            desc: 'O sistema deve permitir o controle das receitas diretas por 3 módulos: Caixa, Tesouraria (Cofre) e Banco.',
            groupId: 8,
            isDone: false
        },
        {
            code: 'RF 065',
            desc: 'Para vendas a prazo, o sistema terá o contas a receber e o controle de cartão',
            groupId: 8,
            isDone: false
        },
        {
            code: 'RF 066',
            desc: 'Para compras a prazo o sistema terá o contas a pagar.',
            groupId: 8,
            isDone: false
        },
        {
            code: 'RF 067',
            desc: 'O sistema deve permitir a baixa do contas a receber e do contas a pagar gerando o capital ou a despesa no módulo respectivo (Caixa, Tesouraria (Cofre) e Banco)',
            groupId: 8,
            isDone: false
        },
        {
            code: 'RF 068',
            desc: 'O sistema deve permitir o lançamento manual em todos os módulos do financeiro',
            groupId: 8,
            isDone: false
        },
        {
            code: 'RF 069',
            desc: 'O sistema deve permitir a transição de capital dentre os módulos de receita direta (Banco, Tesouraria e Banco)',
            groupId: 8,
            isDone: false
        },
        {
            code: 'RF 070',
            desc: 'O sistema deve permitir a geração de relatórios financeiros detalhados de todos os módulos.',
            groupId: 8,
            isDone: false
        },
        {
            code: 'RF 071',
            desc: 'O sistema deve permitir a geração de relatórios consolidados entre todas as lojas/CDs com performance eficiente, mesmo em sistemas com grandes volumes de dados (até 100 lojas/CDs).',
            groupId: 9,
            isDone: false
        },
        {
            code: 'RF 072',
            desc: 'O sistema deve permitir a visualização de relatórios gerenciais (como DRE) de uma loja ou centro de distribuição específico ou de todas as lojas e CDs consolidados.',
            groupId: 9,
            isDone: false
        },
        {
            code: 'RF 073',
            desc: 'O sistema deve permitir a criação de relatórios customizados, selecionando campos específicos, filtros e agrupamentos de dados.',
            groupId: 9,
            isDone: false
        },
        {
            code: 'RF 074',
            desc: 'O sistema deve permitir a exportação de relatórios em múltiplos formatos, como PDF, Excel, CSV e outros formatos compatíveis.',
            groupId: 9,
            isDone: false
        },
        {
            code: 'RF 075',
            desc: 'O sistema deve gerar relatórios analíticos sobre vendas, performance de produtos, estoque, e situação financeira.',
            groupId: 9,
            isDone: false
        },
        {
            code: 'RF 076',
            desc: 'O sistema deve permitir agendar a geração automática de relatórios periódicos, com envio para e-mails especificados.',
            groupId: 9,
            isDone: false
        },
        {
            code: 'RF 077',
            desc: 'O sistema deve permitir a geração de relatórios financeiros e operacionais (como DRE, fluxo de caixa, etc.) para uma loja ou centro de distribuição específico, ou de todas as lojas e CDs em conjunto.',
            groupId: 9,
            isDone: false
        },
        {
            code: 'RF 078',
            desc: 'O sistema deve permitir que o usuário selecione o período e as lojas/CDs desejados para a geração de relatórios consolidados, com dados de todas as unidades.',
            groupId: 9,
            isDone: false
        },
        {
            code: 'RF 079',
            desc: 'O sistema deve permitir a criação de relatórios personalizados para comparar o desempenho de diferentes lojas ou centros de distribuição, com base em critérios como vendas, estoque, lucros, etc.',
            groupId: 9,
            isDone: false
        },
        {
            code: 'RF 080',
            desc: 'O sistema deve permitir a exportação de relatórios consolidados em formatos como PDF, Excel ou CSV, com dados de todas as lojas/CDs.',
            groupId: 9,
            isDone: false
        },
        {
            code: 'RF 081',
            desc: 'O sistema deve permitir a visualização da Demonstração de Resultados do Exercício (DRE) de uma única loja ou centro de distribuição, com detalhamento de receitas, custos, impostos, lucros e despesas.',
            groupId: 9,
            isDone: false
        },
        {
            code: 'RF 082',
            desc: 'O sistema deve permitir a visualização da DRE consolidada de todas as lojas e centros de distribuição, com a soma dos resultados financeiros de todas as unidades.',
            groupId: 9,
            isDone: false
        },
        {
            code: 'RF 083',
            desc: 'O sistema deve permitir a comparação da DRE de diferentes lojas ou CDs em determinado período para análise de performance.',
            groupId: 9,
            isDone: false
        },
        {
            code: 'RF 084',
            desc: 'O sistema deve garantir que todos os dados de uma loja ou centro de distribuição (estoque, vendas, financeiro, etc.) sejam independentes dos dados das demais unidades, mas deve permitir o acesso a dados consolidados de todas as unidades quando necessário.',
            groupId: 10,
            isDone: false
        },
        {
            code: 'RF 085',
            desc: 'O sistema deve permitir a sincronização de dados entre lojas e centros de distribuição, caso haja integração entre eles para operações conjuntas, como vendas ou transferências de produtos.',
            groupId: 10,
            isDone: false
        },
        {
            code: 'RF 086',
            desc: 'O sistema deve guardar LOGs para todos os eventos não passíveis de identificação direta como: Atualizações, Exclusões possíveis, Autorizações entre outros.',
            groupId: 10,
            isDone: false
        }
    ],
    group: [
        {
            code: 10,
            desc: 'Integridade e Performance',
        },
        {
            code: 1,
            desc: 'Cadastros Principais',
        },
        {
            code: 2,
            desc: 'Configurações',
        },
        {
            code: 3,
            desc: 'Estoque',
        },
        {
            code: 8,
            desc: 'Financiero',
        },
        {
            code: 4,
            desc: 'Vendas',
        },
        {
            code: 5,
            desc: 'Entregas',
        },
        {
            code: 6,
            desc: 'Devoluções',
        },
        {
            code: 7,
            desc: 'Assistências',
        },
        {
            code: 9,
            desc: 'Relatórios Gerais',
        },
    ]
}
