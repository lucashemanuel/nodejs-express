export function Post(request, response) {
  return response.json(request.params["id"]);
}
