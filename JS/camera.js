    const botaoIniciarCamera = document.querySelector('[data-video-botao]')
    const campoCamera = document.querySelector('[data-camera]')
    const video = document.querySelector('[data-video]')
    const botaoTirarFoto = document.querySelector('[data-tirar-foto]')
    const canvas = document.querySelector('[data-video-canvas]')
    const mensagem = document.querySelector('[data-mensagem]')
    const botaoEnviarFoto = document.querySelector('[data-enviar]')
    
    let imagemURL = ""

    botaoIniciarCamera.addEventListener("click", async function (){
        //NAVIGATOR.MEDIADEVICES.GETUSERMEDIA ele pede para o navegador para utilizar a câmera
        const iniciarVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false})

        botaoIniciarCamera.style.display = "none"
        campoCamera.style.display = "block"

        //SRCOBJECT recebe o navigator como origem
        video.srcObject = iniciarVideo
    })

    botaoTirarFoto.addEventListener("click", function(){
    //pega p conteudo do canvas e desenha uma imagem 2d, mais o posiocionamento e largura e altura para desenhar
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

        //.TODATAURL transforma a imagem em uma URl que vai possibilitar da gente salvar essa imagem
        imagemURL = canvas.toDataURL("image/jpeg")

        campoCamera.style.display = "none"
        mensagem.style.display = "block"
    })

    botaoEnviarFoto.addEventListener("click", () => {
        const receberDadosExistentes = localStorage.getItem("cadastro")
        const converteRetorno = JSON.parse(receberDadosExistentes)

        //criou o atributo imagem dentro do nosso objeto de cadastro, recebendo a url da foto que foi tirada
        converteRetorno.imagem = imagemURL

        localStorage.setItem("cadastro", JSON.stringify(converteRetorno))

        window.location.href = "./abrir-conta-form-3.html"
    })