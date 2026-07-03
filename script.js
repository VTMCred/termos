// Step Icons definitions using clean inline SVGs (from Lucide)
const ICONS = {
  briefcase: `
    <div class="icon-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        <rect width="20" height="14" x="2" y="6" rx="2"></rect>
      </svg>
    </div>
  `,
  shieldCheck: `
    <div class="icon-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.8 17 5 19 5a1 1 0 0 1 1 1z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    </div>
  `,
  fileText: `
    <div class="icon-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
        <path d="M10 9H8"></path>
        <path d="M16 13H8"></path>
        <path d="M16 17H8"></path>
      </svg>
    </div>
  `,
  calendar: `
    <div class="icon-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 2v4"></path>
        <path d="M16 2v4"></path>
        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
        <path d="M3 10h18"></path>
      </svg>
    </div>
  `,
  alertTriangle: `
    <div class="icon-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
    </div>
  `,
  signature: `
    <div class="icon-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
      </svg>
    </div>
  `
};

// Data Steps setup
const steps = [
  {
    id: "sobre",
    icon: ICONS.briefcase,
    title: "Sobre a operação",
    content: "A VTMCred realiza operações de crédito de forma transparente. Antes da contratação, todas as condições são apresentadas para que você saiba exatamente como a operação funciona."
  },
  {
    id: "privacidade",
    icon: ICONS.shieldCheck,
    title: "Privacidade e proteção de dados",
    content: "Seus dados estão protegidos por criptografia de ponta a ponta, em total conformidade com a LGPD. Só usamos suas informações para realizar sua operação de forma segura."
  },
  {
    id: "documentos",
    icon: ICONS.fileText,
    title: "Documentação necessária",
    content: "Para prosseguir, você precisará apenas de um documento de identidade válido com foto (RG ou CNH), comprovante de residência recente e comprovante de renda atualizado."
  },
  {
    id: "pagamentos",
    icon: ICONS.calendar,
    title: "Pagamentos e vencimentos",
    content: "Os pagamentos são mensais e podem ser feitos via Pix, boleto ou débito automático. A data de vencimento é escolhida por você no momento da contratação e não muda."
  },
  {
    id: "atrasos",
    icon: ICONS.alertTriangle,
    title: "Atrasos, multas e encargos",
    content: "Em caso de atraso, serão cobrados multa de 2% e juros moratórios pro rata conforme a legislação. Caso tenha dificuldades, nosso time está disponível para negociar e ajudar."
  },
  {
    id: "contrato",
    icon: ICONS.signature,
    title: "Assinatura do contrato",
    content: "Após a aprovação, você receberá um link seguro por e-mail ou SMS para assinar o contrato digitalmente. A assinatura é simples, rápida e possui total validade jurídica."
  }
];

// App State
let currentStep = 0;
const confirmedSteps = Array(steps.length).fill(false);

// Video Stream Link
const VIDEO_STREAM_URL = "https://stream.mux.com/T6oQJQ02cQ6N01TR6iHwZkKFkbepS34dkkIc9iukgy400g.m3u8";

// DOM Elements
const heroVideo = document.getElementById("hero-video");
const heroCtaBtn = document.getElementById("hero-cta-btn");
const heroScreen = document.getElementById("hero-screen");
const termsScreen = document.getElementById("terms-screen");

const stepIndicator = document.getElementById("step-indicator");
const progressBarFill = document.getElementById("terms-progress-bar-fill");
const cardContent = document.getElementById("terms-card-content");
const stepIconBadge = document.getElementById("step-icon-badge");
const stepTitle = document.getElementById("terms-step-title");
const stepBody = document.getElementById("terms-step-body");
const finalAlert = document.getElementById("terms-final-alert");
const stepCheckbox = document.getElementById("terms-step-checkbox");
const checkboxWrapper = document.getElementById("terms-custom-checkbox-wrapper");
const actionBtn = document.getElementById("terms-action-btn");
const btnText = document.getElementById("btn-text");
const btnIcon = document.getElementById("btn-icon");

// Initialize application
function init() {
  setupVideo();
  renderStep();
  setupEventListeners();
}

