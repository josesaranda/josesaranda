type LastCommit = {
  date: Date;
  url: string;
}

export function getLastCommit(): Promise<LastCommit> {
  const GH_TOKEN = import.meta.env.GH_TOKEN;
  const URL =
    "https://api.github.com/repos/josesaranda/josesaranda/commits?per_page=1";

  return fetch(URL, {
    headers: {
      Authorization: `Bearer ${GH_TOKEN}`,
    },
  }).then(response => response.json()).then(([data]) => ({
    date: new Date(data.commit.author.date),
    url: data.html_url
  }));
}