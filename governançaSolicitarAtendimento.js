function goToAndFinalPage(value){
  finalPage = value;
  goToPage = value;
}

for(var i=0; i<users.length; i++){
  if(currentUser == users[i].id){
    data.txtNOMECOMPLETO = `${users[i].firstName} ${users[i].lastName}`
    data.txtEMAIL = users[i].email
    break;
  }    
}

// Code to run only once as the form loads
// Função genérica para ocultar campos
function ocultarCampos(campos) {
  campos.forEach(campo => schema[campo].hide = true);
}

// NACIONAL- ANÁLISE E ELABORAÇÃO DE CONTRATO
function configurarFormularioAnaliseElaboracao() {
  // Campos a ocultar inicialmente (ANÁLISE E ELABORAÇÃO DE CONTRATO)
  const camposOcultar1 = [
    "sltFOI_APROVADO_NACIONAL_DEAL",
    "txtVIRGENCIA_QUAL_CONTRATO_ANALISE_NACIONAL",
    "txtQUAL_VALOR_CONTRATACAO_NACIONAL",
    "txaQUAL_ESCOPO_CONTRATADO_NACIONAL",
    "dteGOVERNANCA_NACIONAL_ANALISE_INFORM_ASSINATURA",
  ];
  
  ocultarCampos(camposOcultar1);

  // Lógica para o ANÁLISE E ELABORAÇÃO DE CONTRATO
  if (data.sltGOVERNANCA_ANALISE_INFORM_TIPO_CONTRATO === "Aditivo") {
    schema.dteGOVERNANCA_NACIONAL_ANALISE_INFORM_ASSINATURA.hide = false;
    schema.sltGOVERNANCA_CONTRATO_DESCONTO_REAJUSTE_INFORME_ANALISE.hide = false;
    schema.txtGOVERNANCA_CONTRATO_ADITIVO_LICITACAO_INFORME.required = true;
  }
  if (data.sltGOVERNANCA_ANALISE_INFORM_TIPO_CONTRATO === "Contrato") {
    schema.sltFOI_APROVADO_NACIONAL_DEAL.hide = false;
    schema.txtVIRGENCIA_QUAL_CONTRATO_ANALISE_NACIONAL.hide = false;
    schema.txtQUAL_VALOR_CONTRATACAO_NACIONAL.hide = false;
    schema.txaQUAL_ESCOPO_CONTRATADO_NACIONAL.hide = false;
    schema.txtGOVERNANCA_CONTRATO_ADITIVO_LICITACAO_INFORME.required = false;
  }
  if (data.sltGOVERNANCA_CONTRATO_DESCONTO_REAJUSTE_INFORME_ANALISE === "Sim") {
    schema.txtINFORME_VALOR_DESCONTO_ANALISE_NACIONAL.hide = false;
  } else if (data.sltGOVERNANCA_CONTRATO_DESCONTO_REAJUSTE_INFORME_ANALISE === "Não") {
    schema.txtINFORME_VALOR_DESCONTO_ANALISE_NACIONAL.hide = true;
  }
}

