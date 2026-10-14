# 🤖 DocBot AI — Assistente Virtual de Triagem Médica

> **Engenharia de Software (6º Período)**  
> **Unidade Temática:** Gerência de Configuração de Software (GCS) e Governança no Git  
> **Ambiente de Execução:** GitHub Codespaces

---

## 📌 Sobre o Projeto
O **DocBot AI** é uma aplicação web de assistente virtual para triagem de sintomas médicos. O projeto encontra-se em uma versão monolítica simplificada em arquivo único (`index.html`), projetado para execução direta no GitHub Codespaces.

O objetivo deste laboratório é vivenciar na prática o controle de versão, a concorrência de código entre membros da equipe e a resolução de conflitos no Git via terminal.

---

## 🎯 Desafio: Chamados Emergenciais dos Clientes

O time recebeu chamados de mudança (*tickets*) de clientes diferentes para alterar a função central de triagem médica (`processarTriagemIA`). Como as alterações afetam a mesma linha de código, haverá um conflito no Git que deverá ser resolvido em equipe.

### 📋 Tabela de Tickets

| Ticket | Cliente | Sintoma / Condição | Resposta Esperada do Bot | Regra Financeira |
| :---: | :--- | :--- | :--- | :--- |
| **#101 (Aluno A)** | Hospital de Pronto-Socorro | `"dor no peito"`, `"falta de ar"` | `[EMERGÊNCIA VERMELHA] Dirija-se ao pronto-socorro.` | ISENTO (**R$ 0,00**) |
| **#102 (Aluno B)** | Plano de Saúde | `"plano"`, `"convenio"`, `"unimed"` | `[CONVÊNIO ACEITO] Encaminhado para rede credenciada.` | Copagamento: **R$ 35,00** |
| **#103 (Aluno C)** | Estatuto do Idoso | `"idoso"`, `"60 anos"`, `"aposentado"` | `[PRIORIDADE 60+] Atendimento preferencial.` | Desconto 30%: **R$ 105,00** |

*\* Nota: A atividade é realizada prioritariamente em **DUPLAS** (Tickets #101 e #102). Grupos maiores devem realizar a redivisão de tarefas, implementando o Ticket #103 ou uma nova regra de triagem.*

---

## 🛠️ Roteiro do Laboratório

### 1. Configuração Inicial
1. **Aluno A:** Faz o **Fork** deste repositório para a sua conta do GitHub.
2. **Aluno A:** Adiciona o **Aluno B** (e demais membros) como colaborador em *Settings > Collaborators*.
3. **Todos:** Abrem o repositório forkado no **GitHub Codespaces** (*Code > Codespaces > Create codespace on main*).

### 2. Provocando o Conflito no Terminal
1. Cada aluno edita a função `processarTriagemIA` no arquivo `index.html` para aplicar a regra do seu Ticket.
2. **Aluno A:** No terminal do Codespaces, executa:
   ```bash
   git add index.html
   git commit -m "feat: insere protocolo de emergencia #101"
   git push origin main
   ```
   *(Envio realizado com sucesso)*.
3. **Aluno B:** No terminal do Codespaces, salva o arquivo, faz o commit local e tenta o push:
   ```bash
   git add index.html
   git commit -m "feat: insere regra de convenio #102"
   git push origin main
   ```
   *(Envio rejeitado pelo servidor do Git - Push Rejected)*.

### 3. Resolvendo o Conflito
1. **Aluno B:** Executa a atualização no terminal:
   ```bash
   git pull origin main
   ```
2. O Git identifica a alteração na mesma linha e insere os marcadores no arquivo `index.html`:
   ```html
   <<<<<<< HEAD (Sua alteração local)
       respostaBot = "[CONVÊNIO ACEITO] Encaminhado. Copagamento: R$ 35,00";
   =======
       respostaBot = "[EMERGÊNCIA VERMELHA] Vá ao Pronto-Socorro. Custo: R$ 0,00";
   >>>>>>> hash_do_commit (Alteração do Aluno A)
   ```
3. **Resolução em Dupla (Code Review):** Os alunos reescrevem a função usando `if / else if` para manter as duas regras ativas no código.
4. Apaguem **todos** os marcadores do Git (`<<<<<<<`, `=======`, `>>>>>>>`).
5. Testem a aplicação no navegador do Codespaces.
6. Salvem o arquivo, registrem e enviem a versão unificada via terminal:
   ```bash
   git add index.html
   git commit -m "fix: resolve conflito unificando regras de triagem"
   git push origin main
   ```

---

## ✅ Entregáveis
* Link do repositório com Código final unificado e sem marcadores de conflito no repositório do GitHub.
* Relatório em PDF postado no AVA contendo a identificação do grupo, prints do conflito, link do repositório e justificativa textual explicando como o conflito foi resolvido.
