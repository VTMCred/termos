// Step Icons definitions using clean inline SVGs (from Lucide)
const ICONS = {
  briefcase: `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 stroke-[1.75]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
    </svg>
  `,
  shieldCheck: `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 stroke-[1.75]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
  `,
  fileText: `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 stroke-[1.75]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
      <path d="M10 9H8"></path>
      <path d="M16 13H8"></path>
      <path d="M16 17H8"></path>
    </svg>
  `,
  calendar: `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 stroke-[1.75]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 2v4"></path>
      <path d="M16 2v4"></path>
      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
      <path d="M3 10h18"></path>
    </svg>
  `,
  alertTriangle: `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 stroke-[1.75]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
      <path d="M12 9v4"></path>
      <path d="M12 17h.01"></path>
    </svg>
  `,
  signature: `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 stroke-[1.75]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
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
const heroSection = document.getElementById("hero-section");
const heroCtaTerms = document.getElementById("hero-cta-terms");

const termsPageContainer = document.getElementById("terms-page-container");
const stepIndicator = document.getElementById("step-indicator");
const progressBarFill = document.getElementById("terms-progress-bar-fill");
const cardContentInner = document.getElementById("terms-card-inner");
const iconContainer = document.getElementById("terms-icon-container");
const stepTitle = document.getElementById("terms-step-title");
const stepBody = document.getElementById("terms-step-body");
const finalAlert = document.getElementById("terms-final-alert");

const checkboxWrapper = document.getElementById("terms-custom-checkbox-wrapper");
const stepCheckbox = document.getElementById("terms-step-checkbox");
const checkboxVisual = document.getElementById("checkbox-visual");
const checkboxCheckIcon = document.getElementById("checkbox-check-icon");

const actionNextBtn = document.getElementById("terms-action-next-btn");
const actionConfirmAllBtn = document.getElementById("terms-action-confirm-all-btn");

// Initialize application
function init() {
  setupVideo();
  renderStep();
  setupEventListeners();
}

// Setup background live streaming video with HLS.js or Native HLS
let hlsInstance = null;
function setupVideo() {
  if (Hls.isSupported()) {
    hlsInstance = new Hls({
      maxMaxBufferLength: 10,
      enableWorker: true,
      lowLatencyMode: true
    });
    hlsInstance.loadSource(VIDEO_STREAM_URL);
    hlsInstance.attachMedia(heroVideo);
    hlsInstance.on(Hls.Events.MANIFEST_PARSED, function() {
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
  
  // Transition fade-out
  cardContentInner.classList.add("opacity-0", "scale-95");
  
  setTimeout(() => {
    // Inject step contents
    iconContainer.innerHTML = step.icon;
    stepTitle.textContent = step.title;
    stepBody.textContent = step.content;
    
    // Update step counter
    stepIndicator.textContent = `${currentStep + 1} de ${steps.length}`;
    
    // Update progress bar fill
    const percentage = ((currentStep + 1) / steps.length) * 100;
    progressBarFill.style.width = `${percentage}%`;
    
    // Show/hide final blue alert info box on the last step
    if (currentStep === steps.length - 1) {
      finalAlert.classList.remove("hidden");
    } else {
      finalAlert.classList.add("hidden");
    }
    
    // Update checkbox visual representation
    const isChecked = confirmedSteps[currentStep];
    stepCheckbox.checked = isChecked;
    updateCheckboxVisual(isChecked);
    
    // Update buttons
    updateButtonStates();

    // Transition fade-in
    cardContentInner.classList.remove("opacity-0", "scale-95");
    
    // Scroll view back up on step change to guarantee great layout placement
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 200);
}

// Update checkbox styling based on its active state
function updateCheckboxVisual(isChecked) {
  if (isChecked) {
    checkboxWrapper.className = "flex items-center justify-center gap-3 py-2.5 px-4 rounded-xl border transition-all duration-300 cursor-pointer select-none border-[#06174A] bg-[#06174A]/5 text-[#06174A] font-semibold";
    checkboxVisual.className = "w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-300 bg-[#06174A] border-[#06174A] scale-105 shadow-sm";
    checkboxCheckIcon.classList.remove("hidden");
  } else {
    checkboxWrapper.className = "flex items-center justify-center gap-3 py-2.5 px-4 rounded-xl border transition-all duration-300 cursor-pointer select-none border-slate-200 hover:border-slate-300 text-slate-500";
    checkboxVisual.className = "w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-300 border-slate-300 bg-white";
    checkboxCheckIcon.classList.add("hidden");
  }
}

// Enable/Disable next and confirm buttons based on step confirmation
function updateButtonStates() {
  const isChecked = confirmedSteps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const allChecked = confirmedSteps.every(Boolean);

  if (isLastStep) {
    actionNextBtn.classList.add("hidden");
    actionConfirmAllBtn.classList.remove("hidden");
    
    actionConfirmAllBtn.disabled = !allChecked;
    if (allChecked) {
      actionConfirmAllBtn.className = "w-full py-3.5 rounded-full font-instrument-sans font-semibold text-base shadow-lg transition-all duration-300 flex items-center justify-center gap-2 bg-emerald-500 text-white hover:bg-emerald-600 hover:scale-[1.01] active:scale-[0.99] cursor-pointer";
    } else {
      actionConfirmAllBtn.className = "w-full py-3.5 rounded-full font-instrument-sans font-semibold text-base shadow-lg transition-all duration-300 flex items-center justify-center gap-2 bg-white/10 text-white/30 border border-white/5 cursor-not-allowed";
    }
  } else {
    actionNextBtn.classList.remove("hidden");
    actionConfirmAllBtn.classList.add("hidden");
    
    actionNextBtn.disabled = !isChecked;
    if (isChecked) {
      actionNextBtn.className = "w-full py-3.5 rounded-full font-instrument-sans font-semibold text-base shadow-md transition-all duration-300 flex items-center justify-center gap-2 bg-white text-[#06174A] hover:bg-slate-100 hover:scale-[1.01] active:scale-[0.99] cursor-pointer";
    } else {
      actionNextBtn.className = "w-full py-3.5 rounded-full font-instrument-sans font-semibold text-base shadow-md transition-all duration-300 flex items-center justify-center gap-2 bg-white/10 text-white/30 border border-white/5 cursor-not-allowed";
    }
  }
}

// Setup event listeners
function setupEventListeners() {
  // Screen Transition: Go to Terms (Hero -> Terms)
  heroCtaTerms.addEventListener("click", () => {
    // Phase 1: Animate Hero fade out
    heroSection.classList.add("opacity-0", "-translate-y-12", "scale-[0.98]");
    
    setTimeout(() => {
      heroSection.classList.add("hidden");
      
      // Phase 2: Show Terms Container
      termsPageContainer.classList.remove("hidden");
      
      // Trigger smooth entry transitions
      requestAnimationFrame(() => {
        termsPageContainer.classList.remove("translate-y-12", "opacity-0");
        termsPageContainer.classList.add("translate-y-0", "opacity-100");
      });
      
      // Pause video to save CPU/battery while reading terms
      heroVideo.pause();
    }, 500);
  });

  // Custom Checkbox Click Handler
  checkboxWrapper.addEventListener("click", (e) => {
    e.preventDefault(); // Stop default browser triggers
    
    const newState = !confirmedSteps[currentStep];
    confirmedSteps[currentStep] = newState;
    stepCheckbox.checked = newState;
    
    updateCheckboxVisual(newState);
    updateButtonStates();
  });

  // Next Step Click Handler
  actionNextBtn.addEventListener("click", () => {
    if (!confirmedSteps[currentStep]) return;
    
    if (currentStep < steps.length - 1) {
      currentStep++;
      renderStep();
    }
  });

  // Confirm All/Finish Click Handler
  actionConfirmAllBtn.addEventListener("click", () => {
    if (!confirmedSteps.every(Boolean)) return;
    
    // Terms completed!
    alert("Termos aceitos com sucesso!");
    
    // Reset state and transition back
    currentStep = 0;
    confirmedSteps.fill(false);
    renderStep();
    
    // Phase 1: Fade out Terms
    termsPageContainer.classList.add("translate-y-12", "opacity-0");
    
    setTimeout(() => {
      termsPageContainer.classList.add("hidden");
      
      // Phase 2: Show Hero
      heroSection.classList.remove("hidden");
      
      // Resume background video
      heroVideo.play().catch(() => {});
      
      // Trigger smooth Hero entry transitions
      requestAnimationFrame(() => {
        heroSection.classList.remove("opacity-0", "-translate-y-12", "scale-[0.98]");
        heroSection.classList.add("opacity-100", "translate-y-0", "scale-100");
      });
    }, 500);
  });
}

// Run initialization
document.addEventListener("DOMContentLoaded", init);
