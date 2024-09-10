import { http, HttpResponse } from "msw";

// Initial data
let documents = [
  { type: "bank-draft", title: "Bank Draft", position: 0 },
  { type: "bill-of-lading", title: "Bill of Lading", position: 1 },
  { type: "invoice", title: "Invoice", position: 2 },
  { type: "bank-draft-2", title: "Bank Draft 2", position: 3 },
  { type: "bill-of-lading-2", title: "Bill of Lading 2", position: 4 },
];

export const handlers = [
  //get call
  http.get("/api/documents", (resolver) => {
    return HttpResponse.json(documents);
  }),

  // post call
  http.post("/api/documents", async ({ request }) => {
    console.log(request);
    const updatedDocuments = await request.json();
    documents = updatedDocuments;
    return HttpResponse.json(documents);
  }),
];
