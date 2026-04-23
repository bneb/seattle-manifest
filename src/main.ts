import { PresentationSchema } from "./schema";
import { presentation } from "./content";

function highlightSalt(code: string): string {
  // 1. Escape HTML
  let html = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // 2. Shield Strings and Comments
  const tokens: string[] = [];
  const mask = (regex: RegExp, className: string) => {
    html = html.replace(regex, (match) => {
      const id = `__TOKEN_${tokens.length}__`;
      tokens.push(`<span class="${className}">${match}</span>`);
      return id;
    });
  };

  mask(/"[^"]*"/g, "hl-string");
  mask(/\/\/.*/g, "hl-comment");
  mask(/;.*/g, "hl-comment");

  // 3. Highlight Keywords and Types
  html = html
    .replace(/(\|&gt;)/g, '<span class="hl-keyword">$1</span>')
    .replace(/\b(fn|let|mut|package|use|requires|ensures|pub|const|if|return|panic|struct|while|for|in|enum|match|type)\b/g, '<span class="hl-keyword">$1</span>')
    .replace(/\b(i32|u64|u8|usize|Option|StringView|SpscRing|KeuDescriptor|Arena|Lattice|KeuOS)\b/g, '<span class="hl-type">$1</span>');

  // 4. Restore Shielded Tokens
  tokens.forEach((content, i) => {
    html = html.replace(`__TOKEN_${i}__`, content);
  });

  return html;
}

class WordSwimmer {
  private currentPath: { r: number; c: number }[] = [];
  private chars = "0123456789ABCDEF{}[]#*";

  constructor(
    private word: string,
    private cells: HTMLElement[][],
    private rows: number,
    private cols: number
  ) {
    this.swim();
  }

  private async swim() {
    while (true) {
      // 1. Fade out current path
      this.currentPath.forEach(({ r, c }) => {
        const cell = this.cells[r][c];
        cell.classList.remove("lit");
        cell.classList.add("dim");
        setTimeout(() => {
          if (!cell.classList.contains("lit")) {
            cell.classList.remove("dim");
            cell.textContent = this.chars[Math.floor(Math.random() * this.chars.length)];
          }
        }, 1000);
      });

      // 2. Wait for a moment
      await new Promise((r) => setTimeout(r, Math.random() * 500 + 500));

      // 3. Find new path
      const path = this.findPath();
      if (path) {
        this.currentPath = path;
        // 4. Reveal new path letter by letter
        for (let i = 0; i < path.length; i++) {
          const { r, c } = path[i];
          const cell = this.cells[r][c];
          cell.textContent = this.word[i];
          cell.classList.remove("dim");
          cell.classList.add("lit");
          await new Promise((r) => setTimeout(r, 40));
        }
      }

      // 5. Hold for a while
      await new Promise((r) => setTimeout(r, Math.random() * 2000 + 2000));
    }
  }

  private findPath(): { r: number; c: number }[] | null {
    const directions = [
      { dr: 0, dc: 1 },  // Left-Right
      { dr: 1, dc: 0 },  // Down
      { dr: 1, dc: 1 },  // Diagonal Down-Right
    ];

    for (let attempt = 0; attempt < 50; attempt++) {
      let r = Math.floor(Math.random() * this.rows);
      let c = Math.floor(Math.random() * this.cols);
      const dir = directions[Math.floor(Math.random() * directions.length)];
      
      const path = [];
      let valid = true;
      for (let i = 0; i < this.word.length; i++) {
        const tr = r + i * dir.dr;
        const tc = c + i * dir.dc;
        if (tr < 0 || tr >= this.rows || tc < 0 || tc >= this.cols) {
          valid = false;
          break;
        }
        path.push({ r: tr, c: tc });
      }

      if (valid) return path;
    }
    return null;
  }
}

