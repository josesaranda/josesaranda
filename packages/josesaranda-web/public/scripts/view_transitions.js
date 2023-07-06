if (document.startViewTransition) {
  window.navigation.addEventListener("navigate", (event) => {
    const toUrl = new URL(event.destination.url);

    if (location.origin !== toUrl.origin) return;

    event.intercept({
      async handler() {
        const response = await fetch(toUrl.pathname);
        const text = await response.text();
        const [, data] = text.match(/<body>([\s\S]*)<\/body>/i);
        document.startViewTransition(() => {
          document.body.innerHTML = data;
          document.documentElement.scrollTop = 0;
        });
      },
    });
  });
}
