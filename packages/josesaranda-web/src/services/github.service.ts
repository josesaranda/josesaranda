type LastCommit = {
  date: Date;
  url: string;
};

export async function getLastCommit(): Promise<LastCommit> {
  const GH_TOKEN = import.meta.env.GH_TOKEN;
  const URL =
    "https://api.github.com/repos/josesaranda/josesaranda/commits?per_page=1";

  if (!GH_TOKEN) return Promise.resolve({ date: new Date(), url: "#" });

  try {
    const response = await fetch(URL, {
      headers: {
        Authorization: `Bearer ${GH_TOKEN}`,
      },
    });
    const [data] = response.json() as any;
    return {
      date: new Date(data.commit.author.date),
      url: data.html_url,
    };
  } catch (error) {
    return Promise.resolve({ date: new Date(), url: "#" });
  }
}
