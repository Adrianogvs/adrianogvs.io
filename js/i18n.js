// js/i18n.js — Multilingual support (PT | EN | ES)
// Zero-latency: all translations pre-loaded in memory; DOM swap on click.

const translations = {
  pt: {
    // ── Nav ──────────────────────────────────────────────
    'nav.sobre':        'Sobre',
    'nav.habilidades':  'Habilidades',
    'nav.experiencias': 'Experiências',
    'nav.empresas':     'Empresas',
    'nav.projetos':     'Projetos',
    'nav.certs':        'Certificações',
    'nav.contato':      'Contato',

    // ── Hero ─────────────────────────────────────────────
    'hero.tagline':     'Transformando dados em vantagem competitiva através de plataformas modernas, governança e analytics em escala.',
    'hero.btn.contato': 'Entre em contato',
    'hero.btn.cv':      'Download Currículo',
    'hero.anos':        'Anos',
    'hero.certs':       'Certificações',
    'hero.empresas':    'Empresas',
    'hero.projetos':    'Projetos',

    // ── Seções ────────────────────────────────────────────
    'sec.sobre':        'Sobre Mim',
    'sec.skills':       'Habilidades Técnicas',
    'sec.exp':          'Experiências',
    'sec.companies':    'Onde Já Entreguei',
    'sec.projects':     'Projetos',
    'sec.certs':        'Certificações',
    'sec.contact':      'Contato',

    // ── Sobre ─────────────────────────────────────────────
    'about.p1': '<strong>Senior Data Engineer</strong> especializado em arquiteturas de dados em escala enterprise, com foco em <strong>Azure Databricks</strong>, <strong>Microsoft Fabric</strong> e <strong>Medallion Architecture</strong>.',
    'about.p2': 'Atualmente alocado na <strong>Renner</strong> via Compass UOL, desenvolvendo e sustentando pipelines de dados em ambiente <strong>Azure + Databricks</strong>, com foco em escalabilidade, confiabilidade e governança.',
    'about.p3': 'Ao longo da carreira, conduzi iniciativas de alto impacto em organizações de portes e setores distintos: operei plataformas de dados de missão crítica na <strong>Petrobras</strong>, estruturei <strong>Data Governance</strong> na <strong>Renner</strong> e arquitetei o Lakehouse de inteligência de comércio exterior da <strong>Apex Brasil</strong>, integrando <strong>ComexStat</strong> e <strong>UN Comtrade</strong> em um ambiente cloud-native de alta disponibilidade.',
    'about.p4': 'Minha especialidade é transformar dados fragmentados em ativos estratégicos, resolvendo os problemas que mais travam equipes: pipelines frágeis, governança inexistente e dados dispersos que ninguém confia.',
    'about.p5': 'Disponível para posições remotas no Brasil, Portugal, Europa e EUA.',

    // ── Cards info ────────────────────────────────────────
    'card.formacao':      'Formação',
    'card.formacao_comp': 'Formação Complementar',
    'card.soft':          'Habilidades Comportamentais',
    'card.local':         'Localização',
    'card.idiomas':       'Idiomas',
    'card.interesses':    'Interesses',
    'card.local.text':    '• Serra – ES, Brasil<br>• Disponível para remoto',
    'card.idiomas.text':  '• Português: Nativo<br>• Inglês: Técnico',
    'card.soft.text':     '• Comunicação eficaz<br>• Trabalho em equipe<br>• Empatia<br>• Resiliência<br>• Pensamento crítico<br>• Proatividade<br>• Gestão eficiente do tempo<br>• Flexibilidade<br>• Inteligência emocional<br>• Liderança<br>• Adaptabilidade',
    'card.interests.text':'Além da atuação atual em Engenharia de Dados, acompanho e busco me aprofundar continuamente em:<br><br><strong>Streaming de Dados e Processamento em Tempo Real:</strong> arquiteturas de ingestão contínua com <strong>Apache Kafka</strong>, <strong>Azure Event Hubs</strong> e <strong>Spark Structured Streaming</strong>.<br><br><strong>MLOps &amp; LLMOps:</strong> operacionalização de modelos com <strong>MLflow</strong>, ciclo de vida de LLMs e arquiteturas <strong>RAG</strong>.<br><br><strong>IA aplicada a dados:</strong> <strong>Azure Databricks</strong> e <strong>Microsoft Fabric</strong> para IA Generativa e Machine Learning em escala enterprise.<br><br><strong>IaC &amp; Orquestração:</strong> <strong>Terraform</strong>, <strong>Docker</strong> e <strong>Kubernetes</strong> aplicados a ambientes de dados em cloud.',

    // ── Skills cards ──────────────────────────────────────
    'skill.eng':         'Engenharia de Dados',
    'skill.eng.desc':    'Desenvolvimento de pipelines robustos e escaláveis, ETL/ELT, modelagem dimensional (Star/Snowflake), qualidade e governança de dados.',
    'skill.cloud':       'Cloud Computing',
    'skill.cloud.desc':  'AWS, Azure, Databricks, Infraestrutura como Código (IaC com Terraform), arquitetura Serverless.',
    'skill.prog':        'Programação',
    'skill.prog.desc':   'Python, SQL, Apache Spark (PySpark/Spark SQL), Shell Script, automação e processamento de dados.',
    'skill.bigdata':     'Big Data',
    'skill.bigdata.desc':'Spark, Databricks, Kafka, Hadoop, processamento distribuído, análise e tratamento de grandes volumes de dados.',
    'skill.dw':          'Data Warehousing',
    'skill.dw.desc':     'Databricks, Redshift, Azure Synapse, modelagem dimensional, otimização e performance de consultas.',
    'skill.orch':        'Orquestração',
    'skill.orch.desc':   'Airflow, DBT, Docker, Kubernetes, CI/CD.',
    'skill.dataops':     'DataOps/MLOps',
    'skill.dataops.desc':'Azure DevOps, Jenkins, GitHub Actions, GitLab CI/CD, automação de pipelines, versionamento e entrega contínua.',
    'skill.dash':        'Dashboards',
    'skill.dash.desc':   'Power BI, Streamlit, storytelling com dados.',

    // ── Experiências ──────────────────────────────────────
    'exp.now':              'Atualmente',
    'exp.renner.h3':        'Data Engineer | Renner',
    'exp.apex.h3':          'Engenheiro de Dados | Apex Brasil',
    'exp.petro_ae.h3':      'Analytics Engineer | Petrobras',
    'exp.petro_da.h3':      'Analista de Dados | Petrobras',
    'exp.petro_ad.h3':      'Administrador de Dados | Petrobras',
    'exp.aguia.h3':         'Analista de Dados',
    'exp.globalsys.h3':     'Analista de Business Intelligence',
    'exp.tacom.h3':         'Coordenador de Sistemas Embarcados',
    'exp.santa.h3':         'Analista de Negócios Sênior',
    'exp.renner.desc':      'Alocado na <strong>Renner Latam</strong> (uma das maiores varejistas da América Latina), atuo no desenvolvimento e sustentação de <strong>pipelines de dados</strong> em ambiente <strong>Azure + Databricks</strong>, garantindo escalabilidade, confiabilidade e governança com <strong>Delta Lake</strong> e <strong>Unity Catalog</strong>.',
    'exp.apex.desc':        'Consultoria para a <strong>Apex Brasil</strong> (agência brasileira de promoção de exportações), projetei e implementei uma arquitetura <strong>Lakehouse</strong> completa no <strong>Azure Databricks</strong> com camadas RAW, Bronze, Silver e Gold. Integrei as bases <strong>ComexStat</strong> (18 endpoints, GOV.BR) e <strong>UN Comtrade</strong> (7 objetos, ONU), com orquestração via <strong>Databricks Jobs/Workflows</strong>, governança pelo <strong>Unity Catalog</strong> e camada analítica no <strong>Power BI</strong>.',
    'exp.petro_ae.desc':    'Alocado na <strong>Petrobras</strong> (Óleo & Gás), projetei e operei plataformas de dados de missão crítica com <strong>Azure Databricks</strong>, <strong>Medallion Architecture</strong> (Bronze, Silver e Gold) e <strong>Delta Lake</strong>. Desenvolvi pipelines ETL/ELT com <strong>Azure Data Factory</strong>, implementei governança com <strong>Unity Catalog</strong>, entreguei dashboards com <strong>Power BI</strong> e apliquei <strong>DataOps</strong> com CI/CD. SLA de 99,5%.',
    'exp.petro_da.desc':    'Alocado na <strong>Petrobras</strong> (Óleo & Gás), desenvolvi modelos dimensionais, <strong>Data Warehouse</strong> e projetos de BI ponta a ponta. Modelei <strong>Star Schema</strong> e <strong>Snowflake</strong> com SCD Type 2, construí pipelines <strong>ETL</strong> com SQL, Python e Power Query. Destaque: DW dimensional no Azure com redução de <strong>40%</strong> no tempo de relatórios.',
    'exp.petro_ad.desc':    'Alocado na <strong>Petrobras</strong> (Óleo & Gás), liderei squads de Engenharia de Dados, administrei ambientes <strong>Oracle</strong> e <strong>SQL Server</strong> com tuning de queries. Destaque: <strong>Data Mart</strong> integrado ao Oracle com redução de <strong>50%</strong> no tempo de relatórios de estoque.',
    'exp.aguia.desc':       'Requisitos detalhados, automação em BI (Jenkins), ETL e Data Warehouses com SQL Server e T-SQL, desenvolvimento de KPIs com Power BI.',
    'exp.globalsys.desc':   'Implementação de Data Warehouse e Data Mart (Oracle/PL-SQL/ODI/OBIEE), relatórios interativos web/mobile, pipelines automatizados AWS Glue, Lambda, Redshift e QuickSight.',
    'exp.tacom.desc':       'Coordenação de projeto Bilhetagem Eletrônica, gestão Agile, DevOps e interação com órgãos governamentais.',
    'exp.santa.desc':       'Gestão infraestrutura TI, implementação relatórios BI (Power BI), coordenação Sistema Bilhetagem Eletrônica, gestão orçamentária e contratos.',

    // ── Setores ───────────────────────────────────────────
    'setor.oleo':    'Óleo & Gás',
    'setor.varejo':  'Varejo',
    'setor.comercio':'Comércio Exterior',
    'setor.ti':      'Tecnologia',
    'setor.transp':  'Transporte',
    'setor.serv_ti': 'Serviços de TI',
    'setor.mob':     'Mobilidade',
    'setor.turismo': 'Turismo',
    'setor.financas':'Financeiro',

    // ── Projetos ──────────────────────────────────────────
    'proj.github':          'Ver no GitHub',
    'proj.airflow.h3':      'Orquestração Airflow + Databricks',
    'proj.airflow.desc':    'Guia completo e implementação prática de DAGs no Apache Airflow para orquestrar jobs no Databricks: tokens, conexões, Docker, agendamento e execução parametrizada.',
    'proj.aws.h3':          'Pipeline Real-time na AWS: Dados Climáticos',
    'proj.aws.desc':        'Ingere dados da API Tomorrow.io via <strong>Kinesis, Lambda, S3, Glue e Athena</strong>, com alertas automáticos via SNS. Data lake em 3 camadas: raw, gold e analysis.',
    'proj.azure.h3':        'Engenharia de Dados no Azure: 3 Casos Reais',
    'proj.azure.desc':      'Três projetos práticos: IoT de temperatura (Event Hub + Stream Analytics + Power BI), gestão de receitas (ADF + Data Lake) e infraestrutura para banco digital (Synapse + Databricks).',
    'proj.iot.h3':          'Pipeline IoT com Azure e Airflow',
    'proj.iot.desc':        'Simulação de pipeline de sensores IoT em ambiente de óleo e gás no Azure, com orquestração via Apache Airflow, armazenamento NoSQL e Docker.',
    'proj.petro.h3':        'Pipeline de Acidentes ANTT — Microsoft Fabric',
    'proj.petro.desc':      'Pipeline end-to-end no <strong>Microsoft Fabric</strong> seguindo <strong>Medallion Architecture</strong> (Bronze → Silver → Gold) para 1 milhão de registros de acidentes em rodovias federais (35 concessionárias, 2007–2025). Constellation Schema e relatórios em <strong>Power BI</strong> modo Direct Lake.',
    'proj.financial.h3':    'Extração e Análise de Dados Financeiros',
    'proj.financial.desc':  'Pipeline Python para extração de dados de PDFs de relatórios financeiros, com análise e visualização via Jupyter Notebooks.',

    // ── Certificações ─────────────────────────────────────
    'cert.view':        'Ver credencial',
    'cert.in_progress': 'Em andamento · 2026',

    // ── Contato ───────────────────────────────────────────
    'contact.intro':    'Estou disponível para novos projetos, consultorias e oportunidades. Entre em contato para discutirmos como posso ajudar a transformar seus dados em valor.',
    'form.nome':        'Nome',
    'form.email':       'Email',
    'form.msg':         'Mensagem',
    'form.nome.ph':     'Seu nome',
    'form.email.ph':    'Seu email',
    'form.msg.ph':      'Como posso ajudar?',
    'form.submit':      'Enviar Mensagem',

    // ── Tema ──────────────────────────────────────────────
    'theme.light': 'Claro',
    'theme.dark':  'Escuro',
    'theme.auto':  'Automático',

    // ── Footer ────────────────────────────────────────────
    'footer.copy':   '© 2026 Adriano Vilela. Todos os direitos reservados.',
    'footer.visits': 'visitas',
  },

  // ══════════════════════════════════════════════════════
  en: {
    'nav.sobre':        'About',
    'nav.habilidades':  'Skills',
    'nav.experiencias': 'Experience',
    'nav.empresas':     'Companies',
    'nav.projetos':     'Projects',
    'nav.certs':        'Certifications',
    'nav.contato':      'Contact',

    'hero.tagline':     'Turning data into competitive advantage through modern platforms, governance and analytics at scale.',
    'hero.btn.contato': 'Get in touch',
    'hero.btn.cv':      'Download Resume',
    'hero.anos':        'Years',
    'hero.certs':       'Certifications',
    'hero.empresas':    'Companies',
    'hero.projetos':    'Projects',

    'sec.sobre':        'About Me',
    'sec.skills':       'Technical Skills',
    'sec.exp':          'Experience',
    'sec.companies':    "Where I've Delivered",
    'sec.projects':     'Projects',
    'sec.certs':        'Certifications',
    'sec.contact':      'Contact',

    'about.p1': '<strong>Senior Data Engineer</strong> specialized in enterprise-scale data architectures, focused on <strong>Azure Databricks</strong>, <strong>Microsoft Fabric</strong> and <strong>Medallion Architecture</strong>.',
    'about.p2': 'Currently placed at <strong>Renner</strong> via Compass UOL, developing and maintaining data pipelines on <strong>Azure + Databricks</strong>, with focus on scalability, reliability and governance.',
    'about.p3': "Throughout my career, I've led high-impact initiatives across organizations of different sizes and sectors: operated mission-critical data platforms at <strong>Petrobras</strong>, structured <strong>Data Governance</strong> at <strong>Renner</strong> and architected the foreign trade intelligence Lakehouse at <strong>Apex Brasil</strong>, integrating <strong>ComexStat</strong> and <strong>UN Comtrade</strong> in a cloud-native high-availability environment.",
    'about.p4': 'My specialty is turning fragmented data into strategic assets, solving the problems that hold teams back most: fragile pipelines, absent governance and scattered data that no one trusts.',
    'about.p5': 'Available for remote positions in Brazil, Portugal, Europe and the USA.',

    'card.formacao':      'Education',
    'card.formacao_comp': 'Additional Training',
    'card.soft':          'Soft Skills',
    'card.local':         'Location',
    'card.idiomas':       'Languages',
    'card.interesses':    'Interests',
    'card.local.text':    '• Serra – ES, Brazil<br>• Available for remote work',
    'card.idiomas.text':  '• Portuguese: Native<br>• English: Technical',
    'card.soft.text':     '• Effective communication<br>• Teamwork<br>• Empathy<br>• Resilience<br>• Critical thinking<br>• Proactivity<br>• Time management<br>• Flexibility<br>• Emotional intelligence<br>• Leadership<br>• Adaptability',
    'card.interests.text':'Beyond my current work in Data Engineering, I continuously follow and deepen my knowledge in:<br><br><strong>Data Streaming & Real-Time Processing:</strong> continuous ingestion architectures with <strong>Apache Kafka</strong>, <strong>Azure Event Hubs</strong> and <strong>Spark Structured Streaming</strong>.<br><br><strong>MLOps & LLMOps:</strong> model operationalization with <strong>MLflow</strong>, LLM lifecycle in production and <strong>RAG</strong> architectures.<br><br><strong>AI applied to data:</strong> <strong>Azure Databricks</strong> and <strong>Microsoft Fabric</strong> for Generative AI and enterprise-scale Machine Learning.<br><br><strong>IaC & Orchestration:</strong> <strong>Terraform</strong>, <strong>Docker</strong> and <strong>Kubernetes</strong> applied to cloud data environments.',

    'skill.eng':         'Data Engineering',
    'skill.eng.desc':    'Building robust and scalable pipelines, ETL/ELT, dimensional modeling (Star/Snowflake), data quality and governance.',
    'skill.cloud':       'Cloud Computing',
    'skill.cloud.desc':  'AWS, Azure, Databricks, Infrastructure as Code (IaC with Terraform), Serverless architecture.',
    'skill.prog':        'Programming',
    'skill.prog.desc':   'Python, SQL, Apache Spark (PySpark/Spark SQL), Shell Script, data automation and processing.',
    'skill.bigdata':     'Big Data',
    'skill.bigdata.desc':'Spark, Databricks, Kafka, Hadoop, distributed processing, large-scale data analysis.',
    'skill.dw':          'Data Warehousing',
    'skill.dw.desc':     'Databricks, Redshift, Azure Synapse, dimensional modeling, query optimization and performance.',
    'skill.orch':        'Orchestration',
    'skill.orch.desc':   'Airflow, DBT, Docker, Kubernetes, CI/CD.',
    'skill.dataops':     'DataOps/MLOps',
    'skill.dataops.desc':'Azure DevOps, Jenkins, GitHub Actions, GitLab CI/CD, pipeline automation, versioning and continuous delivery.',
    'skill.dash':        'Dashboards',
    'skill.dash.desc':   'Power BI, Streamlit, data storytelling.',

    'exp.now':              'Present',
    'exp.renner.h3':        'Data Engineer | Renner',
    'exp.apex.h3':          'Data Engineer | Apex Brasil',
    'exp.petro_ae.h3':      'Analytics Engineer | Petrobras',
    'exp.petro_da.h3':      'Data Analyst | Petrobras',
    'exp.petro_ad.h3':      'Data Administrator | Petrobras',
    'exp.aguia.h3':         'Data Analyst',
    'exp.globalsys.h3':     'Business Intelligence Analyst',
    'exp.tacom.h3':         'Embedded Systems Coordinator',
    'exp.santa.h3':         'Senior Business Analyst',
    'exp.renner.desc':      'Placed at <strong>Renner Latam</strong> (one of Latin America\'s largest retailers), I develop and maintain <strong>data pipelines</strong> on <strong>Azure + Databricks</strong>, ensuring scalability, reliability and governance with <strong>Delta Lake</strong> and <strong>Unity Catalog</strong>.',
    'exp.apex.desc':        'Consulting engagement for <strong>Apex Brasil</strong> (Brazilian export promotion agency): designed and implemented a full <strong>Lakehouse</strong> architecture on <strong>Azure Databricks</strong> with RAW, Bronze, Silver and Gold layers. Integrated <strong>ComexStat</strong> (18 endpoints, GOV.BR) and <strong>UN Comtrade</strong> (7 objects, UN), with orchestration via <strong>Databricks Jobs/Workflows</strong>, governance through <strong>Unity Catalog</strong> and analytics layer on <strong>Power BI</strong>.',
    'exp.petro_ae.desc':    'Placed at <strong>Petrobras</strong> (Oil & Gas), designed and operated mission-critical data platforms with <strong>Azure Databricks</strong>, <strong>Medallion Architecture</strong> (Bronze, Silver and Gold) and <strong>Delta Lake</strong>. Built ETL/ELT pipelines with <strong>Azure Data Factory</strong>, implemented governance with <strong>Unity Catalog</strong>, and delivered <strong>Power BI</strong> dashboards with DataOps/CI/CD practices. 99.5% SLA.',
    'exp.petro_da.desc':    'Placed at <strong>Petrobras</strong> (Oil & Gas), developed dimensional models, <strong>Data Warehouse</strong> and end-to-end BI projects. Modeled <strong>Star Schema</strong> and <strong>Snowflake</strong> with SCD Type 2, built <strong>ETL</strong> pipelines with SQL, Python and Power Query. Highlight: dimensional DW on Azure reducing report generation time by <strong>40%</strong>.',
    'exp.petro_ad.desc':    'Placed at <strong>Petrobras</strong> (Oil & Gas), led Data Engineering squads, administered <strong>Oracle</strong> and <strong>SQL Server</strong> with query tuning. Highlight: <strong>Data Mart</strong> integrated with Oracle reducing stock report time by <strong>50%</strong>.',
    'exp.aguia.desc':       'Detailed requirements, BI automation (Jenkins), ETL and Data Warehouses with SQL Server and T-SQL, KPI development with Power BI.',
    'exp.globalsys.desc':   'Data Warehouse and Data Mart implementation (Oracle/PL-SQL/ODI/OBIEE), interactive web/mobile reports, automated pipelines with AWS Glue, Lambda, Redshift and QuickSight.',
    'exp.tacom.desc':       'Electronic Ticketing project coordination, Agile management, DevOps and interaction with government agencies.',
    'exp.santa.desc':       'IT infrastructure management, BI reports (Power BI), Electronic Ticketing System coordination, budget and contract management.',

    'setor.oleo':    'Oil & Gas',
    'setor.varejo':  'Retail',
    'setor.comercio':'Foreign Trade',
    'setor.ti':      'Technology',
    'setor.transp':  'Transportation',
    'setor.serv_ti': 'IT Services',
    'setor.mob':     'Mobility',
    'setor.turismo': 'Tourism',
    'setor.financas':'Financial',

    'proj.github':          'View on GitHub',
    'proj.airflow.h3':      'Airflow + Databricks Orchestration',
    'proj.airflow.desc':    'Complete guide and hands-on implementation of DAGs in Apache Airflow to orchestrate Databricks jobs: tokens, connections, Docker, scheduling and parameterized execution.',
    'proj.aws.h3':          'Real-time AWS Pipeline: Weather Data',
    'proj.aws.desc':        'Ingests data from the Tomorrow.io API via <strong>Kinesis, Lambda, S3, Glue and Athena</strong>, with automatic SMS/email alerts via SNS. Data lake with 3 layers: raw, gold and analysis.',
    'proj.azure.h3':        'Azure Data Engineering: 3 Real Cases',
    'proj.azure.desc':      'Three hands-on projects: temperature IoT for cold chain logistics (Event Hub + Stream Analytics + Power BI), revenue management (ADF + Data Lake) and digital bank infrastructure (Synapse + Databricks).',
    'proj.iot.h3':          'IoT Pipeline with Azure and Airflow',
    'proj.iot.desc':        'Simulation of an IoT sensor data pipeline in a critical oil and gas environment on Azure, with orchestration via Apache Airflow, NoSQL storage and Docker.',
    'proj.petro.h3':        'ANTT Accident Pipeline — Microsoft Fabric',
    'proj.petro.desc':      'End-to-end pipeline on <strong>Microsoft Fabric</strong> following <strong>Medallion Architecture</strong> (Bronze → Silver → Gold) for 1 million accident records on federal highways (35 concessionaires, 2007–2025). Constellation Schema and <strong>Power BI</strong> Direct Lake reports.',
    'proj.financial.h3':    'Financial Data Extraction & Analysis',
    'proj.financial.desc':  'Python pipeline for extracting structured data from financial report PDFs, with analysis and visualization via Jupyter Notebooks.',

    'cert.view':        'View credential',
    'cert.in_progress': 'In progress · 2026',

    'contact.intro':    "I'm available for new projects, consulting engagements and opportunities. Get in touch to discuss how I can help turn your data into value.",
    'form.nome':        'Name',
    'form.email':       'Email',
    'form.msg':         'Message',
    'form.nome.ph':     'Your name',
    'form.email.ph':    'Your email',
    'form.msg.ph':      'How can I help?',
    'form.submit':      'Send Message',

    'theme.light': 'Light',
    'theme.dark':  'Dark',
    'theme.auto':  'Auto',

    'footer.copy':   '© 2026 Adriano Vilela. All rights reserved.',
    'footer.visits': 'visits',
  },

  // ══════════════════════════════════════════════════════
  es: {
    'nav.sobre':        'Sobre mí',
    'nav.habilidades':  'Habilidades',
    'nav.experiencias': 'Experiencia',
    'nav.empresas':     'Empresas',
    'nav.projetos':     'Proyectos',
    'nav.certs':        'Certificaciones',
    'nav.contato':      'Contacto',

    'hero.tagline':     'Convirtiendo datos en ventaja competitiva a través de plataformas modernas, gobernanza y analytics a escala.',
    'hero.btn.contato': 'Contáctame',
    'hero.btn.cv':      'Descargar CV',
    'hero.anos':        'Años',
    'hero.certs':       'Certificaciones',
    'hero.empresas':    'Empresas',
    'hero.projetos':    'Proyectos',

    'sec.sobre':        'Sobre mí',
    'sec.skills':       'Habilidades Técnicas',
    'sec.exp':          'Experiencia',
    'sec.companies':    'Dónde He Entregado',
    'sec.projects':     'Proyectos',
    'sec.certs':        'Certificaciones',
    'sec.contact':      'Contacto',

    'about.p1': '<strong>Senior Data Engineer</strong> especializado en arquitecturas de datos a escala empresarial, con foco en <strong>Azure Databricks</strong>, <strong>Microsoft Fabric</strong> y <strong>Medallion Architecture</strong>.',
    'about.p2': 'Actualmente asignado en <strong>Renner</strong> vía Compass UOL, desarrollando y manteniendo pipelines de datos en entorno <strong>Azure + Databricks</strong>, con foco en escalabilidad, confiabilidad y gobernanza.',
    'about.p3': 'A lo largo de mi carrera, lideré iniciativas de alto impacto en organizaciones de distintos tamaños y sectores: operé plataformas de datos de misión crítica en <strong>Petrobras</strong>, estructuré <strong>Data Governance</strong> en <strong>Renner</strong> y diseñé el Lakehouse de inteligencia de comercio exterior de <strong>Apex Brasil</strong>, integrando <strong>ComexStat</strong> y <strong>UN Comtrade</strong> en un entorno cloud-native de alta disponibilidad.',
    'about.p4': 'Mi especialidad es transformar datos fragmentados en activos estratégicos, resolviendo los problemas que más frenan a los equipos: pipelines frágiles, gobernanza inexistente y datos dispersos en los que nadie confía.',
    'about.p5': 'Disponible para posiciones remotas en Brasil, Portugal, Europa y EE.UU.',

    'card.formacao':      'Formación',
    'card.formacao_comp': 'Formación Complementaria',
    'card.soft':          'Habilidades Blandas',
    'card.local':         'Ubicación',
    'card.idiomas':       'Idiomas',
    'card.interesses':    'Intereses',
    'card.local.text':    '• Serra – ES, Brasil<br>• Disponible para trabajo remoto',
    'card.idiomas.text':  '• Portugués: Nativo<br>• Inglés: Técnico',
    'card.soft.text':     '• Comunicación efectiva<br>• Trabajo en equipo<br>• Empatía<br>• Resiliencia<br>• Pensamiento crítico<br>• Proactividad<br>• Gestión del tiempo<br>• Flexibilidad<br>• Inteligencia emocional<br>• Liderazgo<br>• Adaptabilidad',
    'card.interests.text':'Más allá de mi trabajo actual en Ingeniería de Datos, sigo y profundizo continuamente en:<br><br><strong>Streaming de Datos y Procesamiento en Tiempo Real:</strong> arquitecturas de ingestión continua con <strong>Apache Kafka</strong>, <strong>Azure Event Hubs</strong> y <strong>Spark Structured Streaming</strong>.<br><br><strong>MLOps & LLMOps:</strong> operacionalización de modelos con <strong>MLflow</strong>, ciclo de vida de LLMs y arquitecturas <strong>RAG</strong>.<br><br><strong>IA aplicada a datos:</strong> <strong>Azure Databricks</strong> y <strong>Microsoft Fabric</strong> para IA Generativa y Machine Learning a escala empresarial.<br><br><strong>IaC & Orquestación:</strong> <strong>Terraform</strong>, <strong>Docker</strong> y <strong>Kubernetes</strong> aplicados a entornos de datos en cloud.',

    'skill.eng':         'Ingeniería de Datos',
    'skill.eng.desc':    'Desarrollo de pipelines robustos y escalables, ETL/ELT, modelado dimensional (Star/Snowflake), calidad y gobernanza de datos.',
    'skill.cloud':       'Cloud Computing',
    'skill.cloud.desc':  'AWS, Azure, Databricks, Infraestructura como Código (IaC con Terraform), arquitectura Serverless.',
    'skill.prog':        'Programación',
    'skill.prog.desc':   'Python, SQL, Apache Spark (PySpark/Spark SQL), Shell Script, automatización y procesamiento de datos.',
    'skill.bigdata':     'Big Data',
    'skill.bigdata.desc':'Spark, Databricks, Kafka, Hadoop, procesamiento distribuido, análisis de grandes volúmenes de datos.',
    'skill.dw':          'Data Warehousing',
    'skill.dw.desc':     'Databricks, Redshift, Azure Synapse, modelado dimensional, optimización y rendimiento de consultas.',
    'skill.orch':        'Orquestación',
    'skill.orch.desc':   'Airflow, DBT, Docker, Kubernetes, CI/CD.',
    'skill.dataops':     'DataOps/MLOps',
    'skill.dataops.desc':'Azure DevOps, Jenkins, GitHub Actions, GitLab CI/CD, automatización de pipelines, versionamiento y entrega continua.',
    'skill.dash':        'Dashboards',
    'skill.dash.desc':   'Power BI, Streamlit, storytelling con datos.',

    'exp.now':              'Actualmente',
    'exp.renner.h3':        'Data Engineer | Renner',
    'exp.apex.h3':          'Ingeniero de Datos | Apex Brasil',
    'exp.petro_ae.h3':      'Analytics Engineer | Petrobras',
    'exp.petro_da.h3':      'Analista de Datos | Petrobras',
    'exp.petro_ad.h3':      'Administrador de Datos | Petrobras',
    'exp.aguia.h3':         'Analista de Datos',
    'exp.globalsys.h3':     'Analista de Business Intelligence',
    'exp.tacom.h3':         'Coordinador de Sistemas Embebidos',
    'exp.santa.h3':         'Analista de Negocios Senior',
    'exp.renner.desc':      'Asignado en <strong>Renner Latam</strong> (una de las mayores minoristas de América Latina), desarrollo y mantengo <strong>pipelines de datos</strong> en entorno <strong>Azure + Databricks</strong>, garantizando escalabilidad, confiabilidad y gobernanza con <strong>Delta Lake</strong> y <strong>Unity Catalog</strong>.',
    'exp.apex.desc':        'Consultoría para <strong>Apex Brasil</strong> (agencia brasileña de promoción de exportaciones): diseñé e implementé una arquitectura <strong>Lakehouse</strong> completa en <strong>Azure Databricks</strong> con capas RAW, Bronze, Silver y Gold. Integré <strong>ComexStat</strong> (18 endpoints, GOV.BR) y <strong>UN Comtrade</strong> (7 objetos, ONU), con <strong>Databricks Jobs/Workflows</strong>, <strong>Unity Catalog</strong> y <strong>Power BI</strong>.',
    'exp.petro_ae.desc':    'Asignado en <strong>Petrobras</strong> (Petróleo & Gas), diseñé y opté plataformas de datos de misión crítica con <strong>Azure Databricks</strong>, <strong>Medallion Architecture</strong> y <strong>Delta Lake</strong>. Pipelines ETL/ELT con <strong>Azure Data Factory</strong>, gobernanza con <strong>Unity Catalog</strong> y dashboards en <strong>Power BI</strong>. SLA de 99,5%.',
    'exp.petro_da.desc':    'Asignado en <strong>Petrobras</strong> (Petróleo & Gas), desarrollé modelos dimensionales, <strong>Data Warehouse</strong> y proyectos de BI de punta a punta. Modelé <strong>Star Schema</strong> y <strong>Snowflake</strong> con SCD Type 2. Destaque: DW en Azure con reducción de <strong>40%</strong> en tiempo de informes.',
    'exp.petro_ad.desc':    'Asignado en <strong>Petrobras</strong> (Petróleo & Gas), lideré squads de Ingeniería de Datos y administré entornos <strong>Oracle</strong> y <strong>SQL Server</strong>. Destaque: <strong>Data Mart</strong> con reducción de <strong>50%</strong> en tiempo de informes de stock.',
    'exp.aguia.desc':       'Levantamiento de requisitos, automatización en BI (Jenkins), ETL y Data Warehouses con SQL Server y T-SQL, KPIs con Power BI.',
    'exp.globalsys.desc':   'Implementación de Data Warehouse y Data Mart (Oracle/PL-SQL/ODI/OBIEE), reportes interactivos web/mobile, pipelines AWS Glue, Lambda, Redshift y QuickSight.',
    'exp.tacom.desc':       'Coordinación de proyecto de Billetaje Electrónico, gestión Agile, DevOps e interacción con organismos gubernamentales.',
    'exp.santa.desc':       'Gestión de infraestructura TI, reportes BI (Power BI), coordinación Sistema de Billetaje Electrónico, gestión presupuestaria y contratos.',

    'setor.oleo':    'Petróleo & Gas',
    'setor.varejo':  'Minorista',
    'setor.comercio':'Comercio Exterior',
    'setor.ti':      'Tecnología',
    'setor.transp':  'Transporte',
    'setor.serv_ti': 'Servicios de TI',
    'setor.mob':     'Movilidad',
    'setor.turismo': 'Turismo',
    'setor.financas':'Financiero',

    'proj.github':          'Ver en GitHub',
    'proj.airflow.h3':      'Orquestación Airflow + Databricks',
    'proj.airflow.desc':    'Guía completa e implementación práctica de DAGs en Apache Airflow para orquestar jobs en Databricks: tokens, conexiones, Docker, programación y ejecución parametrizada.',
    'proj.aws.h3':          'Pipeline Real-time en AWS: Datos Climáticos',
    'proj.aws.desc':        'Ingiere datos de la API Tomorrow.io vía <strong>Kinesis, Lambda, S3, Glue y Athena</strong>, con alertas automáticas vía SNS. Data lake en 3 capas: raw, gold y analysis.',
    'proj.azure.h3':        'Ingeniería de Datos en Azure: 3 Casos Reales',
    'proj.azure.desc':      'Tres proyectos prácticos: IoT de temperatura (Event Hub + Stream Analytics + Power BI), gestión de ingresos (ADF + Data Lake) e infraestructura para banco digital (Synapse + Databricks).',
    'proj.iot.h3':          'Pipeline IoT con Azure y Airflow',
    'proj.iot.desc':        'Simulación de pipeline de sensores IoT en entorno crítico de petróleo y gas en Azure, con Apache Airflow, NoSQL y Docker.',
    'proj.petro.h3':        'Pipeline de Accidentes ANTT — Microsoft Fabric',
    'proj.petro.desc':      'Pipeline end-to-end en <strong>Microsoft Fabric</strong> siguiendo <strong>Medallion Architecture</strong> (Bronze → Silver → Gold) para 1 millón de registros de accidentes en carreteras federales (35 concesionarias, 2007–2025). Constellation Schema e informes en <strong>Power BI</strong> modo Direct Lake.',
    'proj.financial.h3':    'Extracción y Análisis de Datos Financieros',
    'proj.financial.desc':  'Pipeline Python para extracción de datos de PDFs de informes financieros, con análisis y visualización vía Jupyter Notebooks.',

    'cert.view':        'Ver credencial',
    'cert.in_progress': 'En progreso · 2026',

    'contact.intro':    'Estoy disponible para nuevos proyectos, consultorías y oportunidades. Contáctame para discutir cómo puedo ayudar a transformar tus datos en valor.',
    'form.nome':        'Nombre',
    'form.email':       'Email',
    'form.msg':         'Mensaje',
    'form.nome.ph':     'Tu nombre',
    'form.email.ph':    'Tu email',
    'form.msg.ph':      '¿Cómo puedo ayudarte?',
    'form.submit':      'Enviar Mensaje',

    'theme.light': 'Claro',
    'theme.dark':  'Oscuro',
    'theme.auto':  'Automático',

    'footer.copy':   '© 2026 Adriano Vilela. Todos los derechos reservados.',
    'footer.visits': 'visitas',
  }
};

// ── Engine ────────────────────────────────────────────────────────────────────

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;

  // textContent swap
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });

  // innerHTML swap (for elements with <strong>, <br> etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = t[el.dataset.i18nHtml];
    if (v !== undefined) el.innerHTML = v;
  });

  // placeholder swap
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const v = t[el.dataset.i18nPh];
    if (v !== undefined) el.setAttribute('placeholder', v);
  });

  // active button highlight
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  // Restore saved preference, default to PT
  applyLang(localStorage.getItem('lang') || 'pt');
});
