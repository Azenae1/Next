export async function GET(request) {
  const data = {
    name: "Cat",
    age: 6,
    info: "brown",
  };

  return new Response(JSON.stringify(data));
}

export async function POST(request) {
  return new Response(request.body);
}
