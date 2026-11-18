const subjectLibrary = {
  "Accounting": {
    audio: "audio/accounting.mp4",
    papers: [
      { title: "Paper 1 (Nov 2025)", paper: "pdfs/accounting-p1.pdf", memo: "pdfs/accounting-p1-memo.pdf" },
      { title: "Paper 2 (Nov 2025)", paper: "pdfs/accounting-p2.pdf", memo: "pdfs/accounting-p2-memo.pdf" }
    ]
  },
  "Business Studies": {
    audio: "audio/business.mp4.mp4",
    papers: [
      { title: "Paper 1 (Nov 2025)", paper: "pdfs/business-p1.pdf", memo: "pdfs/business-p1-memo.pdf" },
      { title: "Paper 2 (Nov 2025)", paper: "pdfs/business-p2.pdf", memo: "pdfs/business-p2-memo.pdf" }
    ]
  },
  "Economics": {
    audio: "audio/economics.mp4.mp4",
    papers: [
      { title: "Paper 1 (Nov 2025)", paper: "pdfs/economics-p1.pdf", memo: "pdfs/economics-p1-memo.pdf" },
      { title: "Paper 2 (Nov 2025)", paper: "pdfs/economics-p2.pdf", memo: "pdfs/economics-p2-memo.pdf" }
    ]
  },
  "English FAL": {
    audio: "audio/english.mp4.mp4",
    papers: [
      { title: "Paper 1 (Nov 2025)", paper: "pdfs/english-p1.pdf", memo: "pdfs/english-p1-memo.pdf.pdf" },
      { title: "Paper 2 (Nov 2025)", paper: "pdfs/english-p2.pdf", memo: "pdfs/english-p2-memo.pdf.pdf" },
      { title: "Paper 3 (Nov 2025)", paper: "pdfs/english-p3.pdf", memo: "pdfs/english-p3-memo.pdf" }
    ]
  },
  "Geography": {
    audio: "audio/geography.mp4",
    papers: [
      { title: "Paper 1 (Nov 2025)", paper: "pdfs/geography-p1.pdf", memo: "pdfs/geography-p1-memo.pdf.pdf" },
      { title: "Paper 2 (Nov 2025)", paper: "pdfs/geography-p2.pdf", memo: "pdfs/geography-p2-memo.pdf" }
    ]
  },
  "History": {
    audio: "audio/history.mp4.mp4",
    papers: [
      { title: "Paper 1 (Nov 2025)", paper: "pdfs/history-p1.pdf", memo: "pdfs/history-p1-memo.pdf" },
      { title: "Paper 2 (Nov 2025)", paper: "pdfs/history-p2.pdf", memo: "pdfs/history-p2-memo.pdf.pdf" }
    ]
  },
  "IsiXhosa HL": {
    audio: "audio/isixhosa.mp4.mp4",
    papers: [
      { title: "Paper 1 (Nov 2025)", paper: "pdfs/isixhosa-p1.pdf", memo: "pdfs/isixhosa-p1-memo.pdf" },
      { title: "Paper 2 (Nov 2025)", paper: "pdfs/isixhosa-p2.pdf", memo: "pdfs/isixhosa-p2-memo.pdf" },
      { title: "Paper 3 (Nov 2025)", paper: "pdfs/isixhosa-p3.pdf", memo: "pdfs/isixhosa-p3-memo.pdf" }
    ]
  },
  "Setswana HL": {
    audio: "audio/setswana.mp4.mp4",
    papers: [
      { title: "Paper 1 (Nov 2025)", paper: "pdfs/setswana-p1.pdf", memo: "pdfs/setswana-p1-memo.pdf" },
      { title: "Paper 2 (Nov 2025)", paper: "pdfs/setswana-p2.pdf", memo: "pdfs/setswana-p2-memo.pdf" },
      { title: "Paper 3 (Nov 2025)", paper: "pdfs/setswana-p3.pdf", memo: "pdfs/setswana-p3-memo.pdf" }
    ]
  },
  "Mathematics": {
    audio: "audio/mathematics.mp4.mp4",
    papers: [
      { title: "Paper 1 (Nov 2025)", paper: "pdfs/maths-p1.pdf", memo: "pdfs/maths-p1-memo.pdf" },
      { title: "Paper 2 (Nov 2025)", paper: "pdfs/maths-p2.pdf", memo: "pdfs/maths-p2-memo.pdf" }
    ]
  },
  "Mathematical Literacy": {
    audio: "audio/mathslit.mp4.mp4",
    papers: [
      { title: "Paper 1 (Nov 2025)", paper: "pdfs/mathslit-p1.pdf", memo: "pdfs/mathslit-p1-memo.pdf" },
      { title: "Paper 2 (Nov 2025)", paper: "pdfs/mathslit-p2.pdf", memo: "pdfs/mathslit-p2-memo.pdf" }
    ]
  },
  "Life Sciences": {
    audio: "audio/lifescience.mp4.mp4",
    papers: [
      { title: "Paper 1 (Nov 2025)", paper: "pdfs/Life Sciences P1 Nov 2025 Eng.pdf", memo: "pdfs/Life Sciences P1 Nov 2025 MG Eng.pdf" },
      { title: "Paper 2 (Nov 2025)", paper: "pdfs/Life Sciences P2 Nov 2025 Eng.pdf", memo: "pdfs/Life Sciences P2 Nov 2025 MG Eng.pdf" }
    ]
  },
  "Physical Sciences": {
    audio: "audio/physicalscience.mp4.mp4",
    papers: [
      { title: "Paper 1 (Nov 2025)", paper: "pdfs/physics-p1.pdf", memo: "pdfs/physics-p1-memo.pdf" },
      { title: "Paper 2 (Nov 2025)", paper: "pdfs/physics-p2.pdf", memo: "pdfs/physics-p2-memo.pdf" }
    ]
  },
  "Life Orientation": {
    audio: "audio/lo.mp4.mp4",
    papers: [
      { title: "Paper 1 / CAT (Nov 2025)", paper: "pdfs/lo-p1.pdf", memo: "pdfs/lo-p1-memo.pdf" }
    ]
  },
  "Tourism": {
    audio: "audio/tourism.mp4.mp4",
    papers: [
      { title: "Paper 1 (Nov 2025)", paper: "pdfs/tourism-p1.pdf", memo: "pdfs/tourism-p1-memo.pdf" }
    ]
  }
};

