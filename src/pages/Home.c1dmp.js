<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Octopus Suite</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.28.0/feather.min.js"></script>
    <style>
        body {
            background-color: #EA5A14;
            color: white;
            font-family: 'Poppins', sans-serif;
        }
        .gradient-bg {
            background: linear-gradient(to right, #EA5A14, #c64810);
        }
        .feature-card {
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            background: rgba(234, 90, 20, 0.3);
        }
        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
        }
        .image-card {
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        .image-card:hover {
            transform: scale(1.02);
        }
        .image-card img {
            transition: all 0.5s ease;
        }
        .image-card:hover img {
            transform: scale(1.05);
        }
        .stats-card {
            background: rgba(234, 90, 20, 0.3);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        h1, h2, h3 {
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            letter-spacing: -0.025em;
        }
        p {
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            letter-spacing: 0.015em;
        }
        .brand-name {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            letter-spacing: -0.025em;
        }
        .feature-icon {
            width: 48px;
            height: 48px;
            margin-bottom: 1rem;
            stroke: white;
            stroke-width: 1.5;
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .animate-fadeInUp {
            animation: fadeInUp 0.6s ease forwards;
        }
    </style>
</head>
<body>
    <!-- Hero Section -->
    <header class="gradient-bg p-8">
        <nav class="max-w-7xl mx-auto flex justify-between items-center mb-16">
            <div class="flex items-center gap-3">
                <img src="https://i.postimg.cc/BbcBrBPP/Captura-de-tela-2024-12-19-230742-1.png" alt="Logo" class="w-12 h-12">
                <div class="text-2xl brand-name">Octopus Suite</div>
            </div>
        </nav>
        
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h1 class="text-5xl font-bold mb-6 leading-tight">
                    <span id="typed-text"></span>
                </h1>
                <p class="text-xl text-gray-100 mb-8">
                    Uma plataforma completa com mais de 70 ferramentas para otimizar seu trabalho e produtividade.
                </p>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="image-card bg-gray-700 rounded-lg p-6">
                    <img src="https://i.postimg.cc/YSTgdQFQ/Captura-de-tela-2024-12-20-095529.png" alt="Login Interface" class="w-full rounded-lg">
                </div>
                <div class="image-card bg-gray-700 rounded-lg p-6">
                    <img src="https://i.postimg.cc/jd6XC37m/Captura-de-tela-2024-12-20-095645.png" alt="Dashboard View" class="w-full rounded-lg">
                </div>
                <div class="image-card bg-gray-700 rounded-lg p-6 col-span-2">
                    <img src="https://i.postimg.cc/brC1H1Nc/Captura-de-tela-2024-12-20-095604.png" alt="Comments Section" class="w-full rounded-lg">
                </div>
            </div>
        </div>
    </header>

    <!-- Features Section -->
    <section class="py-20" style="background: rgba(234, 90, 20, 0.2)">
        <div class="max-w-7xl mx-auto px-8">
            <h2 class="text-4xl font-bold mb-16 text-center">Funcionalidades Principais</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                <div class="feature-card p-6 rounded-lg text-center">
                    <i data-feather="layout" class="feature-icon mx-auto"></i>
                    <h3 class="text-xl font-bold mb-4">Painel Intuitivo</h3>
                    <p class="text-gray-100">Interface simplificada e organizada em categorias para fácil acesso.</p>
                </div>
                <div class="feature-card p-6 rounded-lg text-center">
                    <i data-feather="tool" class="feature-icon mx-auto"></i>
                    <h3 class="text-xl font-bold mb-4">+70 Ferramentas</h3>
                    <p class="text-gray-100">Ampla variedade de ferramentas para marketing, produtividade e negócios.</p>
                </div>
                <div class="feature-card p-6 rounded-lg text-center">
                    <i data-feather="message-circle" class="feature-icon mx-auto"></i>
                    <h3 class="text-xl font-bold mb-4">Comentários</h3>
                    <p class="text-gray-100">Sistema integrado de feedback e comunicação em tempo real.</p>
                </div>
                <div class="feature-card p-6 rounded-lg text-center">
                    <i data-feather="log-in" class="feature-icon mx-auto"></i>
                    <h3 class="text-xl font-bold mb-4">Login Rápido</h3>
                    <p class="text-gray-100">Acesso seguro em menos de 10 segundos com interface otimizada.</p>
                </div>
                <div class="feature-card p-6 rounded-lg text-center">
                    <i data-feather="cpu" class="feature-icon mx-auto"></i>
                    <h3 class="text-xl font-bold mb-4">IA Recomendadora</h3>
                    <p class="text-gray-100">Sugestões inteligentes de ferramentas baseadas no seu perfil e objetivos.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Insights Section -->
    <section class="py-20" style="background: rgba(234, 90, 20, 0.1)">
        <div class="max-w-7xl mx-auto px-8">
            <h2 class="text-4xl font-bold mb-16 text-center">Insights da Plataforma</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="stats-card p-8 rounded-lg text-center">
                    <h3 class="text-xl font-bold mb-4">Lucros Gerados</h3>
                    <div class="text-4xl font-bold mb-2">R$ <span id="profit-counter">0</span></div>
                    <p class
                    </p>
                </div>
                <div class="stats-card p-8 rounded-lg text-center">
                    <h3 class="text-xl font-bold mb-4">Usuários Ativos</h3>
                    <div class="text-4xl font-bold mb-2"><span id="users-counter">0</span></div>
                    <p class="text-gray-100"></p>
                </div>
                <div class="stats-card p-8 rounded-lg text-center">
                    <h3 class="text-xl font-bold mb-4">Satisfação</h3>
                    <div class="text-4xl font-bold mb-2"><span id="satisfaction-counter">0</span>%</div>
                    <p class="text-gray-100"></p>
                </div>
            </div>
        </div>
    </section>

    <script>
        // Typing effect
        new Typed('#typed-text', {
            strings: ['Trabalho mais rápido,^500 fácil^500 e sem Stress'],
            typeSpeed: 50,
            backSpeed: 0,
            loop: false
        });

        // Counter animation function
        function animateCounter(elementId, end, duration) {
            const obj = document.getElementById(elementId);
            const start = 0;
            const steps = 60;
            const increment = (end - start) / steps;
            let current = start;
            const timer = setInterval(() => {
                current += increment;
                if (current >= end) {
                    clearInterval(timer);
                    current = end;
                }
                obj.textContent = Math.floor(current).toLocaleString('pt-BR');
            }, duration / steps);
        }

        // Intersection Observer for animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.id === 'profit-counter') {
                        animateCounter('profit-counter', 1000000, 10000);
                    } else if (entry.target.id === 'users-counter') {
                        animateCounter('users-counter', 2500, 10000);
                    } else if (entry.target.id === 'satisfaction-counter') {
                        animateCounter('satisfaction-counter', 98, 10000);
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        // Observe counter elements
        observer.observe(document.getElementById('profit-counter'));
        observer.observe(document.getElementById('users-counter'));
        observer.observe(document.getElementById('satisfaction-counter'));

        // Initialize Feather Icons
        document.addEventListener('DOMContentLoaded', function() {
            feather.replace();
        });
    </script>
</body>
<!-- Pricing Section -->
<section class="py-20" style="background: rgba(234, 90, 20, 0.2)">
    <div class="max-w-7xl mx-auto px-8 text-center">
        <h2 class="text-4xl font-bold mb-8">Investimento</h2>
        <div class="feature-card p-8 rounded-lg max-w-md mx-auto">
            <div class="text-5xl font-bold mb-4">R$351</div>
            <p class="text-xl text-gray-100 mb-6">Acesso completo à plataforma</p>
            <button id="subscribeBtn" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg mb-6 transform transition-transform hover:-translate-y-1">
                Assinar Agora 🚀
            </button>
            <div id="paymentInfo" class="max-h-0 overflow-hidden transition-all duration-500">
                <div class="flex justify-center mb-4">
                    <img src="https://i.postimg.cc/6qc3WZ6P/qrcode-pix-1.png" alt="QR Code PIX" class="w-48 h-48">
                </div>
                <div class="bg-white bg-opacity-10 p-4 rounded-lg mt-4">
                    <p class="text-sm mb-2">Chave PIX:</p>
                    <div class="flex items-center justify-center gap-2">
                        <input type="text" id="pixKey" value="00020126580014BR.GOV.BCB.PIX0136c15480dc-2384-4438-9ed3-76878f6ad36d5204000053039865406351.005802BR5925Luis Gustavo Correia Frei6009SAO PAULO62140510m8nUFjogyd6304129C" class="bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg flex-1" readonly>
                        <button id="copyBtn" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                            Copiar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Add this script just before the closing body tag -->
<script>
    // Add this to your existing scripts
    const subscribeBtn = document.getElementById('subscribeBtn');
    const paymentInfo = document.getElementById('paymentInfo');
    const copyBtn = document.getElementById('copyBtn');
    const pixKey = document.getElementById('pixKey');

    subscribeBtn.addEventListener('click', () => {
        paymentInfo.style.maxHeight = paymentInfo.scrollHeight + "px";
        subscribeBtn.innerHTML = 'Finalizar Pagamento 💳';
    });

    copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(pixKey.value);
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copiado!';
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    });
</script>
</html>
<div class="bg-white bg-opacity-10 p-4 rounded-lg mt-4">
    <p class="text-lg text-gray-100 mb-4">
        Após realizar o pagamento, Liberamos o acesso pelo Chatbot ao lado
        <strong> </strong>.
    </p>
<body>
    <!-- Chatbot -->
    <div id="chatbot-container" style="
        position: fixed; 
        bottom: 20px; 
        right: 20px; 
        z-index: 1000; 
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        cursor: pointer;">
        
        <!-- Texto simulando mensagem -->
        <div id="chat-message" style="
            display: block;
            background: #fff;
            color: #EA5A14;
            font-size: 14px;
            font-weight: bold;
            padding: 8px 12px;
            border-radius: 20px;
            margin-bottom: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            text-align: center;
            animation: messageEntry 0.8s ease-in-out;">
            clique em mim e Receba seu acesso
        </div>

        <!-- Botão de fechar -->
        <button id="close-chatbot" style="
            display: none; 
            position: absolute; 
            top: -10px; 
            right: -10px; 
            background: #FF4B4B; 
            color: white; 
            font-size: 14px; 
            border: none; 
            border-radius: 50%; 
            width: 30px; 
            height: 30px; 
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
            cursor: pointer;">
            ✖
        </button>

        <!-- Imagem redonda do chatbot -->
        <div id="chat-icon" style=" 
            background-image: url('https://i.postimg.cc/Fsx23pZR/c3679308-68ad-4e0c-b2dc-9bc7bb63a725-removebg-preview.png');
            background-size: cover;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            animation: float 3s infinite;">
        </div>

        <!-- Iframe do chatbot -->
        <iframe id="chat-iframe" 
            src="https://platform.zaia.app/embed/chat/33844" 
            style="display: none; width: 400px; height: 600px; border: none; border-radius: 20px; margin-top: 10px;">
        </iframe>
    </div>

    <style>
        /* Animação de entrada da mensagem */
        @keyframes messageEntry {
            0% {
                transform: translateY(20px);
                opacity: 0;
            }
            50% {
                transform: translateY(-10px);
                opacity: 0.5;
            }
            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }

        /* Animação de flutuação para o chatbot */
        @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
        }
    </style>

    <script>
        // Elementos
        const chatbotContainer = document.getElementById('chatbot-container');
        const chatIcon = document.getElementById('chat-icon');
        const chatIframe = document.getElementById('chat-iframe');
        const closeChatbot = document.getElementById('close-chatbot');
        const chatMessage = document.getElementById('chat-message');

        // Clique no ícone para abrir o chatbot
        chatIcon.addEventListener('click', () => {
            chatIcon.style.display = 'none'; // Esconde o ícone
            chatIframe.style.display = 'block'; // Mostra o iframe
            closeChatbot.style.display = 'block'; // Mostra o botão de fechar
            chatMessage.style.display = 'none'; // Esconde a mensagem
        });

        // Clique no botão de fechar para esconder o chatbot
        closeChatbot.addEventListener('click', () => {
            chatIcon.style.display = 'block'; // Mostra o ícone
            chatIframe.style.display = 'none'; // Esconde o iframe
            closeChatbot.style.display = 'none'; // Esconde o botão de fechar
            chatMessage.style.display = 'block'; // Mostra a mensagem novamente
        });
    </script>
</bod