// NACIONAL: ANÁLISE E ELABORAÇÃO DE CONTRATO DE FORNECEDOR
function configurarFormularioFornecedor() {
  // Campos a ocultar inicialmente (ANÁLISE E ELABORAÇÃO DE CONTRATO DE FORNECEDOR)
  const camposOcultar2 = [
    "sltDUE_DILIGENCE_RENOVACAO_NACIONAL",
    "txtRAZAO_DUE_CONTRATO_SOCIAL_NACIONAL",
    "txtE_MAIL_RESPONSAVEL_JURIDICA_NACIONAL",
    "txaENDERECO_COMPLETO_PESSOA_JURIDICA_NACIONAL",
    "sltFUNCIONARIO_EMPRESA_QINTESS_NACIONAL",
    "txaDETALHEA_DUE_DILIGENCE_NACIONAL",
    "txtANO_DILIGENCE_DUE_NACIONAL",
    "sltQINTESS_VALORES_NACIONAL_CONTRATOS",
    "txtINFORME_VALOR_QINTESS_NACIONAL_CONTRATOS",
  ];
  
  ocultarCampos(camposOcultar2);

  // Lógica para o ANÁLISE E ELABORAÇÃO DE CONTRATO DE FORNECEDOR
  if (data.sltINFORME_TIPO_CONTRATO_NACIONAL_PARCEIRO === "Aditivo") {
    schema.txtINFORME_RENOVACAO_ADITIVO_NACIONAL_CONTRATOS.required = true;
  } else if (["ConfissaoDivida", "Contrato", "Intermediacao", "Locacao", "Parceria", "Proposta"].includes(data.sltINFORME_TIPO_CONTRATO_NACIONAL_PARCEIRO)) {
    schema.txtINFORME_RENOVACAO_ADITIVO_NACIONAL_CONTRATOS.required = false;
  }

  if (data.sltINFORME_DILIGENCE_DUE_NACIONAL_CONTRATOS === "Sim") {
    const camposMostrar = [
      "sltDUE_DILIGENCE_RENOVACAO_NACIONAL",
      "txtRAZAO_DUE_CONTRATO_SOCIAL_NACIONAL",
      "txtE_MAIL_RESPONSAVEL_JURIDICA_NACIONAL",
      "txaENDERECO_COMPLETO_PESSOA_JURIDICA_NACIONAL",
      "sltFUNCIONARIO_EMPRESA_QINTESS_NACIONAL",
      "txaDETALHEA_DUE_DILIGENCE_NACIONAL",
    ];
    camposMostrar.forEach(campo => schema[campo].hide = false);
  }

  if (data.sltDUE_DILIGENCE_RENOVACAO_NACIONAL === "Renovacao") {
    schema.txtANO_DILIGENCE_DUE_NACIONAL.hide = false;
  } else if (data.sltDUE_DILIGENCE_RENOVACAO_NACIONAL === "Nova") {
    schema.txtANO_DILIGENCE_DUE_NACIONAL.hide = true;
  }

  if (data.sltPARCERIA_COMERCIAL_CONTRATOS_NACIONAL === "Sim") {
    schema.sltQINTESS_VALORES_NACIONAL_CONTRATOS.hide = false;
  } else if (data.sltPARCERIA_COMERCIAL_CONTRATOS_NACIONAL === "Não") {
    schema.sltQINTESS_VALORES_NACIONAL_CONTRATOS.hide = true;
  }

  if (data.sltQINTESS_VALORES_NACIONAL_CONTRATOS === "Sim") {
    schema.txtINFORME_VALOR_QINTESS_NACIONAL_CONTRATOS.hide = false;
  } else if (data.sltQINTESS_VALORES_NACIONAL_CONTRATOS === "Não") {
    schema.txtINFORME_VALOR_QINTESS_NACIONAL_CONTRATOS.hide = true;
  }
}
// NACIONAL - ANÁLISE E ELABORAÇÃO DE CONTRATO DE PESSOA JURÍDICA
function configurarFormularioPessoaJuridica() {
  if(data.sltINFORME_TIPO_PESSOA_JURIDICA_NACIONAL === "Contrato"){
    schema.txtINFORME_NACIONAL_CONTRATO_GERENCIA_JURIDICO.hide = false;
    schema.txtVIRGENCIA_CONTRATO_PRETENDIDA_NACIONAL_JURIDICO.hide = false;
    schema.txtINFORMEVALOR_CONTRATO_NACIONAL_CONTRATOS.hide = false;
  }
  else if(data.sltINFORME_TIPO_PESSOA_JURIDICA_NACIONAL === "Aditivo"){
    schema.txtINFORME_NACIONAL_CONTRATO_GERENCIA_JURIDICO.hide = true;
    schema.txtVIRGENCIA_CONTRATO_PRETENDIDA_NACIONAL_JURIDICO.hide = true;
    schema.txtINFORMEVALOR_CONTRATO_NACIONAL_CONTRATOS.hide = true;
  }

  if(data.sltINFORME_TIPO_PESSOA_JURIDICA_NACIONAL === "Aditivo"){
    schema.dteDATA_CONTRATO_NACIONAL_JURIDICO_CONTRATOS.hide = false;
  }
  else if(data.sltINFORME_TIPO_PESSOA_JURIDICA_NACIONAL === "Contrato"){
    schema.dteDATA_CONTRATO_NACIONAL_JURIDICO_CONTRATOS.hide = true;
  }

  if(data.sltSELECIONE_DUE_DILIGENCE_CONTRATOS_NACIONAL_JURIDICO === "Renovação"){
    schema.txtINFORME_ANO_JURIDICO_CONTRATO_NACIONAL_DUE_DILIGENCE.hide = false;
  }
  else if(data.sltSELECIONE_DUE_DILIGENCE_CONTRATOS_NACIONAL_JURIDICO === "Nova"){
    schema.txtINFORME_ANO_JURIDICO_CONTRATO_NACIONAL_DUE_DILIGENCE.hide = true;
  }
}

// INTERNACIONAL - ANÁLISE E ELABORAÇÃO DE CONTRATO DE CLIENTE
// Função para ocultar todos os campos
function ocultarTodosCamposInternacionalCliente() {
  schema.sltFOI_APROVADO_DEAL_REVIEW_INTERNACIONAL_CLIENTE.hide = true;
  schema.txtQUAL_VIRGENCIA_PRETENDIDO_CLIENTE_INTERNACIONAL.hide = true;
  schema.txtQUAL_VALOR_DO_CONTRATACAO_CLIENTE_INTERNACIONAL.hide = true;
  schema.txaQUAL_ESCOPO_CLIENTE_INTERNACIONAL.hide = true;
  schema.dteDATA_ASSINATURA_INTERNACIONAL_CONTRATO.hide = true;
  schema.txtINFORME_VALOR_CONTRATO_INTERNACIONAL.hide = true;
  schema.txtINFORME_TIPO_CONTRATO_INTERNACIONAL_ANALISE.required = true;
}  

// Sempre oculte todos os campos antes de exibir o selecionado
ocultarTodosCamposInternacionalCliente();

