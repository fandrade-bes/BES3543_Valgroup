# BES3543 - Valgroup

Projeto CODESYS para controle da máquina de empilhamento e envolvimento de sacolas plásticas.

## 📋 Descrição

A máquina realiza dois processos em sequência:

1. **Empilhamento**: recebe pilhas de sacolas plásticas provenientes de outra máquina e realiza o empilhamento, unificando-as em uma única pilha.
2. **Envolvimento**: aplica plástico *stretch* ao redor da pilha unificada, finalizando o processo com a saída do pacote pronto.

## ⚙️ Hardware

- **CLP**: Festo CPX-E-CEC-M1

## 🛠️ Ambiente de Desenvolvimento

- **CODESYS**: V3.5 SP18 Patch4
- **Controle de versão**: Git

## 🚧 Status do Projeto

**Em desenvolvimento.**

- ✅ FAT (Factory Acceptance Test) realizado na planta
- 🔄 Montagem na planta do cliente final em andamento
- 🔄 Ajustes e refinamentos previstos após instalação no local definitivo

## 📁 Estrutura do Projeto

```
B00_EMPILHA_SACOLA/
├── .git/
├── B00_EMPILHA_SACOLA.project   # Projeto principal CODESYS
└── README.md
```

*(estrutura pode variar conforme organização final do repositório)*

## 👥 Colaboradores

| Nome | Função |
|------|--------|
| Felipe Andrade | Desenvolvimento |
| Diego Amaral | Desenvolvimento |

## 🔄 Fluxo de Trabalho (Git)

Como o projeto é editado por mais de uma pessoa (sem edição simultânea), siga este fluxo:

1. Antes de começar a mexer no projeto, faça **Pull** para garantir que está com a versão mais recente
2. Trabalhe normalmente no CODESYS e salve o projeto
3. Faça **Commit** com uma mensagem descrevendo a alteração
4. Faça **Push** para enviar as alterações ao repositório remoto

> ⚠️ Evite editar o projeto ao mesmo tempo que outra pessoa — como o arquivo do projeto é binário, conflitos de merge não podem ser resolvidos automaticamente.

## 📝 Notas

- Ajustes na lógica ainda são esperados após a instalação da máquina no cliente final.
