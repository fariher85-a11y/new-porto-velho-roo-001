(function(){
  // Cidade(s) de prova — Porto Velho/RO
  var CIDADES = [['PORTO VELHO/RO', 'PORTO VELHO/RO']];
  var C = {
    edital_24_educacao: {
      titulo: 'Concurso Público da Educação do Município de Porto Velho - RO',
      sigla: 'PMPV-EDU',
      orgao: 'Prefeitura Municipal de Porto Velho - RO',
      edital_opt: 'Edital nº 24/2026 - Educação',
      edital_curto: 'Edital nº 24/2026',
      orgao_edital: 'Prefeitura Municipal de Porto Velho - RO',
      logo: '/assets/home/img1.webp',
      periodo: '13/10/26 10:00 - 11/11/26 23:59',
      dataProva: '13/12/2026 14:45:00',
      cargos: [
        {v:'343',t:'AGENTE DE SECRETARIA ESCOLAR – ÁREA URBANA - PORTO VELHO',p:'90.00'},
        {v:'517',t:'ESPECIALISTA EM EDUCAÇÃO ORIENTADOR EDUCACIONAL – ÁREA URBANA - PORTO VELHO',p:'130.00'},
        {v:'518',t:'ESPECIALISTA EM EDUCAÇÃO SUPERVISÃO EDUCACIONAL – ÁREA URBANA - PORTO VELHO',p:'130.00'},
        {v:'519',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS – ÁREA URBANA - PORTO VELHO',p:'130.00'},
        {v:'520',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - Agrovila Rio Verde, Rio Jamari, Baixo Madeira - EMEF Rio Verde',p:'130.00'},
        {v:'521',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - BR-319, Km 1,5 Conjunto DENIT - EMEF Ermelindo Monteiro Brasil',p:'130.00'},
        {v:'522',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - BR-319, Km 17, Linha C-1 - EMEF Heitor Villa Lobos',p:'130.00'},
        {v:'523',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - BR-319, P.A. Joana D\'Arc I, Linha 9 – EMEF José de Freitas',p:'130.00'},
        {v:'524',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - BR-364, Km 127, Embaúba - EMEF Olympia Salvatore Ribeiro',p:'130.00'},
        {v:'525',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - BR-364, Km 18, Vila Nova do Teotônio - EMEF Antônio Augusto Vasconcelos',p:'130.00'},
        {v:'526',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - BR-364, Km 32, Linha 32 - EMEF Maria Angélica Queiroz de Oliveira',p:'130.00'},
        {v:'527',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - BR-364, Km 54, Assentamento Santa Rita, sentido Acre - EMEF Flor do Cupuaçú',p:'130.00'},
        {v:'528',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - BR-364, Km 67, Linha Caracol, sentido Acre - EMEF Ernandes Coutinho',p:'130.00'},
        {v:'529',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - Brasileira, Baixo Madeira - EMEF São Luiz Gonzaga',p:'130.00'},
        {v:'530',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - Distrito de Abunã',p:'130.00'},
        {v:'531',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - Distrito de Calama',p:'130.00'},
        {v:'532',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - Distrito de Demarcação - EMEF João de Barros Gouveia - Baixo Madeira',p:'130.00'},
        {v:'533',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - Distrito de Extrema',p:'130.00'},
        {v:'534',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - Distrito de Jaci Paraná',p:'130.00'},
        {v:'535',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - Distrito de Nazaré',p:'130.00'},
        {v:'536',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - Distrito de Nova Califórnia',p:'130.00'},
        {v:'537',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - Distrito de Nova Mutum Paraná',p:'130.00'},
        {v:'538',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - Distrito de Rio Pardo',p:'130.00'},
        {v:'539',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - Distrito de União Bandeirantes',p:'130.00'},
        {v:'540',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - Distrito de Vista Alegre do Abunã',p:'130.00'},
        {v:'541',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - Estrada 13 de Setembro, Km 11, Aeroclube - EMEF Erialdo Gomes do Carmo',p:'130.00'},
        {v:'542',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - Estrada 28 de Novembro, Km 22, Penal - EMEF União',p:'130.00'},
        {v:'543',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - Estrada de Santo Antônio, Km 6, Triângulo - EMEF Santo Antônio I',p:'130.00'},
        {v:'544',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - Gleba Rio Preto, Km 17 - EMEF Padre José de Anchieta',p:'130.00'},
        {v:'545',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - Linha 28 de Novembro, Km 22, Ramal Cujubim, Km 8 - EMEF Deigmar Moraes de Souza',p:'130.00'},
        {v:'546',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - Linha Progresso ZR - EMEF Progresso',p:'130.00'},
        {v:'547',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - Monte Sinai, Rio Machado, Baixo Madeira - EMEF Monte Horeb',p:'130.00'},
        {v:'548',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - Nova Aliança, Agrovila, Baixo Madeira - EMEF Professora Maria Angélica Queiroz de Oliveira',p:'130.00'},
        {v:'549',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - P.A. Aliança, Estrada 28 de Novembro, Km 42 - EMEF Francisco José Chiquilito Coimbra Erse',p:'130.00'},
        {v:'550',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - RESEX Lago do Cuniã, Baixo Madeira - EMEF Francisco Braga',p:'130.00'},
        {v:'551',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - Santa Catarina, Baixo Madeira - EMEF Castro Alves',p:'130.00'},
        {v:'552',t:'PROFESSOR NÍVEL II - SÉRIES INICIAIS - ÁREA RURAL - São José da Praia, Baixo Madeira - EMEF Padre Francisco José Pucci',p:'130.00'}
      ],
      pagina: '/termos-concurso.html'
    },
    edital_25_saude: {
      titulo: 'Concurso Público da Saúde do Município de Porto Velho - RO',
      sigla: 'PMPV-SAU',
      orgao: 'Prefeitura Municipal de Porto Velho - RO',
      edital_opt: 'Edital nº 25/2026 - Saúde',
      edital_curto: 'Edital nº 25/2026',
      orgao_edital: 'Prefeitura Municipal de Porto Velho - RO',
      logo: '/assets/home/img1.webp',
      periodo: '13/10/26 10:00 - 11/11/26 23:59',
      dataProva: '13/12/2026 14:45:00',
      cargos: [
        {v:'201',t:'AUXILIAR DE FARMÁCIA - ÁREA URBANA - PORTO VELHO',p:'90.00'},
        {v:'202',t:'AUXILIAR DE FARMÁCIA - ÁREA RURAL - ABUNÃ',p:'90.00'},
        {v:'203',t:'AUXILIAR DE FARMÁCIA - ÁREA RURAL - ALIANÇA',p:'90.00'},
        {v:'204',t:'AUXILIAR DE FARMÁCIA - ÁREA RURAL - CALAMA',p:'90.00'},
        {v:'205',t:'AUXILIAR DE FARMÁCIA - ÁREA RURAL - CUJUBIM',p:'90.00'},
        {v:'206',t:'AUXILIAR DE FARMÁCIA - ÁREA RURAL - EXTREMA',p:'90.00'},
        {v:'207',t:'AUXILIAR DE FARMÁCIA - ÁREA RURAL - JACI PARANÁ',p:'90.00'},
        {v:'208',t:'AUXILIAR DE FARMÁCIA - ÁREA RURAL - JOANA D\'ARC',p:'90.00'},
        {v:'209',t:'AUXILIAR DE FARMÁCIA - ÁREA RURAL - LINHA 28',p:'90.00'},
        {v:'210',t:'AUXILIAR DE FARMÁCIA - ÁREA RURAL - NAZARÉ',p:'90.00'},
        {v:'211',t:'AUXILIAR DE FARMÁCIA - ÁREA RURAL - NOVA CALIFÓRNIA',p:'90.00'},
        {v:'212',t:'AUXILIAR DE FARMÁCIA - ÁREA RURAL - NOVA MUTUM',p:'90.00'},
        {v:'213',t:'AUXILIAR DE FARMÁCIA - ÁREA RURAL - NOVO ENGENHO',p:'90.00'},
        {v:'214',t:'AUXILIAR DE FARMÁCIA - ÁREA RURAL - RIO DAS GARÇAS',p:'90.00'},
        {v:'215',t:'AUXILIAR DE FARMÁCIA - ÁREA RURAL - RIO PARDO',p:'90.00'},
        {v:'216',t:'AUXILIAR DE FARMÁCIA - ÁREA RURAL - SANTA RITA',p:'90.00'},
        {v:'217',t:'AUXILIAR DE FARMÁCIA - ÁREA RURAL - SÃO CARLOS',p:'90.00'},
        {v:'218',t:'AUXILIAR DE FARMÁCIA - ÁREA RURAL - UNIÃO BANDEIRANTES',p:'90.00'},
        {v:'219',t:'AUXILIAR DE FARMÁCIA - ÁREA RURAL - VISTA ALEGRE',p:'90.00'},
        {v:'220',t:'AUXILIAR DE ODONTOLOGIA - ÁREA URBANA - PORTO VELHO',p:'90.00'},
        {v:'221',t:'AUXILIAR DE ODONTOLOGIA - ÁREA RURAL - ABUNÃ',p:'90.00'},
        {v:'222',t:'AUXILIAR DE ODONTOLOGIA - ÁREA RURAL - ALIANÇA',p:'90.00'},
        {v:'223',t:'AUXILIAR DE ODONTOLOGIA - ÁREA RURAL - CALAMA',p:'90.00'},
        {v:'224',t:'AUXILIAR DE ODONTOLOGIA - ÁREA RURAL - CUJUBIM',p:'90.00'},
        {v:'225',t:'AUXILIAR DE ODONTOLOGIA - ÁREA RURAL - EXTREMA',p:'90.00'},
        {v:'226',t:'AUXILIAR DE ODONTOLOGIA - ÁREA RURAL - JACI PARANÁ',p:'90.00'},
        {v:'227',t:'AUXILIAR DE ODONTOLOGIA - ÁREA RURAL - JOANA D\'ARC',p:'90.00'},
        {v:'228',t:'AUXILIAR DE ODONTOLOGIA - ÁREA RURAL - LINHA 28',p:'90.00'},
        {v:'229',t:'AUXILIAR DE ODONTOLOGIA - ÁREA RURAL - NAZARÉ',p:'90.00'},
        {v:'230',t:'AUXILIAR DE ODONTOLOGIA - ÁREA RURAL - NOVA CALIFÓRNIA',p:'90.00'},
        {v:'231',t:'AUXILIAR DE ODONTOLOGIA - ÁREA RURAL - NOVA MUTUM',p:'90.00'},
        {v:'232',t:'AUXILIAR DE ODONTOLOGIA - ÁREA RURAL - NOVO ENGENHO',p:'90.00'},
        {v:'233',t:'AUXILIAR DE ODONTOLOGIA - ÁREA RURAL - RIO DAS GARÇAS',p:'90.00'},
        {v:'234',t:'AUXILIAR DE ODONTOLOGIA - ÁREA RURAL - RIO PARDO',p:'90.00'},
        {v:'235',t:'AUXILIAR DE ODONTOLOGIA - ÁREA RURAL - SANTA RITA',p:'90.00'},
        {v:'236',t:'AUXILIAR DE ODONTOLOGIA - ÁREA RURAL - SÃO CARLOS',p:'90.00'},
        {v:'237',t:'AUXILIAR DE ODONTOLOGIA - ÁREA RURAL - UNIÃO BANDEIRANTES',p:'90.00'},
        {v:'238',t:'AUXILIAR DE ODONTOLOGIA - ÁREA RURAL - VISTA ALEGRE',p:'90.00'},
        {v:'239',t:'AUXILIAR DE SERVIÇO VETERINÁRIO - ÁREA URBANA - PORTO VELHO',p:'90.00'},
        {v:'240',t:'AUXILIAR DE SERVIÇOS DE SAÚDE - ÁREA URBANA - PORTO VELHO',p:'90.00'},
        {v:'241',t:'MOTORISTA DE VEÍCULOS DE TRANSPORTE DE CARGAS E PASSAGEIROS - ÁREA URBANA - PORTO VELHO',p:'90.00'},
        {v:'242',t:'MOTORISTA DE VEÍCULOS DE TRANSPORTE DE CARGAS E PASSAGEIROS - ÁREA RURAL - ABUNÃ',p:'90.00'},
        {v:'243',t:'MOTORISTA DE VEÍCULOS DE TRANSPORTE DE CARGAS E PASSAGEIROS - ÁREA RURAL - ALIANÇA',p:'90.00'},
        {v:'244',t:'MOTORISTA DE VEÍCULOS DE TRANSPORTE DE CARGAS E PASSAGEIROS - ÁREA RURAL - CUJUBIM',p:'90.00'},
        {v:'245',t:'MOTORISTA DE VEÍCULOS DE TRANSPORTE DE CARGAS E PASSAGEIROS - ÁREA RURAL - EXTREMA',p:'90.00'},
        {v:'246',t:'MOTORISTA DE VEÍCULOS DE TRANSPORTE DE CARGAS E PASSAGEIROS - ÁREA RURAL - JACI PARANÁ',p:'90.00'},
        {v:'247',t:'MOTORISTA DE VEÍCULOS DE TRANSPORTE DE CARGAS E PASSAGEIROS - ÁREA RURAL - JOANA D\'ARC',p:'90.00'},
        {v:'248',t:'MOTORISTA DE VEÍCULOS DE TRANSPORTE DE CARGAS E PASSAGEIROS - ÁREA RURAL - LINHA 28',p:'90.00'},
        {v:'249',t:'MOTORISTA DE VEÍCULOS DE TRANSPORTE DE CARGAS E PASSAGEIROS - ÁREA RURAL - NOVA CALIFÓRNIA',p:'90.00'},
        {v:'250',t:'MOTORISTA DE VEÍCULOS DE TRANSPORTE DE CARGAS E PASSAGEIROS - ÁREA RURAL - NOVA MUTUM',p:'90.00'},
        {v:'251',t:'MOTORISTA DE VEÍCULOS DE TRANSPORTE DE CARGAS E PASSAGEIROS - ÁREA RURAL - NOVO ENGENHO',p:'90.00'},
        {v:'252',t:'MOTORISTA DE VEÍCULOS DE TRANSPORTE DE CARGAS E PASSAGEIROS - ÁREA RURAL - RIO PARDO',p:'90.00'},
        {v:'253',t:'MOTORISTA DE VEÍCULOS DE TRANSPORTE DE CARGAS E PASSAGEIROS - ÁREA RURAL - SANTA RITA',p:'90.00'},
        {v:'254',t:'MOTORISTA DE VEÍCULOS DE TRANSPORTE DE CARGAS E PASSAGEIROS - ÁREA RURAL - SÃO CARLOS',p:'90.00'},
        {v:'255',t:'MOTORISTA DE VEÍCULOS DE TRANSPORTE DE CARGAS E PASSAGEIROS - ÁREA RURAL - UNIÃO BANDEIRANTES',p:'90.00'},
        {v:'256',t:'MOTORISTA DE VEÍCULOS DE TRANSPORTE DE CARGAS E PASSAGEIROS - ÁREA RURAL - VISTA ALEGRE',p:'90.00'},
        {v:'257',t:'MOTORISTA DE VEÍCULOS DE PASSEIO E DUAS RODAS - ÁREA URBANA - PORTO VELHO',p:'90.00'},
        {v:'258',t:'MOTORISTA DE VEÍCULOS DE PASSEIO E DUAS RODAS - ÁREA RURAL - ABUNÃ',p:'90.00'},
        {v:'259',t:'MOTORISTA DE VEÍCULOS DE PASSEIO E DUAS RODAS - ÁREA RURAL - ALIANÇA',p:'90.00'},
        {v:'260',t:'MOTORISTA DE VEÍCULOS DE PASSEIO E DUAS RODAS - ÁREA RURAL - CUJUBIM',p:'90.00'},
        {v:'261',t:'MOTORISTA DE VEÍCULOS DE PASSEIO E DUAS RODAS - ÁREA RURAL - EXTREMA',p:'90.00'},
        {v:'262',t:'MOTORISTA DE VEÍCULOS DE PASSEIO E DUAS RODAS - ÁREA RURAL - JACI PARANÁ',p:'90.00'},
        {v:'263',t:'MOTORISTA DE VEÍCULOS DE PASSEIO E DUAS RODAS - ÁREA RURAL - JOANA D\'ARC',p:'90.00'},
        {v:'264',t:'MOTORISTA DE VEÍCULOS DE PASSEIO E DUAS RODAS - ÁREA RURAL - LINHA 28',p:'90.00'},
        {v:'265',t:'MOTORISTA DE VEÍCULOS DE PASSEIO E DUAS RODAS - ÁREA RURAL - NOVA CALIFÓRNIA',p:'90.00'},
        {v:'266',t:'MOTORISTA DE VEÍCULOS DE PASSEIO E DUAS RODAS - ÁREA RURAL - NOVA MUTUM',p:'90.00'},
        {v:'267',t:'MOTORISTA DE VEÍCULOS DE PASSEIO E DUAS RODAS - ÁREA RURAL - NOVO ENGENHO',p:'90.00'},
        {v:'268',t:'MOTORISTA DE VEÍCULOS DE PASSEIO E DUAS RODAS - ÁREA RURAL - RIO PARDO',p:'90.00'},
        {v:'269',t:'MOTORISTA DE VEÍCULOS DE PASSEIO E DUAS RODAS - ÁREA RURAL - SANTA RITA',p:'90.00'},
        {v:'270',t:'MOTORISTA DE VEÍCULOS DE PASSEIO E DUAS RODAS - ÁREA RURAL - SÃO CARLOS',p:'90.00'},
        {v:'271',t:'MOTORISTA DE VEÍCULOS DE PASSEIO E DUAS RODAS - ÁREA RURAL - UNIÃO BANDEIRANTES',p:'90.00'},
        {v:'272',t:'MOTORISTA DE VEÍCULOS DE PASSEIO E DUAS RODAS - ÁREA RURAL - VISTA ALEGRE',p:'90.00'},
        {v:'301',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - CS AREAL DA FLORESTA - ÁREA URBANA',p:'105.00'},
        {v:'302',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - CS MANOEL A. DE MATOS - ÁREA URBANA',p:'105.00'},
        {v:'303',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - CS MAURÍCIO BUSTANI - ÁREA URBANA',p:'105.00'},
        {v:'304',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - USF AGENOR DE CARVALHO - ÁREA URBANA',p:'105.00'},
        {v:'305',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - USF APONIÃ - ÁREA URBANA',p:'105.00'},
        {v:'306',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - USF CALADINHO - ÁREA URBANA',p:'105.00'},
        {v:'307',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - USF CASTANHEIRAS - ÁREA URBANA',p:'105.00'},
        {v:'308',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - USF ERNANDE C. COUTINHO (ÍNDIO) - ÁREA URBANA',p:'105.00'},
        {v:'309',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - USF HAMILTON RAULINO GONDIN - ÁREA URBANA',p:'105.00'},
        {v:'310',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - USF JOSÉ ADELINO DA SILVA - ÁREA URBANA',p:'105.00'},
        {v:'311',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - USF MARIANA - ÁREA URBANA',p:'105.00'},
        {v:'312',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - USF NOVA FLORESTA - ÁREA URBANA',p:'105.00'},
        {v:'313',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - USF OSVALDO PIANA - ÁREA URBANA',p:'105.00'},
        {v:'314',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - USF PEDACINHO DE CHÃO - ÁREA URBANA',p:'105.00'},
        {v:'315',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - USF RENATO MEDEIROS - ÁREA URBANA',p:'105.00'},
        {v:'316',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - USF RONALDO ARAGÃO - ÁREA URBANA',p:'105.00'},
        {v:'317',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - USF SANTO ANTÔNIO - ÁREA URBANA',p:'105.00'},
        {v:'318',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - USF SÃO SEBASTIÃO - ÁREA URBANA',p:'105.00'},
        {v:'319',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - USF SOCIALISTA - ÁREA URBANA',p:'105.00'},
        {v:'320',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - USF TRÊS MARIAS - ÁREA URBANA',p:'105.00'},
        {v:'321',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - USF VILA PRINCESA - ÁREA URBANA',p:'105.00'},
        {v:'322',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - ABUNÃ - ÁREA RURAL',p:'105.00'},
        {v:'323',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - ALIANÇA - ÁREA RURAL',p:'105.00'},
        {v:'324',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - CALAMA - ÁREA RURAL',p:'105.00'},
        {v:'325',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - CUJUBIM - ÁREA RURAL',p:'105.00'},
        {v:'326',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - EXTREMA - ÁREA RURAL',p:'105.00'},
        {v:'327',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - JACY PARANÁ - ÁREA RURAL',p:'105.00'},
        {v:'328',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - JOANA D’ARC - ÁREA RURAL',p:'105.00'},
        {v:'329',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - LINHA 28 - ÁREA RURAL',p:'105.00'},
        {v:'330',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - NAZARÉ - ÁREA RURAL',p:'105.00'},
        {v:'331',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - NOVA CALIFÓRNIA - ÁREA RURAL',p:'105.00'},
        {v:'332',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - NOVA MUTUM - ÁREA RURAL',p:'105.00'},
        {v:'333',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - NOVO ENGENHO - ÁREA RURAL',p:'105.00'},
        {v:'334',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - RIO DAS GARÇAS - ÁREA RURAL',p:'105.00'},
        {v:'335',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - RIO PARDO - ÁREA RURAL',p:'105.00'},
        {v:'336',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - SANTA RITA - ÁREA RURAL',p:'105.00'},
        {v:'337',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - SÃO CARLOS - ÁREA RURAL',p:'105.00'},
        {v:'338',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - UNIÃO BANDEIRANTES - ÁREA RURAL',p:'105.00'},
        {v:'339',t:'AGENTE COMUNITÁRIO DE SAÚDE - ACS - VISTA ALEGRE - ÁREA RURAL',p:'105.00'},
        {v:'340',t:'AGENTE DE COMBATE ÀS ENDEMIAS - ACE - ÁREA URBANA - PORTO VELHO',p:'105.00'},
        {v:'341',t:'AGENTE DE COMBATE ÀS ENDEMIAS - ACE - ÁREA RURAL - ABUNÃ',p:'105.00'},
        {v:'342',t:'AGENTE DE COMBATE ÀS ENDEMIAS - ACE - ÁREA RURAL - CALAMA',p:'105.00'},
        {v:'344',t:'AGENTE DE COMBATE ÀS ENDEMIAS - ACE - ÁREA RURAL -CUJUBIM GRANDE',p:'105.00'},
        {v:'345',t:'AGENTE DE COMBATE ÀS ENDEMIAS - ACE - ÁREA RURAL -EXTREMA',p:'105.00'},
        {v:'346',t:'AGENTE DE COMBATE ÀS ENDEMIAS - ACE - ÁREA RURAL -FORTALEZA DO ABUNÃ',p:'105.00'},
        {v:'347',t:'AGENTE DE COMBATE ÀS ENDEMIAS - ACE - ÁREA RURAL -JACI PARANÁ',p:'105.00'},
        {v:'348',t:'AGENTE DE COMBATE ÀS ENDEMIAS - ACE - ÁREA RURAL -JOANA D\'ARC',p:'105.00'},
        {v:'349',t:'AGENTE DE COMBATE ÀS ENDEMIAS - ACE - ÁREA RURAL -LAGO CUNIÃ',p:'105.00'},
        {v:'350',t:'AGENTE DE COMBATE ÀS ENDEMIAS - ACE - ÁREA RURAL -NAZARÉ',p:'105.00'},
        {v:'351',t:'AGENTE DE COMBATE ÀS ENDEMIAS - ACE - ÁREA RURAL -NOVA CALIFÓRNIA',p:'105.00'},
        {v:'352',t:'AGENTE DE COMBATE ÀS ENDEMIAS - ACE - ÁREA RURAL -RIO PARDO',p:'105.00'},
        {v:'353',t:'AGENTE DE COMBATE ÀS ENDEMIAS - ACE - ÁREA RURAL -SANTA RITA',p:'105.00'},
        {v:'354',t:'AGENTE DE COMBATE ÀS ENDEMIAS - ACE - ÁREA RURAL -SÃO CARLOS',p:'105.00'},
        {v:'355',t:'AGENTE DE COMBATE ÀS ENDEMIAS - ACE - ÁREA RURAL -UNIÃO BANDEIRANTES',p:'105.00'},
        {v:'356',t:'AGENTE DE COMBATE ÀS ENDEMIAS - ACE - ÁREA RURAL -VISTA ALEGRE',p:'105.00'},
        {v:'357',t:'ASSISTENTE ADMINISTRATIVO - ÁREA URBANA - PORTO VELHO',p:'105.00'},
        {v:'358',t:'ASSISTENTE ADMINISTRATIVO - ÁREA RURAL - ABUNÃ',p:'105.00'},
        {v:'359',t:'ASSISTENTE ADMINISTRATIVO - ÁREA RURAL - ALIANÇA',p:'105.00'},
        {v:'360',t:'ASSISTENTE ADMINISTRATIVO - ÁREA RURAL - CALAMA',p:'105.00'},
        {v:'361',t:'ASSISTENTE ADMINISTRATIVO - ÁREA RURAL - CUJUBIM',p:'105.00'},
        {v:'362',t:'ASSISTENTE ADMINISTRATIVO - ÁREA RURAL - EXTREMA',p:'105.00'},
        {v:'363',t:'ASSISTENTE ADMINISTRATIVO - ÁREA RURAL - JACI PARANÁ',p:'105.00'},
        {v:'364',t:'ASSISTENTE ADMINISTRATIVO - ÁREA RURAL - JOANA D\'ARC',p:'105.00'},
        {v:'365',t:'ASSISTENTE ADMINISTRATIVO - ÁREA RURAL - LINHA 28',p:'105.00'},
        {v:'366',t:'ASSISTENTE ADMINISTRATIVO - ÁREA RURAL - NAZARÉ',p:'105.00'},
        {v:'367',t:'ASSISTENTE ADMINISTRATIVO - ÁREA RURAL - NOVA CALIFÓRNIA',p:'105.00'},
        {v:'368',t:'ASSISTENTE ADMINISTRATIVO - ÁREA RURAL - NOVA MUTUM',p:'105.00'},
        {v:'369',t:'ASSISTENTE ADMINISTRATIVO - ÁREA RURAL - NOVO ENGENHO',p:'105.00'},
        {v:'370',t:'ASSISTENTE ADMINISTRATIVO - ÁREA RURAL - RIO DAS GARÇAS',p:'105.00'},
        {v:'371',t:'ASSISTENTE ADMINISTRATIVO - ÁREA RURAL - RIO PARDO',p:'105.00'},
        {v:'372',t:'ASSISTENTE ADMINISTRATIVO - ÁREA RURAL - SANTA RITA',p:'105.00'},
        {v:'373',t:'ASSISTENTE ADMINISTRATIVO - ÁREA RURAL - SÃO CARLOS',p:'105.00'},
        {v:'374',t:'ASSISTENTE ADMINISTRATIVO - ÁREA RURAL - UNIÃO BANDEIRANTES',p:'105.00'},
        {v:'375',t:'ASSISTENTE ADMINISTRATIVO - ÁREA RURAL - VISTA ALEGRE',p:'105.00'},
        {v:'376',t:'CUIDADOR SOCIAL- ÁREA URBANA - PORTO VELHO',p:'105.00'},
        {v:'401',t:'TÉCNICO EM ENFERMAGEM - ÁREA URBANA - PORTO VELHO',p:'105.00'},
        {v:'402',t:'TÉCNICO EM ENFERMAGEM - ÁREA RURAL - ABUNÃ',p:'105.00'},
        {v:'403',t:'TÉCNICO EM ENFERMAGEM - ÁREA RURAL - ALIANÇA',p:'105.00'},
        {v:'404',t:'TÉCNICO EM ENFERMAGEM - ÁREA RURAL - CALAMA',p:'105.00'},
        {v:'405',t:'TÉCNICO EM ENFERMAGEM - ÁREA RURAL - CUJUBIM',p:'105.00'},
        {v:'406',t:'TÉCNICO EM ENFERMAGEM - ÁREA RURAL - EXTREMA',p:'105.00'},
        {v:'407',t:'TÉCNICO EM ENFERMAGEM - ÁREA RURAL - JACI PARANÁ',p:'105.00'},
        {v:'408',t:'TÉCNICO EM ENFERMAGEM - ÁREA RURAL - JOANA D\'ARC',p:'105.00'},
        {v:'409',t:'TÉCNICO EM ENFERMAGEM - ÁREA RURAL - LINHA 28',p:'105.00'},
        {v:'410',t:'TÉCNICO EM ENFERMAGEM - ÁREA RURAL - NAZARÉ',p:'105.00'},
        {v:'411',t:'TÉCNICO EM ENFERMAGEM - ÁREA RURAL - NOVA CALIFÓRNIA',p:'105.00'},
        {v:'412',t:'TÉCNICO EM ENFERMAGEM - ÁREA RURAL - NOVA MUTUM',p:'105.00'},
        {v:'413',t:'TÉCNICO EM ENFERMAGEM - ÁREA RURAL - NOVO ENGENHO',p:'105.00'},
        {v:'414',t:'TÉCNICO EM ENFERMAGEM - ÁREA RURAL - RIO DAS GARÇAS',p:'105.00'},
        {v:'415',t:'TÉCNICO EM ENFERMAGEM - ÁREA RURAL - RIO PARDO',p:'105.00'},
        {v:'416',t:'TÉCNICO EM ENFERMAGEM - ÁREA RURAL - SANTA RITA',p:'105.00'},
        {v:'417',t:'TÉCNICO EM ENFERMAGEM - ÁREA RURAL - SÃO CARLOS',p:'105.00'},
        {v:'418',t:'TÉCNICO EM ENFERMAGEM - ÁREA RURAL - UNIÃO BANDEIRANTES',p:'105.00'},
        {v:'419',t:'TÉCNICO EM ENFERMAGEM - ÁREA RURAL - VISTA ALEGRE',p:'105.00'},
        {v:'420',t:'TÉCNICO EM HIGIENE DENTAL - ÁREA URBANA - PORTO VELHO',p:'105.00'},
        {v:'421',t:'TÉCNICO EM HIGIENE DENTAL - ÁREA RURAL - ABUNÃ',p:'105.00'},
        {v:'422',t:'TÉCNICO EM HIGIENE DENTAL - ÁREA RURAL - ALIANÇA',p:'105.00'},
        {v:'423',t:'TÉCNICO EM HIGIENE DENTAL - ÁREA RURAL - CALAMA',p:'105.00'},
        {v:'424',t:'TÉCNICO EM HIGIENE DENTAL - ÁREA RURAL - CUJUBIM',p:'105.00'},
        {v:'425',t:'TÉCNICO EM HIGIENE DENTAL - ÁREA RURAL - EXTREMA',p:'105.00'},
        {v:'426',t:'TÉCNICO EM HIGIENE DENTAL - ÁREA RURAL - JACI PARANÁ',p:'105.00'},
        {v:'427',t:'TÉCNICO EM HIGIENE DENTAL - ÁREA RURAL - JOANA D\'ARC',p:'105.00'},
        {v:'428',t:'TÉCNICO EM HIGIENE DENTAL - ÁREA RURAL - LINHA 28',p:'105.00'},
        {v:'429',t:'TÉCNICO EM HIGIENE DENTAL - ÁREA RURAL - NAZARÉ',p:'105.00'},
        {v:'430',t:'TÉCNICO EM HIGIENE DENTAL - ÁREA RURAL - NOVA CALIFÓRNIA',p:'105.00'},
        {v:'431',t:'TÉCNICO EM HIGIENE DENTAL - ÁREA RURAL - NOVA MUTUM',p:'105.00'},
        {v:'432',t:'TÉCNICO EM HIGIENE DENTAL - ÁREA RURAL - NOVO ENGENHO',p:'105.00'},
        {v:'433',t:'TÉCNICO EM HIGIENE DENTAL - ÁREA RURAL - RIO DAS GARÇAS',p:'105.00'},
        {v:'434',t:'TÉCNICO EM HIGIENE DENTAL - ÁREA RURAL - RIO PARDO',p:'105.00'},
        {v:'435',t:'TÉCNICO EM HIGIENE DENTAL - ÁREA RURAL - SANTA RITA',p:'105.00'},
        {v:'436',t:'TÉCNICO EM HIGIENE DENTAL - ÁREA RURAL - SÃO CARLOS',p:'105.00'},
        {v:'437',t:'TÉCNICO EM HIGIENE DENTAL - ÁREA RURAL - UNIÃO BANDEIRANTES',p:'105.00'},
        {v:'438',t:'TÉCNICO EM HIGIENE DENTAL - ÁREA RURAL - VISTA ALEGRE',p:'105.00'},
        {v:'439',t:'TÉCNICO EM LABORATÓRIO - ÁREA URBANA - PORTO VELHO',p:'105.00'},
        {v:'440',t:'TÉCNICO EM LABORATÓRIO - ÁREA RURAL - ABUNÃ',p:'105.00'},
        {v:'441',t:'TÉCNICO EM LABORATÓRIO - ÁREA RURAL - ALIANÇA',p:'105.00'},
        {v:'442',t:'TÉCNICO EM LABORATÓRIO - ÁREA RURAL - CALAMA',p:'105.00'},
        {v:'443',t:'TÉCNICO EM LABORATÓRIO - ÁREA RURAL - CUJUBIM',p:'105.00'},
        {v:'444',t:'TÉCNICO EM LABORATÓRIO - ÁREA RURAL - EXTREMA',p:'105.00'},
        {v:'445',t:'TÉCNICO EM LABORATÓRIO - ÁREA RURAL - JACI PARANÁ',p:'105.00'},
        {v:'446',t:'TÉCNICO EM LABORATÓRIO - ÁREA RURAL - JOANA D\'ARC',p:'105.00'},
        {v:'447',t:'TÉCNICO EM LABORATÓRIO - ÁREA RURAL - LINHA 28',p:'105.00'},
        {v:'448',t:'TÉCNICO EM LABORATÓRIO - ÁREA RURAL - NAZARÉ',p:'105.00'},
        {v:'449',t:'TÉCNICO EM LABORATÓRIO - ÁREA RURAL - NOVA CALIFÓRNIA',p:'105.00'},
        {v:'450',t:'TÉCNICO EM LABORATÓRIO - ÁREA RURAL - NOVA MUTUM',p:'105.00'},
        {v:'451',t:'TÉCNICO EM LABORATÓRIO - ÁREA RURAL - NOVO ENGENHO',p:'105.00'},
        {v:'452',t:'TÉCNICO EM LABORATÓRIO - ÁREA RURAL - RIO DAS GARÇAS',p:'105.00'},
        {v:'453',t:'TÉCNICO EM LABORATÓRIO - ÁREA RURAL - RIO PARDO',p:'105.00'},
        {v:'454',t:'TÉCNICO EM LABORATÓRIO - ÁREA RURAL - SANTA RITA',p:'105.00'},
        {v:'455',t:'TÉCNICO EM LABORATÓRIO - ÁREA RURAL - SÃO CARLOS',p:'105.00'},
        {v:'456',t:'TÉCNICO EM LABORATÓRIO - ÁREA RURAL - UNIÃO BANDEIRANTES',p:'105.00'},
        {v:'457',t:'TÉCNICO EM LABORATÓRIO - ÁREA RURAL - VISTA ALEGRE',p:'105.00'},
        {v:'458',t:'TÉCNICO EM RADIOLOGIA - ÁREA URBANA - PORTO VELHO',p:'105.00'},
        {v:'459',t:'TÉCNICO EM RADIOLOGIA - ÁREA RURAL - JACI PARANÁ',p:'105.00'},
        {v:'460',t:'TÉCNICO EM RADIOLOGIA - ÁREA RURAL - UNIÃO BANDEIRANTES',p:'105.00'},
        {v:'601',t:'ADMINISTRADOR HOSPITALAR - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'602',t:'ENFERMEIRO DO TRABALHO - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'603',t:'MÉDICO CARDIOLOGISTA - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'606',t:'MÉDICO DERMATOLOGISTA - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'607',t:'MÉDICO DO TRABALHO - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'608',t:'MÉDICO ENDOCRINOLOGISTA - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'609',t:'MÉDICO ENDOCRINOPEDIATRA - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'610',t:'MÉDICO GERIATRA - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'611',t:'MÉDICO GINECOLOGISTA/OBSTETRA - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'612',t:'MÉDICO INFECTOLOGISTA - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'613',t:'MÉDICO MASTOLOGISTA - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'614',t:'MÉDICO NEFROLOGISTA - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'615',t:'MÉDICO NEUROLOGISTA - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'616',t:'MÉDICO OFTALMOLOGISTA - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'617',t:'MÉDICO ONCOLOGISTA - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'618',t:'MÉDICO ORTOPEDISTA - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'619',t:'MÉDICO OTORRINOLARINGOLOGISTA - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'620',t:'MÉDICO PEDIATRA - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'621',t:'MÉDICO PNEUMOLOGISTA - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'622',t:'MÉDICO PSIQUIATRA - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'623',t:'MÉDICO RADIOLOGISTA - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'624',t:'MÉDICO UROLOGISTA - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'701',t:'ASSISTENTE SOCIAL - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'702',t:'BIÓLOGO - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'703',t:'BIOMÉDICO - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'704',t:'BIOMÉDICO - ÁREA RURAL - ABUNÃ',p:'140.00'},
        {v:'705',t:'BIOMÉDICO - ÁREA RURAL - ALIANÇA',p:'140.00'},
        {v:'706',t:'BIOMÉDICO - ÁREA RURAL - CALAMA',p:'140.00'},
        {v:'707',t:'BIOMÉDICO - ÁREA RURAL - CUJUBIM',p:'140.00'},
        {v:'708',t:'BIOMÉDICO - ÁREA RURAL - EXTREMA',p:'140.00'},
        {v:'709',t:'BIOMÉDICO - ÁREA RURAL - JACI PARANÁ',p:'140.00'},
        {v:'710',t:'BIOMÉDICO - ÁREA RURAL - JOANA D\'ARC',p:'140.00'},
        {v:'711',t:'BIOMÉDICO - ÁREA RURAL - LINHA 28',p:'140.00'},
        {v:'712',t:'BIOMÉDICO - ÁREA RURAL - NAZARÉ',p:'140.00'},
        {v:'713',t:'BIOMÉDICO - ÁREA RURAL - NOVA CALIFÓRNIA',p:'140.00'},
        {v:'714',t:'BIOMÉDICO - ÁREA RURAL - NOVA MUTUM',p:'140.00'},
        {v:'715',t:'BIOMÉDICO - ÁREA RURAL - NOVO ENGENHO',p:'140.00'},
        {v:'716',t:'BIOMÉDICO - ÁREA RURAL - RIO DAS GARÇAS',p:'140.00'},
        {v:'717',t:'BIOMÉDICO - ÁREA RURAL - RIO PARDO',p:'140.00'},
        {v:'718',t:'BIOMÉDICO - ÁREA RURAL - SANTA RITA',p:'140.00'},
        {v:'719',t:'BIOMÉDICO - ÁREA RURAL - SÃO CARLOS',p:'140.00'},
        {v:'720',t:'BIOMÉDICO - ÁREA RURAL - UNIÃO BANDEIRANTES',p:'140.00'},
        {v:'721',t:'BIOMÉDICO - ÁREA RURAL - VISTA ALEGRE',p:'140.00'},
        {v:'722',t:'BIOQUÍMICO - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'723',t:'BIOQUÍMICO - ÁREA RURAL - JACI PARANÁ',p:'140.00'},
        {v:'724',t:'BIOQUÍMICO - ÁREA RURAL - UNIÃO BANDEIRANTES',p:'140.00'},
        {v:'725',t:'ENFERMEIRO - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'726',t:'ENFERMEIRO - ÁREA RURAL - ABUNÃ',p:'140.00'},
        {v:'727',t:'ENFERMEIRO - ÁREA RURAL - ALIANÇA',p:'140.00'},
        {v:'728',t:'ENFERMEIRO - ÁREA RURAL - CALAMA',p:'140.00'},
        {v:'729',t:'ENFERMEIRO - ÁREA RURAL - CUJUBIM',p:'140.00'},
        {v:'730',t:'ENFERMEIRO - ÁREA RURAL - EXTREMA',p:'140.00'},
        {v:'731',t:'ENFERMEIRO - ÁREA RURAL - JACI PARANÁ',p:'140.00'},
        {v:'732',t:'ENFERMEIRO - ÁREA RURAL - JOANA D\'ARC',p:'140.00'},
        {v:'733',t:'ENFERMEIRO - ÁREA RURAL - LINHA 28',p:'140.00'},
        {v:'734',t:'ENFERMEIRO - ÁREA RURAL - NAZARÉ',p:'140.00'},
        {v:'735',t:'ENFERMEIRO - ÁREA RURAL - NOVA CALIFÓRNIA',p:'140.00'},
        {v:'736',t:'ENFERMEIRO - ÁREA RURAL - NOVA MUTUM',p:'140.00'},
        {v:'737',t:'ENFERMEIRO - ÁREA RURAL - NOVO ENGENHO',p:'140.00'},
        {v:'738',t:'ENFERMEIRO - ÁREA RURAL - RIO DAS GARÇAS',p:'140.00'},
        {v:'739',t:'ENFERMEIRO - ÁREA RURAL - RIO PARDO',p:'140.00'},
        {v:'740',t:'ENFERMEIRO - ÁREA RURAL - SANTA RITA',p:'140.00'},
        {v:'741',t:'ENFERMEIRO - ÁREA RURAL - SÃO CARLOS',p:'140.00'},
        {v:'742',t:'ENFERMEIRO - ÁREA RURAL - UNIÃO BANDEIRANTES',p:'140.00'},
        {v:'743',t:'ENFERMEIRO - ÁREA RURAL - VISTA ALEGRE',p:'140.00'},
        {v:'744',t:'FARMACÊUTICO - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'745',t:'FARMACÊUTICO - ÁREA RURAL - ABUNÃ',p:'140.00'},
        {v:'746',t:'FARMACÊUTICO - ÁREA RURAL - CALAMA',p:'140.00'},
        {v:'747',t:'FARMACÊUTICO - ÁREA RURAL - EXTREMA',p:'140.00'},
        {v:'748',t:'FARMACÊUTICO - ÁREA RURAL - JACI PARANÁ',p:'140.00'},
        {v:'749',t:'FARMACÊUTICO - ÁREA RURAL - NAZARÉ',p:'140.00'},
        {v:'750',t:'FARMACÊUTICO - ÁREA RURAL - NOVA CALIFÓRNIA',p:'140.00'},
        {v:'751',t:'FARMACÊUTICO - ÁREA RURAL - NOVA MUTUM',p:'140.00'},
        {v:'752',t:'FARMACÊUTICO - ÁREA RURAL - UNIÃO BANDEIRANTES',p:'140.00'},
        {v:'753',t:'FARMACÊUTICO - ÁREA RURAL - VISTA ALEGRE',p:'140.00'},
        {v:'754',t:'FISIOTERAPEUTA - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'755',t:'FONOAUDIÓLOGO - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'756',t:'MÉDICO 20 HORAS - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'757',t:'MÉDICO 20 HORAS - ÁREA RURAL - JACI PARANÁ',p:'140.00'},
        {v:'758',t:'MÉDICO 20 HORAS - ÁREA RURAL - NOVA CALIFÓRNIA',p:'140.00'},
        {v:'759',t:'MÉDICO 20 HORAS - ÁREA RURAL - UNIÃO BANDEIRANTES',p:'140.00'},
        {v:'760',t:'MÉDICO 20 HORAS - ÁREA RURAL - VISTA ALEGRE DO ABUNÃ',p:'140.00'},
        {v:'761',t:'MÉDICO 40 HORAS - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'762',t:'MÉDICO 40 HORAS - ÁREA RURAL - ABUNÃ',p:'140.00'},
        {v:'763',t:'MÉDICO 40 HORAS - ÁREA RURAL - ALIANÇA',p:'140.00'},
        {v:'764',t:'MÉDICO 40 HORAS - ÁREA RURAL - CUJUBIM',p:'140.00'},
        {v:'765',t:'MÉDICO 40 HORAS - ÁREA RURAL - EXTREMA',p:'140.00'},
        {v:'766',t:'MÉDICO 40 HORAS - ÁREA RURAL - JACI PARANÁ',p:'140.00'},
        {v:'767',t:'MÉDICO 40 HORAS - ÁREA RURAL - LINHA 28',p:'140.00'},
        {v:'768',t:'MÉDICO 40 HORAS - ÁREA RURAL - NAZARÉ',p:'140.00'},
        {v:'769',t:'MÉDICO 40 HORAS - ÁREA RURAL - NOVA CALIFÓRNIA',p:'140.00'},
        {v:'770',t:'MÉDICO 40 HORAS - ÁREA RURAL - NOVA MUTUM',p:'140.00'},
        {v:'771',t:'MÉDICO 40 HORAS - ÁREA RURAL - NOVO ENGENHO',p:'140.00'},
        {v:'772',t:'MÉDICO 40 HORAS - ÁREA RURAL - RIO DAS GARÇAS',p:'140.00'},
        {v:'773',t:'MÉDICO 40 HORAS - ÁREA RURAL - RIO PARDO',p:'140.00'},
        {v:'774',t:'MÉDICO 40 HORAS - ÁREA RURAL - SANTA RITA',p:'140.00'},
        {v:'775',t:'MÉDICO 40 HORAS - ÁREA RURAL - SÃO CARLOS',p:'140.00'},
        {v:'776',t:'MÉDICO 40 HORAS - ÁREA RURAL - UNIÃO BANDEIRANTES',p:'140.00'},
        {v:'777',t:'MÉDICO 40 HORAS - ÁREA RURAL - VISTA ALEGRE',p:'140.00'},
        {v:'778',t:'MÉDICO VETERINÁRIO - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'779',t:'NUTRICIONISTA - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'780',t:'ODONTÓLOGO - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'781',t:'ODONTÓLOGO - ÁREA RURAL - ABUNÃ',p:'140.00'},
        {v:'782',t:'ODONTÓLOGO - ÁREA RURAL - ALIANÇA',p:'140.00'},
        {v:'783',t:'ODONTÓLOGO - ÁREA RURAL - CALAMA',p:'140.00'},
        {v:'784',t:'ODONTÓLOGO - ÁREA RURAL - CUJUBIM',p:'140.00'},
        {v:'785',t:'ODONTÓLOGO - ÁREA RURAL - EXTREMA',p:'140.00'},
        {v:'786',t:'ODONTÓLOGO - ÁREA RURAL - JACI PARANÁ',p:'140.00'},
        {v:'787',t:'ODONTÓLOGO - ÁREA RURAL - JOANA D\'ARC',p:'140.00'},
        {v:'788',t:'ODONTÓLOGO - ÁREA RURAL - LINHA 28',p:'140.00'},
        {v:'789',t:'ODONTÓLOGO - ÁREA RURAL - NAZARÉ',p:'140.00'},
        {v:'790',t:'ODONTÓLOGO - ÁREA RURAL - NOVA CALIFÓRNIA',p:'140.00'},
        {v:'791',t:'ODONTÓLOGO - ÁREA RURAL - NOVA MUTUM',p:'140.00'},
        {v:'792',t:'ODONTÓLOGO - ÁREA RURAL - NOVO ENGENHO',p:'140.00'},
        {v:'793',t:'ODONTÓLOGO - ÁREA RURAL - RIO DAS GARÇAS',p:'140.00'},
        {v:'794',t:'ODONTÓLOGO - ÁREA RURAL - RIO PARDO',p:'140.00'},
        {v:'795',t:'ODONTÓLOGO - ÁREA RURAL - SANTA RITA',p:'140.00'},
        {v:'796',t:'ODONTÓLOGO - ÁREA RURAL - SÃO CARLOS',p:'140.00'},
        {v:'797',t:'ODONTÓLOGO - ÁREA RURAL - UNIÃO BANDEIRANTES',p:'140.00'},
        {v:'798',t:'ODONTÓLOGO - ÁREA RURAL - VISTA ALEGRE',p:'140.00'},
        {v:'799',t:'PSICÓLOGO - ÁREA URBANA - PORTO VELHO',p:'140.00'},
        {v:'800',t:'TERAPEUTA OCUPACIONAL - ÁREA URBANA - PORTO VELHO',p:'140.00'}
      ],
      pagina: '/termos-concurso.html'
    }
  };
  var ALIAS = {
    '24': 'edital_24_educacao', 'educacao': 'edital_24_educacao', 'edital24': 'edital_24_educacao',
    '25': 'edital_25_saude', 'saude': 'edital_25_saude', 'edital25': 'edital_25_saude',
    portovelho: 'edital_24_educacao', portovelho_concurso: 'edital_24_educacao', portovelho_seletivo: 'edital_25_saude',
    curitiba: 'edital_24_educacao', curitiba_concurso: 'edital_24_educacao', curitiba_seletivo: 'edital_25_saude',
    concurso: 'edital_24_educacao', seletivo: 'edital_25_saude', pss: 'edital_25_saude'
  };
  function norm(k){ k = (ALIAS[k] || k); return C[k] ? k : ''; }

  var DEFAULT_KEY = 'edital_24_educacao';
  var key = DEFAULT_KEY;
  try {
    var q = norm(new URLSearchParams(location.search).get('c') || '');
    if (q) { key = q; localStorage.setItem('concurso_sel', q); }
    else { var s = norm(localStorage.getItem('concurso_sel') || ''); if (s) { key = s; } }
  } catch (e) {}
  var cur = C[key];
  window.SEAD_CONCURSO = {key: key, cfg: cur, catalogo: C};

  function fmtPreco(p){ return 'R$ ' + (p || '0.00').replace('.', ','); }

  function optHtml(list){
    return '<option value="">Selecione</option>' + list.map(function(c){
      return '<option value="' + c.v + '" data-price="' + c.p + '" data-title="' + c.t.replace(/"/g, '&quot;') + '">' +
             c.v + '  -  ' + c.t + '</option>';
    }).join('');
  }

  function applyCurTexts(){
    document.querySelectorAll('[data-c]').forEach(function(el){
      var k = el.getAttribute('data-c');
      if (cur[k] != null && el.textContent !== cur[k]) el.textContent = cur[k];
    });
    document.querySelectorAll('[data-c-src]').forEach(function(el){
      var k = el.getAttribute('data-c-src');
      if (cur[k] != null && el.getAttribute('src') !== cur[k]) el.setAttribute('src', cur[k]);
    });
  }

  function renderDetalhesVaga(){
    var vaga = document.getElementById('VAGA');
    var det = document.getElementById('VAGA_DETALHES');
    if (!vaga || !det) return;
    var opt = vaga.options[vaga.selectedIndex];
    if (!opt || !opt.value) { det.innerHTML = ''; det.style.display = 'none'; return; }
    var codigo = opt.value;
    var titulo = opt.getAttribute('data-title') || '';
    var preco = opt.getAttribute('data-price') || '0.00';
    det.style.display = 'block';
    det.innerHTML =
      '<div class="vaga-det-row"><strong>Cargo:</strong> ' + codigo + ' - ' + titulo + '</div>' +
      '<div class="vaga-det-row"><strong>Período de Inscrição:</strong> ' + cur.periodo + '</div>' +
      '<div class="vaga-det-row" style="margin-top:8px"><strong>Data da Prova:</strong> ' + cur.dataProva + '</div>' +
      '<div class="vaga-det-row"><strong>Valor da Inscrição:</strong> ' + fmtPreco(preco) + '</div>';
  }
  window.SEAD_CONCURSO.renderDetalhesVaga = renderDetalhesVaga;

  function ensureDetalhesBox(vaga){
    if (document.getElementById('VAGA_DETALHES')) return;
    var host = vaga.closest('.campo, .form-group, .form-row, p, .fgv-field') || vaga.parentNode;
    var box = document.createElement('div');
    box.id = 'VAGA_DETALHES';
    box.className = 'vaga-detalhes';
    box.setAttribute('data-testid', 'vaga-detalhes');
    box.style.cssText = 'display:none;margin-top:10px;padding:12px 14px;border:1px solid #e3e3e3;border-radius:6px;background:#fafafa;font-size:14px;line-height:1.55;color:#1f2937';
    host.parentNode.insertBefore(box, host.nextSibling);
  }

  function switchCertame(newKey){
    newKey = norm(newKey);
    if (!newKey) return;
    key = newKey;
    cur = C[key];
    window.SEAD_CONCURSO.key = key;
    window.SEAD_CONCURSO.cfg = cur;
    try { localStorage.setItem('concurso_sel', key); } catch (e) {}
    applyCurTexts();
    var vaga = document.getElementById('VAGA');
    if (vaga) {
      vaga.innerHTML = optHtml(cur.cargos);
      vaga.value = '';
      vaga.dispatchEvent(new Event('change', {bubbles: true}));
      renderDetalhesVaga();
    }
  }
  window.SEAD_CONCURSO.switchCertame = switchCertame;

  function fill(){
    applyCurTexts();
    var vaga = document.getElementById('VAGA');
    if (vaga && !vaga.dataset.cfg) {
      vaga.dataset.cfg = key;
      vaga.innerHTML = optHtml(cur.cargos);

      if (!document.getElementById('CERTAME')) {
        var host = vaga.closest('.campo, .form-group, .form-row, p, .fgv-field') || vaga.parentNode;
        var wrap = document.createElement('div');
        wrap.className = 'campo-certame fgv-field';
        wrap.style.margin = '0 0 12px';
        var editais = [
          {k:'edital_24_educacao', label:'Edital nº 24/2026 - Educação'},
          {k:'edital_25_saude', label:'Edital nº 25/2026 - Saúde'}
        ];
        var opts = '<option value="">SELECIONE ALGUM CONCURSO...</option>' +
          editais.map(function(e){
            var sel = (e.k === key) ? ' selected' : '';
            return '<option value="' + e.k + '"' + sel + '>' + e.label + '</option>';
          }).join('');
        wrap.innerHTML = '<label for="CERTAME" style="display:block;font-weight:600;margin-bottom:4px"><span class="error">*</span> Certame</label>' +
          '<select id="CERTAME" class="select" data-testid="select-certame" style="width:100%">' + opts + '</select>';
        host.parentNode.insertBefore(wrap, host);
        document.getElementById('CERTAME').addEventListener('change', function(){
          switchCertame(this.value);
        });
      }

      ensureDetalhesBox(vaga);
      vaga.addEventListener('change', renderDetalhesVaga);
    }
    var mp = document.getElementById('MUNICIPIO_PROVA');
    if (mp && !mp.dataset.cfg) {
      mp.dataset.cfg = key;
      var prev = mp.value;
      mp.innerHTML = '<option value="">Selecione</option>' + CIDADES.map(function(c){ return '<option value="' + c[0] + '" data-uf="RO">' + c[1] + '</option>'; }).join('');
      if (CIDADES.some(function(c){ return c[0] === prev; })) mp.value = prev;
    }
    var uf = document.getElementById('UF_PROVA'); if (uf) uf.value = 'RO';
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fill); else fill();
  try {
    var mo = new MutationObserver(function(){
      var v = document.getElementById('VAGA');
      if (v) { fill(); if (v.dataset.cfg) mo.disconnect(); }
    });
    mo.observe(document.documentElement, {childList: true, subtree: true});
  } catch (e) {}
  window.addEventListener('load', function(){
    var v = document.getElementById('VAGA'); if (!v) return;
    var sv = ''; try { sv = (JSON.parse(localStorage.getItem('inscricao_dados') || '{}').VAGA) || ''; } catch (e) {}
    v.value = sv; v.dispatchEvent(new Event('change', {bubbles: true}));
    if (v.selectedIndex < 0) v.selectedIndex = 0;
    renderDetalhesVaga();
  });
})();
