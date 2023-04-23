export function Home(request, response) {
  return response.json({ name: request.name, age: request.age });
}
