const chaveAcesso = '35230743377588000100550030000060491787716862';
const url = `http://www.bling.com.br/relatorios/nfe.xml.php?s&chaveAcesso=${chaveAcesso}`;

fetch(url)
  .then(response => response.text())
  .then(data => {
    // Aqui você pode manipular os dados da resposta (no formato XML) como desejar
    console.log(data);
  })
  .catch(error => {
    console.error('Ocorreu um erro ao fazer a requisição:', error);
  });
