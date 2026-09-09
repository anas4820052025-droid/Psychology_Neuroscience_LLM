const form = document.querySelector("#question-form");
const input = document.querySelector("#question");
const conversation = document.querySelector("#conversation");
const status = document.querySelector("#status");
const button = document.querySelector("#submit-button");

function addMessage(text, className) {
  const element = document.createElement("div");
  element.className = `message ${className}`;
  element.textContent = text;
  conversation.append(element);
  return element;
}

function addAnswer(result) {
  const element = addMessage(result.answer, "answer");
  if (result.safety_notice) {
    const notice = document.createElement("p");
    notice.className = "retrieval";
    notice.textContent = result.safety_notice;
    element.append(notice);
  }
  if (result.sources.length) {
    const heading = document.createElement("strong");
    heading.textContent = "Sources";
    element.append(document.createElement("br"));
    element.append(heading);
    const list = document.createElement("ul");
    list.className = "sources";
    result.sources.forEach((source) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = source.url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = `${source.source_name} — ${source.organization}`;
      item.append(link);
      list.append(item);
    });
    element.append(list);
    const retrieval = document.createElement("p");
    retrieval.className = "retrieval";
    retrieval.textContent = `${result.retrieval.length} source chunks retrieved`;
    element.append(retrieval);
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const question = input.value.trim();
  if (!question) return;
  addMessage(question, "user");
  input.value = "";
  button.disabled = true;
  status.textContent = "Searching trusted sources and generating an answer…";
  try {
   const response = await fetch("http://127.0.0.1:8000/api/v1/questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.detail || "The request could not be completed.");
    addAnswer(result);
    status.textContent = "";
  } catch (error) {
    addMessage(`Error: ${error.message}`, "error");
    status.textContent = "";
  } finally {
    button.disabled = false;
    conversation.lastElementChild?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});