// Exibir apenas o campo relacionado à opção selecionada
if (data.sltINFORME_TIPO_INTERNACIONAL_CONTRATOS === "Contrato") {
  schema.sltFOI_APROVADO_DEAL_REVIEW_INTERNACIONAL_CLIENTE.hide = false;
  schema.txtQUAL_VIRGENCIA_PRETENDIDO_CLIENTE_INTERNACIONAL.hide = false;
  schema.txtQUAL_VALOR_DO_CONTRATACAO_CLIENTE_INTERNACIONAL.hide = false;
  schema.txaQUAL_ESCOPO_CLIENTE_INTERNACIONAL.hide = false;
  schema.txtINFORME_TIPO_CONTRATO_INTERNACIONAL_ANALISE.required = false;
}
else if(data.sltINFORME_TIPO_INTERNACIONAL_CONTRATOS === "Aditivo"){
  schema.dteDATA_ASSINATURA_INTERNACIONAL_CONTRATO.hide = false;
  
}

if (data.sltDESCONTO_CONDEDIDO_INTERNACIONAL_INFORME_CONTRATOS === "Sim") {
  schema.txtINFORME_VALOR_CONTRATO_INTERNACIONAL.hide = false;
}

// Função para ocultar todos os campos de INTERNACIONAL FORNECEDOR
function ocultarCamposInternacionalFornecedor() {
  schema.dteDATAFORCENEDOR_INTERNACIONAL_C.hide = true;
  schema.sltCEDIDO_DESCONTO_REAJUSTE_FORNECEDOR_INTERNACIONAL.hide = true;
  schema.txtVALOR_DESCONTO_FORNECEDOR_INTERNACIONAL.hide = true;
  schema.txaQUAL_ESCOPO_CLIENTE_INTERNACIONAL.hide = true;
  schema.txtVALOR_REAJUSTE_FORNECEDOR_INTERNACIONAL.hide = true;
  schema.sltRENOVACAO_NOVA_INTERNACIONAL_FORNECEDOR.hide = true;
  schema.txtANO_DUE_DILIGENCE_INTERNACIONAL_FORNECEDOR.hide = true;
  schema.sltRESPONDA_QINTESS_INTERNACIONAL_FORNECEDOR_VALORES.hide = true;
  schema.txtINFORME_VALOR_INTERNACIONAL_FORNECEDOR.hide = true;
  schema.txtJURIDICO_RAZAO_INTERNACIONAL_FORNECEDOR.hide = true;
  schema.txtEMAIL_JURIDICO_INTERNACIONAL_RAZAO_CONTRATOS.hide = true;
  schema.txaENDERECO_PESSOA_JURIDICA_INTERNACIONAL_CONTRATOS.hide = true;
  schema.sltINFORME_FUNCIONARIO_INTERNACIONAL_JURIDICO_QINTESS.hide = true;
  schema.txaDETALHE_DUE_DILIGENCE_INTERNACIONAL_FORNECEDOR.hide = true;
}

// Sempre oculte os campos de INTERNACIONAL FORNECEDOR antes de exibir os selecionados
ocultarCamposInternacionalFornecedor();

// Lógica para exibir os campos relacionados à INTERNACIONAL FORNECEDOR
if (data.sltINFORME_TIPO_CONTRATOS_INTERNACIONAL_FORCE === "Aditivo") {
  schema.txtREQUIRED_INTERNACIONAL_ADITIVO_CONTRATOS.required = true;
  schema.dteDATAFORCENEDOR_INTERNACIONAL_C.hide = false;
  schema.sltCEDIDO_DESCONTO_REAJUSTE_FORNECEDOR_INTERNACIONAL.hide = false;
}

if (["ConfissaoDivida", "Contrato", "Intermediacao", "Locacao", "Parceria", "Proposta"].includes(data.sltINFORME_TIPO_CONTRATOS_INTERNACIONAL_FORCE)) {
  schema.txtREQUIRED_INTERNACIONAL_ADITIVO_CONTRATOS.required = false;
}

if (data.sltCEDIDO_DESCONTO_REAJUSTE_FORNECEDOR_INTERNACIONAL === "ComDesconto") {
  schema.txtVALOR_DESCONTO_FORNECEDOR_INTERNACIONAL.hide = false;
} else if (data.sltCEDIDO_DESCONTO_REAJUSTE_FORNECEDOR_INTERNACIONAL === "ComReajuste") {
  schema.txtVALOR_REAJUSTE_FORNECEDOR_INTERNACIONAL.hide = false;
}

if (data.sltRESPONDA_PERGUNTA_INTERNACIONAL_FORNECEDOR_CONTRATOS === "Sim") {
  schema.sltRENOVACAO_NOVA_INTERNACIONAL_FORNECEDOR.hide = false;
  schema.txtJURIDICO_RAZAO_INTERNACIONAL_FORNECEDOR.hide = false;
  schema.txtEMAIL_JURIDICO_INTERNACIONAL_RAZAO_CONTRATOS.hide = false;
  schema.txaENDERECO_PESSOA_JURIDICA_INTERNACIONAL_CONTRATOS.hide = false;
  schema.sltINFORME_FUNCIONARIO_INTERNACIONAL_JURIDICO_QINTESS.hide = false;
  schema.txaDETALHE_DUE_DILIGENCE_INTERNACIONAL_FORNECEDOR.hide = false;
}

