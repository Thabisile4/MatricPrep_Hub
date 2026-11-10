// Data for all 7 Grade 12 Subjects (Replace '#' with your Google Drive PDF links & MP3 voice note paths)
const subjectData = {
  "Mathematics": {
    audioTopic: "Paper 1 & 2: Calculus, Trigonometry & Euclidean Geometry Tips",
    audioSrc: "",
    qpLink: "#",
    memoLink: "#"
  },
  "Mathematical Literacy": {
    audioTopic: "Finance, Maps & Plans, and Data Handling Revision Summary",
    audioSrc: "",
    qpLink: "#",
    memoLink: "#"
  },
  "English FAL": {
    audioTopic: "Paper 1 Comprehension & Paper 3 Essay Writing Voice Guide",
    audioSrc: "",
    qpLink: "#",
    memoLink: "#"
  },
  "IsiXhosa HL": {
    audioTopic: "Isikhokelo soVavanyo lweUncwadi neZibongo (Literature & Poetry Audio)",
    audioSrc: "",
    qpLink: "#",
    memoLink: "#"
  },
  "Geography": {
    audioTopic: "Climate & Weather, Geomorphology, and Mapwork Calculations",
    audioSrc: "",
    qpLink: "#",
    memoLink: "#"
  },
  "Business Studies": {
    audioTopic: "Business Environments, Ventures & Essay Structure Voice Note",
    audioSrc: "",
    qpLink: "#",
    memoLink: "#"
  },
  "History": {
    audioTopic: "Cold War, Civil Society Protests & Source-Based Question Tips",
    audioSrc: "",
    qpLink: "#",
    memoLink: "#"
  }
};

let currentSubject = "Mathematics";
let authMode = "register";

// Switch Subject Tab
function selectSubject(subject, btnElement) {
  currentSubject = subject;
  document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
  btnElement.classList.add("active");

  const info = subjectData[subject];
  document.getElementById("current-subject-title").textContent = `${subject} (Grade 12 - 2025)`;
  document.getElementById("audio-topic").textContent = info.audioTopic;
  document.getElementById("voice-player").src = info.audioSrc;
  document.getElementById("qp-link").href = info.qpLink;
  document.getElementById("memo-link").href = info.memoLink;
}

// WhatsApp Share Functions
function shareOnWhatsApp(message) {
  const url = window.location.href;
  const fullText = encodeURIComponent(`${message} - Access it free here: ${url}`);
  window.open(`https://whatsapp.com{fullText}`, "_blank");
}

function shareSubject() {
  shareOnWhatsApp(`Check out the 2025 Grade 12 ${currentSubject} Past Paper, Memo & Voice Note on MatricPrep Hub`);
}

// Deadline Tracker Logic
let deadlines = JSON.parse(localStorage.getItem("matricDeadlines")) || [
  { name: "Mathematics SBA Investigation", subject: "Mathematics", date: "2026-11-20" },
  { name: "Business Studies Presentation", subject: "Business Studies", date: "2026-11-25" }
];

function renderDeadlines() {
  const list = document.getElementById("deadline-list");
  list.innerHTML = "";
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  deadlines.forEach((item, index) => {
    const due = new Date(item.date);
    const diffDays = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
    const statusText = diffDays > 0 ? `${diffDays} days left` : diffDays === 0 ? "Due Today!" : "Past Due";

    const li = document.createElement("li");
    li.className = "deadline-item";
    li.innerHTML = `
      <div>
        <strong>${item.name}</strong> <span class="badge">${item.subject}</span><br/>
        <small>Due Date: ${item.date}</small>
      </div>
      <div>
        <span class="days-left">${statusText}</span>
        <button class="btn btn-outline" style="margin-left:8px; padding:2px 8px;" onclick="deleteDeadline(${index})">✕</button>
      </div>
    `;
    list.appendChild(li);
  });
}

function addDeadline(e) {
  e.preventDefault();
  const name = document.getElementById("task-name").value;
  const subject = document.getElementById("task-subject").value;
  const date = document.getElementById("task-date").value;

  deadlines.push({ name, subject, date });
  localStorage.setItem("matricDeadlines", JSON.stringify(deadlines));
  renderDeadlines();
  e.target.reset();
}

function deleteDeadline(index) {
  deadlines.splice(index, 1);
  localStorage.setItem("matricDeadlines", JSON.stringify(deadlines));
  renderDeadlines();
}

// Reviews & Reactions Wall
let reviews = JSON.parse(localStorage.getItem("matricReviews")) || [
  {
    name: "Naledi K.",
    role: "Grade 12 Learner",
    rating: "⭐⭐⭐⭐⭐",
    text: "Listening to the History and Business Studies voice notes helped me revise on the taxi!"
  },
  {
    name: "Mrs. Dlamini",
    role: "Parent",
    rating: "⭐⭐⭐⭐⭐",
    text: "Having 2025 past papers and memos in one place saved us extra tutoring fees this term."
  }
];

function renderReviews() {
  const wall = document.getElementById("reviews-wall");
  wall.innerHTML = "";
  reviews.forEach(rev => {
    const div = document.createElement("div");
    div.className = "review-card";
    div.innerHTML = `
      <div class="review-header">
        <strong>${rev.name} (${rev.role})</strong>
        <span>${rev.rating}</span>
      </div>
      <p>${rev.text}</p>
    `;
    wall.appendChild(div);
  });
}

function submitReview(e) {
  e.preventDefault();
  const name = document.getElementById("reviewer-name").value;
  const role = document.getElementById("reviewer-role").value;
  const rating = document.getElementById("review-rating").value;
  const text = document.getElementById("review-text").value;

  reviews.unshift({ name, role, rating, text });
  localStorage.setItem("matricReviews", JSON.stringify(reviews));
  renderReviews();
  e.target.reset();
}

// Registration & Login Modal
function openModal(mode) {
  authMode = mode;
  document.getElementById("auth-modal").style.display = "flex";
  document.getElementById("modal-title").textContent = mode === "register" ? "Register Learner Account" : "Learner Login";
  document.getElementById("name-group").style.display = mode === "register" ? "block" : "none";
  document.getElementById("modal-submit-btn").textContent = mode === "register" ? "Create Account" : "Login";
}

function closeModal() {
  document.getElementById("auth-modal").style.display = "none";
}

function handleAuth(e) {
  e.preventDefault();
  const email = document.getElementById("auth-email").value;
  const name = document.getElementById("auth-name").value || email.split("@")[0];

  localStorage.setItem("matricUser", name);
  updateAuthUI();
  closeModal();
}

function updateAuthUI() {
  const user = localStorage.getItem("matricUser");
  if (user) {
    document.getElementById("auth-controls").innerHTML = `
      <span>👋 Hi, <strong>${user}</strong></span>
      <button class="btn btn-outline" onclick="logoutUser()">Logout</button>
    `;
  }
}

function logoutUser() {
  localStorage.removeItem("matricUser");
  document.getElementById("auth-controls").innerHTML = `
    <button class="btn btn-outline" onclick="openModal('login')">Login</button>
    <button class="btn btn-primary" onclick="openModal('register')">Register</button>
  `;
}

// Initialize Page
renderDeadlines();
renderReviews();
updateAuthUI();
