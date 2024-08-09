const BASE_URL = "https://stapi.co/api/v2/rest";

export async function getBooks(page = 0, searchTerm = "") {
  let res, dataFromServer;
  if (searchTerm) {
    res = await fetch(
      `${BASE_URL}/book/search?pageNumber=${page}&pageSize=10`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `title=${searchTerm}`,
      },
    );
    dataFromServer = await res.json();
  } else {
    res = await fetch(
      `${BASE_URL}/book/search?pageNumber=${page}&pageSize=10`,
    );
    dataFromServer = await res.json();
  }
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return dataFromServer;
}

export async function getBookDetails(id: string) {
  const res = await fetch(`${BASE_URL}/book?uid=${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const dataFromServer = await res.json();
  return dataFromServer;
}