if (data.sltRENOVACAO_NOVA_INTERNACIONAL_FORNECEDOR === "Renovação") {
  schema.txtANO_DUE_DILIGENCE_INTERNACIONAL_FORNECEDOR.hide = false;
}

if (data.sltINFORME_COMECIAL_PARCERIA_INTERNACIONAL_FORNECEDOR === "Sim") {
  schema.sltRESPONDA_QINTESS_INTERNACIONAL_FORNECEDOR_VALORES.hide = false;
}

if (data.sltRESPONDA_QINTESS_INTERNACIONAL_FORNECEDOR_VALORES === "Sim") {
  schema.txtINFORME_VALOR_INTERNACIONAL_FORNECEDOR.hide = false;
}

// INTERNACIONAL - ANÁLISE E ELABORAÇÃO DE CONTRATO DE PESSOA JURIDICA
// Função para ocultar todos os campos
function ocultarTodosCamposAnaliseJuridica() {
  schema.txtINFORME_INTERNACIONAL_CONTRATO_GERENCIA_JURIDICO.hide = true;
  schema.txtVIRGENCIA_CONTRATO_PRETENDIDA_INTERNACIONAL_JURIDICO.hide = true;
  schema.txtINFORMEVALOR_CONTRATO_INTERNACIONAL_CONTRATOS.hide = true;
  schema.dteDATA_CONTRATO_INTERNACIONAL_JURIDICO_CONTRATOS.hide = true;
  schema.txtINFORME_ANO_JURIDICO_CONTRATO_INTERNACIONAL_DUE_DILIGENCE.hide = true;
}  

// Sempre oculte todos os campos antes de exibir o selecionado
ocultarTodosCamposAnaliseJuridica();

// Exibir apenas o campo relacionado à opção selecionada
if (data.sltINFORME_TIPO_PESSOA_JURIDICA_INTERNACIONAL === "Contrato"){

  schema.txtINFORME_INTERNACIONAL_CONTRATO_GERENCIA_JURIDICO.hide = false;
  schema.txtVIRGENCIA_CONTRATO_PRETENDIDA_INTERNACIONAL_JURIDICO.hide = false;
  schema.txtINFORMEVALOR_CONTRATO_INTERNACIONAL_CONTRATOS.hide = false;
}
else if(data.sltINFORME_TIPO_PESSOA_JURIDICA_INTERNACIONAL === "Aditivo"){
  schema.dteDATA_CONTRATO_INTERNACIONAL_JURIDICO_CONTRATOS.hide = false;
}

if (data.sltSELECIONE_DUE_DILIGENCE_CONTRATOS_INTERNACIONAL_JURIDICO === "Renovação"){
  schema.txtINFORME_ANO_JURIDICO_CONTRATO_INTERNACIONAL_DUE_DILIGENCE.hide = false;
}

// DISTRATO - NACIONAL - DISTRATO DE CONTRATO - CLIENTE
function ocultarTodosCamposDistratoNacional() {
  // Campos a ocultar inicialmente (NACIONAL - DISTRATO DE CONTRATO - CLIENTE)
    const camposOcutar5 = [
  "sltDISTRATO_INFORME_VALORES_NACIONAL",
  "txtDISTRATO_PENDENCIA_FINANCEIRA_INFORME_NACIONAL",
  "txtDISTRATO_PRAZO_NOTIFICACAO_NACIONAL", 
  "dteDISTRATO_DATA_NOTIFICACAO_NACIONAL",
  ];


ocultarCampos(camposOcutar5);

// Lógica para o NACIONAL - DISTRATO DE CONTRATO - CLIENTE

if (data.sltDISTRATO_SELECT_TIPO_NACIONAL === "Aditivo") {
  schema.txtDISTRATO_NUMERO_CONTRATO_PRINCIPAL_NACIONAL.required = true;
}
else if (data.sltDISTRATO_SELECT_TIPO_NACIONAL === "Contrato") {
  schema.txtDISTRATO_NUMERO_CONTRATO_PRINCIPAL_NACIONAL.required = false;
}
  
if (data.sltDISTRATO_INFORME_PARCERIA_COMERCIAL_NACIONAL === "Sim") {
  schema.sltDISTRATO_INFORME_VALORES_NACIONAL.hide = false;
}

if (data.sltDISTRATO_INFORME_PENDENCIA_FINANCEIRA_NACIONAL === "Sim") {
  schema.txtDISTRATO_PENDENCIA_FINANCEIRA_INFORME_NACIONAL.hide = false;
}

if (data.sltDISTRATO_SLECIONE_OPCAO_NOTIFICAR_NACIONAL === "Sim") {
  schema.txtDISTRATO_PRAZO_NOTIFICACAO_NACIONAL.hide = false;
  schema.dteDISTRATO_DATA_NOTIFICACAO_NACIONAL.hide = false;
  }
}
// DISTRATO - NACIONAL - DISTRATO DE CONTRATO - FORNECEDOR
// Função para ocultar todos os campos
function ocultarTodosCamposNacionalFornecedor() {
  schema.txtNUMERO_CONTRATO_PRINCIPAL_DISTRATO_FORNECEDOR_NACIONAL.required = true;
  schema.sltDISTRATO_INFORME_VALORES_NACIONAL.hide = true;
  schema.sltINFORME_VALORES_PAGOS_QINTESS_FORNECEDOR_NACIONAL.hide = true;
  schema.txtINFORME_PENDENCIA_VALOR_FORNECEDOR_NACIONAL.hide = true;
  schema.txtINFORME_DIAS_PRAZO_FORNECEDOR_NACIONAL.hide = true;
  schema.dteDATA_NOTIFICACAO_DISTRATO_FORNECEDOR_NACIONAL.hide = true;
}  

