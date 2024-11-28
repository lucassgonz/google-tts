
const sendPostRequest = async () => {
    const url = 'cole_aqui_sua_url/synthesize'; 
    const data = { text: workflow.resposta_llm }; 
    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json', 
        },
      });
      console.log(response.data)
      workflow.audioGoogle = response.data.fileUrl; 
  
      console.log('URL do áudio:', workflow.audioGoogle); 
    } catch (error) {
      console.error('Erro ao gerar o áudio:', error.response ? error.response.data : error.message);
    }
  };
  
  await sendPostRequest();
  