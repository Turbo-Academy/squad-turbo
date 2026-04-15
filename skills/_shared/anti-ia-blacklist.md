# Anti-IA Blacklist — Palavras e Expressões Proibidas
# Uso: @copywriter, @estrategista (revisão) — toda copy deve passar por este filtro
# Violação = rejeição automática + reescrita obrigatória

blacklist:
  expressoes_proibidas:
    - "no cenário atual"
    - "é importante destacar"
    - "em outras palavras"
    - "nesse sentido"
    - "diante disso"
    - "vale ressaltar"
    - "é fundamental que"
    - "dessa forma"
    - "sendo assim"
    - "portanto"
    - "ademais"
    - "outrossim"
    - "nessa perspectiva"
    - "é imprescindível"
    - "cabe salientar"
    - "face ao exposto"
    - "em suma"
    - "por conseguinte"
    - "indubitavelmente"
    - "com efeito"

  inicio_paragrafo_proibido:
    - "Além disso"
    - "Por outro lado"
    - "Nesse contexto"
    - "Sendo assim"
    - "Portanto"
    - "Ademais"
    - "Em conclusão"
    - "Para concluir"
    - "Em resumo"

  padroes_genericos:
    - "essa ferramenta inovadora"
    - "solução revolucionária"
    - "transformar sua vida"
    - "metodologia exclusiva"
    - "jornada de transformação"
    - "alcançar seus sonhos"
    - "resultados extraordinários"
    - "potencializar seus resultados"
    - "em um mundo cada vez mais"
    - "nos dias de hoje"

  regra: |
    Se QUALQUER expressão desta lista aparecer na copy:
    1. Rejeitar automaticamente
    2. Reescrever com linguagem natural e humana
    3. Usar o tom de voz do expert (COMUNICACAO.md)