// Sempre oculte todos os campos antes de exibir o selecionado
ocultarTodosCamposNacionalFornecedor();

// Exibir apenas o campo relacionado à opção selecionada
if (data.sltTIPO_INFORME_CONTRATO_FORNECEDOR_NACIONAL === "Contrato"){

  schema.txtNUMERO_CONTRATO_PRINCIPAL_DISTRATO_FORNECEDOR_NACIONAL.required = false;
 
}

if (data.sltPARCERIA_COMERCIAL_FORNECEDOR_DISTRATO_NACIONAL === "Sim"){
  schema.sltINFORME_VALORES_PAGOS_QINTESS_FORNECEDOR_NACIONAL.hide = false;
}

if (data.sltPENDENCIA_FINANCEIRA_FORNECEDOR_NACIONAL === "Sim"){
  schema.txtINFORME_PENDENCIA_VALOR_FORNECEDOR_NACIONAL.hide = false;
}

if (data.sltNOTIFICAR_DISTRATO_FORNECEDOR_NACIONAL === "Sim"){
  schema.txtINFORME_DIAS_PRAZO_FORNECEDOR_NACIONAL.hide = false;
  schema.dteDATA_NOTIFICACAO_DISTRATO_FORNECEDOR_NACIONAL.hide = false;
}

// DISTRATO - INTERNACIONAL - DISTRATO DE CONTRATO - CLIENTE
// Função para ocultar todos os campos
function ocultarTodosCamposInternacional() {
  schema.txtDISTRATO_NUMERO_CONTRATO_PRINCIPAL_INTERNACIONAL.required = true;
  schema.sltDISTRATO_INFORME_VALORES_INTERNACIONAL.hide = true;
  schema.txtDISTRATO_PENDENCIA_FINANCEIRA_INFORME_INTERNACIONAL.hide = true;
  schema.txtDISTRATO_PRAZO_NOTIFICACAO_INTERNACIONAL.hide = true;
  schema.dteDISTRATO_DATA_NOTIFICACAO_INTERNACIONAL.hide = true;
}  

// Sempre oculte todos os campos antes de exibir o selecionado
ocultarTodosCamposInternacional();

// Exibir apenas o campo relacionado à opção selecionada
if (data.sltDISTRATO_SELECT_TIPO_INTERNACIONAL === "Contrato"){

  schema.txtDISTRATO_NUMERO_CONTRATO_PRINCIPAL_INTERNACIONAL.required = false;
 
}

if (data.sltDISTRATO_INFORME_PARCERIA_COMERCIAL_INTERNACIONAL === "Sim"){
  schema.sltDISTRATO_INFORME_VALORES_INTERNACIONAL.hide = false;
}

if (data.sltDISTRATO_INFORME_PENDENCIA_FINANCEIRA_INTERNACIONAL === "Sim"){
  schema.txtDISTRATO_PENDENCIA_FINANCEIRA_INFORME_INTERNACIONAL.hide = false;
}

if (data.sltDISTRATO_SLECIONE_OPCAO_NOTIFICAR_INTERNACIONAL === "Sim"){
  schema.txtDISTRATO_PRAZO_NOTIFICACAO_INTERNACIONAL.hide = false;
  schema.dteDISTRATO_DATA_NOTIFICACAO_INTERNACIONAL.hide = false;
}

// DISTRATO - INTERNACIONAL - DISTRATO DE CONTRATO - FORNECEDOR
// Função para ocultar todos os campos
function ocultarTodosCamposFornecedor() {
  schema.txtNUMERO_CONTRATO_PRINCIPAL_DISTRATO_FORNECEDOR_INTERNACIONAL.required = true;
  schema.sltINFORME_VALORES_PAGOS_QINTESS_FORNECEDOR_INTERNACIONAL.hide = true;
  schema.txtINFORME_PENDENCIA_VALOR_FORNECEDOR_INTERNACIONAL.hide = true;
  schema.txtINFORME_DIAS_PRAZO_FORNECEDOR_INTERNACIONAL.hide = true;
  schema.dteDATA_NOTIFICACAO_DISTRATO_FORNECEDOR_INTERNACIONAL.hide = true;
}  

// Sempre oculte todos os campos antes de exibir o selecionado
ocultarTodosCamposFornecedor();

// Exibir apenas o campo relacionado à opção selecionada
if (data.sltTIPO_INFORME_CONTRATO_FORNECEDOR_INTERNACIONAL === "Contrato"){

  schema.txtNUMERO_CONTRATO_PRINCIPAL_DISTRATO_FORNECEDOR_INTERNACIONAL.required = false;
 
}

