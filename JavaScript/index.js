import { navModal } from "./navbar.js";
import { validation } from "./validation.js";
import { cookies } from "./cookies.js";
import { chat } from "./chat.js";
document.addEventListener("DOMContentLoaded", () => {
  chat();
  cookies();
  validation();
  navModal();
});
