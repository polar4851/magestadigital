document.addEventListener("DOMContentLoaded", function() {

    // LÓGICA PARA O MENU HAMBURGER
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    // LÓGICA PARA O TEMA CLARO/ESCURO
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Função para aplicar o tema e atualizar o ícone
    const applyTheme = (theme) => {
        if (theme === 'light') {
            htmlElement.setAttribute('data-theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Mostra a lua no modo claro
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Mostra o sol no modo escuro
        }
    };

    // Função para trocar o tema
    const toggleTheme = () => {
        const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme); // Salva a escolha do usuário
        applyTheme(newTheme);
    };
    
    themeToggle.addEventListener('click', toggleTheme);

    // Lógica de inicialização do tema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        applyTheme(savedTheme); // Usa o tema salvo se existir
    } else if (prefersDark) {
        applyTheme('dark'); // Usa a preferência do sistema se não houver tema salvo
    } else {
        applyTheme('light'); // Padrão para o modo claro
    }


    // EFEITO DE FADE-IN NAS SEÇÕES AO ROLAR A PÁGINA
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, footer').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });

    // INICIA E CONFIGURA O PARTICLES.JS
    // A cor das partículas é neutra (#888888) para funcionar em ambos os temas.
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 90,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#8233FF" 
        },
        "shape": {
          "type": "circle"
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 0.5,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#888888",
          "opacity": 0.2,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "out_mode": "out"
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false
          },
          "resize": true
        },
        "modes": {
          "repulse": {
            "distance": 100,
            "duration": 0.4
          }
        }
      },
      "retina_detect": true
    });

});