if (data.sltPARCERIA_COMERCIAL_FORNECEDOR_DISTRATO_INTERNACIONAL === "Sim"){
  schema.sltINFORME_VALORES_PAGOS_QINTESS_FORNECEDOR_INTERNACIONAL.hide = false;
}

if (data.sltPENDENCIA_FINANCEIRA_FORNECEDOR_INTERNACIONAL === "Sim"){
  schema.txtINFORME_PENDENCIA_VALOR_FORNECEDOR_INTERNACIONAL.hide = false;
}

if (data.sltNOTIFICAR_DISTRATO_FORNECEDOR_INTERNACIONAL === "Sim"){
  schema.txtINFORME_DIAS_PRAZO_FORNECEDOR_INTERNACIONAL.hide = false;
  schema.dteDATA_NOTIFICACAO_DISTRATO_FORNECEDOR_INTERNACIONAL.hide = false;
}
//  ELABORAÇÃO DE NDA - NACIONAL
function ocultarTodosCamposElaboracaoNdaNacional(){
  // Campos a ocultar inicialmente (ELABORAÇÃO DE NDA - NACIONAL)
  const camposOcultar3 = [
  "txtNOME_PESSOA_FISICA_ELABORACAO_NDA",
  "txtRG_PESSOA_FISICA_ELABORACAO_NDA",
  "txtCPF_PESSOA_FISICA_ELABORACAO_NDA",
  "txtEMAIL_PESSOA_FISICA_ELABORACAO_NDA",
  "txaENDERECO_PESSOA_FISICA_ELABORACAO_NDA",
  "txtRAZAO_SOCIAL_JURIDICA_ELABORACAO_NDA",
  "txtCNPJ_PESSOA_JURIDICA_ELABORACAO_NDA",
  "txtNOME_RESPONSAVEL_PESSOA_JURIDICA_ELABORACAO_NDA",
  "txtEMAIL_PESSOA_JURIDICA_ELABORACAO_NDA",
  "txaENDERECO_RESPONSAVEL_JURIDICO_ELABORACAO_NDA",
  "txtNDA_NOME_CLIENTE_NDA",
  ];

  ocultarCampos(camposOcultar3);

  // Lógica para o ELABORAÇÃO DE NDA - NACIONAL
  if(data.sltELABORACAO_NDA_SELECT_PJ_FISICA_NACIONAL ===  "PessoaFísica"){
    schema.txtNOME_PESSOA_FISICA_ELABORACAO_NDA.hide = false;
    schema.txtRG_PESSOA_FISICA_ELABORACAO_NDA.hide = false;
    schema.txtCPF_PESSOA_FISICA_ELABORACAO_NDA.hide = false;
    schema.txtEMAIL_PESSOA_FISICA_ELABORACAO_NDA.hide = false;
    schema.txaENDERECO_PESSOA_FISICA_ELABORACAO_NDA.hide = false;
  }
  else if(data.sltELABORACAO_NDA_SELECT_PJ_FISICA_NACIONAL ===  "PessoaJurídica"){
    schema.txtRAZAO_SOCIAL_JURIDICA_ELABORACAO_NDA.hide = false;
    schema.txtCNPJ_PESSOA_JURIDICA_ELABORACAO_NDA.hide = false;
    schema.txtNOME_RESPONSAVEL_PESSOA_JURIDICA_ELABORACAO_NDA.hide = false;
    schema.txtEMAIL_PESSOA_JURIDICA_ELABORACAO_NDA.hide = false;
    schema.txaENDERECO_RESPONSAVEL_JURIDICO_ELABORACAO_NDA.hide = false;

  }
  if(data.sltNDA_PROJETO_CLIENTE_NDA === "Sim"){
    schema.txtNDA_NOME_CLIENTE_NDA.hide = false;
  }
}

