// for method GET
export async function GET() {
    var data = {
  "m.homeserver": {
    "base_url": "https://chat-home.vadavision.com",
    "io.element.e2ee": {
      "force_disable": true,
      "default": false
    }
  }
}

    return Response.json({ data })
}