function selectSubject(subjectName, clickedTab) {
  document.querySelectorAll(".tab").forEach(function(tab) {
    tab.classList.remove("active");
  });
  if (clickedTab) {
    clickedTab.classList.add("active");
  }

  document.getElementById("currentSubjectTitle").textContent = subjectName + " (Grade 12 - 2025)";
  document.getElementById("audioSubjectLabel").textContent = subjectName;

  const data = subjectLibrary[subjectName];
  if (!data) return;

  const audioPlayer = document.getElementById("subjectAudio");
  audioPlayer.src = encodeURI(data.audio);
  audioPlayer.load();

  const resourceGrid = document.getElementById("resourceGrid");
  resourceGrid.innerHTML = "";

  data.papers.forEach(function(item) {
    const card = document.createElement("div");
    card.className = "resource-item";

    const paperButton = item.paper
      ? '<a href="' + encodeURI(item.paper) + '" target="_blank" class="btn btn-primary">📄 Question Paper</a>'
      : '<span class="badge">Question Paper Pending</span>';

    const memoButton = item.memo
      ? '<a href="' + encodeURI(item.memo) + '" target="_blank" class="btn btn-outline">✅ Open Memo</a>'
      : '<span class="badge">Memo Pending</span>';

    card.innerHTML =
      '<h4>' + item.title + '</h4>' +
      '<div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-top:0.5rem;">' +
      paperButton +
      memoButton +
      '</div>';

    resourceGrid.appendChild(card);
  });
}

let deadlines = JSON.parse(localStorage.getItem("matricDeadlines")) || [
  { name: "Accounting Paper 1 Revision", subject: "Accounting", date: "2026-11-20" },
  { name: "Business Studies Paper 2 Revision", subject: "Business Studies", date: "2026-11-24" }
];