// Setup background live streaming video with HLS.js or Native HLS
function setupVideo() {
  if (Hls.isSupported()) {
    const hls = new Hls({
      maxMaxBufferLength: 10,
      enableWorker: true,
      lowLatencyMode: true
    });
    hls.loadSource(VIDEO_STREAM_URL);
    hls.attachMedia(heroVideo);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
      heroVideo.play().catch(err => console.log("Auto-play blocked:", err));
    });
  } else if (heroVideo.canPlayType('application/vnd.apple.mpegurl')) {
    // Fallback for Safari natively supporting HLS
    heroVideo.src = VIDEO_STREAM_URL;
    heroVideo.addEventListener('loadedmetadata', function() {
      heroVideo.play().catch(err => console.log("Auto-play blocked:", err));
    });
  }
}

// Render current onboarding step
function renderStep() {
  const step = steps[currentStep];
  
  // Fade out current step
  cardContent.classList.add("fade-out");
  cardContent.classList.remove("fade-in");
  
  setTimeout(() => {
    // Update contents
    stepIconBadge.innerHTML = step.icon;
    stepTitle.textContent = step.title;
    stepBody.textContent = step.content;
    
    // Update step counter
    stepIndicator.textContent = `${currentStep + 1} de ${steps.length}`;
    
    // Update progress bar
    const percentage = ((currentStep + 1) / steps.length) * 100;
    progressBarFill.style.width = `${percentage}%`;
    
    // Show/hide final info alert (only on step 6)
    if (currentStep === steps.length - 1) {
      finalAlert.classList.remove("hidden");
    } else {
      finalAlert.classList.add("hidden");
    }
    
    // Update checkbox visual representation to match current state
    stepCheckbox.checked = confirmedSteps[currentStep];
    if (confirmedSteps[currentStep]) {
      checkboxWrapper.classList.add("checked");
    } else {
      checkboxWrapper.classList.remove("checked");
    }
    
    // Update button style & behavior
    updateButtonState();

    // Fade in updated step
    cardContent.classList.remove("fade-out");
    cardContent.classList.add("fade-in");
    
    // Smooth scroll back to top of white card to keep layout clean
    const onboardingCard = document.getElementById("terms-onboarding-card");
    if (onboardingCard) {
      onboardingCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, 200);
}

// Enable/Disable the Next/Confirm button based on the checkbox state
function updateButtonState() {
  const isChecked = confirmedSteps[currentStep];
  actionBtn.disabled = !isChecked;
  
  const isLastStep = currentStep === steps.length - 1;
  
  if (isLastStep) {
    btnText.textContent = "Concordo com todos os termos";
    btnIcon.style.display = "none";
    actionBtn.className = "action-btn finish-btn";
  } else {
    btnText.textContent = "Próximo";
    btnIcon.style.display = "block";
    actionBtn.className = "action-btn";
  }
}

// Setup event listeners
function setupEventListeners() {
  // Screen Transition: Go to Terms
  heroCtaBtn.addEventListener("click", () => {
    heroScreen.classList.remove("active");
    termsScreen.classList.add("active");
    
    // Pause video to save CPU/battery while reading terms
    setTimeout(() => {
      heroVideo.pause();
    }, 500);
  });

  // Label / wrapper click handler
  checkboxWrapper.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent double triggering from input + label
    
    const newState = !confirmedSteps[currentStep];
    confirmedSteps[currentStep] = newState;
    stepCheckbox.checked = newState;
    
    if (newState) {
      checkboxWrapper.classList.add("checked");
    } else {
      checkboxWrapper.classList.remove("checked");
    }
    
    updateButtonState();
  });
  
  // Button click handler
  actionBtn.addEventListener("click", () => {
    if (!confirmedSteps[currentStep]) return;
    
    const isLastStep = currentStep === steps.length - 1;
    
    if (isLastStep) {
      // Completed onboarding flow! Alert and reset
      alert("Termos aceitos com sucesso!");
      
      // Reset state and go back to hero screen
      currentStep = 0;
      confirmedSteps.fill(false);
      
      // Resume video
      heroVideo.play().catch(() => {});
      
      termsScreen.classList.remove("active");
      heroScreen.classList.add("active");
      
      // Re-render
      renderStep();
    } else {
      // Advance to next step
      currentStep++;
      renderStep();
    }
  });
}

// Run init
document.addEventListener("DOMContentLoaded", init);
