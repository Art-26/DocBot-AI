 // Processamento da triagem de sintomas
        function processarTriagemIA(sintoma) {
            let sintomaNormalizado = sintoma.toLowerCase();
            let respostaBot = "";

            if (sintomaNormalizado.includes("dor no peito") || sintomaNormalizado.includes("falta de ar")) {
                respostaBot = "[EMERGÊNCIA VERMELHA] Dirija-se ao pronto-socorro. Isento (R$ 0,00)";
            } else if (sintomaNormalizado.includes("plano") || sintomaNormalizado.includes("convenio") || sintomaNormalizado.includes("unimed")) {
                respostaBot = "[CONVÊNIO ACEITO] Encaminhado para rede credenciada. Copagamento: R$ 35,00";
            } else {
                respostaBot = "[TRIAGEM PADRÃO] Encaminhado para consulta geral. Valor: R$ 150,00";
            }
            
            return respostaBot;
        }

        // Interface do chat
        function enviarMensagem() {
            const input = document.getElementById("userInput");
            const texto = input.value.trim();

            if (!texto) return;

            adicionarBolha(texto, "user");
            input.value = "";

            setTimeout(() => {
                const resposta = processarTriagemIA(texto);
                adicionarBolha(resposta, "bot");
            }, 400);
        }

        function adicionarBolha(texto, tipo) {
            const container = document.getElementById("chatContainer");
            const bolha = document.createElement("div");
            bolha.className = `message ${tipo}`;
            bolha.textContent = texto;
            container.appendChild(bolha);
            container.scrollTop = container.scrollHeight;
        }

        function tratarEnter(event) {
            if (event.key === "Enter") {
                enviarMensagem();
            }
        }