// ELABORAÇÃO DE NDA - INTERNACIONAL
function ocultarTodosCamposElaboracaoNdaInternacional(){
   // Campos a ocultar inicialmente (ELABORAÇÃO DE NDA - INTERNACIONAL)
  const camposOcultar4 = [
    "txtNOME_PESSOA_FISICA_ELABORACAO_NDA_NDA",
    "txtRG_PESSOA_FISICA_ELABORACAO_NDAINTERNACIONAL",
    "txtCPF_PESSOA_FISICA_ELABORACAO_NDAINTERNACIONAL",
    "txtEMAIL_PESSOA_FISICA_ELABORACAO_NDAINTERNACIONAL",
    "txaENDERECO_PESSOA_FISICA_ELABORACAO_NDAINTERNACIONAL",
    "txtRAZAO_SOCIAL_JURIDICA_ELABORACAO_NDAINTERNACIONAL",
    "txtCNPJ_PESSOA_JURIDICA_ELABORACAO_NDAINTERNACIONAL",
    "txtNOME_RESPONSAVEL_PESSOA_JURIDICA_ELABORACAO_NDAINTERNACIONAL",
    "txtEMAIL_PESSOA_JURIDICA_ELABORACAO_NDAINTERNACIONAL",
    "txaENDERECO_RESPONSAVEL_JURIDICO_ELABORACAO_NDAINTERNACIONAL",
    "txtNDA_NOME_CLIENTE_NDAINTERNACIONAL",
    ];

  ocultarCampos(camposOcultar4);

  // Lógica para o ELABORAÇÃO DE NDA - INTERNACIONAL
  if (data.sltELABORACAO_NDA_SELECT_PJ_FISICA_NACIONAL_NDA === "PessoaFísica"){
    schema.txtNOME_PESSOA_FISICA_ELABORACAO_NDA_NDA.hide = false;
    schema.txtRG_PESSOA_FISICA_ELABORACAO_NDAINTERNACIONAL.hide = false;
    schema.txtCPF_PESSOA_FISICA_ELABORACAO_NDAINTERNACIONAL.hide = false;
    schema.txtEMAIL_PESSOA_FISICA_ELABORACAO_NDAINTERNACIONAL.hide = false;
    schema.txaENDERECO_PESSOA_FISICA_ELABORACAO_NDAINTERNACIONAL.hide = false;
  }
  else if (data.sltELABORACAO_NDA_SELECT_PJ_FISICA_NACIONAL_NDA === "PessoaJurídica"){
    schema.txtRAZAO_SOCIAL_JURIDICA_ELABORACAO_NDAINTERNACIONAL.hide = false;
    schema.txtCNPJ_PESSOA_JURIDICA_ELABORACAO_NDAINTERNACIONAL.hide = false;
    schema.txtNOME_RESPONSAVEL_PESSOA_JURIDICA_ELABORACAO_NDAINTERNACIONAL.hide = false;
    schema.txtEMAIL_PESSOA_JURIDICA_ELABORACAO_NDAINTERNACIONAL.hide = false;
    schema.txaENDERECO_RESPONSAVEL_JURIDICO_ELABORACAO_NDAINTERNACIONAL.hide = false;
  }
  if (data.sltNDA_PROJETO_CLIENTE_NDAINTERNACIONAL === "Sim") {
    schema.txtNDA_NOME_CLIENTE_NDAINTERNACIONAL.hide = false;
  }
}

// SOLICITAÇÃO - NACIONAL - SOLICITAÇÃO DE DOCUMENTOS
function ocultarTodosCamposSolicitacaoDocumentos() {
  // Campos a ocultar inicialmente (NACIONAL - SOLICITAÇÃO DE DOCUMENTOS)
  const camposOcutar6 = [
    "dteSOLICITACAO_CONTRATO_DATA",
    ];


ocultarCampos(camposOcutar6);

// Lógica para SOLICITAÇÃO - NACIONAL - SOLICITAÇÃO DE DOCUMENTOS
if (data.sltSOLICITACAO_INFORME_DOCUMENTO_DISPONIBILIDADO === "CopiaContrato"){
  schema.dteSOLICITACAO_CONTRATO_DATA.hide = false;
  console.log("hide false")
}
else if (["ContratoSocialAtualizado", "InscriçãoEstadual", "InscriçãoMunicipal", "Procuração"].includes(data.sltSOLICITACAO_INFORME_DOCUMENTO_DISPONIBILIDADO)) {
  schema.dteSOLICITACAO_CONTRATO_DATA.hide = true;
   console.log("hide true")
  }
}

// SOLICITAÇÃO - NACIONAL - SOLICITAÇÃO DE DOCUMENTAÇÃO SOLIDÁRIA
function ocultarTodosCamposSolicitacaoNSolidaria() {
  // Campos a ocultar inicialmente (NACIONAL - SOLICITAÇÃO DE DOCUMENTAÇÃO SOLIDÁRIA)
  const camposOcutar7 = [
    "dteSOLICITACAO_NACIONAL_GOVERNANCA",
    ];


ocultarCampos(camposOcutar7);

// Lógica para SOLICITAÇÃO - NACIONAL - SOLICITAÇÃO DE DOCUMENTAÇÃO SOLIDÁRIA
if (data.sltSOLICITACOES_INFORME_DOCUMENTO === "CópiaContrato"){
  schema.dteSOLICITACAO_NACIONAL_GOVERNANCA.hide = false;
}
else if (["ContratoSocialAtualizado", "InscriçãoEstadual", "InscriçãoMunicipal", "Procuração"].includes(data.sltSOLICITACOES_INFORME_DOCUMENTO)) {
  schema.dteSOLICITACAO_NACIONAL_GOVERNANCA.hide = true;
  }
}


// SOLICITAÇÃO - INTERNACIONAL - SOLICITAÇÃO DE DOCUMENTAÇÃO SOLIDÁRIA
function ocultarTodosCamposInternacionalDocumento() {
  // Campos a ocultar inicialmente (INTERNACIONAL - SOLICITAÇÃO DE DOCUMENTAÇÃO SOLIDÁRIA)
  const camposOcutar8 = [
    "dteSOLICITACAO_INTERNACIONAL_CONTRATO_ASSINATURA",
    ];


ocultarCampos(camposOcutar8);

// Lógica para SOLICITAÇÃO - INTERNACIONAL - SOLICITAÇÃO DE DOCUMENTAÇÃO SOLIDÁRIA
if (data.sltSOLICITACAO_INTERNACIONAL_INFORME === "CópiaContrato"){
  schema.dteSOLICITACAO_INTERNACIONAL_CONTRATO_ASSINATURA.hide = false;
}
else if (["ContratoSocialAtualizado", "InscriçãoEstadual", "InscriçãoMunicipal", "Procuração"].includes(data.sltSOLICITACAO_INTERNACIONAL_INFORME)) {
  schema.dteSOLICITACAO_INTERNACIONAL_CONTRATO_ASSINATURA.hide = true;
  }
}


