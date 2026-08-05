/* ============================================================
   InkScribe — auth.js
   Login / Register form validation with Bootstrap styling
   ============================================================ */

function setValidity(input, valid, message) {
  const group = input.closest(".input-group") || input.parentElement;
  if (!valid) {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    if (message) {
      let feedback = group.querySelector(".invalid-feedback");
      if (!feedback) {
        feedback = document.createElement("div");
        feedback.className = "invalid-feedback";
        group.after(feedback);
      }
      feedback.textContent = message;
    }
  } else {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    const feedback = group.querySelector(".invalid-feedback");
    if (feedback) feedback.textContent = "";
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Toggle password visibility */
document.querySelectorAll(".toggle-pass").forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = document.getElementById(btn.dataset.target);
    if (!input) return;
    const show = input.type === "password";
    input.type = show ? "text" : "password";
    btn.innerHTML = show ? '<i class="fa-solid fa-eye-slash"></i>' : '<i class="fa-solid fa-eye"></i>';
  });
});

/* Validate as the user types */
const liveFields = {
  loginEmail: (v) => EMAIL_RE.test(v),
  loginPassword: (v) => v.length >= 6,
  regName: (v) => v.trim().length >= 3,
  regEmail: (v) => EMAIL_RE.test(v),
  regPassword: (v) => v.length >= 6
};

Object.entries(liveFields).forEach(([id, test]) => {
  const input = document.getElementById(id);
  if (input) {
    input.addEventListener("blur", () => setValidity(input, test(input.value)));
    input.addEventListener("input", () => {
      if (input.classList.contains("is-invalid") && test(input.value)) {
        setValidity(input, true);
      }
    });
  }
});

/* Confirm password live check on register page */
const regConfirm = document.getElementById("regConfirm");
if (regConfirm) {
  const checkConfirm = () => {
    const pw = document.getElementById("regPassword");
    setValidity(regConfirm, regConfirm.value.length >= 6 && regConfirm.value === pw.value);
  };
  regConfirm.addEventListener("blur", checkConfirm);
  regConfirm.addEventListener("input", checkConfirm);
}

/* ---------- Login submit ---------- */
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");
    setValidity(email, EMAIL_RE.test(email.value));
    setValidity(password, password.value.length >= 6);
    if (EMAIL_RE.test(email.value) && password.value.length >= 6) {
      const remember = document.getElementById("rememberMe").checked;
      if (remember) localStorage.setItem("inkscribe_user", email.value);
      window.location.href = "index.html";
    }
  });
}

/* ---------- Register submit ---------- */
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("regName");
    const email = document.getElementById("regEmail");
    const password = document.getElementById("regPassword");
    const confirm = document.getElementById("regConfirm");
    const terms = document.getElementById("termsCheck");

    const okName = name.value.trim().length >= 3;
    const okEmail = EMAIL_RE.test(email.value);
    const okPassword = password.value.length >= 6;
    const okConfirm = confirm.value.length >= 6 && confirm.value === password.value;
    const okTerms = terms.checked;

    setValidity(name, okName);
    setValidity(email, okEmail);
    setValidity(password, okPassword);
    setValidity(confirm, okConfirm);
    if (!okTerms) {
      terms.classList.add("is-invalid");
    } else {
      terms.classList.remove("is-invalid");
    }

    if (okName && okEmail && okPassword && okConfirm && okTerms) {
      localStorage.setItem("inkscribe_user", JSON.stringify({ name: name.value.trim(), email: email.value }));
      window.location.href = "index.html";
    }
  });
}