function renderDeadlines() {
  const list = document.getElementById("deadlineList");
  list.innerHTML = "";

  deadlines.forEach(function(item, index) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const target = new Date(item.date);
    const diffDays = Math.ceil((target - today) / (1000 * 60 * 60 * 24));

    let statusText = diffDays + " days left";
    if (diffDays === 0) statusText = "Due Today!";
    if (diffDays < 0) statusText = "Completed / Passed";

    const li = document.createElement("li");
    li.className = "deadline-item";
    li.innerHTML =
      '<div>' +
      '<strong>' + item.subject + ':</strong> ' + item.name + '<br>' +
      '<small>Due Date: ' + item.date + ' • <span class="days-left">' + statusText + '</span></small>' +
      '</div>' +
      '<button class="btn btn-outline" onclick="deleteDeadline(' + index + ')">Remove</button>';

    list.appendChild(li);
  });
}

function addDeadline(event) {
  event.preventDefault();
  const name = document.getElementById("taskName").value.trim();
  const subject = document.getElementById("taskSubject").value;
  const date = document.getElementById("taskDate").value;
  if (!name || !date) return;

  deadlines.push({ name: name, subject: subject, date: date });
  localStorage.setItem("matricDeadlines", JSON.stringify(deadlines));
  renderDeadlines();
  event.target.reset();
}

function deleteDeadline(index) {
  deadlines.splice(index, 1);
  localStorage.setItem("matricDeadlines", JSON.stringify(deadlines));
  renderDeadlines();
}

let reviews = JSON.parse(localStorage.getItem("matricReviews")) || [];

function renderReviews() {
  const wall = document.getElementById("reviewsWall");
  wall.innerHTML = "";

  if (reviews.length === 0) {
    wall.innerHTML = '<p style="color: var(--muted); font-style: italic;">No reviews posted yet. Be the first learner, parent, or teacher to share feedback!</p>';
    return;
  }

  reviews.forEach(function(rev) {
    const stars = "★".repeat(rev.rating) + "☆".repeat(5 - rev.rating);
    const div = document.createElement("div");
    div.className = "review-card";
    div.innerHTML =
      '<div class="review-header">' +
      '<strong>' + rev.name + ' (' + rev.role + ')</strong>' +
      '<span>' + stars + '</span>' +
      '</div>' +
      '<p>' + rev.comment + '</p>';

    wall.appendChild(div);
  });
}

function submitReview(event) {
  event.preventDefault();
  const name = document.getElementById("reviewerName").value.trim();
  const role = document.getElementById("reviewerRole").value;
  const rating = parseInt(document.getElementById("reviewerRating").value, 10);
  const comment = document.getElementById("reviewerComment").value.trim();
  if (!name || !comment) return;

  reviews.unshift({ name: name, role: role, rating: rating, comment: comment });
  localStorage.setItem("matricReviews", JSON.stringify(reviews));
  renderReviews();
  event.target.reset();
}

function openModal(mode) {
  document.getElementById("modalTitle").textContent = mode === "register" ? "Learner Registration" : "Learner Login";
  document.getElementById("authModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("authModal").style.display = "none";
}

function handleAuth(event) {
  event.preventDefault();
  const userName = document.getElementById("userNameInput").value.trim();
  if (!userName) return;

  localStorage.setItem("matricUser", userName);
  updateAuthUI();
  closeModal();
}

function updateAuthUI() {
  const savedUser = localStorage.getItem("matricUser");
  if (savedUser) {
    document.getElementById("authButtons").innerHTML =
      '<span>👋 Welcome, <strong>' + savedUser + '</strong></span> ' +
      '<button class="btn btn-outline" onclick="logoutUser()">Logout</button>';
  }
}

function logoutUser() {
  localStorage.removeItem("matricUser");
  location.reload();
}
function shareOnWhatsApp() {
  const text = encodeURIComponent(
    "Check out MatricPrep Hub! Free Grade 12 past exam papers, memos, and audio revision summaries for T.M. Letlhake Secondary School learners: " +
      window.location.href
  );
  window.open("https://wa.me" + text, "_blank");
}

document.addEventListener("DOMContentLoaded", function() {
  selectSubject("Accounting", document.querySelector(".tab.active"));
  renderDeadlines();
  renderReviews();
  updateAuthUI();
});
