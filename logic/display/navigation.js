const TRANSITION_PROP = "opacity";
const FALLBACK_MS = 800;

function waitFadeOut(sec) {
  return new Promise((resolve) => {
    let finished = false;

    const onEnd = (e) => {
      if (e.propertyName !== TRANSITION_PROP) return;
      cleanup();
      resolve();
    };

    const cleanup = () => {
      if (finished) return;
      finished = true;
      sec.removeEventListener("transitionend", onEnd);
      sec.classList.add("d-none");
      sec.classList.remove("d-flex");
    };

    const fallback = setTimeout(() => {
      cleanup();
      resolve();
    }, FALLBACK_MS);

    const wrappedOnEnd = (e) => {
      if (e.propertyName !== TRANSITION_PROP) return;
      clearTimeout(fallback);
      onEnd(e);
    };

    sec.addEventListener("transitionend", wrappedOnEnd);

    sec.classList.remove("fade-in");
    sec.classList.add("fade-out");
  });
}

export const toNavigation = async (id) => {
  const sections = Array.from(document.querySelectorAll("section"));
  const next = document.getElementById(id);
  if (!next) return;

  const visible = sections.filter((s) => !s.classList.contains("d-none"));

  if (visible.length === 0) {
    next.classList.remove("d-none");
    next.classList.add("d-flex");

    void next.offsetWidth;
    next.classList.remove("fade-out");
    requestAnimationFrame(() => next.classList.add("fade-in"));
    return;
  }

  await Promise.all(visible.map((sec) => waitFadeOut(sec)));

  next.classList.remove("d-none");
  next.classList.add("d-flex");

  void next.offsetWidth;

  next.classList.remove("fade-out");
  requestAnimationFrame(() => next.classList.add("fade-in"));
};
