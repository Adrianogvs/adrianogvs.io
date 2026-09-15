#!/usr/bin/env bash
# Baixa os logos de empresas para assets/images/empresas/ (rode uma vez, na raiz do repositório)
set -u
cd "$(dirname "$0")/../assets/images/empresas"
UA="Mozilla/5.0 (portfolio adrianogvs.com.br)"
fail=0
curl -fsSL -A "$UA" -o petrobras.png "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Petrobras_horizontal_logo.svg/250px-Petrobras_horizontal_logo.svg.png" && echo "ok  petrobras.png" || { echo "FALHOU petrobras.png"; fail=1; }
curl -fsSL -A "$UA" -o renner.png "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Logotipo_das_Lojas_Renner.svg/250px-Logotipo_das_Lojas_Renner.svg.png" && echo "ok  renner.png" || { echo "FALHOU renner.png"; fail=1; }
curl -fsSL -A "$UA" -o apex-brasil.png "https://apexbrasil.com.br/content/dam/apexbrasil/icons/log-apex-header.png" && echo "ok  apex-brasil.png" || { echo "FALHOU apex-brasil.png"; fail=1; }
curl -fsSL -A "$UA" -o aguia-branca.jpg "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Logo_Grupo_%C3%81guia_Branca.jpg/250px-Logo_Grupo_%C3%81guia_Branca.jpg" && echo "ok  aguia-branca.jpg" || { echo "FALHOU aguia-branca.jpg"; fail=1; }
curl -fsSL -A "$UA" -o compass-uol.png "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/LogoCompasso-positivo.png/250px-LogoCompasso-positivo.png" && echo "ok  compass-uol.png" || { echo "FALHOU compass-uol.png"; fail=1; }
curl -fsSL -A "$UA" -o tacom.svg "https://www.tacom.com.br/app/images/tacom.svg" && echo "ok  tacom.svg" || { echo "FALHOU tacom.svg"; fail=1; }
curl -fsSL -A "$UA" -o horizonte-turismo.jpg "https://www.abavmg.com.br/assets/img/associados/logos/1237.jpg" && echo "ok  horizonte-turismo.jpg" || { echo "FALHOU horizonte-turismo.jpg"; fail=1; }
curl -fsSL -A "$UA" -o expresso-santa-paula.webp "https://storage.googleapis.com/ecdt-logos/02875301000194/expresso_santa_paula_ltda_02875301.webp" && echo "ok  expresso-santa-paula.webp" || { echo "FALHOU expresso-santa-paula.webp"; fail=1; }
curl -fsSL -A "$UA" -o hyti.svg "https://hyti.com.br/assets/hyti-logo-branca-MvKbK_Rf.svg" && echo "ok  hyti.svg" || { echo "FALHOU hyti.svg"; fail=1; }
# AI/R Invillia: o site oficial (invillia.ai) carrega o logo via JavaScript, sem URL estável.
# Salve o logo manualmente como assets/images/empresas/air-invillia.svg (ou .png e ajuste o index.html).
[ -f air-invillia.svg ] || echo "PENDENTE air-invillia.svg (adicionar manualmente)"
exit $fail