// SOLICITAÇÃO - INTERNACIONAL - SOLICITAÇÃO DE DOCUMENTOS
function ocultarTodosCamposInternacionalSolicitaDocumento() {
  // Campos a ocultar inicialmente (INTERNACIONAL - SOLICITAÇÃO DE DOCUMENTOS)
  const camposOcutar9 = [
    "dteSOLICITACAO_CONTRATO_DATA_INTERNACIONAL",
    ];

ocultarCampos(camposOcutar9);

// Lógica para SOLICITAÇÃO - INTERNACIONAL - SOLICITAÇÃO DE DOCUMENTOS
if (data.sltSOLICITACAO_INFORME_DOCUMENTO_DISPONIBILIDADO_INTERNACIONAL === "CópiaContrato"){
  schema.dteSOLICITACAO_CONTRATO_DATA_INTERNACIONAL.hide = false;
}
else if (["ContratoSocialAtualizado", "InscriçãoEstadual", "InscriçãoMunicipal", "Procuração"].includes(data.sltSOLICITACAO_INFORME_DOCUMENTO_DISPONIBILIDADO_INTERNACIONAL)) {
  schema.dteSOLICITACAO_CONTRATO_DATA_INTERNACIONAL.hide = true;
  }
}

// CHAMADA DOS FORMULÁRIOS
// Ajustar com base na lógica de quando executar cada configuração
configurarFormularioAnaliseElaboracao();
configurarFormularioFornecedor();
configurarFormularioPessoaJuridica();
ocultarTodosCamposElaboracaoNdaNacional();
ocultarTodosCamposElaboracaoNdaInternacional();
ocultarTodosCamposDistratoNacional();
ocultarTodosCamposSolicitacaoDocumentos();
ocultarTodosCamposSolicitacaoDocumentos();
ocultarTodosCamposSolicitacaoNSolidaria();
ocultarTodosCamposInternacionalDocumento();
ocultarTodosCamposInternacionalSolicitaDocumento();

// Code to run on the first page
if(continueClicked && currentPage == 1){
  
    switch (data.sltSELECT_CATEGORIA2) {
      case "Nacional - Termo confissão de dívida - Fornecedor":
        goToAndFinalPage(2);
        break;

      case "Internacional - Termo de confissão de dívida - Fornecedor":
        goToAndFinalPage(3);
        break;

      case "Análise de licitação":
        goToAndFinalPage(4);
        break;

      case "Nacional - Análise e elaboração de contrato de Cliente":
        goToAndFinalPage(5);
        break;

      case "Nacional - Análise e elaboração de contrato de Fornecedor":
        goToAndFinalPage(6);
        break;

      case "Nacional - Análise e elaboração de contrato de Pessoa Jurídica":
        goToAndFinalPage(7);
        break;

      case "Internacional - Análise e elaboração de contrato de Cliente":
        goToAndFinalPage(8);
        break;

      case "Internacional - Análise e elaboração de contrato de Fornecedor":
        goToAndFinalPage(9);
        break;

      case "Internacional - Análise e elaboração de contrato de Pessoa Jurídica":
        goToAndFinalPage(10);
        break;
    
      case "Nacional - Distrato de contrato - Cliente":
        goToAndFinalPage(11);
        break;
    
      case "Nacional - Distrato de contrato - Fornecedor":
        goToAndFinalPage(12);
        break;
    
      case "Internacional - Distrato de contrato - Cliente":
        goToAndFinalPage(13);
        break;
    
      case "Internacional - Distrato de contrato - Fornecedor":
        goToAndFinalPage(14);
        break;
    
      case "Elaboração de NDA - Nacional":
        goToAndFinalPage(15);
        break;
    
      case "Elaboração de NDA - Internacional":
        goToAndFinalPage(16);
        break;
    
      case "Nacional - Solicitação de documentação solidária":
        goToAndFinalPage(17);
        break;
    
      case "Nacional - Assinatura de declarações":
        goToAndFinalPage(18);
        break;
    
      case "Nacional - Resposta de questionários":
        goToAndFinalPage(19);
        break;
    
      case "Nacional - Solicitação de documentos":
        goToAndFinalPage(20);
        break;
    
      case "Nacional - Solicitação de modelo":
        goToAndFinalPage(21);
        break;
    
      case "Internacional - Solicitação de documentação solidária":
        goToAndFinalPage(22);
        break;
    
      case "Internacional - Resposta de questionários":
        goToAndFinalPage(23);
        break;
    
      case "Internacional - Solicitação de Documentos":
        goToAndFinalPage(24);
        break;
    
      case "Internacional - Solicitação de modelo":
        goToAndFinalPage(25);
        break;
        

    }
}

// Code to run on the second page
if(continueClicked && currentPage == 2){



}

// Code to run after submit is clicked
if(submitting){}