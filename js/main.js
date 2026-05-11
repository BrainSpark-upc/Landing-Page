const DEFAULT_LANGUAGE = "es";
const STORAGE_KEY = "carelabs-language";

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const languageButton = document.getElementById("language-button");
const contactForm = document.getElementById("contact-form");

let translations = {};
let currentLanguage = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;

async function loadTranslations(language) {
    const response = await fetch(`i18n/${language}.json`);

    if (!response.ok) {
        throw new Error(`Could not load i18n/${language}.json`);
    }

    return response.json();
}

function t(key) {
    return translations[key] || key;
}

function applyTranslations() {
    document.documentElement.lang = currentLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        element.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        const key = element.dataset.i18nPlaceholder;
        element.placeholder = t(key);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
        const key = element.dataset.i18nAlt;
        element.alt = t(key);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
        const key = element.dataset.i18nAriaLabel;
        element.setAttribute("aria-label", t(key));
    });

    if (languageButton) {
        languageButton.textContent = currentLanguage.toUpperCase();
    }
}

async function setLanguage(language) {
    try {
        translations = await loadTranslations(language);
        currentLanguage = language;
        localStorage.setItem(STORAGE_KEY, language);
        applyTranslations();
    } catch (error) {
        console.error("Language error:", error);
    }
}

function setupMenu() {
    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("open");
        });

        menu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                menu.classList.remove("open");
            });
        });
    }
}

function setupLanguageButton() {
    if (!languageButton) return;

    languageButton.addEventListener("click", async () => {
        const nextLanguage = currentLanguage === "es" ? "en" : "es";
        await setLanguage(nextLanguage);
    });
}

function setupContactForm() {
    if (!contactForm) return;

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        console.log("Formulario enviado:", data);

        const successMessage =
            currentLanguage === "es"
                ? "Gracias por tu mensaje. Nos pondremos en contacto pronto."
                : "Thank you for your message. We will contact you soon.";

        alert(successMessage);
        contactForm.reset();
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    setupMenu();
    setupLanguageButton();
    setupContactForm();
    await setLanguage(currentLanguage);
});