function init() {
  // Theme Toggle Logic
  const themeToggle = document.getElementById("theme-toggle");
  const storedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", storedTheme);
  if (themeToggle) {
    themeToggle.textContent = `MODE: ${storedTheme.toUpperCase()}`;
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      themeToggle.textContent = `MODE: ${newTheme.toUpperCase()}`;
    });
  }

  const result = PresentationSchema.safeParse(presentation);
  if (!result.success) {
    console.error("Content validation failed:", result.error);
    return;
  }

  const sections = result.data;
  const contentRoot = document.getElementById("content-root");
  const metricLabel = document.getElementById("metric-label");
  const metricValue = document.getElementById("metric-value");
  const metricUnit = document.getElementById("metric-unit");
  const verifBadge = document.getElementById("verif-badge");

  if (!contentRoot || !metricLabel || !metricValue || !metricUnit || !verifBadge) return;

  sections.forEach((section) => {
    const sectionEl = document.createElement("section");
    sectionEl.id = section.id;
    sectionEl.dataset.axiom = section.axiom?.toString() || "";
    sectionEl.dataset.metricLabel = section.metric?.label || "";
    sectionEl.dataset.metricValue = section.metric?.value.toString() || "";
    sectionEl.dataset.metricUnit = section.metric?.unit || "";

    if (section.id === "title") {
      const matrix = document.createElement("div");
      matrix.className = "led-matrix";
      const rows = 15;
      const cols = 35;
      const cells: HTMLElement[][] = [];
      const chars = "0123456789ABCDEF{}[]#*";

      for (let r = 0; r < rows; r++) {
        cells[r] = [];
        for (let c = 0; c < cols; c++) {
          const span = document.createElement("span");
          span.className = "led-char";
          span.textContent = chars[Math.floor(Math.random() * chars.length)];
          matrix.appendChild(span);
          cells[r][c] = span;
        }
      }
      sectionEl.appendChild(matrix);

      const words = ["SECURITY", "IS", "NOT", "A", "RUNTIME", "CONCERN"];
      setTimeout(() => {
        words.forEach((w) => new WordSwimmer(w, cells, rows, cols));
      }, 500);

      // Random background noise
      setInterval(() => {
        const r = Math.floor(Math.random() * rows);
        const c = Math.floor(Math.random() * cols);
        const el = cells[r][c];
        if (!el.classList.contains("lit") && !el.classList.contains("dim")) {
          el.textContent = chars[Math.floor(Math.random() * chars.length)];
        }
      }, 50);

    } else {
      const titleEl = document.createElement("h1");
      titleEl.textContent = section.title;
      sectionEl.appendChild(titleEl);
    }

    if (section.subtitle) {
      const subtitleEl = document.createElement("h2");
      subtitleEl.textContent = section.subtitle;
      sectionEl.appendChild(subtitleEl);
    }

    const narrativeEl = document.createElement("div");
    narrativeEl.className = "narrative";
    section.content.forEach((p) => {
      const pEl = document.createElement("p");
      // Simple bold parser
      pEl.innerHTML = p.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
      narrativeEl.appendChild(pEl);
    });
    sectionEl.appendChild(narrativeEl);

    if (section.html) {
      const htmlWrapper = document.createElement("div");
      htmlWrapper.className = "custom-html-wrapper";
      htmlWrapper.innerHTML = section.html;
      sectionEl.appendChild(htmlWrapper);
    }

    if (section.code) {
      const codeBlock = document.createElement("div");
      const hasElision = section.code.before && section.code.after;
      codeBlock.className = `code-block ${hasElision ? "elision-trigger" : ""}`;
      
      if (section.code.before) {
        const codeBefore = document.createElement("code");
        codeBefore.className = "code-content before";
        codeBefore.innerHTML = highlightSalt(section.code.before);
        codeBlock.appendChild(codeBefore);
      }

      if (section.code.after) {
        const codeAfter = document.createElement("code");
        codeAfter.className = "code-content after";
        codeAfter.innerHTML = highlightSalt(section.code.after);
        codeBlock.appendChild(codeAfter);
      }
      sectionEl.appendChild(codeBlock);
    }

    contentRoot.appendChild(sectionEl);
  });

  const observerOptions = { threshold: 0.6 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        el.classList.add("active");

        if (el.dataset.metricValue) {
          metricLabel.textContent = el.dataset.metricLabel || "";
          metricValue.textContent = el.dataset.metricValue;
          metricUnit.textContent = el.dataset.metricUnit || "";
        } else {
          metricLabel.textContent = "System State";
          metricValue.textContent = "---";
          metricUnit.textContent = "";
        }

        verifBadge.textContent = "THINKING...";
        verifBadge.className = "verif-badge thinking";
        setTimeout(() => {
          verifBadge.textContent = "VERIFIED [OK]";
          verifBadge.className = "verif-badge verified";
        }, 400);

        document.querySelectorAll(".axiom-indicator").forEach(ind => ind.classList.remove("active"));
        if (el.dataset.axiom) {
          const indicator = document.getElementById(`axiom-${el.dataset.axiom}-indicator`);
          if (indicator) indicator.classList.add("active");
        }

        const elision = el.querySelector(".elision-trigger");
        if (elision) setTimeout(() => elision.classList.add("active"), 800);
      } else {
        entry.target.classList.remove("active");
        const elision = entry.target.querySelector(".elision-trigger");
        if (elision) elision.classList.remove("active");
      }
    });
  }, observerOptions);

  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
}

document.addEventListener("DOMContentLoaded", init);
